"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseError = void 0;
class DatabaseError extends Error {
    context;
    originalError;
    constructor(message, context, originalError) {
        super(message);
        this.context = context;
        this.originalError = originalError;
        this.name = 'DatabaseError';
        if (originalError?.stack) {
            this.stack = originalError.stack;
        }
    }
}
exports.DatabaseError = DatabaseError;
//# sourceMappingURL=database.error.js.map