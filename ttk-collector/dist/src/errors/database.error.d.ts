export declare class DatabaseError extends Error {
    readonly context?: Record<string, unknown> | undefined;
    readonly originalError?: Error | undefined;
    constructor(message: string, context?: Record<string, unknown> | undefined, originalError?: Error | undefined);
}
