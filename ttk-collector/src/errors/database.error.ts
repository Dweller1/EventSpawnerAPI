// src/errors/database.error.ts
export class DatabaseError extends Error {
  constructor(
    message: string, 
    public readonly context?: Record<string, unknown>,
    public readonly originalError?: Error
  ) {
    super(message);
    this.name = 'DatabaseError';
    
    // Maintains proper stack trace
    if (originalError?.stack) {
      this.stack = originalError.stack;
    }
  }
}