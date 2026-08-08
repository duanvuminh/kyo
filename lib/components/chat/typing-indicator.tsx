"use client";

export function TypingIndicator() {
    return (
        <div className="flex items-center gap-1 text-muted-foreground">
            <span
                className="inline-block w-2 h-2 rounded-full bg-current animate-bounce"
                style={{ animationDelay: "0ms" }}
            />
            <span
                className="inline-block w-2 h-2 rounded-full bg-current animate-bounce"
                style={{ animationDelay: "150ms" }}
            />
            <span
                className="inline-block w-2 h-2 rounded-full bg-current animate-bounce"
                style={{ animationDelay: "300ms" }}
            />
        </div>
    );
}
