import { NextResponse } from "next/server";

// Allowed origins
const allowedOrigins = [
  process.env.NEXT_PUBLIC_APP_URL,
  "http://localhost:3000",
  "http://localhost:3001",
].filter(Boolean);

// Rate limit storage (in-memory, resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

interface RateLimitConfig {
  windowMs?: number; // Time window in milliseconds
  maxRequests?: number; // Max requests per window
}

const defaultRateLimitConfig: RateLimitConfig = {
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 10, // 10 requests per minute
};

/**
 * Get client identifier from request
 */
function getClientId(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  return ip;
}

/**
 * Check if origin is allowed
 */
function isOriginAllowed(req: Request): boolean {
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");

  // Allow requests without origin (same-origin requests, server-side)
  if (!origin && !referer) {
    return true;
  }

  // Check origin header
  if (origin && allowedOrigins.some((allowed) => origin.startsWith(allowed!))) {
    return true;
  }

  // Check referer as fallback
  if (
    referer &&
    allowedOrigins.some((allowed) => referer.startsWith(allowed!))
  ) {
    return true;
  }

  return false;
}

/**
 * Check rate limit for client
 */
function checkRateLimit(
  clientId: string,
  config: RateLimitConfig = defaultRateLimitConfig
): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const { windowMs = 60000, maxRequests = 10 } = config;

  const clientData = rateLimitMap.get(clientId);

  // Clean up expired entries
  if (clientData && now > clientData.resetTime) {
    rateLimitMap.delete(clientId);
  }

  const current = rateLimitMap.get(clientId);

  if (!current) {
    rateLimitMap.set(clientId, { count: 1, resetTime: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1, resetIn: windowMs };
  }

  if (current.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetIn: current.resetTime - now,
    };
  }

  current.count++;
  return {
    allowed: true,
    remaining: maxRequests - current.count,
    resetIn: current.resetTime - now,
  };
}

export type ApiProtectionResult =
  | { success: true }
  | { success: false; response: NextResponse };

/**
 * Protect API route with origin check and rate limiting
 */
export function protectApi(
  req: Request,
  rateLimitConfig?: RateLimitConfig
): ApiProtectionResult {
  // Check origin
  if (!isOriginAllowed(req)) {
    return {
      success: false,
      response: NextResponse.json({ error: "Forbidden" }, { status: 403 }),
    };
  }

  // Check rate limit
  const clientId = getClientId(req);
  const rateLimit = checkRateLimit(clientId, rateLimitConfig);

  if (!rateLimit.allowed) {
    return {
      success: false,
      response: NextResponse.json(
        {
          error: "Too many requests",
          retryAfter: Math.ceil(rateLimit.resetIn / 1000),
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil(rateLimit.resetIn / 1000)),
            "X-RateLimit-Remaining": "0",
          },
        }
      ),
    };
  }

  return { success: true };
}
