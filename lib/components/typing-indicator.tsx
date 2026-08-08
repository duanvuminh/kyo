export function TypingIndicator() {
    return (
        <div className="flex items-center gap-1 text-muted-foreground">
            <span
                className="inline-block w-1 h-1 rounded-full bg-current animate-bounce"
                style={{ animationDelay: "0ms" }}
            />
            <span
                className="inline-block w-1 h-1 rounded-full bg-current animate-bounce"
                style={{ animationDelay: "150ms" }}
            />
            <span
                className="inline-block w-1 h-1 rounded-full bg-current animate-bounce"
                style={{ animationDelay: "300ms" }}
            />
        </div>
    );
}
