import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { z } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schemas: z.ZodSchema[]) {}
  
  transform(value: any) {
    // Try validating with each schema in the array
    for (const schema of this.schemas) {
      try {
        // Validate the value against the current schema
        const validatedData = schema.parse(value);
        return validatedData;  // Return the valid data if validation is successful
      } catch (error) {
        // If validation fails for this schema, try the next one
        continue;
      }
    }
    
    // If no schema validation passes, throw an exception
    throw new BadRequestException('Validation failed for all schemas');
  }
}

// pipes/zod-validation.pipe.ts
// import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
// import { ZodSchema } from 'zod';

// @Injectable()
// export class ZodValidationPipe implements PipeTransform {
//   constructor(private schema: ZodSchema<any>) {}

//   transform(value: unknown, metadata: ArgumentMetadata) {
//     try{
//     const result = this.schema.safeParse(value);
//     return result
//     }catch(error){
//       throw new BadRequestException('Validation failed')
//     }
//   }
// }

////
// import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
// import { ZodSchema } from 'zod';

// @Injectable()
// export class ZodValidationPipe implements PipeTransform {
//   constructor(private readonly schema: ZodSchema<any>) {}

//   transform(value: unknown) {
//     const result = this.schema.safeParse(value);

//     if (!result.success) {
//       throw new BadRequestException(result.error.errors); // Show detailed validation errors
//     }

//     return result.data; // Very important: use parsed/validated data
//   }
// }  