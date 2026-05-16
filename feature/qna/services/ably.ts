import { AppError, ErrorCode } from "@/shared/type/models/error";
import crypto from "crypto";

export interface AblyTokenRequest {
    readonly keyName: string;
    readonly clientId: string;
    readonly timestamp: number;
    readonly nonce: string;
    readonly mac: string;
}

export function createAblyTokenRequest(
    email: string,
    apiKey: string,
): AblyTokenRequest {
    const [keyName, keySecret] = apiKey.split(":");
    if (!keyName || !keySecret) {
        throw new AppError(ErrorCode.ABLY_TOKEN_ERROR);
    }

    const clientId = email;
    const ttl = "";
    const capability = "";
    const timestamp = Date.now();
    const nonce = crypto.randomBytes(16).toString("hex");

    const signText =
        keyName +
        "\n" +
        ttl +
        "\n" +
        capability +
        "\n" +
        clientId +
        "\n" +
        timestamp +
        "\n" +
        nonce +
        "\n";

    const mac = crypto
        .createHmac("sha256", keySecret)
        .update(signText)
        .digest("base64");

    return {
        keyName,
        clientId,
        timestamp,
        nonce,
        mac,
    };
}