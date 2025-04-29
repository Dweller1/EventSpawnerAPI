
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model FacebookEvent
 * 
 */
export type FacebookEvent = $Result.DefaultSelection<Prisma.$FacebookEventPayload>
/**
 * Model FacebookEngagementTop
 * 
 */
export type FacebookEngagementTop = $Result.DefaultSelection<Prisma.$FacebookEngagementTopPayload>
/**
 * Model FacebookEngagementBottom
 * 
 */
export type FacebookEngagementBottom = $Result.DefaultSelection<Prisma.$FacebookEngagementBottomPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FunnelStage: {
  top: 'top',
  bottom: 'bottom'
};

export type FunnelStage = (typeof FunnelStage)[keyof typeof FunnelStage]


export const FacebookEventType: {
  ad_view: 'ad_view',
  page_like: 'page_like',
  comment: 'comment',
  video_view: 'video_view',
  ad_click: 'ad_click',
  form_submission: 'form_submission',
  checkout_complete: 'checkout_complete'
};

export type FacebookEventType = (typeof FacebookEventType)[keyof typeof FacebookEventType]


export const Gender: {
  male: 'male',
  female: 'female',
  non_binary: 'non_binary'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Referrer: {
  newsfeed: 'newsfeed',
  marketplace: 'marketplace',
  groups: 'groups'
};

export type Referrer = (typeof Referrer)[keyof typeof Referrer]


export const ClickPosition: {
  top_left: 'top_left',
  bottom_right: 'bottom_right',
  center: 'center'
};

export type ClickPosition = (typeof ClickPosition)[keyof typeof ClickPosition]


export const Device: {
  mobile: 'mobile',
  desktop: 'desktop'
};

export type Device = (typeof Device)[keyof typeof Device]


export const Browser: {
  Chrome: 'Chrome',
  Firefox: 'Firefox',
  Safari: 'Safari'
};

export type Browser = (typeof Browser)[keyof typeof Browser]

}

export type FunnelStage = $Enums.FunnelStage

export const FunnelStage: typeof $Enums.FunnelStage

export type FacebookEventType = $Enums.FacebookEventType

export const FacebookEventType: typeof $Enums.FacebookEventType

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Referrer = $Enums.Referrer

export const Referrer: typeof $Enums.Referrer

export type ClickPosition = $Enums.ClickPosition

export const ClickPosition: typeof $Enums.ClickPosition

export type Device = $Enums.Device

export const Device: typeof $Enums.Device

export type Browser = $Enums.Browser

export const Browser: typeof $Enums.Browser

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FacebookEvents
 * const facebookEvents = await prisma.facebookEvent.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more FacebookEvents
   * const facebookEvents = await prisma.facebookEvent.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.facebookEvent`: Exposes CRUD operations for the **FacebookEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacebookEvents
    * const facebookEvents = await prisma.facebookEvent.findMany()
    * ```
    */
  get facebookEvent(): Prisma.FacebookEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facebookEngagementTop`: Exposes CRUD operations for the **FacebookEngagementTop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacebookEngagementTops
    * const facebookEngagementTops = await prisma.facebookEngagementTop.findMany()
    * ```
    */
  get facebookEngagementTop(): Prisma.FacebookEngagementTopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facebookEngagementBottom`: Exposes CRUD operations for the **FacebookEngagementBottom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacebookEngagementBottoms
    * const facebookEngagementBottoms = await prisma.facebookEngagementBottom.findMany()
    * ```
    */
  get facebookEngagementBottom(): Prisma.FacebookEngagementBottomDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    FacebookEvent: 'FacebookEvent',
    FacebookEngagementTop: 'FacebookEngagementTop',
    FacebookEngagementBottom: 'FacebookEngagementBottom'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "facebookEvent" | "facebookEngagementTop" | "facebookEngagementBottom"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FacebookEvent: {
        payload: Prisma.$FacebookEventPayload<ExtArgs>
        fields: Prisma.FacebookEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacebookEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacebookEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          findFirst: {
            args: Prisma.FacebookEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacebookEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          findMany: {
            args: Prisma.FacebookEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>[]
          }
          create: {
            args: Prisma.FacebookEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          createMany: {
            args: Prisma.FacebookEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacebookEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>[]
          }
          delete: {
            args: Prisma.FacebookEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          update: {
            args: Prisma.FacebookEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          deleteMany: {
            args: Prisma.FacebookEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacebookEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacebookEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>[]
          }
          upsert: {
            args: Prisma.FacebookEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEventPayload>
          }
          aggregate: {
            args: Prisma.FacebookEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacebookEvent>
          }
          groupBy: {
            args: Prisma.FacebookEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacebookEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacebookEventCountArgs<ExtArgs>
            result: $Utils.Optional<FacebookEventCountAggregateOutputType> | number
          }
        }
      }
      FacebookEngagementTop: {
        payload: Prisma.$FacebookEngagementTopPayload<ExtArgs>
        fields: Prisma.FacebookEngagementTopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacebookEngagementTopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacebookEngagementTopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>
          }
          findFirst: {
            args: Prisma.FacebookEngagementTopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacebookEngagementTopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>
          }
          findMany: {
            args: Prisma.FacebookEngagementTopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>[]
          }
          create: {
            args: Prisma.FacebookEngagementTopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>
          }
          createMany: {
            args: Prisma.FacebookEngagementTopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacebookEngagementTopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>[]
          }
          delete: {
            args: Prisma.FacebookEngagementTopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>
          }
          update: {
            args: Prisma.FacebookEngagementTopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>
          }
          deleteMany: {
            args: Prisma.FacebookEngagementTopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacebookEngagementTopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacebookEngagementTopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>[]
          }
          upsert: {
            args: Prisma.FacebookEngagementTopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementTopPayload>
          }
          aggregate: {
            args: Prisma.FacebookEngagementTopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacebookEngagementTop>
          }
          groupBy: {
            args: Prisma.FacebookEngagementTopGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacebookEngagementTopGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacebookEngagementTopCountArgs<ExtArgs>
            result: $Utils.Optional<FacebookEngagementTopCountAggregateOutputType> | number
          }
        }
      }
      FacebookEngagementBottom: {
        payload: Prisma.$FacebookEngagementBottomPayload<ExtArgs>
        fields: Prisma.FacebookEngagementBottomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacebookEngagementBottomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacebookEngagementBottomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>
          }
          findFirst: {
            args: Prisma.FacebookEngagementBottomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacebookEngagementBottomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>
          }
          findMany: {
            args: Prisma.FacebookEngagementBottomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>[]
          }
          create: {
            args: Prisma.FacebookEngagementBottomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>
          }
          createMany: {
            args: Prisma.FacebookEngagementBottomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacebookEngagementBottomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>[]
          }
          delete: {
            args: Prisma.FacebookEngagementBottomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>
          }
          update: {
            args: Prisma.FacebookEngagementBottomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>
          }
          deleteMany: {
            args: Prisma.FacebookEngagementBottomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacebookEngagementBottomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacebookEngagementBottomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>[]
          }
          upsert: {
            args: Prisma.FacebookEngagementBottomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementBottomPayload>
          }
          aggregate: {
            args: Prisma.FacebookEngagementBottomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacebookEngagementBottom>
          }
          groupBy: {
            args: Prisma.FacebookEngagementBottomGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacebookEngagementBottomGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacebookEngagementBottomCountArgs<ExtArgs>
            result: $Utils.Optional<FacebookEngagementBottomCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    facebookEvent?: FacebookEventOmit
    facebookEngagementTop?: FacebookEngagementTopOmit
    facebookEngagementBottom?: FacebookEngagementBottomOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model FacebookEvent
   */

  export type AggregateFacebookEvent = {
    _count: FacebookEventCountAggregateOutputType | null
    _avg: FacebookEventAvgAggregateOutputType | null
    _sum: FacebookEventSumAggregateOutputType | null
    _min: FacebookEventMinAggregateOutputType | null
    _max: FacebookEventMaxAggregateOutputType | null
  }

  export type FacebookEventAvgAggregateOutputType = {
    userAge: number | null
  }

  export type FacebookEventSumAggregateOutputType = {
    userAge: number | null
  }

  export type FacebookEventMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    source: string | null
    funnelStage: $Enums.FunnelStage | null
    eventType: $Enums.FacebookEventType | null
    userId: string | null
    userName: string | null
    userAge: number | null
    userGender: $Enums.Gender | null
    userCountry: string | null
    userCity: string | null
  }

  export type FacebookEventMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    source: string | null
    funnelStage: $Enums.FunnelStage | null
    eventType: $Enums.FacebookEventType | null
    userId: string | null
    userName: string | null
    userAge: number | null
    userGender: $Enums.Gender | null
    userCountry: string | null
    userCity: string | null
  }

  export type FacebookEventCountAggregateOutputType = {
    id: number
    timestamp: number
    source: number
    funnelStage: number
    eventType: number
    userId: number
    userName: number
    userAge: number
    userGender: number
    userCountry: number
    userCity: number
    _all: number
  }


  export type FacebookEventAvgAggregateInputType = {
    userAge?: true
  }

  export type FacebookEventSumAggregateInputType = {
    userAge?: true
  }

  export type FacebookEventMinAggregateInputType = {
    id?: true
    timestamp?: true
    source?: true
    funnelStage?: true
    eventType?: true
    userId?: true
    userName?: true
    userAge?: true
    userGender?: true
    userCountry?: true
    userCity?: true
  }

  export type FacebookEventMaxAggregateInputType = {
    id?: true
    timestamp?: true
    source?: true
    funnelStage?: true
    eventType?: true
    userId?: true
    userName?: true
    userAge?: true
    userGender?: true
    userCountry?: true
    userCity?: true
  }

  export type FacebookEventCountAggregateInputType = {
    id?: true
    timestamp?: true
    source?: true
    funnelStage?: true
    eventType?: true
    userId?: true
    userName?: true
    userAge?: true
    userGender?: true
    userCountry?: true
    userCity?: true
    _all?: true
  }

  export type FacebookEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookEvent to aggregate.
     */
    where?: FacebookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEvents to fetch.
     */
    orderBy?: FacebookEventOrderByWithRelationInput | FacebookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacebookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacebookEvents
    **/
    _count?: true | FacebookEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacebookEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacebookEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacebookEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacebookEventMaxAggregateInputType
  }

  export type GetFacebookEventAggregateType<T extends FacebookEventAggregateArgs> = {
        [P in keyof T & keyof AggregateFacebookEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacebookEvent[P]>
      : GetScalarType<T[P], AggregateFacebookEvent[P]>
  }




  export type FacebookEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacebookEventWhereInput
    orderBy?: FacebookEventOrderByWithAggregationInput | FacebookEventOrderByWithAggregationInput[]
    by: FacebookEventScalarFieldEnum[] | FacebookEventScalarFieldEnum
    having?: FacebookEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacebookEventCountAggregateInputType | true
    _avg?: FacebookEventAvgAggregateInputType
    _sum?: FacebookEventSumAggregateInputType
    _min?: FacebookEventMinAggregateInputType
    _max?: FacebookEventMaxAggregateInputType
  }

  export type FacebookEventGroupByOutputType = {
    id: string
    timestamp: Date
    source: string
    funnelStage: $Enums.FunnelStage
    eventType: $Enums.FacebookEventType
    userId: string
    userName: string
    userAge: number
    userGender: $Enums.Gender
    userCountry: string
    userCity: string
    _count: FacebookEventCountAggregateOutputType | null
    _avg: FacebookEventAvgAggregateOutputType | null
    _sum: FacebookEventSumAggregateOutputType | null
    _min: FacebookEventMinAggregateOutputType | null
    _max: FacebookEventMaxAggregateOutputType | null
  }

  type GetFacebookEventGroupByPayload<T extends FacebookEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacebookEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacebookEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacebookEventGroupByOutputType[P]>
            : GetScalarType<T[P], FacebookEventGroupByOutputType[P]>
        }
      >
    >


  export type FacebookEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    source?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    userName?: boolean
    userAge?: boolean
    userGender?: boolean
    userCountry?: boolean
    userCity?: boolean
    engagementTop?: boolean | FacebookEvent$engagementTopArgs<ExtArgs>
    engagementBottom?: boolean | FacebookEvent$engagementBottomArgs<ExtArgs>
  }, ExtArgs["result"]["facebookEvent"]>

  export type FacebookEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    source?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    userName?: boolean
    userAge?: boolean
    userGender?: boolean
    userCountry?: boolean
    userCity?: boolean
  }, ExtArgs["result"]["facebookEvent"]>

  export type FacebookEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    source?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    userName?: boolean
    userAge?: boolean
    userGender?: boolean
    userCountry?: boolean
    userCity?: boolean
  }, ExtArgs["result"]["facebookEvent"]>

  export type FacebookEventSelectScalar = {
    id?: boolean
    timestamp?: boolean
    source?: boolean
    funnelStage?: boolean
    eventType?: boolean
    userId?: boolean
    userName?: boolean
    userAge?: boolean
    userGender?: boolean
    userCountry?: boolean
    userCity?: boolean
  }

  export type FacebookEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "source" | "funnelStage" | "eventType" | "userId" | "userName" | "userAge" | "userGender" | "userCountry" | "userCity", ExtArgs["result"]["facebookEvent"]>
  export type FacebookEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    engagementTop?: boolean | FacebookEvent$engagementTopArgs<ExtArgs>
    engagementBottom?: boolean | FacebookEvent$engagementBottomArgs<ExtArgs>
  }
  export type FacebookEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FacebookEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FacebookEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacebookEvent"
    objects: {
      engagementTop: Prisma.$FacebookEngagementTopPayload<ExtArgs> | null
      engagementBottom: Prisma.$FacebookEngagementBottomPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      source: string
      funnelStage: $Enums.FunnelStage
      eventType: $Enums.FacebookEventType
      userId: string
      userName: string
      userAge: number
      userGender: $Enums.Gender
      userCountry: string
      userCity: string
    }, ExtArgs["result"]["facebookEvent"]>
    composites: {}
  }

  type FacebookEventGetPayload<S extends boolean | null | undefined | FacebookEventDefaultArgs> = $Result.GetResult<Prisma.$FacebookEventPayload, S>

  type FacebookEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacebookEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacebookEventCountAggregateInputType | true
    }

  export interface FacebookEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacebookEvent'], meta: { name: 'FacebookEvent' } }
    /**
     * Find zero or one FacebookEvent that matches the filter.
     * @param {FacebookEventFindUniqueArgs} args - Arguments to find a FacebookEvent
     * @example
     * // Get one FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacebookEventFindUniqueArgs>(args: SelectSubset<T, FacebookEventFindUniqueArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacebookEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacebookEventFindUniqueOrThrowArgs} args - Arguments to find a FacebookEvent
     * @example
     * // Get one FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacebookEventFindUniqueOrThrowArgs>(args: SelectSubset<T, FacebookEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventFindFirstArgs} args - Arguments to find a FacebookEvent
     * @example
     * // Get one FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacebookEventFindFirstArgs>(args?: SelectSubset<T, FacebookEventFindFirstArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventFindFirstOrThrowArgs} args - Arguments to find a FacebookEvent
     * @example
     * // Get one FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacebookEventFindFirstOrThrowArgs>(args?: SelectSubset<T, FacebookEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacebookEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacebookEvents
     * const facebookEvents = await prisma.facebookEvent.findMany()
     * 
     * // Get first 10 FacebookEvents
     * const facebookEvents = await prisma.facebookEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facebookEventWithIdOnly = await prisma.facebookEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacebookEventFindManyArgs>(args?: SelectSubset<T, FacebookEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacebookEvent.
     * @param {FacebookEventCreateArgs} args - Arguments to create a FacebookEvent.
     * @example
     * // Create one FacebookEvent
     * const FacebookEvent = await prisma.facebookEvent.create({
     *   data: {
     *     // ... data to create a FacebookEvent
     *   }
     * })
     * 
     */
    create<T extends FacebookEventCreateArgs>(args: SelectSubset<T, FacebookEventCreateArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacebookEvents.
     * @param {FacebookEventCreateManyArgs} args - Arguments to create many FacebookEvents.
     * @example
     * // Create many FacebookEvents
     * const facebookEvent = await prisma.facebookEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacebookEventCreateManyArgs>(args?: SelectSubset<T, FacebookEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacebookEvents and returns the data saved in the database.
     * @param {FacebookEventCreateManyAndReturnArgs} args - Arguments to create many FacebookEvents.
     * @example
     * // Create many FacebookEvents
     * const facebookEvent = await prisma.facebookEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacebookEvents and only return the `id`
     * const facebookEventWithIdOnly = await prisma.facebookEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacebookEventCreateManyAndReturnArgs>(args?: SelectSubset<T, FacebookEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacebookEvent.
     * @param {FacebookEventDeleteArgs} args - Arguments to delete one FacebookEvent.
     * @example
     * // Delete one FacebookEvent
     * const FacebookEvent = await prisma.facebookEvent.delete({
     *   where: {
     *     // ... filter to delete one FacebookEvent
     *   }
     * })
     * 
     */
    delete<T extends FacebookEventDeleteArgs>(args: SelectSubset<T, FacebookEventDeleteArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacebookEvent.
     * @param {FacebookEventUpdateArgs} args - Arguments to update one FacebookEvent.
     * @example
     * // Update one FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacebookEventUpdateArgs>(args: SelectSubset<T, FacebookEventUpdateArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacebookEvents.
     * @param {FacebookEventDeleteManyArgs} args - Arguments to filter FacebookEvents to delete.
     * @example
     * // Delete a few FacebookEvents
     * const { count } = await prisma.facebookEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacebookEventDeleteManyArgs>(args?: SelectSubset<T, FacebookEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacebookEvents
     * const facebookEvent = await prisma.facebookEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacebookEventUpdateManyArgs>(args: SelectSubset<T, FacebookEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookEvents and returns the data updated in the database.
     * @param {FacebookEventUpdateManyAndReturnArgs} args - Arguments to update many FacebookEvents.
     * @example
     * // Update many FacebookEvents
     * const facebookEvent = await prisma.facebookEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacebookEvents and only return the `id`
     * const facebookEventWithIdOnly = await prisma.facebookEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacebookEventUpdateManyAndReturnArgs>(args: SelectSubset<T, FacebookEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacebookEvent.
     * @param {FacebookEventUpsertArgs} args - Arguments to update or create a FacebookEvent.
     * @example
     * // Update or create a FacebookEvent
     * const facebookEvent = await prisma.facebookEvent.upsert({
     *   create: {
     *     // ... data to create a FacebookEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacebookEvent we want to update
     *   }
     * })
     */
    upsert<T extends FacebookEventUpsertArgs>(args: SelectSubset<T, FacebookEventUpsertArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacebookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventCountArgs} args - Arguments to filter FacebookEvents to count.
     * @example
     * // Count the number of FacebookEvents
     * const count = await prisma.facebookEvent.count({
     *   where: {
     *     // ... the filter for the FacebookEvents we want to count
     *   }
     * })
    **/
    count<T extends FacebookEventCountArgs>(
      args?: Subset<T, FacebookEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacebookEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacebookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacebookEventAggregateArgs>(args: Subset<T, FacebookEventAggregateArgs>): Prisma.PrismaPromise<GetFacebookEventAggregateType<T>>

    /**
     * Group by FacebookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacebookEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacebookEventGroupByArgs['orderBy'] }
        : { orderBy?: FacebookEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacebookEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacebookEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacebookEvent model
   */
  readonly fields: FacebookEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacebookEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacebookEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    engagementTop<T extends FacebookEvent$engagementTopArgs<ExtArgs> = {}>(args?: Subset<T, FacebookEvent$engagementTopArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    engagementBottom<T extends FacebookEvent$engagementBottomArgs<ExtArgs> = {}>(args?: Subset<T, FacebookEvent$engagementBottomArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FacebookEvent model
   */
  interface FacebookEventFieldRefs {
    readonly id: FieldRef<"FacebookEvent", 'String'>
    readonly timestamp: FieldRef<"FacebookEvent", 'DateTime'>
    readonly source: FieldRef<"FacebookEvent", 'String'>
    readonly funnelStage: FieldRef<"FacebookEvent", 'FunnelStage'>
    readonly eventType: FieldRef<"FacebookEvent", 'FacebookEventType'>
    readonly userId: FieldRef<"FacebookEvent", 'String'>
    readonly userName: FieldRef<"FacebookEvent", 'String'>
    readonly userAge: FieldRef<"FacebookEvent", 'Int'>
    readonly userGender: FieldRef<"FacebookEvent", 'Gender'>
    readonly userCountry: FieldRef<"FacebookEvent", 'String'>
    readonly userCity: FieldRef<"FacebookEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FacebookEvent findUnique
   */
  export type FacebookEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEvent to fetch.
     */
    where: FacebookEventWhereUniqueInput
  }

  /**
   * FacebookEvent findUniqueOrThrow
   */
  export type FacebookEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEvent to fetch.
     */
    where: FacebookEventWhereUniqueInput
  }

  /**
   * FacebookEvent findFirst
   */
  export type FacebookEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEvent to fetch.
     */
    where?: FacebookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEvents to fetch.
     */
    orderBy?: FacebookEventOrderByWithRelationInput | FacebookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookEvents.
     */
    cursor?: FacebookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookEvents.
     */
    distinct?: FacebookEventScalarFieldEnum | FacebookEventScalarFieldEnum[]
  }

  /**
   * FacebookEvent findFirstOrThrow
   */
  export type FacebookEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEvent to fetch.
     */
    where?: FacebookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEvents to fetch.
     */
    orderBy?: FacebookEventOrderByWithRelationInput | FacebookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookEvents.
     */
    cursor?: FacebookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookEvents.
     */
    distinct?: FacebookEventScalarFieldEnum | FacebookEventScalarFieldEnum[]
  }

  /**
   * FacebookEvent findMany
   */
  export type FacebookEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEvents to fetch.
     */
    where?: FacebookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEvents to fetch.
     */
    orderBy?: FacebookEventOrderByWithRelationInput | FacebookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacebookEvents.
     */
    cursor?: FacebookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEvents.
     */
    skip?: number
    distinct?: FacebookEventScalarFieldEnum | FacebookEventScalarFieldEnum[]
  }

  /**
   * FacebookEvent create
   */
  export type FacebookEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * The data needed to create a FacebookEvent.
     */
    data: XOR<FacebookEventCreateInput, FacebookEventUncheckedCreateInput>
  }

  /**
   * FacebookEvent createMany
   */
  export type FacebookEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacebookEvents.
     */
    data: FacebookEventCreateManyInput | FacebookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacebookEvent createManyAndReturn
   */
  export type FacebookEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * The data used to create many FacebookEvents.
     */
    data: FacebookEventCreateManyInput | FacebookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacebookEvent update
   */
  export type FacebookEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * The data needed to update a FacebookEvent.
     */
    data: XOR<FacebookEventUpdateInput, FacebookEventUncheckedUpdateInput>
    /**
     * Choose, which FacebookEvent to update.
     */
    where: FacebookEventWhereUniqueInput
  }

  /**
   * FacebookEvent updateMany
   */
  export type FacebookEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacebookEvents.
     */
    data: XOR<FacebookEventUpdateManyMutationInput, FacebookEventUncheckedUpdateManyInput>
    /**
     * Filter which FacebookEvents to update
     */
    where?: FacebookEventWhereInput
    /**
     * Limit how many FacebookEvents to update.
     */
    limit?: number
  }

  /**
   * FacebookEvent updateManyAndReturn
   */
  export type FacebookEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * The data used to update FacebookEvents.
     */
    data: XOR<FacebookEventUpdateManyMutationInput, FacebookEventUncheckedUpdateManyInput>
    /**
     * Filter which FacebookEvents to update
     */
    where?: FacebookEventWhereInput
    /**
     * Limit how many FacebookEvents to update.
     */
    limit?: number
  }

  /**
   * FacebookEvent upsert
   */
  export type FacebookEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * The filter to search for the FacebookEvent to update in case it exists.
     */
    where: FacebookEventWhereUniqueInput
    /**
     * In case the FacebookEvent found by the `where` argument doesn't exist, create a new FacebookEvent with this data.
     */
    create: XOR<FacebookEventCreateInput, FacebookEventUncheckedCreateInput>
    /**
     * In case the FacebookEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacebookEventUpdateInput, FacebookEventUncheckedUpdateInput>
  }

  /**
   * FacebookEvent delete
   */
  export type FacebookEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
    /**
     * Filter which FacebookEvent to delete.
     */
    where: FacebookEventWhereUniqueInput
  }

  /**
   * FacebookEvent deleteMany
   */
  export type FacebookEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookEvents to delete
     */
    where?: FacebookEventWhereInput
    /**
     * Limit how many FacebookEvents to delete.
     */
    limit?: number
  }

  /**
   * FacebookEvent.engagementTop
   */
  export type FacebookEvent$engagementTopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    where?: FacebookEngagementTopWhereInput
  }

  /**
   * FacebookEvent.engagementBottom
   */
  export type FacebookEvent$engagementBottomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    where?: FacebookEngagementBottomWhereInput
  }

  /**
   * FacebookEvent without action
   */
  export type FacebookEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEvent
     */
    select?: FacebookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEvent
     */
    omit?: FacebookEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEventInclude<ExtArgs> | null
  }


  /**
   * Model FacebookEngagementTop
   */

  export type AggregateFacebookEngagementTop = {
    _count: FacebookEngagementTopCountAggregateOutputType | null
    _avg: FacebookEngagementTopAvgAggregateOutputType | null
    _sum: FacebookEngagementTopSumAggregateOutputType | null
    _min: FacebookEngagementTopMinAggregateOutputType | null
    _max: FacebookEngagementTopMaxAggregateOutputType | null
  }

  export type FacebookEngagementTopAvgAggregateOutputType = {
    id: number | null
  }

  export type FacebookEngagementTopSumAggregateOutputType = {
    id: number | null
  }

  export type FacebookEngagementTopMinAggregateOutputType = {
    id: number | null
    actionTime: Date | null
    referrer: $Enums.Referrer | null
    videoId: string | null
    facebookEventId: string | null
  }

  export type FacebookEngagementTopMaxAggregateOutputType = {
    id: number | null
    actionTime: Date | null
    referrer: $Enums.Referrer | null
    videoId: string | null
    facebookEventId: string | null
  }

  export type FacebookEngagementTopCountAggregateOutputType = {
    id: number
    actionTime: number
    referrer: number
    videoId: number
    facebookEventId: number
    _all: number
  }


  export type FacebookEngagementTopAvgAggregateInputType = {
    id?: true
  }

  export type FacebookEngagementTopSumAggregateInputType = {
    id?: true
  }

  export type FacebookEngagementTopMinAggregateInputType = {
    id?: true
    actionTime?: true
    referrer?: true
    videoId?: true
    facebookEventId?: true
  }

  export type FacebookEngagementTopMaxAggregateInputType = {
    id?: true
    actionTime?: true
    referrer?: true
    videoId?: true
    facebookEventId?: true
  }

  export type FacebookEngagementTopCountAggregateInputType = {
    id?: true
    actionTime?: true
    referrer?: true
    videoId?: true
    facebookEventId?: true
    _all?: true
  }

  export type FacebookEngagementTopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookEngagementTop to aggregate.
     */
    where?: FacebookEngagementTopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagementTops to fetch.
     */
    orderBy?: FacebookEngagementTopOrderByWithRelationInput | FacebookEngagementTopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacebookEngagementTopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagementTops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagementTops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacebookEngagementTops
    **/
    _count?: true | FacebookEngagementTopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacebookEngagementTopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacebookEngagementTopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacebookEngagementTopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacebookEngagementTopMaxAggregateInputType
  }

  export type GetFacebookEngagementTopAggregateType<T extends FacebookEngagementTopAggregateArgs> = {
        [P in keyof T & keyof AggregateFacebookEngagementTop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacebookEngagementTop[P]>
      : GetScalarType<T[P], AggregateFacebookEngagementTop[P]>
  }




  export type FacebookEngagementTopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacebookEngagementTopWhereInput
    orderBy?: FacebookEngagementTopOrderByWithAggregationInput | FacebookEngagementTopOrderByWithAggregationInput[]
    by: FacebookEngagementTopScalarFieldEnum[] | FacebookEngagementTopScalarFieldEnum
    having?: FacebookEngagementTopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacebookEngagementTopCountAggregateInputType | true
    _avg?: FacebookEngagementTopAvgAggregateInputType
    _sum?: FacebookEngagementTopSumAggregateInputType
    _min?: FacebookEngagementTopMinAggregateInputType
    _max?: FacebookEngagementTopMaxAggregateInputType
  }

  export type FacebookEngagementTopGroupByOutputType = {
    id: number
    actionTime: Date
    referrer: $Enums.Referrer
    videoId: string | null
    facebookEventId: string
    _count: FacebookEngagementTopCountAggregateOutputType | null
    _avg: FacebookEngagementTopAvgAggregateOutputType | null
    _sum: FacebookEngagementTopSumAggregateOutputType | null
    _min: FacebookEngagementTopMinAggregateOutputType | null
    _max: FacebookEngagementTopMaxAggregateOutputType | null
  }

  type GetFacebookEngagementTopGroupByPayload<T extends FacebookEngagementTopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacebookEngagementTopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacebookEngagementTopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacebookEngagementTopGroupByOutputType[P]>
            : GetScalarType<T[P], FacebookEngagementTopGroupByOutputType[P]>
        }
      >
    >


  export type FacebookEngagementTopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionTime?: boolean
    referrer?: boolean
    videoId?: boolean
    facebookEventId?: boolean
    event?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookEngagementTop"]>

  export type FacebookEngagementTopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionTime?: boolean
    referrer?: boolean
    videoId?: boolean
    facebookEventId?: boolean
    event?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookEngagementTop"]>

  export type FacebookEngagementTopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionTime?: boolean
    referrer?: boolean
    videoId?: boolean
    facebookEventId?: boolean
    event?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookEngagementTop"]>

  export type FacebookEngagementTopSelectScalar = {
    id?: boolean
    actionTime?: boolean
    referrer?: boolean
    videoId?: boolean
    facebookEventId?: boolean
  }

  export type FacebookEngagementTopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actionTime" | "referrer" | "videoId" | "facebookEventId", ExtArgs["result"]["facebookEngagementTop"]>
  export type FacebookEngagementTopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }
  export type FacebookEngagementTopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }
  export type FacebookEngagementTopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }

  export type $FacebookEngagementTopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacebookEngagementTop"
    objects: {
      event: Prisma.$FacebookEventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      actionTime: Date
      referrer: $Enums.Referrer
      videoId: string | null
      facebookEventId: string
    }, ExtArgs["result"]["facebookEngagementTop"]>
    composites: {}
  }

  type FacebookEngagementTopGetPayload<S extends boolean | null | undefined | FacebookEngagementTopDefaultArgs> = $Result.GetResult<Prisma.$FacebookEngagementTopPayload, S>

  type FacebookEngagementTopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacebookEngagementTopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacebookEngagementTopCountAggregateInputType | true
    }

  export interface FacebookEngagementTopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacebookEngagementTop'], meta: { name: 'FacebookEngagementTop' } }
    /**
     * Find zero or one FacebookEngagementTop that matches the filter.
     * @param {FacebookEngagementTopFindUniqueArgs} args - Arguments to find a FacebookEngagementTop
     * @example
     * // Get one FacebookEngagementTop
     * const facebookEngagementTop = await prisma.facebookEngagementTop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacebookEngagementTopFindUniqueArgs>(args: SelectSubset<T, FacebookEngagementTopFindUniqueArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacebookEngagementTop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacebookEngagementTopFindUniqueOrThrowArgs} args - Arguments to find a FacebookEngagementTop
     * @example
     * // Get one FacebookEngagementTop
     * const facebookEngagementTop = await prisma.facebookEngagementTop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacebookEngagementTopFindUniqueOrThrowArgs>(args: SelectSubset<T, FacebookEngagementTopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookEngagementTop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementTopFindFirstArgs} args - Arguments to find a FacebookEngagementTop
     * @example
     * // Get one FacebookEngagementTop
     * const facebookEngagementTop = await prisma.facebookEngagementTop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacebookEngagementTopFindFirstArgs>(args?: SelectSubset<T, FacebookEngagementTopFindFirstArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookEngagementTop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementTopFindFirstOrThrowArgs} args - Arguments to find a FacebookEngagementTop
     * @example
     * // Get one FacebookEngagementTop
     * const facebookEngagementTop = await prisma.facebookEngagementTop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacebookEngagementTopFindFirstOrThrowArgs>(args?: SelectSubset<T, FacebookEngagementTopFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacebookEngagementTops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementTopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacebookEngagementTops
     * const facebookEngagementTops = await prisma.facebookEngagementTop.findMany()
     * 
     * // Get first 10 FacebookEngagementTops
     * const facebookEngagementTops = await prisma.facebookEngagementTop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facebookEngagementTopWithIdOnly = await prisma.facebookEngagementTop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacebookEngagementTopFindManyArgs>(args?: SelectSubset<T, FacebookEngagementTopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacebookEngagementTop.
     * @param {FacebookEngagementTopCreateArgs} args - Arguments to create a FacebookEngagementTop.
     * @example
     * // Create one FacebookEngagementTop
     * const FacebookEngagementTop = await prisma.facebookEngagementTop.create({
     *   data: {
     *     // ... data to create a FacebookEngagementTop
     *   }
     * })
     * 
     */
    create<T extends FacebookEngagementTopCreateArgs>(args: SelectSubset<T, FacebookEngagementTopCreateArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacebookEngagementTops.
     * @param {FacebookEngagementTopCreateManyArgs} args - Arguments to create many FacebookEngagementTops.
     * @example
     * // Create many FacebookEngagementTops
     * const facebookEngagementTop = await prisma.facebookEngagementTop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacebookEngagementTopCreateManyArgs>(args?: SelectSubset<T, FacebookEngagementTopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacebookEngagementTops and returns the data saved in the database.
     * @param {FacebookEngagementTopCreateManyAndReturnArgs} args - Arguments to create many FacebookEngagementTops.
     * @example
     * // Create many FacebookEngagementTops
     * const facebookEngagementTop = await prisma.facebookEngagementTop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacebookEngagementTops and only return the `id`
     * const facebookEngagementTopWithIdOnly = await prisma.facebookEngagementTop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacebookEngagementTopCreateManyAndReturnArgs>(args?: SelectSubset<T, FacebookEngagementTopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacebookEngagementTop.
     * @param {FacebookEngagementTopDeleteArgs} args - Arguments to delete one FacebookEngagementTop.
     * @example
     * // Delete one FacebookEngagementTop
     * const FacebookEngagementTop = await prisma.facebookEngagementTop.delete({
     *   where: {
     *     // ... filter to delete one FacebookEngagementTop
     *   }
     * })
     * 
     */
    delete<T extends FacebookEngagementTopDeleteArgs>(args: SelectSubset<T, FacebookEngagementTopDeleteArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacebookEngagementTop.
     * @param {FacebookEngagementTopUpdateArgs} args - Arguments to update one FacebookEngagementTop.
     * @example
     * // Update one FacebookEngagementTop
     * const facebookEngagementTop = await prisma.facebookEngagementTop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacebookEngagementTopUpdateArgs>(args: SelectSubset<T, FacebookEngagementTopUpdateArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacebookEngagementTops.
     * @param {FacebookEngagementTopDeleteManyArgs} args - Arguments to filter FacebookEngagementTops to delete.
     * @example
     * // Delete a few FacebookEngagementTops
     * const { count } = await prisma.facebookEngagementTop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacebookEngagementTopDeleteManyArgs>(args?: SelectSubset<T, FacebookEngagementTopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookEngagementTops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementTopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacebookEngagementTops
     * const facebookEngagementTop = await prisma.facebookEngagementTop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacebookEngagementTopUpdateManyArgs>(args: SelectSubset<T, FacebookEngagementTopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookEngagementTops and returns the data updated in the database.
     * @param {FacebookEngagementTopUpdateManyAndReturnArgs} args - Arguments to update many FacebookEngagementTops.
     * @example
     * // Update many FacebookEngagementTops
     * const facebookEngagementTop = await prisma.facebookEngagementTop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacebookEngagementTops and only return the `id`
     * const facebookEngagementTopWithIdOnly = await prisma.facebookEngagementTop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacebookEngagementTopUpdateManyAndReturnArgs>(args: SelectSubset<T, FacebookEngagementTopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacebookEngagementTop.
     * @param {FacebookEngagementTopUpsertArgs} args - Arguments to update or create a FacebookEngagementTop.
     * @example
     * // Update or create a FacebookEngagementTop
     * const facebookEngagementTop = await prisma.facebookEngagementTop.upsert({
     *   create: {
     *     // ... data to create a FacebookEngagementTop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacebookEngagementTop we want to update
     *   }
     * })
     */
    upsert<T extends FacebookEngagementTopUpsertArgs>(args: SelectSubset<T, FacebookEngagementTopUpsertArgs<ExtArgs>>): Prisma__FacebookEngagementTopClient<$Result.GetResult<Prisma.$FacebookEngagementTopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacebookEngagementTops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementTopCountArgs} args - Arguments to filter FacebookEngagementTops to count.
     * @example
     * // Count the number of FacebookEngagementTops
     * const count = await prisma.facebookEngagementTop.count({
     *   where: {
     *     // ... the filter for the FacebookEngagementTops we want to count
     *   }
     * })
    **/
    count<T extends FacebookEngagementTopCountArgs>(
      args?: Subset<T, FacebookEngagementTopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacebookEngagementTopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacebookEngagementTop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementTopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacebookEngagementTopAggregateArgs>(args: Subset<T, FacebookEngagementTopAggregateArgs>): Prisma.PrismaPromise<GetFacebookEngagementTopAggregateType<T>>

    /**
     * Group by FacebookEngagementTop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementTopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacebookEngagementTopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacebookEngagementTopGroupByArgs['orderBy'] }
        : { orderBy?: FacebookEngagementTopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacebookEngagementTopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacebookEngagementTopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacebookEngagementTop model
   */
  readonly fields: FacebookEngagementTopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacebookEngagementTop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacebookEngagementTopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends FacebookEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacebookEventDefaultArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FacebookEngagementTop model
   */
  interface FacebookEngagementTopFieldRefs {
    readonly id: FieldRef<"FacebookEngagementTop", 'Int'>
    readonly actionTime: FieldRef<"FacebookEngagementTop", 'DateTime'>
    readonly referrer: FieldRef<"FacebookEngagementTop", 'Referrer'>
    readonly videoId: FieldRef<"FacebookEngagementTop", 'String'>
    readonly facebookEventId: FieldRef<"FacebookEngagementTop", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FacebookEngagementTop findUnique
   */
  export type FacebookEngagementTopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementTop to fetch.
     */
    where: FacebookEngagementTopWhereUniqueInput
  }

  /**
   * FacebookEngagementTop findUniqueOrThrow
   */
  export type FacebookEngagementTopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementTop to fetch.
     */
    where: FacebookEngagementTopWhereUniqueInput
  }

  /**
   * FacebookEngagementTop findFirst
   */
  export type FacebookEngagementTopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementTop to fetch.
     */
    where?: FacebookEngagementTopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagementTops to fetch.
     */
    orderBy?: FacebookEngagementTopOrderByWithRelationInput | FacebookEngagementTopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookEngagementTops.
     */
    cursor?: FacebookEngagementTopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagementTops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagementTops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookEngagementTops.
     */
    distinct?: FacebookEngagementTopScalarFieldEnum | FacebookEngagementTopScalarFieldEnum[]
  }

  /**
   * FacebookEngagementTop findFirstOrThrow
   */
  export type FacebookEngagementTopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementTop to fetch.
     */
    where?: FacebookEngagementTopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagementTops to fetch.
     */
    orderBy?: FacebookEngagementTopOrderByWithRelationInput | FacebookEngagementTopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookEngagementTops.
     */
    cursor?: FacebookEngagementTopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagementTops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagementTops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookEngagementTops.
     */
    distinct?: FacebookEngagementTopScalarFieldEnum | FacebookEngagementTopScalarFieldEnum[]
  }

  /**
   * FacebookEngagementTop findMany
   */
  export type FacebookEngagementTopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementTops to fetch.
     */
    where?: FacebookEngagementTopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagementTops to fetch.
     */
    orderBy?: FacebookEngagementTopOrderByWithRelationInput | FacebookEngagementTopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacebookEngagementTops.
     */
    cursor?: FacebookEngagementTopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagementTops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagementTops.
     */
    skip?: number
    distinct?: FacebookEngagementTopScalarFieldEnum | FacebookEngagementTopScalarFieldEnum[]
  }

  /**
   * FacebookEngagementTop create
   */
  export type FacebookEngagementTopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * The data needed to create a FacebookEngagementTop.
     */
    data: XOR<FacebookEngagementTopCreateInput, FacebookEngagementTopUncheckedCreateInput>
  }

  /**
   * FacebookEngagementTop createMany
   */
  export type FacebookEngagementTopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacebookEngagementTops.
     */
    data: FacebookEngagementTopCreateManyInput | FacebookEngagementTopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacebookEngagementTop createManyAndReturn
   */
  export type FacebookEngagementTopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * The data used to create many FacebookEngagementTops.
     */
    data: FacebookEngagementTopCreateManyInput | FacebookEngagementTopCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacebookEngagementTop update
   */
  export type FacebookEngagementTopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * The data needed to update a FacebookEngagementTop.
     */
    data: XOR<FacebookEngagementTopUpdateInput, FacebookEngagementTopUncheckedUpdateInput>
    /**
     * Choose, which FacebookEngagementTop to update.
     */
    where: FacebookEngagementTopWhereUniqueInput
  }

  /**
   * FacebookEngagementTop updateMany
   */
  export type FacebookEngagementTopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacebookEngagementTops.
     */
    data: XOR<FacebookEngagementTopUpdateManyMutationInput, FacebookEngagementTopUncheckedUpdateManyInput>
    /**
     * Filter which FacebookEngagementTops to update
     */
    where?: FacebookEngagementTopWhereInput
    /**
     * Limit how many FacebookEngagementTops to update.
     */
    limit?: number
  }

  /**
   * FacebookEngagementTop updateManyAndReturn
   */
  export type FacebookEngagementTopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * The data used to update FacebookEngagementTops.
     */
    data: XOR<FacebookEngagementTopUpdateManyMutationInput, FacebookEngagementTopUncheckedUpdateManyInput>
    /**
     * Filter which FacebookEngagementTops to update
     */
    where?: FacebookEngagementTopWhereInput
    /**
     * Limit how many FacebookEngagementTops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacebookEngagementTop upsert
   */
  export type FacebookEngagementTopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * The filter to search for the FacebookEngagementTop to update in case it exists.
     */
    where: FacebookEngagementTopWhereUniqueInput
    /**
     * In case the FacebookEngagementTop found by the `where` argument doesn't exist, create a new FacebookEngagementTop with this data.
     */
    create: XOR<FacebookEngagementTopCreateInput, FacebookEngagementTopUncheckedCreateInput>
    /**
     * In case the FacebookEngagementTop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacebookEngagementTopUpdateInput, FacebookEngagementTopUncheckedUpdateInput>
  }

  /**
   * FacebookEngagementTop delete
   */
  export type FacebookEngagementTopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
    /**
     * Filter which FacebookEngagementTop to delete.
     */
    where: FacebookEngagementTopWhereUniqueInput
  }

  /**
   * FacebookEngagementTop deleteMany
   */
  export type FacebookEngagementTopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookEngagementTops to delete
     */
    where?: FacebookEngagementTopWhereInput
    /**
     * Limit how many FacebookEngagementTops to delete.
     */
    limit?: number
  }

  /**
   * FacebookEngagementTop without action
   */
  export type FacebookEngagementTopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementTop
     */
    select?: FacebookEngagementTopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementTop
     */
    omit?: FacebookEngagementTopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementTopInclude<ExtArgs> | null
  }


  /**
   * Model FacebookEngagementBottom
   */

  export type AggregateFacebookEngagementBottom = {
    _count: FacebookEngagementBottomCountAggregateOutputType | null
    _avg: FacebookEngagementBottomAvgAggregateOutputType | null
    _sum: FacebookEngagementBottomSumAggregateOutputType | null
    _min: FacebookEngagementBottomMinAggregateOutputType | null
    _max: FacebookEngagementBottomMaxAggregateOutputType | null
  }

  export type FacebookEngagementBottomAvgAggregateOutputType = {
    id: number | null
  }

  export type FacebookEngagementBottomSumAggregateOutputType = {
    id: number | null
  }

  export type FacebookEngagementBottomMinAggregateOutputType = {
    id: number | null
    adId: string | null
    campaignId: string | null
    clickPosition: $Enums.ClickPosition | null
    device: $Enums.Device | null
    browser: $Enums.Browser | null
    purchaseAmount: string | null
    facebookEventId: string | null
  }

  export type FacebookEngagementBottomMaxAggregateOutputType = {
    id: number | null
    adId: string | null
    campaignId: string | null
    clickPosition: $Enums.ClickPosition | null
    device: $Enums.Device | null
    browser: $Enums.Browser | null
    purchaseAmount: string | null
    facebookEventId: string | null
  }

  export type FacebookEngagementBottomCountAggregateOutputType = {
    id: number
    adId: number
    campaignId: number
    clickPosition: number
    device: number
    browser: number
    purchaseAmount: number
    facebookEventId: number
    _all: number
  }


  export type FacebookEngagementBottomAvgAggregateInputType = {
    id?: true
  }

  export type FacebookEngagementBottomSumAggregateInputType = {
    id?: true
  }

  export type FacebookEngagementBottomMinAggregateInputType = {
    id?: true
    adId?: true
    campaignId?: true
    clickPosition?: true
    device?: true
    browser?: true
    purchaseAmount?: true
    facebookEventId?: true
  }

  export type FacebookEngagementBottomMaxAggregateInputType = {
    id?: true
    adId?: true
    campaignId?: true
    clickPosition?: true
    device?: true
    browser?: true
    purchaseAmount?: true
    facebookEventId?: true
  }

  export type FacebookEngagementBottomCountAggregateInputType = {
    id?: true
    adId?: true
    campaignId?: true
    clickPosition?: true
    device?: true
    browser?: true
    purchaseAmount?: true
    facebookEventId?: true
    _all?: true
  }

  export type FacebookEngagementBottomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookEngagementBottom to aggregate.
     */
    where?: FacebookEngagementBottomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagementBottoms to fetch.
     */
    orderBy?: FacebookEngagementBottomOrderByWithRelationInput | FacebookEngagementBottomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacebookEngagementBottomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagementBottoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagementBottoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacebookEngagementBottoms
    **/
    _count?: true | FacebookEngagementBottomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacebookEngagementBottomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacebookEngagementBottomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacebookEngagementBottomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacebookEngagementBottomMaxAggregateInputType
  }

  export type GetFacebookEngagementBottomAggregateType<T extends FacebookEngagementBottomAggregateArgs> = {
        [P in keyof T & keyof AggregateFacebookEngagementBottom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacebookEngagementBottom[P]>
      : GetScalarType<T[P], AggregateFacebookEngagementBottom[P]>
  }




  export type FacebookEngagementBottomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacebookEngagementBottomWhereInput
    orderBy?: FacebookEngagementBottomOrderByWithAggregationInput | FacebookEngagementBottomOrderByWithAggregationInput[]
    by: FacebookEngagementBottomScalarFieldEnum[] | FacebookEngagementBottomScalarFieldEnum
    having?: FacebookEngagementBottomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacebookEngagementBottomCountAggregateInputType | true
    _avg?: FacebookEngagementBottomAvgAggregateInputType
    _sum?: FacebookEngagementBottomSumAggregateInputType
    _min?: FacebookEngagementBottomMinAggregateInputType
    _max?: FacebookEngagementBottomMaxAggregateInputType
  }

  export type FacebookEngagementBottomGroupByOutputType = {
    id: number
    adId: string
    campaignId: string
    clickPosition: $Enums.ClickPosition
    device: $Enums.Device
    browser: $Enums.Browser
    purchaseAmount: string | null
    facebookEventId: string
    _count: FacebookEngagementBottomCountAggregateOutputType | null
    _avg: FacebookEngagementBottomAvgAggregateOutputType | null
    _sum: FacebookEngagementBottomSumAggregateOutputType | null
    _min: FacebookEngagementBottomMinAggregateOutputType | null
    _max: FacebookEngagementBottomMaxAggregateOutputType | null
  }

  type GetFacebookEngagementBottomGroupByPayload<T extends FacebookEngagementBottomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacebookEngagementBottomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacebookEngagementBottomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacebookEngagementBottomGroupByOutputType[P]>
            : GetScalarType<T[P], FacebookEngagementBottomGroupByOutputType[P]>
        }
      >
    >


  export type FacebookEngagementBottomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adId?: boolean
    campaignId?: boolean
    clickPosition?: boolean
    device?: boolean
    browser?: boolean
    purchaseAmount?: boolean
    facebookEventId?: boolean
    event?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookEngagementBottom"]>

  export type FacebookEngagementBottomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adId?: boolean
    campaignId?: boolean
    clickPosition?: boolean
    device?: boolean
    browser?: boolean
    purchaseAmount?: boolean
    facebookEventId?: boolean
    event?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookEngagementBottom"]>

  export type FacebookEngagementBottomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adId?: boolean
    campaignId?: boolean
    clickPosition?: boolean
    device?: boolean
    browser?: boolean
    purchaseAmount?: boolean
    facebookEventId?: boolean
    event?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facebookEngagementBottom"]>

  export type FacebookEngagementBottomSelectScalar = {
    id?: boolean
    adId?: boolean
    campaignId?: boolean
    clickPosition?: boolean
    device?: boolean
    browser?: boolean
    purchaseAmount?: boolean
    facebookEventId?: boolean
  }

  export type FacebookEngagementBottomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adId" | "campaignId" | "clickPosition" | "device" | "browser" | "purchaseAmount" | "facebookEventId", ExtArgs["result"]["facebookEngagementBottom"]>
  export type FacebookEngagementBottomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }
  export type FacebookEngagementBottomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }
  export type FacebookEngagementBottomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | FacebookEventDefaultArgs<ExtArgs>
  }

  export type $FacebookEngagementBottomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacebookEngagementBottom"
    objects: {
      event: Prisma.$FacebookEventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      adId: string
      campaignId: string
      clickPosition: $Enums.ClickPosition
      device: $Enums.Device
      browser: $Enums.Browser
      purchaseAmount: string | null
      facebookEventId: string
    }, ExtArgs["result"]["facebookEngagementBottom"]>
    composites: {}
  }

  type FacebookEngagementBottomGetPayload<S extends boolean | null | undefined | FacebookEngagementBottomDefaultArgs> = $Result.GetResult<Prisma.$FacebookEngagementBottomPayload, S>

  type FacebookEngagementBottomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacebookEngagementBottomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacebookEngagementBottomCountAggregateInputType | true
    }

  export interface FacebookEngagementBottomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacebookEngagementBottom'], meta: { name: 'FacebookEngagementBottom' } }
    /**
     * Find zero or one FacebookEngagementBottom that matches the filter.
     * @param {FacebookEngagementBottomFindUniqueArgs} args - Arguments to find a FacebookEngagementBottom
     * @example
     * // Get one FacebookEngagementBottom
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacebookEngagementBottomFindUniqueArgs>(args: SelectSubset<T, FacebookEngagementBottomFindUniqueArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacebookEngagementBottom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacebookEngagementBottomFindUniqueOrThrowArgs} args - Arguments to find a FacebookEngagementBottom
     * @example
     * // Get one FacebookEngagementBottom
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacebookEngagementBottomFindUniqueOrThrowArgs>(args: SelectSubset<T, FacebookEngagementBottomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookEngagementBottom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementBottomFindFirstArgs} args - Arguments to find a FacebookEngagementBottom
     * @example
     * // Get one FacebookEngagementBottom
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacebookEngagementBottomFindFirstArgs>(args?: SelectSubset<T, FacebookEngagementBottomFindFirstArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookEngagementBottom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementBottomFindFirstOrThrowArgs} args - Arguments to find a FacebookEngagementBottom
     * @example
     * // Get one FacebookEngagementBottom
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacebookEngagementBottomFindFirstOrThrowArgs>(args?: SelectSubset<T, FacebookEngagementBottomFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacebookEngagementBottoms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementBottomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacebookEngagementBottoms
     * const facebookEngagementBottoms = await prisma.facebookEngagementBottom.findMany()
     * 
     * // Get first 10 FacebookEngagementBottoms
     * const facebookEngagementBottoms = await prisma.facebookEngagementBottom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facebookEngagementBottomWithIdOnly = await prisma.facebookEngagementBottom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacebookEngagementBottomFindManyArgs>(args?: SelectSubset<T, FacebookEngagementBottomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacebookEngagementBottom.
     * @param {FacebookEngagementBottomCreateArgs} args - Arguments to create a FacebookEngagementBottom.
     * @example
     * // Create one FacebookEngagementBottom
     * const FacebookEngagementBottom = await prisma.facebookEngagementBottom.create({
     *   data: {
     *     // ... data to create a FacebookEngagementBottom
     *   }
     * })
     * 
     */
    create<T extends FacebookEngagementBottomCreateArgs>(args: SelectSubset<T, FacebookEngagementBottomCreateArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacebookEngagementBottoms.
     * @param {FacebookEngagementBottomCreateManyArgs} args - Arguments to create many FacebookEngagementBottoms.
     * @example
     * // Create many FacebookEngagementBottoms
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacebookEngagementBottomCreateManyArgs>(args?: SelectSubset<T, FacebookEngagementBottomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacebookEngagementBottoms and returns the data saved in the database.
     * @param {FacebookEngagementBottomCreateManyAndReturnArgs} args - Arguments to create many FacebookEngagementBottoms.
     * @example
     * // Create many FacebookEngagementBottoms
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacebookEngagementBottoms and only return the `id`
     * const facebookEngagementBottomWithIdOnly = await prisma.facebookEngagementBottom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacebookEngagementBottomCreateManyAndReturnArgs>(args?: SelectSubset<T, FacebookEngagementBottomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacebookEngagementBottom.
     * @param {FacebookEngagementBottomDeleteArgs} args - Arguments to delete one FacebookEngagementBottom.
     * @example
     * // Delete one FacebookEngagementBottom
     * const FacebookEngagementBottom = await prisma.facebookEngagementBottom.delete({
     *   where: {
     *     // ... filter to delete one FacebookEngagementBottom
     *   }
     * })
     * 
     */
    delete<T extends FacebookEngagementBottomDeleteArgs>(args: SelectSubset<T, FacebookEngagementBottomDeleteArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacebookEngagementBottom.
     * @param {FacebookEngagementBottomUpdateArgs} args - Arguments to update one FacebookEngagementBottom.
     * @example
     * // Update one FacebookEngagementBottom
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacebookEngagementBottomUpdateArgs>(args: SelectSubset<T, FacebookEngagementBottomUpdateArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacebookEngagementBottoms.
     * @param {FacebookEngagementBottomDeleteManyArgs} args - Arguments to filter FacebookEngagementBottoms to delete.
     * @example
     * // Delete a few FacebookEngagementBottoms
     * const { count } = await prisma.facebookEngagementBottom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacebookEngagementBottomDeleteManyArgs>(args?: SelectSubset<T, FacebookEngagementBottomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookEngagementBottoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementBottomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacebookEngagementBottoms
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacebookEngagementBottomUpdateManyArgs>(args: SelectSubset<T, FacebookEngagementBottomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookEngagementBottoms and returns the data updated in the database.
     * @param {FacebookEngagementBottomUpdateManyAndReturnArgs} args - Arguments to update many FacebookEngagementBottoms.
     * @example
     * // Update many FacebookEngagementBottoms
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacebookEngagementBottoms and only return the `id`
     * const facebookEngagementBottomWithIdOnly = await prisma.facebookEngagementBottom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacebookEngagementBottomUpdateManyAndReturnArgs>(args: SelectSubset<T, FacebookEngagementBottomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacebookEngagementBottom.
     * @param {FacebookEngagementBottomUpsertArgs} args - Arguments to update or create a FacebookEngagementBottom.
     * @example
     * // Update or create a FacebookEngagementBottom
     * const facebookEngagementBottom = await prisma.facebookEngagementBottom.upsert({
     *   create: {
     *     // ... data to create a FacebookEngagementBottom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacebookEngagementBottom we want to update
     *   }
     * })
     */
    upsert<T extends FacebookEngagementBottomUpsertArgs>(args: SelectSubset<T, FacebookEngagementBottomUpsertArgs<ExtArgs>>): Prisma__FacebookEngagementBottomClient<$Result.GetResult<Prisma.$FacebookEngagementBottomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacebookEngagementBottoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementBottomCountArgs} args - Arguments to filter FacebookEngagementBottoms to count.
     * @example
     * // Count the number of FacebookEngagementBottoms
     * const count = await prisma.facebookEngagementBottom.count({
     *   where: {
     *     // ... the filter for the FacebookEngagementBottoms we want to count
     *   }
     * })
    **/
    count<T extends FacebookEngagementBottomCountArgs>(
      args?: Subset<T, FacebookEngagementBottomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacebookEngagementBottomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacebookEngagementBottom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementBottomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacebookEngagementBottomAggregateArgs>(args: Subset<T, FacebookEngagementBottomAggregateArgs>): Prisma.PrismaPromise<GetFacebookEngagementBottomAggregateType<T>>

    /**
     * Group by FacebookEngagementBottom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementBottomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacebookEngagementBottomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacebookEngagementBottomGroupByArgs['orderBy'] }
        : { orderBy?: FacebookEngagementBottomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacebookEngagementBottomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacebookEngagementBottomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacebookEngagementBottom model
   */
  readonly fields: FacebookEngagementBottomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacebookEngagementBottom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacebookEngagementBottomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends FacebookEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacebookEventDefaultArgs<ExtArgs>>): Prisma__FacebookEventClient<$Result.GetResult<Prisma.$FacebookEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FacebookEngagementBottom model
   */
  interface FacebookEngagementBottomFieldRefs {
    readonly id: FieldRef<"FacebookEngagementBottom", 'Int'>
    readonly adId: FieldRef<"FacebookEngagementBottom", 'String'>
    readonly campaignId: FieldRef<"FacebookEngagementBottom", 'String'>
    readonly clickPosition: FieldRef<"FacebookEngagementBottom", 'ClickPosition'>
    readonly device: FieldRef<"FacebookEngagementBottom", 'Device'>
    readonly browser: FieldRef<"FacebookEngagementBottom", 'Browser'>
    readonly purchaseAmount: FieldRef<"FacebookEngagementBottom", 'String'>
    readonly facebookEventId: FieldRef<"FacebookEngagementBottom", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FacebookEngagementBottom findUnique
   */
  export type FacebookEngagementBottomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementBottom to fetch.
     */
    where: FacebookEngagementBottomWhereUniqueInput
  }

  /**
   * FacebookEngagementBottom findUniqueOrThrow
   */
  export type FacebookEngagementBottomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementBottom to fetch.
     */
    where: FacebookEngagementBottomWhereUniqueInput
  }

  /**
   * FacebookEngagementBottom findFirst
   */
  export type FacebookEngagementBottomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementBottom to fetch.
     */
    where?: FacebookEngagementBottomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagementBottoms to fetch.
     */
    orderBy?: FacebookEngagementBottomOrderByWithRelationInput | FacebookEngagementBottomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookEngagementBottoms.
     */
    cursor?: FacebookEngagementBottomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagementBottoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagementBottoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookEngagementBottoms.
     */
    distinct?: FacebookEngagementBottomScalarFieldEnum | FacebookEngagementBottomScalarFieldEnum[]
  }

  /**
   * FacebookEngagementBottom findFirstOrThrow
   */
  export type FacebookEngagementBottomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementBottom to fetch.
     */
    where?: FacebookEngagementBottomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagementBottoms to fetch.
     */
    orderBy?: FacebookEngagementBottomOrderByWithRelationInput | FacebookEngagementBottomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookEngagementBottoms.
     */
    cursor?: FacebookEngagementBottomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagementBottoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagementBottoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookEngagementBottoms.
     */
    distinct?: FacebookEngagementBottomScalarFieldEnum | FacebookEngagementBottomScalarFieldEnum[]
  }

  /**
   * FacebookEngagementBottom findMany
   */
  export type FacebookEngagementBottomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagementBottoms to fetch.
     */
    where?: FacebookEngagementBottomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagementBottoms to fetch.
     */
    orderBy?: FacebookEngagementBottomOrderByWithRelationInput | FacebookEngagementBottomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacebookEngagementBottoms.
     */
    cursor?: FacebookEngagementBottomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagementBottoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagementBottoms.
     */
    skip?: number
    distinct?: FacebookEngagementBottomScalarFieldEnum | FacebookEngagementBottomScalarFieldEnum[]
  }

  /**
   * FacebookEngagementBottom create
   */
  export type FacebookEngagementBottomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * The data needed to create a FacebookEngagementBottom.
     */
    data: XOR<FacebookEngagementBottomCreateInput, FacebookEngagementBottomUncheckedCreateInput>
  }

  /**
   * FacebookEngagementBottom createMany
   */
  export type FacebookEngagementBottomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacebookEngagementBottoms.
     */
    data: FacebookEngagementBottomCreateManyInput | FacebookEngagementBottomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacebookEngagementBottom createManyAndReturn
   */
  export type FacebookEngagementBottomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * The data used to create many FacebookEngagementBottoms.
     */
    data: FacebookEngagementBottomCreateManyInput | FacebookEngagementBottomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacebookEngagementBottom update
   */
  export type FacebookEngagementBottomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * The data needed to update a FacebookEngagementBottom.
     */
    data: XOR<FacebookEngagementBottomUpdateInput, FacebookEngagementBottomUncheckedUpdateInput>
    /**
     * Choose, which FacebookEngagementBottom to update.
     */
    where: FacebookEngagementBottomWhereUniqueInput
  }

  /**
   * FacebookEngagementBottom updateMany
   */
  export type FacebookEngagementBottomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacebookEngagementBottoms.
     */
    data: XOR<FacebookEngagementBottomUpdateManyMutationInput, FacebookEngagementBottomUncheckedUpdateManyInput>
    /**
     * Filter which FacebookEngagementBottoms to update
     */
    where?: FacebookEngagementBottomWhereInput
    /**
     * Limit how many FacebookEngagementBottoms to update.
     */
    limit?: number
  }

  /**
   * FacebookEngagementBottom updateManyAndReturn
   */
  export type FacebookEngagementBottomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * The data used to update FacebookEngagementBottoms.
     */
    data: XOR<FacebookEngagementBottomUpdateManyMutationInput, FacebookEngagementBottomUncheckedUpdateManyInput>
    /**
     * Filter which FacebookEngagementBottoms to update
     */
    where?: FacebookEngagementBottomWhereInput
    /**
     * Limit how many FacebookEngagementBottoms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacebookEngagementBottom upsert
   */
  export type FacebookEngagementBottomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * The filter to search for the FacebookEngagementBottom to update in case it exists.
     */
    where: FacebookEngagementBottomWhereUniqueInput
    /**
     * In case the FacebookEngagementBottom found by the `where` argument doesn't exist, create a new FacebookEngagementBottom with this data.
     */
    create: XOR<FacebookEngagementBottomCreateInput, FacebookEngagementBottomUncheckedCreateInput>
    /**
     * In case the FacebookEngagementBottom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacebookEngagementBottomUpdateInput, FacebookEngagementBottomUncheckedUpdateInput>
  }

  /**
   * FacebookEngagementBottom delete
   */
  export type FacebookEngagementBottomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
    /**
     * Filter which FacebookEngagementBottom to delete.
     */
    where: FacebookEngagementBottomWhereUniqueInput
  }

  /**
   * FacebookEngagementBottom deleteMany
   */
  export type FacebookEngagementBottomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookEngagementBottoms to delete
     */
    where?: FacebookEngagementBottomWhereInput
    /**
     * Limit how many FacebookEngagementBottoms to delete.
     */
    limit?: number
  }

  /**
   * FacebookEngagementBottom without action
   */
  export type FacebookEngagementBottomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagementBottom
     */
    select?: FacebookEngagementBottomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagementBottom
     */
    omit?: FacebookEngagementBottomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementBottomInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FacebookEventScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    source: 'source',
    funnelStage: 'funnelStage',
    eventType: 'eventType',
    userId: 'userId',
    userName: 'userName',
    userAge: 'userAge',
    userGender: 'userGender',
    userCountry: 'userCountry',
    userCity: 'userCity'
  };

  export type FacebookEventScalarFieldEnum = (typeof FacebookEventScalarFieldEnum)[keyof typeof FacebookEventScalarFieldEnum]


  export const FacebookEngagementTopScalarFieldEnum: {
    id: 'id',
    actionTime: 'actionTime',
    referrer: 'referrer',
    videoId: 'videoId',
    facebookEventId: 'facebookEventId'
  };

  export type FacebookEngagementTopScalarFieldEnum = (typeof FacebookEngagementTopScalarFieldEnum)[keyof typeof FacebookEngagementTopScalarFieldEnum]


  export const FacebookEngagementBottomScalarFieldEnum: {
    id: 'id',
    adId: 'adId',
    campaignId: 'campaignId',
    clickPosition: 'clickPosition',
    device: 'device',
    browser: 'browser',
    purchaseAmount: 'purchaseAmount',
    facebookEventId: 'facebookEventId'
  };

  export type FacebookEngagementBottomScalarFieldEnum = (typeof FacebookEngagementBottomScalarFieldEnum)[keyof typeof FacebookEngagementBottomScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'FunnelStage'
   */
  export type EnumFunnelStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FunnelStage'>
    


  /**
   * Reference to a field of type 'FunnelStage[]'
   */
  export type ListEnumFunnelStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FunnelStage[]'>
    


  /**
   * Reference to a field of type 'FacebookEventType'
   */
  export type EnumFacebookEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FacebookEventType'>
    


  /**
   * Reference to a field of type 'FacebookEventType[]'
   */
  export type ListEnumFacebookEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FacebookEventType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Referrer'
   */
  export type EnumReferrerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Referrer'>
    


  /**
   * Reference to a field of type 'Referrer[]'
   */
  export type ListEnumReferrerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Referrer[]'>
    


  /**
   * Reference to a field of type 'ClickPosition'
   */
  export type EnumClickPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClickPosition'>
    


  /**
   * Reference to a field of type 'ClickPosition[]'
   */
  export type ListEnumClickPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClickPosition[]'>
    


  /**
   * Reference to a field of type 'Device'
   */
  export type EnumDeviceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Device'>
    


  /**
   * Reference to a field of type 'Device[]'
   */
  export type ListEnumDeviceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Device[]'>
    


  /**
   * Reference to a field of type 'Browser'
   */
  export type EnumBrowserFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Browser'>
    


  /**
   * Reference to a field of type 'Browser[]'
   */
  export type ListEnumBrowserFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Browser[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FacebookEventWhereInput = {
    AND?: FacebookEventWhereInput | FacebookEventWhereInput[]
    OR?: FacebookEventWhereInput[]
    NOT?: FacebookEventWhereInput | FacebookEventWhereInput[]
    id?: StringFilter<"FacebookEvent"> | string
    timestamp?: DateTimeFilter<"FacebookEvent"> | Date | string
    source?: StringFilter<"FacebookEvent"> | string
    funnelStage?: EnumFunnelStageFilter<"FacebookEvent"> | $Enums.FunnelStage
    eventType?: EnumFacebookEventTypeFilter<"FacebookEvent"> | $Enums.FacebookEventType
    userId?: StringFilter<"FacebookEvent"> | string
    userName?: StringFilter<"FacebookEvent"> | string
    userAge?: IntFilter<"FacebookEvent"> | number
    userGender?: EnumGenderFilter<"FacebookEvent"> | $Enums.Gender
    userCountry?: StringFilter<"FacebookEvent"> | string
    userCity?: StringFilter<"FacebookEvent"> | string
    engagementTop?: XOR<FacebookEngagementTopNullableScalarRelationFilter, FacebookEngagementTopWhereInput> | null
    engagementBottom?: XOR<FacebookEngagementBottomNullableScalarRelationFilter, FacebookEngagementBottomWhereInput> | null
  }

  export type FacebookEventOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userAge?: SortOrder
    userGender?: SortOrder
    userCountry?: SortOrder
    userCity?: SortOrder
    engagementTop?: FacebookEngagementTopOrderByWithRelationInput
    engagementBottom?: FacebookEngagementBottomOrderByWithRelationInput
  }

  export type FacebookEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacebookEventWhereInput | FacebookEventWhereInput[]
    OR?: FacebookEventWhereInput[]
    NOT?: FacebookEventWhereInput | FacebookEventWhereInput[]
    timestamp?: DateTimeFilter<"FacebookEvent"> | Date | string
    source?: StringFilter<"FacebookEvent"> | string
    funnelStage?: EnumFunnelStageFilter<"FacebookEvent"> | $Enums.FunnelStage
    eventType?: EnumFacebookEventTypeFilter<"FacebookEvent"> | $Enums.FacebookEventType
    userId?: StringFilter<"FacebookEvent"> | string
    userName?: StringFilter<"FacebookEvent"> | string
    userAge?: IntFilter<"FacebookEvent"> | number
    userGender?: EnumGenderFilter<"FacebookEvent"> | $Enums.Gender
    userCountry?: StringFilter<"FacebookEvent"> | string
    userCity?: StringFilter<"FacebookEvent"> | string
    engagementTop?: XOR<FacebookEngagementTopNullableScalarRelationFilter, FacebookEngagementTopWhereInput> | null
    engagementBottom?: XOR<FacebookEngagementBottomNullableScalarRelationFilter, FacebookEngagementBottomWhereInput> | null
  }, "id">

  export type FacebookEventOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userAge?: SortOrder
    userGender?: SortOrder
    userCountry?: SortOrder
    userCity?: SortOrder
    _count?: FacebookEventCountOrderByAggregateInput
    _avg?: FacebookEventAvgOrderByAggregateInput
    _max?: FacebookEventMaxOrderByAggregateInput
    _min?: FacebookEventMinOrderByAggregateInput
    _sum?: FacebookEventSumOrderByAggregateInput
  }

  export type FacebookEventScalarWhereWithAggregatesInput = {
    AND?: FacebookEventScalarWhereWithAggregatesInput | FacebookEventScalarWhereWithAggregatesInput[]
    OR?: FacebookEventScalarWhereWithAggregatesInput[]
    NOT?: FacebookEventScalarWhereWithAggregatesInput | FacebookEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacebookEvent"> | string
    timestamp?: DateTimeWithAggregatesFilter<"FacebookEvent"> | Date | string
    source?: StringWithAggregatesFilter<"FacebookEvent"> | string
    funnelStage?: EnumFunnelStageWithAggregatesFilter<"FacebookEvent"> | $Enums.FunnelStage
    eventType?: EnumFacebookEventTypeWithAggregatesFilter<"FacebookEvent"> | $Enums.FacebookEventType
    userId?: StringWithAggregatesFilter<"FacebookEvent"> | string
    userName?: StringWithAggregatesFilter<"FacebookEvent"> | string
    userAge?: IntWithAggregatesFilter<"FacebookEvent"> | number
    userGender?: EnumGenderWithAggregatesFilter<"FacebookEvent"> | $Enums.Gender
    userCountry?: StringWithAggregatesFilter<"FacebookEvent"> | string
    userCity?: StringWithAggregatesFilter<"FacebookEvent"> | string
  }

  export type FacebookEngagementTopWhereInput = {
    AND?: FacebookEngagementTopWhereInput | FacebookEngagementTopWhereInput[]
    OR?: FacebookEngagementTopWhereInput[]
    NOT?: FacebookEngagementTopWhereInput | FacebookEngagementTopWhereInput[]
    id?: IntFilter<"FacebookEngagementTop"> | number
    actionTime?: DateTimeFilter<"FacebookEngagementTop"> | Date | string
    referrer?: EnumReferrerFilter<"FacebookEngagementTop"> | $Enums.Referrer
    videoId?: StringNullableFilter<"FacebookEngagementTop"> | string | null
    facebookEventId?: StringFilter<"FacebookEngagementTop"> | string
    event?: XOR<FacebookEventScalarRelationFilter, FacebookEventWhereInput>
  }

  export type FacebookEngagementTopOrderByWithRelationInput = {
    id?: SortOrder
    actionTime?: SortOrder
    referrer?: SortOrder
    videoId?: SortOrderInput | SortOrder
    facebookEventId?: SortOrder
    event?: FacebookEventOrderByWithRelationInput
  }

  export type FacebookEngagementTopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    facebookEventId?: string
    AND?: FacebookEngagementTopWhereInput | FacebookEngagementTopWhereInput[]
    OR?: FacebookEngagementTopWhereInput[]
    NOT?: FacebookEngagementTopWhereInput | FacebookEngagementTopWhereInput[]
    actionTime?: DateTimeFilter<"FacebookEngagementTop"> | Date | string
    referrer?: EnumReferrerFilter<"FacebookEngagementTop"> | $Enums.Referrer
    videoId?: StringNullableFilter<"FacebookEngagementTop"> | string | null
    event?: XOR<FacebookEventScalarRelationFilter, FacebookEventWhereInput>
  }, "id" | "facebookEventId">

  export type FacebookEngagementTopOrderByWithAggregationInput = {
    id?: SortOrder
    actionTime?: SortOrder
    referrer?: SortOrder
    videoId?: SortOrderInput | SortOrder
    facebookEventId?: SortOrder
    _count?: FacebookEngagementTopCountOrderByAggregateInput
    _avg?: FacebookEngagementTopAvgOrderByAggregateInput
    _max?: FacebookEngagementTopMaxOrderByAggregateInput
    _min?: FacebookEngagementTopMinOrderByAggregateInput
    _sum?: FacebookEngagementTopSumOrderByAggregateInput
  }

  export type FacebookEngagementTopScalarWhereWithAggregatesInput = {
    AND?: FacebookEngagementTopScalarWhereWithAggregatesInput | FacebookEngagementTopScalarWhereWithAggregatesInput[]
    OR?: FacebookEngagementTopScalarWhereWithAggregatesInput[]
    NOT?: FacebookEngagementTopScalarWhereWithAggregatesInput | FacebookEngagementTopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FacebookEngagementTop"> | number
    actionTime?: DateTimeWithAggregatesFilter<"FacebookEngagementTop"> | Date | string
    referrer?: EnumReferrerWithAggregatesFilter<"FacebookEngagementTop"> | $Enums.Referrer
    videoId?: StringNullableWithAggregatesFilter<"FacebookEngagementTop"> | string | null
    facebookEventId?: StringWithAggregatesFilter<"FacebookEngagementTop"> | string
  }

  export type FacebookEngagementBottomWhereInput = {
    AND?: FacebookEngagementBottomWhereInput | FacebookEngagementBottomWhereInput[]
    OR?: FacebookEngagementBottomWhereInput[]
    NOT?: FacebookEngagementBottomWhereInput | FacebookEngagementBottomWhereInput[]
    id?: IntFilter<"FacebookEngagementBottom"> | number
    adId?: StringFilter<"FacebookEngagementBottom"> | string
    campaignId?: StringFilter<"FacebookEngagementBottom"> | string
    clickPosition?: EnumClickPositionFilter<"FacebookEngagementBottom"> | $Enums.ClickPosition
    device?: EnumDeviceFilter<"FacebookEngagementBottom"> | $Enums.Device
    browser?: EnumBrowserFilter<"FacebookEngagementBottom"> | $Enums.Browser
    purchaseAmount?: StringNullableFilter<"FacebookEngagementBottom"> | string | null
    facebookEventId?: StringFilter<"FacebookEngagementBottom"> | string
    event?: XOR<FacebookEventScalarRelationFilter, FacebookEventWhereInput>
  }

  export type FacebookEngagementBottomOrderByWithRelationInput = {
    id?: SortOrder
    adId?: SortOrder
    campaignId?: SortOrder
    clickPosition?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    purchaseAmount?: SortOrderInput | SortOrder
    facebookEventId?: SortOrder
    event?: FacebookEventOrderByWithRelationInput
  }

  export type FacebookEngagementBottomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    facebookEventId?: string
    AND?: FacebookEngagementBottomWhereInput | FacebookEngagementBottomWhereInput[]
    OR?: FacebookEngagementBottomWhereInput[]
    NOT?: FacebookEngagementBottomWhereInput | FacebookEngagementBottomWhereInput[]
    adId?: StringFilter<"FacebookEngagementBottom"> | string
    campaignId?: StringFilter<"FacebookEngagementBottom"> | string
    clickPosition?: EnumClickPositionFilter<"FacebookEngagementBottom"> | $Enums.ClickPosition
    device?: EnumDeviceFilter<"FacebookEngagementBottom"> | $Enums.Device
    browser?: EnumBrowserFilter<"FacebookEngagementBottom"> | $Enums.Browser
    purchaseAmount?: StringNullableFilter<"FacebookEngagementBottom"> | string | null
    event?: XOR<FacebookEventScalarRelationFilter, FacebookEventWhereInput>
  }, "id" | "facebookEventId">

  export type FacebookEngagementBottomOrderByWithAggregationInput = {
    id?: SortOrder
    adId?: SortOrder
    campaignId?: SortOrder
    clickPosition?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    purchaseAmount?: SortOrderInput | SortOrder
    facebookEventId?: SortOrder
    _count?: FacebookEngagementBottomCountOrderByAggregateInput
    _avg?: FacebookEngagementBottomAvgOrderByAggregateInput
    _max?: FacebookEngagementBottomMaxOrderByAggregateInput
    _min?: FacebookEngagementBottomMinOrderByAggregateInput
    _sum?: FacebookEngagementBottomSumOrderByAggregateInput
  }

  export type FacebookEngagementBottomScalarWhereWithAggregatesInput = {
    AND?: FacebookEngagementBottomScalarWhereWithAggregatesInput | FacebookEngagementBottomScalarWhereWithAggregatesInput[]
    OR?: FacebookEngagementBottomScalarWhereWithAggregatesInput[]
    NOT?: FacebookEngagementBottomScalarWhereWithAggregatesInput | FacebookEngagementBottomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FacebookEngagementBottom"> | number
    adId?: StringWithAggregatesFilter<"FacebookEngagementBottom"> | string
    campaignId?: StringWithAggregatesFilter<"FacebookEngagementBottom"> | string
    clickPosition?: EnumClickPositionWithAggregatesFilter<"FacebookEngagementBottom"> | $Enums.ClickPosition
    device?: EnumDeviceWithAggregatesFilter<"FacebookEngagementBottom"> | $Enums.Device
    browser?: EnumBrowserWithAggregatesFilter<"FacebookEngagementBottom"> | $Enums.Browser
    purchaseAmount?: StringNullableWithAggregatesFilter<"FacebookEngagementBottom"> | string | null
    facebookEventId?: StringWithAggregatesFilter<"FacebookEngagementBottom"> | string
  }

  export type FacebookEventCreateInput = {
    id?: string
    timestamp: Date | string
    source: string
    funnelStage: $Enums.FunnelStage
    eventType: $Enums.FacebookEventType
    userId: string
    userName: string
    userAge: number
    userGender: $Enums.Gender
    userCountry: string
    userCity: string
    engagementTop?: FacebookEngagementTopCreateNestedOneWithoutEventInput
    engagementBottom?: FacebookEngagementBottomCreateNestedOneWithoutEventInput
  }

  export type FacebookEventUncheckedCreateInput = {
    id?: string
    timestamp: Date | string
    source: string
    funnelStage: $Enums.FunnelStage
    eventType: $Enums.FacebookEventType
    userId: string
    userName: string
    userAge: number
    userGender: $Enums.Gender
    userCountry: string
    userCity: string
    engagementTop?: FacebookEngagementTopUncheckedCreateNestedOneWithoutEventInput
    engagementBottom?: FacebookEngagementBottomUncheckedCreateNestedOneWithoutEventInput
  }

  export type FacebookEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: EnumFacebookEventTypeFieldUpdateOperationsInput | $Enums.FacebookEventType
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAge?: IntFieldUpdateOperationsInput | number
    userGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    userCountry?: StringFieldUpdateOperationsInput | string
    userCity?: StringFieldUpdateOperationsInput | string
    engagementTop?: FacebookEngagementTopUpdateOneWithoutEventNestedInput
    engagementBottom?: FacebookEngagementBottomUpdateOneWithoutEventNestedInput
  }

  export type FacebookEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: EnumFacebookEventTypeFieldUpdateOperationsInput | $Enums.FacebookEventType
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAge?: IntFieldUpdateOperationsInput | number
    userGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    userCountry?: StringFieldUpdateOperationsInput | string
    userCity?: StringFieldUpdateOperationsInput | string
    engagementTop?: FacebookEngagementTopUncheckedUpdateOneWithoutEventNestedInput
    engagementBottom?: FacebookEngagementBottomUncheckedUpdateOneWithoutEventNestedInput
  }

  export type FacebookEventCreateManyInput = {
    id?: string
    timestamp: Date | string
    source: string
    funnelStage: $Enums.FunnelStage
    eventType: $Enums.FacebookEventType
    userId: string
    userName: string
    userAge: number
    userGender: $Enums.Gender
    userCountry: string
    userCity: string
  }

  export type FacebookEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: EnumFacebookEventTypeFieldUpdateOperationsInput | $Enums.FacebookEventType
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAge?: IntFieldUpdateOperationsInput | number
    userGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    userCountry?: StringFieldUpdateOperationsInput | string
    userCity?: StringFieldUpdateOperationsInput | string
  }

  export type FacebookEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: EnumFacebookEventTypeFieldUpdateOperationsInput | $Enums.FacebookEventType
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAge?: IntFieldUpdateOperationsInput | number
    userGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    userCountry?: StringFieldUpdateOperationsInput | string
    userCity?: StringFieldUpdateOperationsInput | string
  }

  export type FacebookEngagementTopCreateInput = {
    actionTime: Date | string
    referrer: $Enums.Referrer
    videoId?: string | null
    event: FacebookEventCreateNestedOneWithoutEngagementTopInput
  }

  export type FacebookEngagementTopUncheckedCreateInput = {
    id?: number
    actionTime: Date | string
    referrer: $Enums.Referrer
    videoId?: string | null
    facebookEventId: string
  }

  export type FacebookEngagementTopUpdateInput = {
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: EnumReferrerFieldUpdateOperationsInput | $Enums.Referrer
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    event?: FacebookEventUpdateOneRequiredWithoutEngagementTopNestedInput
  }

  export type FacebookEngagementTopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: EnumReferrerFieldUpdateOperationsInput | $Enums.Referrer
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookEventId?: StringFieldUpdateOperationsInput | string
  }

  export type FacebookEngagementTopCreateManyInput = {
    id?: number
    actionTime: Date | string
    referrer: $Enums.Referrer
    videoId?: string | null
    facebookEventId: string
  }

  export type FacebookEngagementTopUpdateManyMutationInput = {
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: EnumReferrerFieldUpdateOperationsInput | $Enums.Referrer
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacebookEngagementTopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: EnumReferrerFieldUpdateOperationsInput | $Enums.Referrer
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookEventId?: StringFieldUpdateOperationsInput | string
  }

  export type FacebookEngagementBottomCreateInput = {
    adId: string
    campaignId: string
    clickPosition: $Enums.ClickPosition
    device: $Enums.Device
    browser: $Enums.Browser
    purchaseAmount?: string | null
    event: FacebookEventCreateNestedOneWithoutEngagementBottomInput
  }

  export type FacebookEngagementBottomUncheckedCreateInput = {
    id?: number
    adId: string
    campaignId: string
    clickPosition: $Enums.ClickPosition
    device: $Enums.Device
    browser: $Enums.Browser
    purchaseAmount?: string | null
    facebookEventId: string
  }

  export type FacebookEngagementBottomUpdateInput = {
    adId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    clickPosition?: EnumClickPositionFieldUpdateOperationsInput | $Enums.ClickPosition
    device?: EnumDeviceFieldUpdateOperationsInput | $Enums.Device
    browser?: EnumBrowserFieldUpdateOperationsInput | $Enums.Browser
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
    event?: FacebookEventUpdateOneRequiredWithoutEngagementBottomNestedInput
  }

  export type FacebookEngagementBottomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    adId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    clickPosition?: EnumClickPositionFieldUpdateOperationsInput | $Enums.ClickPosition
    device?: EnumDeviceFieldUpdateOperationsInput | $Enums.Device
    browser?: EnumBrowserFieldUpdateOperationsInput | $Enums.Browser
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
    facebookEventId?: StringFieldUpdateOperationsInput | string
  }

  export type FacebookEngagementBottomCreateManyInput = {
    id?: number
    adId: string
    campaignId: string
    clickPosition: $Enums.ClickPosition
    device: $Enums.Device
    browser: $Enums.Browser
    purchaseAmount?: string | null
    facebookEventId: string
  }

  export type FacebookEngagementBottomUpdateManyMutationInput = {
    adId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    clickPosition?: EnumClickPositionFieldUpdateOperationsInput | $Enums.ClickPosition
    device?: EnumDeviceFieldUpdateOperationsInput | $Enums.Device
    browser?: EnumBrowserFieldUpdateOperationsInput | $Enums.Browser
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacebookEngagementBottomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    adId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    clickPosition?: EnumClickPositionFieldUpdateOperationsInput | $Enums.ClickPosition
    device?: EnumDeviceFieldUpdateOperationsInput | $Enums.Device
    browser?: EnumBrowserFieldUpdateOperationsInput | $Enums.Browser
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
    facebookEventId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumFunnelStageFilter<$PrismaModel = never> = {
    equals?: $Enums.FunnelStage | EnumFunnelStageFieldRefInput<$PrismaModel>
    in?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    not?: NestedEnumFunnelStageFilter<$PrismaModel> | $Enums.FunnelStage
  }

  export type EnumFacebookEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FacebookEventType | EnumFacebookEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FacebookEventType[] | ListEnumFacebookEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacebookEventType[] | ListEnumFacebookEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacebookEventTypeFilter<$PrismaModel> | $Enums.FacebookEventType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type FacebookEngagementTopNullableScalarRelationFilter = {
    is?: FacebookEngagementTopWhereInput | null
    isNot?: FacebookEngagementTopWhereInput | null
  }

  export type FacebookEngagementBottomNullableScalarRelationFilter = {
    is?: FacebookEngagementBottomWhereInput | null
    isNot?: FacebookEngagementBottomWhereInput | null
  }

  export type FacebookEventCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userAge?: SortOrder
    userGender?: SortOrder
    userCountry?: SortOrder
    userCity?: SortOrder
  }

  export type FacebookEventAvgOrderByAggregateInput = {
    userAge?: SortOrder
  }

  export type FacebookEventMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userAge?: SortOrder
    userGender?: SortOrder
    userCountry?: SortOrder
    userCity?: SortOrder
  }

  export type FacebookEventMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    userAge?: SortOrder
    userGender?: SortOrder
    userCountry?: SortOrder
    userCity?: SortOrder
  }

  export type FacebookEventSumOrderByAggregateInput = {
    userAge?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumFunnelStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FunnelStage | EnumFunnelStageFieldRefInput<$PrismaModel>
    in?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    not?: NestedEnumFunnelStageWithAggregatesFilter<$PrismaModel> | $Enums.FunnelStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFunnelStageFilter<$PrismaModel>
    _max?: NestedEnumFunnelStageFilter<$PrismaModel>
  }

  export type EnumFacebookEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FacebookEventType | EnumFacebookEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FacebookEventType[] | ListEnumFacebookEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacebookEventType[] | ListEnumFacebookEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacebookEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.FacebookEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFacebookEventTypeFilter<$PrismaModel>
    _max?: NestedEnumFacebookEventTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumReferrerFilter<$PrismaModel = never> = {
    equals?: $Enums.Referrer | EnumReferrerFieldRefInput<$PrismaModel>
    in?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel>
    notIn?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel>
    not?: NestedEnumReferrerFilter<$PrismaModel> | $Enums.Referrer
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FacebookEventScalarRelationFilter = {
    is?: FacebookEventWhereInput
    isNot?: FacebookEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FacebookEngagementTopCountOrderByAggregateInput = {
    id?: SortOrder
    actionTime?: SortOrder
    referrer?: SortOrder
    videoId?: SortOrder
    facebookEventId?: SortOrder
  }

  export type FacebookEngagementTopAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FacebookEngagementTopMaxOrderByAggregateInput = {
    id?: SortOrder
    actionTime?: SortOrder
    referrer?: SortOrder
    videoId?: SortOrder
    facebookEventId?: SortOrder
  }

  export type FacebookEngagementTopMinOrderByAggregateInput = {
    id?: SortOrder
    actionTime?: SortOrder
    referrer?: SortOrder
    videoId?: SortOrder
    facebookEventId?: SortOrder
  }

  export type FacebookEngagementTopSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumReferrerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Referrer | EnumReferrerFieldRefInput<$PrismaModel>
    in?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel>
    notIn?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel>
    not?: NestedEnumReferrerWithAggregatesFilter<$PrismaModel> | $Enums.Referrer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReferrerFilter<$PrismaModel>
    _max?: NestedEnumReferrerFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumClickPositionFilter<$PrismaModel = never> = {
    equals?: $Enums.ClickPosition | EnumClickPositionFieldRefInput<$PrismaModel>
    in?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumClickPositionFilter<$PrismaModel> | $Enums.ClickPosition
  }

  export type EnumDeviceFilter<$PrismaModel = never> = {
    equals?: $Enums.Device | EnumDeviceFieldRefInput<$PrismaModel>
    in?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceFilter<$PrismaModel> | $Enums.Device
  }

  export type EnumBrowserFilter<$PrismaModel = never> = {
    equals?: $Enums.Browser | EnumBrowserFieldRefInput<$PrismaModel>
    in?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel>
    notIn?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel>
    not?: NestedEnumBrowserFilter<$PrismaModel> | $Enums.Browser
  }

  export type FacebookEngagementBottomCountOrderByAggregateInput = {
    id?: SortOrder
    adId?: SortOrder
    campaignId?: SortOrder
    clickPosition?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    purchaseAmount?: SortOrder
    facebookEventId?: SortOrder
  }

  export type FacebookEngagementBottomAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FacebookEngagementBottomMaxOrderByAggregateInput = {
    id?: SortOrder
    adId?: SortOrder
    campaignId?: SortOrder
    clickPosition?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    purchaseAmount?: SortOrder
    facebookEventId?: SortOrder
  }

  export type FacebookEngagementBottomMinOrderByAggregateInput = {
    id?: SortOrder
    adId?: SortOrder
    campaignId?: SortOrder
    clickPosition?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    purchaseAmount?: SortOrder
    facebookEventId?: SortOrder
  }

  export type FacebookEngagementBottomSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumClickPositionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClickPosition | EnumClickPositionFieldRefInput<$PrismaModel>
    in?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumClickPositionWithAggregatesFilter<$PrismaModel> | $Enums.ClickPosition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClickPositionFilter<$PrismaModel>
    _max?: NestedEnumClickPositionFilter<$PrismaModel>
  }

  export type EnumDeviceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Device | EnumDeviceFieldRefInput<$PrismaModel>
    in?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceWithAggregatesFilter<$PrismaModel> | $Enums.Device
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceFilter<$PrismaModel>
    _max?: NestedEnumDeviceFilter<$PrismaModel>
  }

  export type EnumBrowserWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Browser | EnumBrowserFieldRefInput<$PrismaModel>
    in?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel>
    notIn?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel>
    not?: NestedEnumBrowserWithAggregatesFilter<$PrismaModel> | $Enums.Browser
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBrowserFilter<$PrismaModel>
    _max?: NestedEnumBrowserFilter<$PrismaModel>
  }

  export type FacebookEngagementTopCreateNestedOneWithoutEventInput = {
    create?: XOR<FacebookEngagementTopCreateWithoutEventInput, FacebookEngagementTopUncheckedCreateWithoutEventInput>
    connectOrCreate?: FacebookEngagementTopCreateOrConnectWithoutEventInput
    connect?: FacebookEngagementTopWhereUniqueInput
  }

  export type FacebookEngagementBottomCreateNestedOneWithoutEventInput = {
    create?: XOR<FacebookEngagementBottomCreateWithoutEventInput, FacebookEngagementBottomUncheckedCreateWithoutEventInput>
    connectOrCreate?: FacebookEngagementBottomCreateOrConnectWithoutEventInput
    connect?: FacebookEngagementBottomWhereUniqueInput
  }

  export type FacebookEngagementTopUncheckedCreateNestedOneWithoutEventInput = {
    create?: XOR<FacebookEngagementTopCreateWithoutEventInput, FacebookEngagementTopUncheckedCreateWithoutEventInput>
    connectOrCreate?: FacebookEngagementTopCreateOrConnectWithoutEventInput
    connect?: FacebookEngagementTopWhereUniqueInput
  }

  export type FacebookEngagementBottomUncheckedCreateNestedOneWithoutEventInput = {
    create?: XOR<FacebookEngagementBottomCreateWithoutEventInput, FacebookEngagementBottomUncheckedCreateWithoutEventInput>
    connectOrCreate?: FacebookEngagementBottomCreateOrConnectWithoutEventInput
    connect?: FacebookEngagementBottomWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumFunnelStageFieldUpdateOperationsInput = {
    set?: $Enums.FunnelStage
  }

  export type EnumFacebookEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.FacebookEventType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type FacebookEngagementTopUpdateOneWithoutEventNestedInput = {
    create?: XOR<FacebookEngagementTopCreateWithoutEventInput, FacebookEngagementTopUncheckedCreateWithoutEventInput>
    connectOrCreate?: FacebookEngagementTopCreateOrConnectWithoutEventInput
    upsert?: FacebookEngagementTopUpsertWithoutEventInput
    disconnect?: FacebookEngagementTopWhereInput | boolean
    delete?: FacebookEngagementTopWhereInput | boolean
    connect?: FacebookEngagementTopWhereUniqueInput
    update?: XOR<XOR<FacebookEngagementTopUpdateToOneWithWhereWithoutEventInput, FacebookEngagementTopUpdateWithoutEventInput>, FacebookEngagementTopUncheckedUpdateWithoutEventInput>
  }

  export type FacebookEngagementBottomUpdateOneWithoutEventNestedInput = {
    create?: XOR<FacebookEngagementBottomCreateWithoutEventInput, FacebookEngagementBottomUncheckedCreateWithoutEventInput>
    connectOrCreate?: FacebookEngagementBottomCreateOrConnectWithoutEventInput
    upsert?: FacebookEngagementBottomUpsertWithoutEventInput
    disconnect?: FacebookEngagementBottomWhereInput | boolean
    delete?: FacebookEngagementBottomWhereInput | boolean
    connect?: FacebookEngagementBottomWhereUniqueInput
    update?: XOR<XOR<FacebookEngagementBottomUpdateToOneWithWhereWithoutEventInput, FacebookEngagementBottomUpdateWithoutEventInput>, FacebookEngagementBottomUncheckedUpdateWithoutEventInput>
  }

  export type FacebookEngagementTopUncheckedUpdateOneWithoutEventNestedInput = {
    create?: XOR<FacebookEngagementTopCreateWithoutEventInput, FacebookEngagementTopUncheckedCreateWithoutEventInput>
    connectOrCreate?: FacebookEngagementTopCreateOrConnectWithoutEventInput
    upsert?: FacebookEngagementTopUpsertWithoutEventInput
    disconnect?: FacebookEngagementTopWhereInput | boolean
    delete?: FacebookEngagementTopWhereInput | boolean
    connect?: FacebookEngagementTopWhereUniqueInput
    update?: XOR<XOR<FacebookEngagementTopUpdateToOneWithWhereWithoutEventInput, FacebookEngagementTopUpdateWithoutEventInput>, FacebookEngagementTopUncheckedUpdateWithoutEventInput>
  }

  export type FacebookEngagementBottomUncheckedUpdateOneWithoutEventNestedInput = {
    create?: XOR<FacebookEngagementBottomCreateWithoutEventInput, FacebookEngagementBottomUncheckedCreateWithoutEventInput>
    connectOrCreate?: FacebookEngagementBottomCreateOrConnectWithoutEventInput
    upsert?: FacebookEngagementBottomUpsertWithoutEventInput
    disconnect?: FacebookEngagementBottomWhereInput | boolean
    delete?: FacebookEngagementBottomWhereInput | boolean
    connect?: FacebookEngagementBottomWhereUniqueInput
    update?: XOR<XOR<FacebookEngagementBottomUpdateToOneWithWhereWithoutEventInput, FacebookEngagementBottomUpdateWithoutEventInput>, FacebookEngagementBottomUncheckedUpdateWithoutEventInput>
  }

  export type FacebookEventCreateNestedOneWithoutEngagementTopInput = {
    create?: XOR<FacebookEventCreateWithoutEngagementTopInput, FacebookEventUncheckedCreateWithoutEngagementTopInput>
    connectOrCreate?: FacebookEventCreateOrConnectWithoutEngagementTopInput
    connect?: FacebookEventWhereUniqueInput
  }

  export type EnumReferrerFieldUpdateOperationsInput = {
    set?: $Enums.Referrer
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FacebookEventUpdateOneRequiredWithoutEngagementTopNestedInput = {
    create?: XOR<FacebookEventCreateWithoutEngagementTopInput, FacebookEventUncheckedCreateWithoutEngagementTopInput>
    connectOrCreate?: FacebookEventCreateOrConnectWithoutEngagementTopInput
    upsert?: FacebookEventUpsertWithoutEngagementTopInput
    connect?: FacebookEventWhereUniqueInput
    update?: XOR<XOR<FacebookEventUpdateToOneWithWhereWithoutEngagementTopInput, FacebookEventUpdateWithoutEngagementTopInput>, FacebookEventUncheckedUpdateWithoutEngagementTopInput>
  }

  export type FacebookEventCreateNestedOneWithoutEngagementBottomInput = {
    create?: XOR<FacebookEventCreateWithoutEngagementBottomInput, FacebookEventUncheckedCreateWithoutEngagementBottomInput>
    connectOrCreate?: FacebookEventCreateOrConnectWithoutEngagementBottomInput
    connect?: FacebookEventWhereUniqueInput
  }

  export type EnumClickPositionFieldUpdateOperationsInput = {
    set?: $Enums.ClickPosition
  }

  export type EnumDeviceFieldUpdateOperationsInput = {
    set?: $Enums.Device
  }

  export type EnumBrowserFieldUpdateOperationsInput = {
    set?: $Enums.Browser
  }

  export type FacebookEventUpdateOneRequiredWithoutEngagementBottomNestedInput = {
    create?: XOR<FacebookEventCreateWithoutEngagementBottomInput, FacebookEventUncheckedCreateWithoutEngagementBottomInput>
    connectOrCreate?: FacebookEventCreateOrConnectWithoutEngagementBottomInput
    upsert?: FacebookEventUpsertWithoutEngagementBottomInput
    connect?: FacebookEventWhereUniqueInput
    update?: XOR<XOR<FacebookEventUpdateToOneWithWhereWithoutEngagementBottomInput, FacebookEventUpdateWithoutEngagementBottomInput>, FacebookEventUncheckedUpdateWithoutEngagementBottomInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumFunnelStageFilter<$PrismaModel = never> = {
    equals?: $Enums.FunnelStage | EnumFunnelStageFieldRefInput<$PrismaModel>
    in?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    not?: NestedEnumFunnelStageFilter<$PrismaModel> | $Enums.FunnelStage
  }

  export type NestedEnumFacebookEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FacebookEventType | EnumFacebookEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FacebookEventType[] | ListEnumFacebookEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacebookEventType[] | ListEnumFacebookEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacebookEventTypeFilter<$PrismaModel> | $Enums.FacebookEventType
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumFunnelStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FunnelStage | EnumFunnelStageFieldRefInput<$PrismaModel>
    in?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    not?: NestedEnumFunnelStageWithAggregatesFilter<$PrismaModel> | $Enums.FunnelStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFunnelStageFilter<$PrismaModel>
    _max?: NestedEnumFunnelStageFilter<$PrismaModel>
  }

  export type NestedEnumFacebookEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FacebookEventType | EnumFacebookEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FacebookEventType[] | ListEnumFacebookEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacebookEventType[] | ListEnumFacebookEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacebookEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.FacebookEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFacebookEventTypeFilter<$PrismaModel>
    _max?: NestedEnumFacebookEventTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumReferrerFilter<$PrismaModel = never> = {
    equals?: $Enums.Referrer | EnumReferrerFieldRefInput<$PrismaModel>
    in?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel>
    notIn?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel>
    not?: NestedEnumReferrerFilter<$PrismaModel> | $Enums.Referrer
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumReferrerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Referrer | EnumReferrerFieldRefInput<$PrismaModel>
    in?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel>
    notIn?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel>
    not?: NestedEnumReferrerWithAggregatesFilter<$PrismaModel> | $Enums.Referrer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReferrerFilter<$PrismaModel>
    _max?: NestedEnumReferrerFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumClickPositionFilter<$PrismaModel = never> = {
    equals?: $Enums.ClickPosition | EnumClickPositionFieldRefInput<$PrismaModel>
    in?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumClickPositionFilter<$PrismaModel> | $Enums.ClickPosition
  }

  export type NestedEnumDeviceFilter<$PrismaModel = never> = {
    equals?: $Enums.Device | EnumDeviceFieldRefInput<$PrismaModel>
    in?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceFilter<$PrismaModel> | $Enums.Device
  }

  export type NestedEnumBrowserFilter<$PrismaModel = never> = {
    equals?: $Enums.Browser | EnumBrowserFieldRefInput<$PrismaModel>
    in?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel>
    notIn?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel>
    not?: NestedEnumBrowserFilter<$PrismaModel> | $Enums.Browser
  }

  export type NestedEnumClickPositionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClickPosition | EnumClickPositionFieldRefInput<$PrismaModel>
    in?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumClickPositionWithAggregatesFilter<$PrismaModel> | $Enums.ClickPosition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClickPositionFilter<$PrismaModel>
    _max?: NestedEnumClickPositionFilter<$PrismaModel>
  }

  export type NestedEnumDeviceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Device | EnumDeviceFieldRefInput<$PrismaModel>
    in?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceWithAggregatesFilter<$PrismaModel> | $Enums.Device
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceFilter<$PrismaModel>
    _max?: NestedEnumDeviceFilter<$PrismaModel>
  }

  export type NestedEnumBrowserWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Browser | EnumBrowserFieldRefInput<$PrismaModel>
    in?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel>
    notIn?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel>
    not?: NestedEnumBrowserWithAggregatesFilter<$PrismaModel> | $Enums.Browser
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBrowserFilter<$PrismaModel>
    _max?: NestedEnumBrowserFilter<$PrismaModel>
  }

  export type FacebookEngagementTopCreateWithoutEventInput = {
    actionTime: Date | string
    referrer: $Enums.Referrer
    videoId?: string | null
  }

  export type FacebookEngagementTopUncheckedCreateWithoutEventInput = {
    id?: number
    actionTime: Date | string
    referrer: $Enums.Referrer
    videoId?: string | null
  }

  export type FacebookEngagementTopCreateOrConnectWithoutEventInput = {
    where: FacebookEngagementTopWhereUniqueInput
    create: XOR<FacebookEngagementTopCreateWithoutEventInput, FacebookEngagementTopUncheckedCreateWithoutEventInput>
  }

  export type FacebookEngagementBottomCreateWithoutEventInput = {
    adId: string
    campaignId: string
    clickPosition: $Enums.ClickPosition
    device: $Enums.Device
    browser: $Enums.Browser
    purchaseAmount?: string | null
  }

  export type FacebookEngagementBottomUncheckedCreateWithoutEventInput = {
    id?: number
    adId: string
    campaignId: string
    clickPosition: $Enums.ClickPosition
    device: $Enums.Device
    browser: $Enums.Browser
    purchaseAmount?: string | null
  }

  export type FacebookEngagementBottomCreateOrConnectWithoutEventInput = {
    where: FacebookEngagementBottomWhereUniqueInput
    create: XOR<FacebookEngagementBottomCreateWithoutEventInput, FacebookEngagementBottomUncheckedCreateWithoutEventInput>
  }

  export type FacebookEngagementTopUpsertWithoutEventInput = {
    update: XOR<FacebookEngagementTopUpdateWithoutEventInput, FacebookEngagementTopUncheckedUpdateWithoutEventInput>
    create: XOR<FacebookEngagementTopCreateWithoutEventInput, FacebookEngagementTopUncheckedCreateWithoutEventInput>
    where?: FacebookEngagementTopWhereInput
  }

  export type FacebookEngagementTopUpdateToOneWithWhereWithoutEventInput = {
    where?: FacebookEngagementTopWhereInput
    data: XOR<FacebookEngagementTopUpdateWithoutEventInput, FacebookEngagementTopUncheckedUpdateWithoutEventInput>
  }

  export type FacebookEngagementTopUpdateWithoutEventInput = {
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: EnumReferrerFieldUpdateOperationsInput | $Enums.Referrer
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacebookEngagementTopUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    actionTime?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: EnumReferrerFieldUpdateOperationsInput | $Enums.Referrer
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacebookEngagementBottomUpsertWithoutEventInput = {
    update: XOR<FacebookEngagementBottomUpdateWithoutEventInput, FacebookEngagementBottomUncheckedUpdateWithoutEventInput>
    create: XOR<FacebookEngagementBottomCreateWithoutEventInput, FacebookEngagementBottomUncheckedCreateWithoutEventInput>
    where?: FacebookEngagementBottomWhereInput
  }

  export type FacebookEngagementBottomUpdateToOneWithWhereWithoutEventInput = {
    where?: FacebookEngagementBottomWhereInput
    data: XOR<FacebookEngagementBottomUpdateWithoutEventInput, FacebookEngagementBottomUncheckedUpdateWithoutEventInput>
  }

  export type FacebookEngagementBottomUpdateWithoutEventInput = {
    adId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    clickPosition?: EnumClickPositionFieldUpdateOperationsInput | $Enums.ClickPosition
    device?: EnumDeviceFieldUpdateOperationsInput | $Enums.Device
    browser?: EnumBrowserFieldUpdateOperationsInput | $Enums.Browser
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacebookEngagementBottomUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    adId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    clickPosition?: EnumClickPositionFieldUpdateOperationsInput | $Enums.ClickPosition
    device?: EnumDeviceFieldUpdateOperationsInput | $Enums.Device
    browser?: EnumBrowserFieldUpdateOperationsInput | $Enums.Browser
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacebookEventCreateWithoutEngagementTopInput = {
    id?: string
    timestamp: Date | string
    source: string
    funnelStage: $Enums.FunnelStage
    eventType: $Enums.FacebookEventType
    userId: string
    userName: string
    userAge: number
    userGender: $Enums.Gender
    userCountry: string
    userCity: string
    engagementBottom?: FacebookEngagementBottomCreateNestedOneWithoutEventInput
  }

  export type FacebookEventUncheckedCreateWithoutEngagementTopInput = {
    id?: string
    timestamp: Date | string
    source: string
    funnelStage: $Enums.FunnelStage
    eventType: $Enums.FacebookEventType
    userId: string
    userName: string
    userAge: number
    userGender: $Enums.Gender
    userCountry: string
    userCity: string
    engagementBottom?: FacebookEngagementBottomUncheckedCreateNestedOneWithoutEventInput
  }

  export type FacebookEventCreateOrConnectWithoutEngagementTopInput = {
    where: FacebookEventWhereUniqueInput
    create: XOR<FacebookEventCreateWithoutEngagementTopInput, FacebookEventUncheckedCreateWithoutEngagementTopInput>
  }

  export type FacebookEventUpsertWithoutEngagementTopInput = {
    update: XOR<FacebookEventUpdateWithoutEngagementTopInput, FacebookEventUncheckedUpdateWithoutEngagementTopInput>
    create: XOR<FacebookEventCreateWithoutEngagementTopInput, FacebookEventUncheckedCreateWithoutEngagementTopInput>
    where?: FacebookEventWhereInput
  }

  export type FacebookEventUpdateToOneWithWhereWithoutEngagementTopInput = {
    where?: FacebookEventWhereInput
    data: XOR<FacebookEventUpdateWithoutEngagementTopInput, FacebookEventUncheckedUpdateWithoutEngagementTopInput>
  }

  export type FacebookEventUpdateWithoutEngagementTopInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: EnumFacebookEventTypeFieldUpdateOperationsInput | $Enums.FacebookEventType
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAge?: IntFieldUpdateOperationsInput | number
    userGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    userCountry?: StringFieldUpdateOperationsInput | string
    userCity?: StringFieldUpdateOperationsInput | string
    engagementBottom?: FacebookEngagementBottomUpdateOneWithoutEventNestedInput
  }

  export type FacebookEventUncheckedUpdateWithoutEngagementTopInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: EnumFacebookEventTypeFieldUpdateOperationsInput | $Enums.FacebookEventType
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAge?: IntFieldUpdateOperationsInput | number
    userGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    userCountry?: StringFieldUpdateOperationsInput | string
    userCity?: StringFieldUpdateOperationsInput | string
    engagementBottom?: FacebookEngagementBottomUncheckedUpdateOneWithoutEventNestedInput
  }

  export type FacebookEventCreateWithoutEngagementBottomInput = {
    id?: string
    timestamp: Date | string
    source: string
    funnelStage: $Enums.FunnelStage
    eventType: $Enums.FacebookEventType
    userId: string
    userName: string
    userAge: number
    userGender: $Enums.Gender
    userCountry: string
    userCity: string
    engagementTop?: FacebookEngagementTopCreateNestedOneWithoutEventInput
  }

  export type FacebookEventUncheckedCreateWithoutEngagementBottomInput = {
    id?: string
    timestamp: Date | string
    source: string
    funnelStage: $Enums.FunnelStage
    eventType: $Enums.FacebookEventType
    userId: string
    userName: string
    userAge: number
    userGender: $Enums.Gender
    userCountry: string
    userCity: string
    engagementTop?: FacebookEngagementTopUncheckedCreateNestedOneWithoutEventInput
  }

  export type FacebookEventCreateOrConnectWithoutEngagementBottomInput = {
    where: FacebookEventWhereUniqueInput
    create: XOR<FacebookEventCreateWithoutEngagementBottomInput, FacebookEventUncheckedCreateWithoutEngagementBottomInput>
  }

  export type FacebookEventUpsertWithoutEngagementBottomInput = {
    update: XOR<FacebookEventUpdateWithoutEngagementBottomInput, FacebookEventUncheckedUpdateWithoutEngagementBottomInput>
    create: XOR<FacebookEventCreateWithoutEngagementBottomInput, FacebookEventUncheckedCreateWithoutEngagementBottomInput>
    where?: FacebookEventWhereInput
  }

  export type FacebookEventUpdateToOneWithWhereWithoutEngagementBottomInput = {
    where?: FacebookEventWhereInput
    data: XOR<FacebookEventUpdateWithoutEngagementBottomInput, FacebookEventUncheckedUpdateWithoutEngagementBottomInput>
  }

  export type FacebookEventUpdateWithoutEngagementBottomInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: EnumFacebookEventTypeFieldUpdateOperationsInput | $Enums.FacebookEventType
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAge?: IntFieldUpdateOperationsInput | number
    userGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    userCountry?: StringFieldUpdateOperationsInput | string
    userCity?: StringFieldUpdateOperationsInput | string
    engagementTop?: FacebookEngagementTopUpdateOneWithoutEventNestedInput
  }

  export type FacebookEventUncheckedUpdateWithoutEngagementBottomInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: EnumFacebookEventTypeFieldUpdateOperationsInput | $Enums.FacebookEventType
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    userAge?: IntFieldUpdateOperationsInput | number
    userGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    userCountry?: StringFieldUpdateOperationsInput | string
    userCity?: StringFieldUpdateOperationsInput | string
    engagementTop?: FacebookEngagementTopUncheckedUpdateOneWithoutEventNestedInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}