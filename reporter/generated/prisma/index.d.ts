
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
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model FacebookUser
 * 
 */
export type FacebookUser = $Result.DefaultSelection<Prisma.$FacebookUserPayload>
/**
 * Model TiktokUser
 * 
 */
export type TiktokUser = $Result.DefaultSelection<Prisma.$TiktokUserPayload>
/**
 * Model FacebookEngagement
 * 
 */
export type FacebookEngagement = $Result.DefaultSelection<Prisma.$FacebookEngagementPayload>
/**
 * Model TiktokEngagement
 * 
 */
export type TiktokEngagement = $Result.DefaultSelection<Prisma.$TiktokEngagementPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FunnelStage: {
  top: 'top',
  bottom: 'bottom'
};

export type FunnelStage = (typeof FunnelStage)[keyof typeof FunnelStage]


export const SourcePlatform: {
  facebook: 'facebook',
  tiktok: 'tiktok'
};

export type SourcePlatform = (typeof SourcePlatform)[keyof typeof SourcePlatform]


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


export const DeviceType: {
  Android: 'Android',
  iOS: 'iOS',
  Desktop: 'Desktop'
};

export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType]

}

export type FunnelStage = $Enums.FunnelStage

export const FunnelStage: typeof $Enums.FunnelStage

export type SourcePlatform = $Enums.SourcePlatform

export const SourcePlatform: typeof $Enums.SourcePlatform

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

export type DeviceType = $Enums.DeviceType

export const DeviceType: typeof $Enums.DeviceType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Events
 * const events = await prisma.event.findMany()
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
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
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
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facebookUser`: Exposes CRUD operations for the **FacebookUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacebookUsers
    * const facebookUsers = await prisma.facebookUser.findMany()
    * ```
    */
  get facebookUser(): Prisma.FacebookUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tiktokUser`: Exposes CRUD operations for the **TiktokUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TiktokUsers
    * const tiktokUsers = await prisma.tiktokUser.findMany()
    * ```
    */
  get tiktokUser(): Prisma.TiktokUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facebookEngagement`: Exposes CRUD operations for the **FacebookEngagement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacebookEngagements
    * const facebookEngagements = await prisma.facebookEngagement.findMany()
    * ```
    */
  get facebookEngagement(): Prisma.FacebookEngagementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tiktokEngagement`: Exposes CRUD operations for the **TiktokEngagement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TiktokEngagements
    * const tiktokEngagements = await prisma.tiktokEngagement.findMany()
    * ```
    */
  get tiktokEngagement(): Prisma.TiktokEngagementDelegate<ExtArgs, ClientOptions>;
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
    Event: 'Event',
    FacebookUser: 'FacebookUser',
    TiktokUser: 'TiktokUser',
    FacebookEngagement: 'FacebookEngagement',
    TiktokEngagement: 'TiktokEngagement'
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
      modelProps: "event" | "facebookUser" | "tiktokUser" | "facebookEngagement" | "tiktokEngagement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      FacebookUser: {
        payload: Prisma.$FacebookUserPayload<ExtArgs>
        fields: Prisma.FacebookUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacebookUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacebookUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>
          }
          findFirst: {
            args: Prisma.FacebookUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacebookUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>
          }
          findMany: {
            args: Prisma.FacebookUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>[]
          }
          create: {
            args: Prisma.FacebookUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>
          }
          createMany: {
            args: Prisma.FacebookUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacebookUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>[]
          }
          delete: {
            args: Prisma.FacebookUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>
          }
          update: {
            args: Prisma.FacebookUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>
          }
          deleteMany: {
            args: Prisma.FacebookUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacebookUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacebookUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>[]
          }
          upsert: {
            args: Prisma.FacebookUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookUserPayload>
          }
          aggregate: {
            args: Prisma.FacebookUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacebookUser>
          }
          groupBy: {
            args: Prisma.FacebookUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacebookUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacebookUserCountArgs<ExtArgs>
            result: $Utils.Optional<FacebookUserCountAggregateOutputType> | number
          }
        }
      }
      TiktokUser: {
        payload: Prisma.$TiktokUserPayload<ExtArgs>
        fields: Prisma.TiktokUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TiktokUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TiktokUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          findFirst: {
            args: Prisma.TiktokUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TiktokUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          findMany: {
            args: Prisma.TiktokUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>[]
          }
          create: {
            args: Prisma.TiktokUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          createMany: {
            args: Prisma.TiktokUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TiktokUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>[]
          }
          delete: {
            args: Prisma.TiktokUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          update: {
            args: Prisma.TiktokUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          deleteMany: {
            args: Prisma.TiktokUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TiktokUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TiktokUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>[]
          }
          upsert: {
            args: Prisma.TiktokUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          aggregate: {
            args: Prisma.TiktokUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiktokUser>
          }
          groupBy: {
            args: Prisma.TiktokUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiktokUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.TiktokUserCountArgs<ExtArgs>
            result: $Utils.Optional<TiktokUserCountAggregateOutputType> | number
          }
        }
      }
      FacebookEngagement: {
        payload: Prisma.$FacebookEngagementPayload<ExtArgs>
        fields: Prisma.FacebookEngagementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacebookEngagementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacebookEngagementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementPayload>
          }
          findFirst: {
            args: Prisma.FacebookEngagementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacebookEngagementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementPayload>
          }
          findMany: {
            args: Prisma.FacebookEngagementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementPayload>[]
          }
          create: {
            args: Prisma.FacebookEngagementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementPayload>
          }
          createMany: {
            args: Prisma.FacebookEngagementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacebookEngagementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementPayload>[]
          }
          delete: {
            args: Prisma.FacebookEngagementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementPayload>
          }
          update: {
            args: Prisma.FacebookEngagementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementPayload>
          }
          deleteMany: {
            args: Prisma.FacebookEngagementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacebookEngagementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacebookEngagementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementPayload>[]
          }
          upsert: {
            args: Prisma.FacebookEngagementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacebookEngagementPayload>
          }
          aggregate: {
            args: Prisma.FacebookEngagementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacebookEngagement>
          }
          groupBy: {
            args: Prisma.FacebookEngagementGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacebookEngagementGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacebookEngagementCountArgs<ExtArgs>
            result: $Utils.Optional<FacebookEngagementCountAggregateOutputType> | number
          }
        }
      }
      TiktokEngagement: {
        payload: Prisma.$TiktokEngagementPayload<ExtArgs>
        fields: Prisma.TiktokEngagementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TiktokEngagementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TiktokEngagementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementPayload>
          }
          findFirst: {
            args: Prisma.TiktokEngagementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TiktokEngagementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementPayload>
          }
          findMany: {
            args: Prisma.TiktokEngagementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementPayload>[]
          }
          create: {
            args: Prisma.TiktokEngagementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementPayload>
          }
          createMany: {
            args: Prisma.TiktokEngagementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TiktokEngagementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementPayload>[]
          }
          delete: {
            args: Prisma.TiktokEngagementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementPayload>
          }
          update: {
            args: Prisma.TiktokEngagementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementPayload>
          }
          deleteMany: {
            args: Prisma.TiktokEngagementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TiktokEngagementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TiktokEngagementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementPayload>[]
          }
          upsert: {
            args: Prisma.TiktokEngagementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokEngagementPayload>
          }
          aggregate: {
            args: Prisma.TiktokEngagementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiktokEngagement>
          }
          groupBy: {
            args: Prisma.TiktokEngagementGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiktokEngagementGroupByOutputType>[]
          }
          count: {
            args: Prisma.TiktokEngagementCountArgs<ExtArgs>
            result: $Utils.Optional<TiktokEngagementCountAggregateOutputType> | number
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
    event?: EventOmit
    facebookUser?: FacebookUserOmit
    tiktokUser?: TiktokUserOmit
    facebookEngagement?: FacebookEngagementOmit
    tiktokEngagement?: TiktokEngagementOmit
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
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    timestamp: Date | null
    source: $Enums.SourcePlatform | null
    funnelStage: $Enums.FunnelStage | null
    eventType: string | null
    facebookUserId: string | null
    tiktokUserId: string | null
    facebookEngagementId: string | null
    tiktokEngagementId: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    timestamp: Date | null
    source: $Enums.SourcePlatform | null
    funnelStage: $Enums.FunnelStage | null
    eventType: string | null
    facebookUserId: string | null
    tiktokUserId: string | null
    facebookEngagementId: string | null
    tiktokEngagementId: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    eventId: number
    timestamp: number
    source: number
    funnelStage: number
    eventType: number
    facebookUserId: number
    tiktokUserId: number
    facebookEngagementId: number
    tiktokEngagementId: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    eventId?: true
    timestamp?: true
    source?: true
    funnelStage?: true
    eventType?: true
    facebookUserId?: true
    tiktokUserId?: true
    facebookEngagementId?: true
    tiktokEngagementId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    eventId?: true
    timestamp?: true
    source?: true
    funnelStage?: true
    eventType?: true
    facebookUserId?: true
    tiktokUserId?: true
    facebookEngagementId?: true
    tiktokEngagementId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    eventId?: true
    timestamp?: true
    source?: true
    funnelStage?: true
    eventType?: true
    facebookUserId?: true
    tiktokUserId?: true
    facebookEngagementId?: true
    tiktokEngagementId?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    eventId: string
    timestamp: Date
    source: $Enums.SourcePlatform
    funnelStage: $Enums.FunnelStage
    eventType: string
    facebookUserId: string | null
    tiktokUserId: string | null
    facebookEngagementId: string | null
    tiktokEngagementId: string | null
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    timestamp?: boolean
    source?: boolean
    funnelStage?: boolean
    eventType?: boolean
    facebookUserId?: boolean
    tiktokUserId?: boolean
    facebookEngagementId?: boolean
    tiktokEngagementId?: boolean
    facebookUser?: boolean | Event$facebookUserArgs<ExtArgs>
    tiktokUser?: boolean | Event$tiktokUserArgs<ExtArgs>
    facebookEngagement?: boolean | Event$facebookEngagementArgs<ExtArgs>
    tiktokEngagement?: boolean | Event$tiktokEngagementArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    timestamp?: boolean
    source?: boolean
    funnelStage?: boolean
    eventType?: boolean
    facebookUserId?: boolean
    tiktokUserId?: boolean
    facebookEngagementId?: boolean
    tiktokEngagementId?: boolean
    facebookUser?: boolean | Event$facebookUserArgs<ExtArgs>
    tiktokUser?: boolean | Event$tiktokUserArgs<ExtArgs>
    facebookEngagement?: boolean | Event$facebookEngagementArgs<ExtArgs>
    tiktokEngagement?: boolean | Event$tiktokEngagementArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    timestamp?: boolean
    source?: boolean
    funnelStage?: boolean
    eventType?: boolean
    facebookUserId?: boolean
    tiktokUserId?: boolean
    facebookEngagementId?: boolean
    tiktokEngagementId?: boolean
    facebookUser?: boolean | Event$facebookUserArgs<ExtArgs>
    tiktokUser?: boolean | Event$tiktokUserArgs<ExtArgs>
    facebookEngagement?: boolean | Event$facebookEngagementArgs<ExtArgs>
    tiktokEngagement?: boolean | Event$tiktokEngagementArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    eventId?: boolean
    timestamp?: boolean
    source?: boolean
    funnelStage?: boolean
    eventType?: boolean
    facebookUserId?: boolean
    tiktokUserId?: boolean
    facebookEngagementId?: boolean
    tiktokEngagementId?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "timestamp" | "source" | "funnelStage" | "eventType" | "facebookUserId" | "tiktokUserId" | "facebookEngagementId" | "tiktokEngagementId", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facebookUser?: boolean | Event$facebookUserArgs<ExtArgs>
    tiktokUser?: boolean | Event$tiktokUserArgs<ExtArgs>
    facebookEngagement?: boolean | Event$facebookEngagementArgs<ExtArgs>
    tiktokEngagement?: boolean | Event$tiktokEngagementArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facebookUser?: boolean | Event$facebookUserArgs<ExtArgs>
    tiktokUser?: boolean | Event$tiktokUserArgs<ExtArgs>
    facebookEngagement?: boolean | Event$facebookEngagementArgs<ExtArgs>
    tiktokEngagement?: boolean | Event$tiktokEngagementArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facebookUser?: boolean | Event$facebookUserArgs<ExtArgs>
    tiktokUser?: boolean | Event$tiktokUserArgs<ExtArgs>
    facebookEngagement?: boolean | Event$facebookEngagementArgs<ExtArgs>
    tiktokEngagement?: boolean | Event$tiktokEngagementArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      facebookUser: Prisma.$FacebookUserPayload<ExtArgs> | null
      tiktokUser: Prisma.$TiktokUserPayload<ExtArgs> | null
      facebookEngagement: Prisma.$FacebookEngagementPayload<ExtArgs> | null
      tiktokEngagement: Prisma.$TiktokEngagementPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      timestamp: Date
      source: $Enums.SourcePlatform
      funnelStage: $Enums.FunnelStage
      eventType: string
      facebookUserId: string | null
      tiktokUserId: string | null
      facebookEngagementId: string | null
      tiktokEngagementId: string | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facebookUser<T extends Event$facebookUserArgs<ExtArgs> = {}>(args?: Subset<T, Event$facebookUserArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tiktokUser<T extends Event$tiktokUserArgs<ExtArgs> = {}>(args?: Subset<T, Event$tiktokUserArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    facebookEngagement<T extends Event$facebookEngagementArgs<ExtArgs> = {}>(args?: Subset<T, Event$facebookEngagementArgs<ExtArgs>>): Prisma__FacebookEngagementClient<$Result.GetResult<Prisma.$FacebookEngagementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tiktokEngagement<T extends Event$tiktokEngagementArgs<ExtArgs> = {}>(args?: Subset<T, Event$tiktokEngagementArgs<ExtArgs>>): Prisma__TiktokEngagementClient<$Result.GetResult<Prisma.$TiktokEngagementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly eventId: FieldRef<"Event", 'String'>
    readonly timestamp: FieldRef<"Event", 'DateTime'>
    readonly source: FieldRef<"Event", 'SourcePlatform'>
    readonly funnelStage: FieldRef<"Event", 'FunnelStage'>
    readonly eventType: FieldRef<"Event", 'String'>
    readonly facebookUserId: FieldRef<"Event", 'String'>
    readonly tiktokUserId: FieldRef<"Event", 'String'>
    readonly facebookEngagementId: FieldRef<"Event", 'String'>
    readonly tiktokEngagementId: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.facebookUser
   */
  export type Event$facebookUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    where?: FacebookUserWhereInput
  }

  /**
   * Event.tiktokUser
   */
  export type Event$tiktokUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    where?: TiktokUserWhereInput
  }

  /**
   * Event.facebookEngagement
   */
  export type Event$facebookEngagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagement
     */
    select?: FacebookEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagement
     */
    omit?: FacebookEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementInclude<ExtArgs> | null
    where?: FacebookEngagementWhereInput
  }

  /**
   * Event.tiktokEngagement
   */
  export type Event$tiktokEngagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagement
     */
    select?: TiktokEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagement
     */
    omit?: TiktokEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementInclude<ExtArgs> | null
    where?: TiktokEngagementWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model FacebookUser
   */

  export type AggregateFacebookUser = {
    _count: FacebookUserCountAggregateOutputType | null
    _avg: FacebookUserAvgAggregateOutputType | null
    _sum: FacebookUserSumAggregateOutputType | null
    _min: FacebookUserMinAggregateOutputType | null
    _max: FacebookUserMaxAggregateOutputType | null
  }

  export type FacebookUserAvgAggregateOutputType = {
    age: number | null
  }

  export type FacebookUserSumAggregateOutputType = {
    age: number | null
  }

  export type FacebookUserMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    age: number | null
    gender: $Enums.Gender | null
    country: string | null
    city: string | null
  }

  export type FacebookUserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    age: number | null
    gender: $Enums.Gender | null
    country: string | null
    city: string | null
  }

  export type FacebookUserCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    age: number
    gender: number
    country: number
    city: number
    _all: number
  }


  export type FacebookUserAvgAggregateInputType = {
    age?: true
  }

  export type FacebookUserSumAggregateInputType = {
    age?: true
  }

  export type FacebookUserMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    age?: true
    gender?: true
    country?: true
    city?: true
  }

  export type FacebookUserMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    age?: true
    gender?: true
    country?: true
    city?: true
  }

  export type FacebookUserCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    age?: true
    gender?: true
    country?: true
    city?: true
    _all?: true
  }

  export type FacebookUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookUser to aggregate.
     */
    where?: FacebookUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookUsers to fetch.
     */
    orderBy?: FacebookUserOrderByWithRelationInput | FacebookUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacebookUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacebookUsers
    **/
    _count?: true | FacebookUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacebookUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacebookUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacebookUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacebookUserMaxAggregateInputType
  }

  export type GetFacebookUserAggregateType<T extends FacebookUserAggregateArgs> = {
        [P in keyof T & keyof AggregateFacebookUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacebookUser[P]>
      : GetScalarType<T[P], AggregateFacebookUser[P]>
  }




  export type FacebookUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacebookUserWhereInput
    orderBy?: FacebookUserOrderByWithAggregationInput | FacebookUserOrderByWithAggregationInput[]
    by: FacebookUserScalarFieldEnum[] | FacebookUserScalarFieldEnum
    having?: FacebookUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacebookUserCountAggregateInputType | true
    _avg?: FacebookUserAvgAggregateInputType
    _sum?: FacebookUserSumAggregateInputType
    _min?: FacebookUserMinAggregateInputType
    _max?: FacebookUserMaxAggregateInputType
  }

  export type FacebookUserGroupByOutputType = {
    id: string
    userId: string
    name: string
    age: number
    gender: $Enums.Gender
    country: string
    city: string
    _count: FacebookUserCountAggregateOutputType | null
    _avg: FacebookUserAvgAggregateOutputType | null
    _sum: FacebookUserSumAggregateOutputType | null
    _min: FacebookUserMinAggregateOutputType | null
    _max: FacebookUserMaxAggregateOutputType | null
  }

  type GetFacebookUserGroupByPayload<T extends FacebookUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacebookUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacebookUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacebookUserGroupByOutputType[P]>
            : GetScalarType<T[P], FacebookUserGroupByOutputType[P]>
        }
      >
    >


  export type FacebookUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    country?: boolean
    city?: boolean
    event?: boolean | FacebookUser$eventArgs<ExtArgs>
  }, ExtArgs["result"]["facebookUser"]>

  export type FacebookUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    country?: boolean
    city?: boolean
  }, ExtArgs["result"]["facebookUser"]>

  export type FacebookUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    country?: boolean
    city?: boolean
  }, ExtArgs["result"]["facebookUser"]>

  export type FacebookUserSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    country?: boolean
    city?: boolean
  }

  export type FacebookUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "age" | "gender" | "country" | "city", ExtArgs["result"]["facebookUser"]>
  export type FacebookUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | FacebookUser$eventArgs<ExtArgs>
  }
  export type FacebookUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FacebookUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FacebookUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacebookUser"
    objects: {
      event: Prisma.$EventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      age: number
      gender: $Enums.Gender
      country: string
      city: string
    }, ExtArgs["result"]["facebookUser"]>
    composites: {}
  }

  type FacebookUserGetPayload<S extends boolean | null | undefined | FacebookUserDefaultArgs> = $Result.GetResult<Prisma.$FacebookUserPayload, S>

  type FacebookUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacebookUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacebookUserCountAggregateInputType | true
    }

  export interface FacebookUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacebookUser'], meta: { name: 'FacebookUser' } }
    /**
     * Find zero or one FacebookUser that matches the filter.
     * @param {FacebookUserFindUniqueArgs} args - Arguments to find a FacebookUser
     * @example
     * // Get one FacebookUser
     * const facebookUser = await prisma.facebookUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacebookUserFindUniqueArgs>(args: SelectSubset<T, FacebookUserFindUniqueArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacebookUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacebookUserFindUniqueOrThrowArgs} args - Arguments to find a FacebookUser
     * @example
     * // Get one FacebookUser
     * const facebookUser = await prisma.facebookUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacebookUserFindUniqueOrThrowArgs>(args: SelectSubset<T, FacebookUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookUserFindFirstArgs} args - Arguments to find a FacebookUser
     * @example
     * // Get one FacebookUser
     * const facebookUser = await prisma.facebookUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacebookUserFindFirstArgs>(args?: SelectSubset<T, FacebookUserFindFirstArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookUserFindFirstOrThrowArgs} args - Arguments to find a FacebookUser
     * @example
     * // Get one FacebookUser
     * const facebookUser = await prisma.facebookUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacebookUserFindFirstOrThrowArgs>(args?: SelectSubset<T, FacebookUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacebookUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacebookUsers
     * const facebookUsers = await prisma.facebookUser.findMany()
     * 
     * // Get first 10 FacebookUsers
     * const facebookUsers = await prisma.facebookUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facebookUserWithIdOnly = await prisma.facebookUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacebookUserFindManyArgs>(args?: SelectSubset<T, FacebookUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacebookUser.
     * @param {FacebookUserCreateArgs} args - Arguments to create a FacebookUser.
     * @example
     * // Create one FacebookUser
     * const FacebookUser = await prisma.facebookUser.create({
     *   data: {
     *     // ... data to create a FacebookUser
     *   }
     * })
     * 
     */
    create<T extends FacebookUserCreateArgs>(args: SelectSubset<T, FacebookUserCreateArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacebookUsers.
     * @param {FacebookUserCreateManyArgs} args - Arguments to create many FacebookUsers.
     * @example
     * // Create many FacebookUsers
     * const facebookUser = await prisma.facebookUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacebookUserCreateManyArgs>(args?: SelectSubset<T, FacebookUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacebookUsers and returns the data saved in the database.
     * @param {FacebookUserCreateManyAndReturnArgs} args - Arguments to create many FacebookUsers.
     * @example
     * // Create many FacebookUsers
     * const facebookUser = await prisma.facebookUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacebookUsers and only return the `id`
     * const facebookUserWithIdOnly = await prisma.facebookUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacebookUserCreateManyAndReturnArgs>(args?: SelectSubset<T, FacebookUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacebookUser.
     * @param {FacebookUserDeleteArgs} args - Arguments to delete one FacebookUser.
     * @example
     * // Delete one FacebookUser
     * const FacebookUser = await prisma.facebookUser.delete({
     *   where: {
     *     // ... filter to delete one FacebookUser
     *   }
     * })
     * 
     */
    delete<T extends FacebookUserDeleteArgs>(args: SelectSubset<T, FacebookUserDeleteArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacebookUser.
     * @param {FacebookUserUpdateArgs} args - Arguments to update one FacebookUser.
     * @example
     * // Update one FacebookUser
     * const facebookUser = await prisma.facebookUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacebookUserUpdateArgs>(args: SelectSubset<T, FacebookUserUpdateArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacebookUsers.
     * @param {FacebookUserDeleteManyArgs} args - Arguments to filter FacebookUsers to delete.
     * @example
     * // Delete a few FacebookUsers
     * const { count } = await prisma.facebookUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacebookUserDeleteManyArgs>(args?: SelectSubset<T, FacebookUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacebookUsers
     * const facebookUser = await prisma.facebookUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacebookUserUpdateManyArgs>(args: SelectSubset<T, FacebookUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookUsers and returns the data updated in the database.
     * @param {FacebookUserUpdateManyAndReturnArgs} args - Arguments to update many FacebookUsers.
     * @example
     * // Update many FacebookUsers
     * const facebookUser = await prisma.facebookUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacebookUsers and only return the `id`
     * const facebookUserWithIdOnly = await prisma.facebookUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends FacebookUserUpdateManyAndReturnArgs>(args: SelectSubset<T, FacebookUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacebookUser.
     * @param {FacebookUserUpsertArgs} args - Arguments to update or create a FacebookUser.
     * @example
     * // Update or create a FacebookUser
     * const facebookUser = await prisma.facebookUser.upsert({
     *   create: {
     *     // ... data to create a FacebookUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacebookUser we want to update
     *   }
     * })
     */
    upsert<T extends FacebookUserUpsertArgs>(args: SelectSubset<T, FacebookUserUpsertArgs<ExtArgs>>): Prisma__FacebookUserClient<$Result.GetResult<Prisma.$FacebookUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacebookUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookUserCountArgs} args - Arguments to filter FacebookUsers to count.
     * @example
     * // Count the number of FacebookUsers
     * const count = await prisma.facebookUser.count({
     *   where: {
     *     // ... the filter for the FacebookUsers we want to count
     *   }
     * })
    **/
    count<T extends FacebookUserCountArgs>(
      args?: Subset<T, FacebookUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacebookUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacebookUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacebookUserAggregateArgs>(args: Subset<T, FacebookUserAggregateArgs>): Prisma.PrismaPromise<GetFacebookUserAggregateType<T>>

    /**
     * Group by FacebookUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookUserGroupByArgs} args - Group by arguments.
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
      T extends FacebookUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacebookUserGroupByArgs['orderBy'] }
        : { orderBy?: FacebookUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacebookUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacebookUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacebookUser model
   */
  readonly fields: FacebookUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacebookUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacebookUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends FacebookUser$eventArgs<ExtArgs> = {}>(args?: Subset<T, FacebookUser$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FacebookUser model
   */
  interface FacebookUserFieldRefs {
    readonly id: FieldRef<"FacebookUser", 'String'>
    readonly userId: FieldRef<"FacebookUser", 'String'>
    readonly name: FieldRef<"FacebookUser", 'String'>
    readonly age: FieldRef<"FacebookUser", 'Int'>
    readonly gender: FieldRef<"FacebookUser", 'Gender'>
    readonly country: FieldRef<"FacebookUser", 'String'>
    readonly city: FieldRef<"FacebookUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FacebookUser findUnique
   */
  export type FacebookUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * Filter, which FacebookUser to fetch.
     */
    where: FacebookUserWhereUniqueInput
  }

  /**
   * FacebookUser findUniqueOrThrow
   */
  export type FacebookUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * Filter, which FacebookUser to fetch.
     */
    where: FacebookUserWhereUniqueInput
  }

  /**
   * FacebookUser findFirst
   */
  export type FacebookUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * Filter, which FacebookUser to fetch.
     */
    where?: FacebookUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookUsers to fetch.
     */
    orderBy?: FacebookUserOrderByWithRelationInput | FacebookUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookUsers.
     */
    cursor?: FacebookUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookUsers.
     */
    distinct?: FacebookUserScalarFieldEnum | FacebookUserScalarFieldEnum[]
  }

  /**
   * FacebookUser findFirstOrThrow
   */
  export type FacebookUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * Filter, which FacebookUser to fetch.
     */
    where?: FacebookUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookUsers to fetch.
     */
    orderBy?: FacebookUserOrderByWithRelationInput | FacebookUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookUsers.
     */
    cursor?: FacebookUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookUsers.
     */
    distinct?: FacebookUserScalarFieldEnum | FacebookUserScalarFieldEnum[]
  }

  /**
   * FacebookUser findMany
   */
  export type FacebookUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * Filter, which FacebookUsers to fetch.
     */
    where?: FacebookUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookUsers to fetch.
     */
    orderBy?: FacebookUserOrderByWithRelationInput | FacebookUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacebookUsers.
     */
    cursor?: FacebookUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookUsers.
     */
    skip?: number
    distinct?: FacebookUserScalarFieldEnum | FacebookUserScalarFieldEnum[]
  }

  /**
   * FacebookUser create
   */
  export type FacebookUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * The data needed to create a FacebookUser.
     */
    data: XOR<FacebookUserCreateInput, FacebookUserUncheckedCreateInput>
  }

  /**
   * FacebookUser createMany
   */
  export type FacebookUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacebookUsers.
     */
    data: FacebookUserCreateManyInput | FacebookUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacebookUser createManyAndReturn
   */
  export type FacebookUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * The data used to create many FacebookUsers.
     */
    data: FacebookUserCreateManyInput | FacebookUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacebookUser update
   */
  export type FacebookUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * The data needed to update a FacebookUser.
     */
    data: XOR<FacebookUserUpdateInput, FacebookUserUncheckedUpdateInput>
    /**
     * Choose, which FacebookUser to update.
     */
    where: FacebookUserWhereUniqueInput
  }

  /**
   * FacebookUser updateMany
   */
  export type FacebookUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacebookUsers.
     */
    data: XOR<FacebookUserUpdateManyMutationInput, FacebookUserUncheckedUpdateManyInput>
    /**
     * Filter which FacebookUsers to update
     */
    where?: FacebookUserWhereInput
    /**
     * Limit how many FacebookUsers to update.
     */
    limit?: number
  }

  /**
   * FacebookUser updateManyAndReturn
   */
  export type FacebookUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * The data used to update FacebookUsers.
     */
    data: XOR<FacebookUserUpdateManyMutationInput, FacebookUserUncheckedUpdateManyInput>
    /**
     * Filter which FacebookUsers to update
     */
    where?: FacebookUserWhereInput
    /**
     * Limit how many FacebookUsers to update.
     */
    limit?: number
  }

  /**
   * FacebookUser upsert
   */
  export type FacebookUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * The filter to search for the FacebookUser to update in case it exists.
     */
    where: FacebookUserWhereUniqueInput
    /**
     * In case the FacebookUser found by the `where` argument doesn't exist, create a new FacebookUser with this data.
     */
    create: XOR<FacebookUserCreateInput, FacebookUserUncheckedCreateInput>
    /**
     * In case the FacebookUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacebookUserUpdateInput, FacebookUserUncheckedUpdateInput>
  }

  /**
   * FacebookUser delete
   */
  export type FacebookUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
    /**
     * Filter which FacebookUser to delete.
     */
    where: FacebookUserWhereUniqueInput
  }

  /**
   * FacebookUser deleteMany
   */
  export type FacebookUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookUsers to delete
     */
    where?: FacebookUserWhereInput
    /**
     * Limit how many FacebookUsers to delete.
     */
    limit?: number
  }

  /**
   * FacebookUser.event
   */
  export type FacebookUser$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * FacebookUser without action
   */
  export type FacebookUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookUser
     */
    select?: FacebookUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookUser
     */
    omit?: FacebookUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookUserInclude<ExtArgs> | null
  }


  /**
   * Model TiktokUser
   */

  export type AggregateTiktokUser = {
    _count: TiktokUserCountAggregateOutputType | null
    _avg: TiktokUserAvgAggregateOutputType | null
    _sum: TiktokUserSumAggregateOutputType | null
    _min: TiktokUserMinAggregateOutputType | null
    _max: TiktokUserMaxAggregateOutputType | null
  }

  export type TiktokUserAvgAggregateOutputType = {
    followers: number | null
  }

  export type TiktokUserSumAggregateOutputType = {
    followers: number | null
  }

  export type TiktokUserMinAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    followers: number | null
  }

  export type TiktokUserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    followers: number | null
  }

  export type TiktokUserCountAggregateOutputType = {
    id: number
    userId: number
    username: number
    followers: number
    _all: number
  }


  export type TiktokUserAvgAggregateInputType = {
    followers?: true
  }

  export type TiktokUserSumAggregateInputType = {
    followers?: true
  }

  export type TiktokUserMinAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    followers?: true
  }

  export type TiktokUserMaxAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    followers?: true
  }

  export type TiktokUserCountAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    followers?: true
    _all?: true
  }

  export type TiktokUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokUser to aggregate.
     */
    where?: TiktokUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokUsers to fetch.
     */
    orderBy?: TiktokUserOrderByWithRelationInput | TiktokUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TiktokUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TiktokUsers
    **/
    _count?: true | TiktokUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TiktokUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TiktokUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiktokUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiktokUserMaxAggregateInputType
  }

  export type GetTiktokUserAggregateType<T extends TiktokUserAggregateArgs> = {
        [P in keyof T & keyof AggregateTiktokUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiktokUser[P]>
      : GetScalarType<T[P], AggregateTiktokUser[P]>
  }




  export type TiktokUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiktokUserWhereInput
    orderBy?: TiktokUserOrderByWithAggregationInput | TiktokUserOrderByWithAggregationInput[]
    by: TiktokUserScalarFieldEnum[] | TiktokUserScalarFieldEnum
    having?: TiktokUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiktokUserCountAggregateInputType | true
    _avg?: TiktokUserAvgAggregateInputType
    _sum?: TiktokUserSumAggregateInputType
    _min?: TiktokUserMinAggregateInputType
    _max?: TiktokUserMaxAggregateInputType
  }

  export type TiktokUserGroupByOutputType = {
    id: string
    userId: string
    username: string
    followers: number
    _count: TiktokUserCountAggregateOutputType | null
    _avg: TiktokUserAvgAggregateOutputType | null
    _sum: TiktokUserSumAggregateOutputType | null
    _min: TiktokUserMinAggregateOutputType | null
    _max: TiktokUserMaxAggregateOutputType | null
  }

  type GetTiktokUserGroupByPayload<T extends TiktokUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiktokUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiktokUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiktokUserGroupByOutputType[P]>
            : GetScalarType<T[P], TiktokUserGroupByOutputType[P]>
        }
      >
    >


  export type TiktokUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    followers?: boolean
    event?: boolean | TiktokUser$eventArgs<ExtArgs>
  }, ExtArgs["result"]["tiktokUser"]>

  export type TiktokUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    followers?: boolean
  }, ExtArgs["result"]["tiktokUser"]>

  export type TiktokUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    followers?: boolean
  }, ExtArgs["result"]["tiktokUser"]>

  export type TiktokUserSelectScalar = {
    id?: boolean
    userId?: boolean
    username?: boolean
    followers?: boolean
  }

  export type TiktokUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "username" | "followers", ExtArgs["result"]["tiktokUser"]>
  export type TiktokUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | TiktokUser$eventArgs<ExtArgs>
  }
  export type TiktokUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TiktokUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TiktokUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TiktokUser"
    objects: {
      event: Prisma.$EventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      username: string
      followers: number
    }, ExtArgs["result"]["tiktokUser"]>
    composites: {}
  }

  type TiktokUserGetPayload<S extends boolean | null | undefined | TiktokUserDefaultArgs> = $Result.GetResult<Prisma.$TiktokUserPayload, S>

  type TiktokUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TiktokUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiktokUserCountAggregateInputType | true
    }

  export interface TiktokUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TiktokUser'], meta: { name: 'TiktokUser' } }
    /**
     * Find zero or one TiktokUser that matches the filter.
     * @param {TiktokUserFindUniqueArgs} args - Arguments to find a TiktokUser
     * @example
     * // Get one TiktokUser
     * const tiktokUser = await prisma.tiktokUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TiktokUserFindUniqueArgs>(args: SelectSubset<T, TiktokUserFindUniqueArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TiktokUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TiktokUserFindUniqueOrThrowArgs} args - Arguments to find a TiktokUser
     * @example
     * // Get one TiktokUser
     * const tiktokUser = await prisma.tiktokUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TiktokUserFindUniqueOrThrowArgs>(args: SelectSubset<T, TiktokUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserFindFirstArgs} args - Arguments to find a TiktokUser
     * @example
     * // Get one TiktokUser
     * const tiktokUser = await prisma.tiktokUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TiktokUserFindFirstArgs>(args?: SelectSubset<T, TiktokUserFindFirstArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserFindFirstOrThrowArgs} args - Arguments to find a TiktokUser
     * @example
     * // Get one TiktokUser
     * const tiktokUser = await prisma.tiktokUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TiktokUserFindFirstOrThrowArgs>(args?: SelectSubset<T, TiktokUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TiktokUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TiktokUsers
     * const tiktokUsers = await prisma.tiktokUser.findMany()
     * 
     * // Get first 10 TiktokUsers
     * const tiktokUsers = await prisma.tiktokUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tiktokUserWithIdOnly = await prisma.tiktokUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TiktokUserFindManyArgs>(args?: SelectSubset<T, TiktokUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TiktokUser.
     * @param {TiktokUserCreateArgs} args - Arguments to create a TiktokUser.
     * @example
     * // Create one TiktokUser
     * const TiktokUser = await prisma.tiktokUser.create({
     *   data: {
     *     // ... data to create a TiktokUser
     *   }
     * })
     * 
     */
    create<T extends TiktokUserCreateArgs>(args: SelectSubset<T, TiktokUserCreateArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TiktokUsers.
     * @param {TiktokUserCreateManyArgs} args - Arguments to create many TiktokUsers.
     * @example
     * // Create many TiktokUsers
     * const tiktokUser = await prisma.tiktokUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TiktokUserCreateManyArgs>(args?: SelectSubset<T, TiktokUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TiktokUsers and returns the data saved in the database.
     * @param {TiktokUserCreateManyAndReturnArgs} args - Arguments to create many TiktokUsers.
     * @example
     * // Create many TiktokUsers
     * const tiktokUser = await prisma.tiktokUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TiktokUsers and only return the `id`
     * const tiktokUserWithIdOnly = await prisma.tiktokUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TiktokUserCreateManyAndReturnArgs>(args?: SelectSubset<T, TiktokUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TiktokUser.
     * @param {TiktokUserDeleteArgs} args - Arguments to delete one TiktokUser.
     * @example
     * // Delete one TiktokUser
     * const TiktokUser = await prisma.tiktokUser.delete({
     *   where: {
     *     // ... filter to delete one TiktokUser
     *   }
     * })
     * 
     */
    delete<T extends TiktokUserDeleteArgs>(args: SelectSubset<T, TiktokUserDeleteArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TiktokUser.
     * @param {TiktokUserUpdateArgs} args - Arguments to update one TiktokUser.
     * @example
     * // Update one TiktokUser
     * const tiktokUser = await prisma.tiktokUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TiktokUserUpdateArgs>(args: SelectSubset<T, TiktokUserUpdateArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TiktokUsers.
     * @param {TiktokUserDeleteManyArgs} args - Arguments to filter TiktokUsers to delete.
     * @example
     * // Delete a few TiktokUsers
     * const { count } = await prisma.tiktokUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TiktokUserDeleteManyArgs>(args?: SelectSubset<T, TiktokUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TiktokUsers
     * const tiktokUser = await prisma.tiktokUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TiktokUserUpdateManyArgs>(args: SelectSubset<T, TiktokUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokUsers and returns the data updated in the database.
     * @param {TiktokUserUpdateManyAndReturnArgs} args - Arguments to update many TiktokUsers.
     * @example
     * // Update many TiktokUsers
     * const tiktokUser = await prisma.tiktokUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TiktokUsers and only return the `id`
     * const tiktokUserWithIdOnly = await prisma.tiktokUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends TiktokUserUpdateManyAndReturnArgs>(args: SelectSubset<T, TiktokUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TiktokUser.
     * @param {TiktokUserUpsertArgs} args - Arguments to update or create a TiktokUser.
     * @example
     * // Update or create a TiktokUser
     * const tiktokUser = await prisma.tiktokUser.upsert({
     *   create: {
     *     // ... data to create a TiktokUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TiktokUser we want to update
     *   }
     * })
     */
    upsert<T extends TiktokUserUpsertArgs>(args: SelectSubset<T, TiktokUserUpsertArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TiktokUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserCountArgs} args - Arguments to filter TiktokUsers to count.
     * @example
     * // Count the number of TiktokUsers
     * const count = await prisma.tiktokUser.count({
     *   where: {
     *     // ... the filter for the TiktokUsers we want to count
     *   }
     * })
    **/
    count<T extends TiktokUserCountArgs>(
      args?: Subset<T, TiktokUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiktokUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TiktokUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TiktokUserAggregateArgs>(args: Subset<T, TiktokUserAggregateArgs>): Prisma.PrismaPromise<GetTiktokUserAggregateType<T>>

    /**
     * Group by TiktokUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserGroupByArgs} args - Group by arguments.
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
      T extends TiktokUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TiktokUserGroupByArgs['orderBy'] }
        : { orderBy?: TiktokUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TiktokUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiktokUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TiktokUser model
   */
  readonly fields: TiktokUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TiktokUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TiktokUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends TiktokUser$eventArgs<ExtArgs> = {}>(args?: Subset<T, TiktokUser$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TiktokUser model
   */
  interface TiktokUserFieldRefs {
    readonly id: FieldRef<"TiktokUser", 'String'>
    readonly userId: FieldRef<"TiktokUser", 'String'>
    readonly username: FieldRef<"TiktokUser", 'String'>
    readonly followers: FieldRef<"TiktokUser", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TiktokUser findUnique
   */
  export type TiktokUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUser to fetch.
     */
    where: TiktokUserWhereUniqueInput
  }

  /**
   * TiktokUser findUniqueOrThrow
   */
  export type TiktokUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUser to fetch.
     */
    where: TiktokUserWhereUniqueInput
  }

  /**
   * TiktokUser findFirst
   */
  export type TiktokUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUser to fetch.
     */
    where?: TiktokUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokUsers to fetch.
     */
    orderBy?: TiktokUserOrderByWithRelationInput | TiktokUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokUsers.
     */
    cursor?: TiktokUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokUsers.
     */
    distinct?: TiktokUserScalarFieldEnum | TiktokUserScalarFieldEnum[]
  }

  /**
   * TiktokUser findFirstOrThrow
   */
  export type TiktokUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUser to fetch.
     */
    where?: TiktokUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokUsers to fetch.
     */
    orderBy?: TiktokUserOrderByWithRelationInput | TiktokUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokUsers.
     */
    cursor?: TiktokUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokUsers.
     */
    distinct?: TiktokUserScalarFieldEnum | TiktokUserScalarFieldEnum[]
  }

  /**
   * TiktokUser findMany
   */
  export type TiktokUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUsers to fetch.
     */
    where?: TiktokUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokUsers to fetch.
     */
    orderBy?: TiktokUserOrderByWithRelationInput | TiktokUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TiktokUsers.
     */
    cursor?: TiktokUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokUsers.
     */
    skip?: number
    distinct?: TiktokUserScalarFieldEnum | TiktokUserScalarFieldEnum[]
  }

  /**
   * TiktokUser create
   */
  export type TiktokUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * The data needed to create a TiktokUser.
     */
    data: XOR<TiktokUserCreateInput, TiktokUserUncheckedCreateInput>
  }

  /**
   * TiktokUser createMany
   */
  export type TiktokUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TiktokUsers.
     */
    data: TiktokUserCreateManyInput | TiktokUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiktokUser createManyAndReturn
   */
  export type TiktokUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * The data used to create many TiktokUsers.
     */
    data: TiktokUserCreateManyInput | TiktokUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiktokUser update
   */
  export type TiktokUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * The data needed to update a TiktokUser.
     */
    data: XOR<TiktokUserUpdateInput, TiktokUserUncheckedUpdateInput>
    /**
     * Choose, which TiktokUser to update.
     */
    where: TiktokUserWhereUniqueInput
  }

  /**
   * TiktokUser updateMany
   */
  export type TiktokUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TiktokUsers.
     */
    data: XOR<TiktokUserUpdateManyMutationInput, TiktokUserUncheckedUpdateManyInput>
    /**
     * Filter which TiktokUsers to update
     */
    where?: TiktokUserWhereInput
    /**
     * Limit how many TiktokUsers to update.
     */
    limit?: number
  }

  /**
   * TiktokUser updateManyAndReturn
   */
  export type TiktokUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * The data used to update TiktokUsers.
     */
    data: XOR<TiktokUserUpdateManyMutationInput, TiktokUserUncheckedUpdateManyInput>
    /**
     * Filter which TiktokUsers to update
     */
    where?: TiktokUserWhereInput
    /**
     * Limit how many TiktokUsers to update.
     */
    limit?: number
  }

  /**
   * TiktokUser upsert
   */
  export type TiktokUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * The filter to search for the TiktokUser to update in case it exists.
     */
    where: TiktokUserWhereUniqueInput
    /**
     * In case the TiktokUser found by the `where` argument doesn't exist, create a new TiktokUser with this data.
     */
    create: XOR<TiktokUserCreateInput, TiktokUserUncheckedCreateInput>
    /**
     * In case the TiktokUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TiktokUserUpdateInput, TiktokUserUncheckedUpdateInput>
  }

  /**
   * TiktokUser delete
   */
  export type TiktokUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter which TiktokUser to delete.
     */
    where: TiktokUserWhereUniqueInput
  }

  /**
   * TiktokUser deleteMany
   */
  export type TiktokUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokUsers to delete
     */
    where?: TiktokUserWhereInput
    /**
     * Limit how many TiktokUsers to delete.
     */
    limit?: number
  }

  /**
   * TiktokUser.event
   */
  export type TiktokUser$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * TiktokUser without action
   */
  export type TiktokUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
  }


  /**
   * Model FacebookEngagement
   */

  export type AggregateFacebookEngagement = {
    _count: FacebookEngagementCountAggregateOutputType | null
    _min: FacebookEngagementMinAggregateOutputType | null
    _max: FacebookEngagementMaxAggregateOutputType | null
  }

  export type FacebookEngagementMinAggregateOutputType = {
    id: string | null
    actionTime: Date | null
    referrer: $Enums.Referrer | null
    videoId: string | null
    adId: string | null
    campaignId: string | null
    clickPosition: $Enums.ClickPosition | null
    device: $Enums.Device | null
    browser: $Enums.Browser | null
    purchaseAmount: string | null
  }

  export type FacebookEngagementMaxAggregateOutputType = {
    id: string | null
    actionTime: Date | null
    referrer: $Enums.Referrer | null
    videoId: string | null
    adId: string | null
    campaignId: string | null
    clickPosition: $Enums.ClickPosition | null
    device: $Enums.Device | null
    browser: $Enums.Browser | null
    purchaseAmount: string | null
  }

  export type FacebookEngagementCountAggregateOutputType = {
    id: number
    actionTime: number
    referrer: number
    videoId: number
    adId: number
    campaignId: number
    clickPosition: number
    device: number
    browser: number
    purchaseAmount: number
    _all: number
  }


  export type FacebookEngagementMinAggregateInputType = {
    id?: true
    actionTime?: true
    referrer?: true
    videoId?: true
    adId?: true
    campaignId?: true
    clickPosition?: true
    device?: true
    browser?: true
    purchaseAmount?: true
  }

  export type FacebookEngagementMaxAggregateInputType = {
    id?: true
    actionTime?: true
    referrer?: true
    videoId?: true
    adId?: true
    campaignId?: true
    clickPosition?: true
    device?: true
    browser?: true
    purchaseAmount?: true
  }

  export type FacebookEngagementCountAggregateInputType = {
    id?: true
    actionTime?: true
    referrer?: true
    videoId?: true
    adId?: true
    campaignId?: true
    clickPosition?: true
    device?: true
    browser?: true
    purchaseAmount?: true
    _all?: true
  }

  export type FacebookEngagementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookEngagement to aggregate.
     */
    where?: FacebookEngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagements to fetch.
     */
    orderBy?: FacebookEngagementOrderByWithRelationInput | FacebookEngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacebookEngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacebookEngagements
    **/
    _count?: true | FacebookEngagementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacebookEngagementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacebookEngagementMaxAggregateInputType
  }

  export type GetFacebookEngagementAggregateType<T extends FacebookEngagementAggregateArgs> = {
        [P in keyof T & keyof AggregateFacebookEngagement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacebookEngagement[P]>
      : GetScalarType<T[P], AggregateFacebookEngagement[P]>
  }




  export type FacebookEngagementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacebookEngagementWhereInput
    orderBy?: FacebookEngagementOrderByWithAggregationInput | FacebookEngagementOrderByWithAggregationInput[]
    by: FacebookEngagementScalarFieldEnum[] | FacebookEngagementScalarFieldEnum
    having?: FacebookEngagementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacebookEngagementCountAggregateInputType | true
    _min?: FacebookEngagementMinAggregateInputType
    _max?: FacebookEngagementMaxAggregateInputType
  }

  export type FacebookEngagementGroupByOutputType = {
    id: string
    actionTime: Date | null
    referrer: $Enums.Referrer | null
    videoId: string | null
    adId: string | null
    campaignId: string | null
    clickPosition: $Enums.ClickPosition | null
    device: $Enums.Device | null
    browser: $Enums.Browser | null
    purchaseAmount: string | null
    _count: FacebookEngagementCountAggregateOutputType | null
    _min: FacebookEngagementMinAggregateOutputType | null
    _max: FacebookEngagementMaxAggregateOutputType | null
  }

  type GetFacebookEngagementGroupByPayload<T extends FacebookEngagementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacebookEngagementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacebookEngagementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacebookEngagementGroupByOutputType[P]>
            : GetScalarType<T[P], FacebookEngagementGroupByOutputType[P]>
        }
      >
    >


  export type FacebookEngagementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionTime?: boolean
    referrer?: boolean
    videoId?: boolean
    adId?: boolean
    campaignId?: boolean
    clickPosition?: boolean
    device?: boolean
    browser?: boolean
    purchaseAmount?: boolean
    event?: boolean | FacebookEngagement$eventArgs<ExtArgs>
  }, ExtArgs["result"]["facebookEngagement"]>

  export type FacebookEngagementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionTime?: boolean
    referrer?: boolean
    videoId?: boolean
    adId?: boolean
    campaignId?: boolean
    clickPosition?: boolean
    device?: boolean
    browser?: boolean
    purchaseAmount?: boolean
  }, ExtArgs["result"]["facebookEngagement"]>

  export type FacebookEngagementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionTime?: boolean
    referrer?: boolean
    videoId?: boolean
    adId?: boolean
    campaignId?: boolean
    clickPosition?: boolean
    device?: boolean
    browser?: boolean
    purchaseAmount?: boolean
  }, ExtArgs["result"]["facebookEngagement"]>

  export type FacebookEngagementSelectScalar = {
    id?: boolean
    actionTime?: boolean
    referrer?: boolean
    videoId?: boolean
    adId?: boolean
    campaignId?: boolean
    clickPosition?: boolean
    device?: boolean
    browser?: boolean
    purchaseAmount?: boolean
  }

  export type FacebookEngagementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actionTime" | "referrer" | "videoId" | "adId" | "campaignId" | "clickPosition" | "device" | "browser" | "purchaseAmount", ExtArgs["result"]["facebookEngagement"]>
  export type FacebookEngagementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | FacebookEngagement$eventArgs<ExtArgs>
  }
  export type FacebookEngagementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FacebookEngagementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FacebookEngagementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacebookEngagement"
    objects: {
      event: Prisma.$EventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actionTime: Date | null
      referrer: $Enums.Referrer | null
      videoId: string | null
      adId: string | null
      campaignId: string | null
      clickPosition: $Enums.ClickPosition | null
      device: $Enums.Device | null
      browser: $Enums.Browser | null
      purchaseAmount: string | null
    }, ExtArgs["result"]["facebookEngagement"]>
    composites: {}
  }

  type FacebookEngagementGetPayload<S extends boolean | null | undefined | FacebookEngagementDefaultArgs> = $Result.GetResult<Prisma.$FacebookEngagementPayload, S>

  type FacebookEngagementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacebookEngagementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacebookEngagementCountAggregateInputType | true
    }

  export interface FacebookEngagementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacebookEngagement'], meta: { name: 'FacebookEngagement' } }
    /**
     * Find zero or one FacebookEngagement that matches the filter.
     * @param {FacebookEngagementFindUniqueArgs} args - Arguments to find a FacebookEngagement
     * @example
     * // Get one FacebookEngagement
     * const facebookEngagement = await prisma.facebookEngagement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacebookEngagementFindUniqueArgs>(args: SelectSubset<T, FacebookEngagementFindUniqueArgs<ExtArgs>>): Prisma__FacebookEngagementClient<$Result.GetResult<Prisma.$FacebookEngagementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacebookEngagement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacebookEngagementFindUniqueOrThrowArgs} args - Arguments to find a FacebookEngagement
     * @example
     * // Get one FacebookEngagement
     * const facebookEngagement = await prisma.facebookEngagement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacebookEngagementFindUniqueOrThrowArgs>(args: SelectSubset<T, FacebookEngagementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacebookEngagementClient<$Result.GetResult<Prisma.$FacebookEngagementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookEngagement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementFindFirstArgs} args - Arguments to find a FacebookEngagement
     * @example
     * // Get one FacebookEngagement
     * const facebookEngagement = await prisma.facebookEngagement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacebookEngagementFindFirstArgs>(args?: SelectSubset<T, FacebookEngagementFindFirstArgs<ExtArgs>>): Prisma__FacebookEngagementClient<$Result.GetResult<Prisma.$FacebookEngagementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacebookEngagement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementFindFirstOrThrowArgs} args - Arguments to find a FacebookEngagement
     * @example
     * // Get one FacebookEngagement
     * const facebookEngagement = await prisma.facebookEngagement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacebookEngagementFindFirstOrThrowArgs>(args?: SelectSubset<T, FacebookEngagementFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacebookEngagementClient<$Result.GetResult<Prisma.$FacebookEngagementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacebookEngagements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacebookEngagements
     * const facebookEngagements = await prisma.facebookEngagement.findMany()
     * 
     * // Get first 10 FacebookEngagements
     * const facebookEngagements = await prisma.facebookEngagement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facebookEngagementWithIdOnly = await prisma.facebookEngagement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacebookEngagementFindManyArgs>(args?: SelectSubset<T, FacebookEngagementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEngagementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacebookEngagement.
     * @param {FacebookEngagementCreateArgs} args - Arguments to create a FacebookEngagement.
     * @example
     * // Create one FacebookEngagement
     * const FacebookEngagement = await prisma.facebookEngagement.create({
     *   data: {
     *     // ... data to create a FacebookEngagement
     *   }
     * })
     * 
     */
    create<T extends FacebookEngagementCreateArgs>(args: SelectSubset<T, FacebookEngagementCreateArgs<ExtArgs>>): Prisma__FacebookEngagementClient<$Result.GetResult<Prisma.$FacebookEngagementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacebookEngagements.
     * @param {FacebookEngagementCreateManyArgs} args - Arguments to create many FacebookEngagements.
     * @example
     * // Create many FacebookEngagements
     * const facebookEngagement = await prisma.facebookEngagement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacebookEngagementCreateManyArgs>(args?: SelectSubset<T, FacebookEngagementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacebookEngagements and returns the data saved in the database.
     * @param {FacebookEngagementCreateManyAndReturnArgs} args - Arguments to create many FacebookEngagements.
     * @example
     * // Create many FacebookEngagements
     * const facebookEngagement = await prisma.facebookEngagement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacebookEngagements and only return the `id`
     * const facebookEngagementWithIdOnly = await prisma.facebookEngagement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacebookEngagementCreateManyAndReturnArgs>(args?: SelectSubset<T, FacebookEngagementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEngagementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacebookEngagement.
     * @param {FacebookEngagementDeleteArgs} args - Arguments to delete one FacebookEngagement.
     * @example
     * // Delete one FacebookEngagement
     * const FacebookEngagement = await prisma.facebookEngagement.delete({
     *   where: {
     *     // ... filter to delete one FacebookEngagement
     *   }
     * })
     * 
     */
    delete<T extends FacebookEngagementDeleteArgs>(args: SelectSubset<T, FacebookEngagementDeleteArgs<ExtArgs>>): Prisma__FacebookEngagementClient<$Result.GetResult<Prisma.$FacebookEngagementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacebookEngagement.
     * @param {FacebookEngagementUpdateArgs} args - Arguments to update one FacebookEngagement.
     * @example
     * // Update one FacebookEngagement
     * const facebookEngagement = await prisma.facebookEngagement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacebookEngagementUpdateArgs>(args: SelectSubset<T, FacebookEngagementUpdateArgs<ExtArgs>>): Prisma__FacebookEngagementClient<$Result.GetResult<Prisma.$FacebookEngagementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacebookEngagements.
     * @param {FacebookEngagementDeleteManyArgs} args - Arguments to filter FacebookEngagements to delete.
     * @example
     * // Delete a few FacebookEngagements
     * const { count } = await prisma.facebookEngagement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacebookEngagementDeleteManyArgs>(args?: SelectSubset<T, FacebookEngagementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookEngagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacebookEngagements
     * const facebookEngagement = await prisma.facebookEngagement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacebookEngagementUpdateManyArgs>(args: SelectSubset<T, FacebookEngagementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacebookEngagements and returns the data updated in the database.
     * @param {FacebookEngagementUpdateManyAndReturnArgs} args - Arguments to update many FacebookEngagements.
     * @example
     * // Update many FacebookEngagements
     * const facebookEngagement = await prisma.facebookEngagement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacebookEngagements and only return the `id`
     * const facebookEngagementWithIdOnly = await prisma.facebookEngagement.updateManyAndReturn({
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
    updateManyAndReturn<T extends FacebookEngagementUpdateManyAndReturnArgs>(args: SelectSubset<T, FacebookEngagementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacebookEngagementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacebookEngagement.
     * @param {FacebookEngagementUpsertArgs} args - Arguments to update or create a FacebookEngagement.
     * @example
     * // Update or create a FacebookEngagement
     * const facebookEngagement = await prisma.facebookEngagement.upsert({
     *   create: {
     *     // ... data to create a FacebookEngagement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacebookEngagement we want to update
     *   }
     * })
     */
    upsert<T extends FacebookEngagementUpsertArgs>(args: SelectSubset<T, FacebookEngagementUpsertArgs<ExtArgs>>): Prisma__FacebookEngagementClient<$Result.GetResult<Prisma.$FacebookEngagementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacebookEngagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementCountArgs} args - Arguments to filter FacebookEngagements to count.
     * @example
     * // Count the number of FacebookEngagements
     * const count = await prisma.facebookEngagement.count({
     *   where: {
     *     // ... the filter for the FacebookEngagements we want to count
     *   }
     * })
    **/
    count<T extends FacebookEngagementCountArgs>(
      args?: Subset<T, FacebookEngagementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacebookEngagementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacebookEngagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacebookEngagementAggregateArgs>(args: Subset<T, FacebookEngagementAggregateArgs>): Prisma.PrismaPromise<GetFacebookEngagementAggregateType<T>>

    /**
     * Group by FacebookEngagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookEngagementGroupByArgs} args - Group by arguments.
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
      T extends FacebookEngagementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacebookEngagementGroupByArgs['orderBy'] }
        : { orderBy?: FacebookEngagementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacebookEngagementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacebookEngagementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacebookEngagement model
   */
  readonly fields: FacebookEngagementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacebookEngagement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacebookEngagementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends FacebookEngagement$eventArgs<ExtArgs> = {}>(args?: Subset<T, FacebookEngagement$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FacebookEngagement model
   */
  interface FacebookEngagementFieldRefs {
    readonly id: FieldRef<"FacebookEngagement", 'String'>
    readonly actionTime: FieldRef<"FacebookEngagement", 'DateTime'>
    readonly referrer: FieldRef<"FacebookEngagement", 'Referrer'>
    readonly videoId: FieldRef<"FacebookEngagement", 'String'>
    readonly adId: FieldRef<"FacebookEngagement", 'String'>
    readonly campaignId: FieldRef<"FacebookEngagement", 'String'>
    readonly clickPosition: FieldRef<"FacebookEngagement", 'ClickPosition'>
    readonly device: FieldRef<"FacebookEngagement", 'Device'>
    readonly browser: FieldRef<"FacebookEngagement", 'Browser'>
    readonly purchaseAmount: FieldRef<"FacebookEngagement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FacebookEngagement findUnique
   */
  export type FacebookEngagementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagement
     */
    select?: FacebookEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagement
     */
    omit?: FacebookEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagement to fetch.
     */
    where: FacebookEngagementWhereUniqueInput
  }

  /**
   * FacebookEngagement findUniqueOrThrow
   */
  export type FacebookEngagementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagement
     */
    select?: FacebookEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagement
     */
    omit?: FacebookEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagement to fetch.
     */
    where: FacebookEngagementWhereUniqueInput
  }

  /**
   * FacebookEngagement findFirst
   */
  export type FacebookEngagementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagement
     */
    select?: FacebookEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagement
     */
    omit?: FacebookEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagement to fetch.
     */
    where?: FacebookEngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagements to fetch.
     */
    orderBy?: FacebookEngagementOrderByWithRelationInput | FacebookEngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookEngagements.
     */
    cursor?: FacebookEngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookEngagements.
     */
    distinct?: FacebookEngagementScalarFieldEnum | FacebookEngagementScalarFieldEnum[]
  }

  /**
   * FacebookEngagement findFirstOrThrow
   */
  export type FacebookEngagementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagement
     */
    select?: FacebookEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagement
     */
    omit?: FacebookEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagement to fetch.
     */
    where?: FacebookEngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagements to fetch.
     */
    orderBy?: FacebookEngagementOrderByWithRelationInput | FacebookEngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacebookEngagements.
     */
    cursor?: FacebookEngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacebookEngagements.
     */
    distinct?: FacebookEngagementScalarFieldEnum | FacebookEngagementScalarFieldEnum[]
  }

  /**
   * FacebookEngagement findMany
   */
  export type FacebookEngagementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagement
     */
    select?: FacebookEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagement
     */
    omit?: FacebookEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementInclude<ExtArgs> | null
    /**
     * Filter, which FacebookEngagements to fetch.
     */
    where?: FacebookEngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacebookEngagements to fetch.
     */
    orderBy?: FacebookEngagementOrderByWithRelationInput | FacebookEngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacebookEngagements.
     */
    cursor?: FacebookEngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacebookEngagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacebookEngagements.
     */
    skip?: number
    distinct?: FacebookEngagementScalarFieldEnum | FacebookEngagementScalarFieldEnum[]
  }

  /**
   * FacebookEngagement create
   */
  export type FacebookEngagementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagement
     */
    select?: FacebookEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagement
     */
    omit?: FacebookEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementInclude<ExtArgs> | null
    /**
     * The data needed to create a FacebookEngagement.
     */
    data?: XOR<FacebookEngagementCreateInput, FacebookEngagementUncheckedCreateInput>
  }

  /**
   * FacebookEngagement createMany
   */
  export type FacebookEngagementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacebookEngagements.
     */
    data: FacebookEngagementCreateManyInput | FacebookEngagementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacebookEngagement createManyAndReturn
   */
  export type FacebookEngagementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagement
     */
    select?: FacebookEngagementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagement
     */
    omit?: FacebookEngagementOmit<ExtArgs> | null
    /**
     * The data used to create many FacebookEngagements.
     */
    data: FacebookEngagementCreateManyInput | FacebookEngagementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacebookEngagement update
   */
  export type FacebookEngagementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagement
     */
    select?: FacebookEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagement
     */
    omit?: FacebookEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementInclude<ExtArgs> | null
    /**
     * The data needed to update a FacebookEngagement.
     */
    data: XOR<FacebookEngagementUpdateInput, FacebookEngagementUncheckedUpdateInput>
    /**
     * Choose, which FacebookEngagement to update.
     */
    where: FacebookEngagementWhereUniqueInput
  }

  /**
   * FacebookEngagement updateMany
   */
  export type FacebookEngagementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacebookEngagements.
     */
    data: XOR<FacebookEngagementUpdateManyMutationInput, FacebookEngagementUncheckedUpdateManyInput>
    /**
     * Filter which FacebookEngagements to update
     */
    where?: FacebookEngagementWhereInput
    /**
     * Limit how many FacebookEngagements to update.
     */
    limit?: number
  }

  /**
   * FacebookEngagement updateManyAndReturn
   */
  export type FacebookEngagementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagement
     */
    select?: FacebookEngagementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagement
     */
    omit?: FacebookEngagementOmit<ExtArgs> | null
    /**
     * The data used to update FacebookEngagements.
     */
    data: XOR<FacebookEngagementUpdateManyMutationInput, FacebookEngagementUncheckedUpdateManyInput>
    /**
     * Filter which FacebookEngagements to update
     */
    where?: FacebookEngagementWhereInput
    /**
     * Limit how many FacebookEngagements to update.
     */
    limit?: number
  }

  /**
   * FacebookEngagement upsert
   */
  export type FacebookEngagementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagement
     */
    select?: FacebookEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagement
     */
    omit?: FacebookEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementInclude<ExtArgs> | null
    /**
     * The filter to search for the FacebookEngagement to update in case it exists.
     */
    where: FacebookEngagementWhereUniqueInput
    /**
     * In case the FacebookEngagement found by the `where` argument doesn't exist, create a new FacebookEngagement with this data.
     */
    create: XOR<FacebookEngagementCreateInput, FacebookEngagementUncheckedCreateInput>
    /**
     * In case the FacebookEngagement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacebookEngagementUpdateInput, FacebookEngagementUncheckedUpdateInput>
  }

  /**
   * FacebookEngagement delete
   */
  export type FacebookEngagementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagement
     */
    select?: FacebookEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagement
     */
    omit?: FacebookEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementInclude<ExtArgs> | null
    /**
     * Filter which FacebookEngagement to delete.
     */
    where: FacebookEngagementWhereUniqueInput
  }

  /**
   * FacebookEngagement deleteMany
   */
  export type FacebookEngagementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacebookEngagements to delete
     */
    where?: FacebookEngagementWhereInput
    /**
     * Limit how many FacebookEngagements to delete.
     */
    limit?: number
  }

  /**
   * FacebookEngagement.event
   */
  export type FacebookEngagement$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * FacebookEngagement without action
   */
  export type FacebookEngagementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacebookEngagement
     */
    select?: FacebookEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacebookEngagement
     */
    omit?: FacebookEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookEngagementInclude<ExtArgs> | null
  }


  /**
   * Model TiktokEngagement
   */

  export type AggregateTiktokEngagement = {
    _count: TiktokEngagementCountAggregateOutputType | null
    _avg: TiktokEngagementAvgAggregateOutputType | null
    _sum: TiktokEngagementSumAggregateOutputType | null
    _min: TiktokEngagementMinAggregateOutputType | null
    _max: TiktokEngagementMaxAggregateOutputType | null
  }

  export type TiktokEngagementAvgAggregateOutputType = {
    watchTime: number | null
    percentageWatched: number | null
  }

  export type TiktokEngagementSumAggregateOutputType = {
    watchTime: number | null
    percentageWatched: number | null
  }

  export type TiktokEngagementMinAggregateOutputType = {
    id: string | null
    watchTime: number | null
    percentageWatched: number | null
    device: $Enums.DeviceType | null
    country: string | null
    videoId: string | null
    actionTime: Date | null
    profileId: string | null
    purchasedItem: string | null
    purchaseAmount: string | null
  }

  export type TiktokEngagementMaxAggregateOutputType = {
    id: string | null
    watchTime: number | null
    percentageWatched: number | null
    device: $Enums.DeviceType | null
    country: string | null
    videoId: string | null
    actionTime: Date | null
    profileId: string | null
    purchasedItem: string | null
    purchaseAmount: string | null
  }

  export type TiktokEngagementCountAggregateOutputType = {
    id: number
    watchTime: number
    percentageWatched: number
    device: number
    country: number
    videoId: number
    actionTime: number
    profileId: number
    purchasedItem: number
    purchaseAmount: number
    _all: number
  }


  export type TiktokEngagementAvgAggregateInputType = {
    watchTime?: true
    percentageWatched?: true
  }

  export type TiktokEngagementSumAggregateInputType = {
    watchTime?: true
    percentageWatched?: true
  }

  export type TiktokEngagementMinAggregateInputType = {
    id?: true
    watchTime?: true
    percentageWatched?: true
    device?: true
    country?: true
    videoId?: true
    actionTime?: true
    profileId?: true
    purchasedItem?: true
    purchaseAmount?: true
  }

  export type TiktokEngagementMaxAggregateInputType = {
    id?: true
    watchTime?: true
    percentageWatched?: true
    device?: true
    country?: true
    videoId?: true
    actionTime?: true
    profileId?: true
    purchasedItem?: true
    purchaseAmount?: true
  }

  export type TiktokEngagementCountAggregateInputType = {
    id?: true
    watchTime?: true
    percentageWatched?: true
    device?: true
    country?: true
    videoId?: true
    actionTime?: true
    profileId?: true
    purchasedItem?: true
    purchaseAmount?: true
    _all?: true
  }

  export type TiktokEngagementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokEngagement to aggregate.
     */
    where?: TiktokEngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEngagements to fetch.
     */
    orderBy?: TiktokEngagementOrderByWithRelationInput | TiktokEngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TiktokEngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEngagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEngagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TiktokEngagements
    **/
    _count?: true | TiktokEngagementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TiktokEngagementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TiktokEngagementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiktokEngagementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiktokEngagementMaxAggregateInputType
  }

  export type GetTiktokEngagementAggregateType<T extends TiktokEngagementAggregateArgs> = {
        [P in keyof T & keyof AggregateTiktokEngagement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiktokEngagement[P]>
      : GetScalarType<T[P], AggregateTiktokEngagement[P]>
  }




  export type TiktokEngagementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiktokEngagementWhereInput
    orderBy?: TiktokEngagementOrderByWithAggregationInput | TiktokEngagementOrderByWithAggregationInput[]
    by: TiktokEngagementScalarFieldEnum[] | TiktokEngagementScalarFieldEnum
    having?: TiktokEngagementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiktokEngagementCountAggregateInputType | true
    _avg?: TiktokEngagementAvgAggregateInputType
    _sum?: TiktokEngagementSumAggregateInputType
    _min?: TiktokEngagementMinAggregateInputType
    _max?: TiktokEngagementMaxAggregateInputType
  }

  export type TiktokEngagementGroupByOutputType = {
    id: string
    watchTime: number | null
    percentageWatched: number | null
    device: $Enums.DeviceType | null
    country: string | null
    videoId: string | null
    actionTime: Date | null
    profileId: string | null
    purchasedItem: string | null
    purchaseAmount: string | null
    _count: TiktokEngagementCountAggregateOutputType | null
    _avg: TiktokEngagementAvgAggregateOutputType | null
    _sum: TiktokEngagementSumAggregateOutputType | null
    _min: TiktokEngagementMinAggregateOutputType | null
    _max: TiktokEngagementMaxAggregateOutputType | null
  }

  type GetTiktokEngagementGroupByPayload<T extends TiktokEngagementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiktokEngagementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiktokEngagementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiktokEngagementGroupByOutputType[P]>
            : GetScalarType<T[P], TiktokEngagementGroupByOutputType[P]>
        }
      >
    >


  export type TiktokEngagementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    watchTime?: boolean
    percentageWatched?: boolean
    device?: boolean
    country?: boolean
    videoId?: boolean
    actionTime?: boolean
    profileId?: boolean
    purchasedItem?: boolean
    purchaseAmount?: boolean
    event?: boolean | TiktokEngagement$eventArgs<ExtArgs>
  }, ExtArgs["result"]["tiktokEngagement"]>

  export type TiktokEngagementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    watchTime?: boolean
    percentageWatched?: boolean
    device?: boolean
    country?: boolean
    videoId?: boolean
    actionTime?: boolean
    profileId?: boolean
    purchasedItem?: boolean
    purchaseAmount?: boolean
  }, ExtArgs["result"]["tiktokEngagement"]>

  export type TiktokEngagementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    watchTime?: boolean
    percentageWatched?: boolean
    device?: boolean
    country?: boolean
    videoId?: boolean
    actionTime?: boolean
    profileId?: boolean
    purchasedItem?: boolean
    purchaseAmount?: boolean
  }, ExtArgs["result"]["tiktokEngagement"]>

  export type TiktokEngagementSelectScalar = {
    id?: boolean
    watchTime?: boolean
    percentageWatched?: boolean
    device?: boolean
    country?: boolean
    videoId?: boolean
    actionTime?: boolean
    profileId?: boolean
    purchasedItem?: boolean
    purchaseAmount?: boolean
  }

  export type TiktokEngagementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "watchTime" | "percentageWatched" | "device" | "country" | "videoId" | "actionTime" | "profileId" | "purchasedItem" | "purchaseAmount", ExtArgs["result"]["tiktokEngagement"]>
  export type TiktokEngagementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | TiktokEngagement$eventArgs<ExtArgs>
  }
  export type TiktokEngagementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TiktokEngagementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TiktokEngagementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TiktokEngagement"
    objects: {
      event: Prisma.$EventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      watchTime: number | null
      percentageWatched: number | null
      device: $Enums.DeviceType | null
      country: string | null
      videoId: string | null
      actionTime: Date | null
      profileId: string | null
      purchasedItem: string | null
      purchaseAmount: string | null
    }, ExtArgs["result"]["tiktokEngagement"]>
    composites: {}
  }

  type TiktokEngagementGetPayload<S extends boolean | null | undefined | TiktokEngagementDefaultArgs> = $Result.GetResult<Prisma.$TiktokEngagementPayload, S>

  type TiktokEngagementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TiktokEngagementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiktokEngagementCountAggregateInputType | true
    }

  export interface TiktokEngagementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TiktokEngagement'], meta: { name: 'TiktokEngagement' } }
    /**
     * Find zero or one TiktokEngagement that matches the filter.
     * @param {TiktokEngagementFindUniqueArgs} args - Arguments to find a TiktokEngagement
     * @example
     * // Get one TiktokEngagement
     * const tiktokEngagement = await prisma.tiktokEngagement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TiktokEngagementFindUniqueArgs>(args: SelectSubset<T, TiktokEngagementFindUniqueArgs<ExtArgs>>): Prisma__TiktokEngagementClient<$Result.GetResult<Prisma.$TiktokEngagementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TiktokEngagement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TiktokEngagementFindUniqueOrThrowArgs} args - Arguments to find a TiktokEngagement
     * @example
     * // Get one TiktokEngagement
     * const tiktokEngagement = await prisma.tiktokEngagement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TiktokEngagementFindUniqueOrThrowArgs>(args: SelectSubset<T, TiktokEngagementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TiktokEngagementClient<$Result.GetResult<Prisma.$TiktokEngagementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokEngagement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementFindFirstArgs} args - Arguments to find a TiktokEngagement
     * @example
     * // Get one TiktokEngagement
     * const tiktokEngagement = await prisma.tiktokEngagement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TiktokEngagementFindFirstArgs>(args?: SelectSubset<T, TiktokEngagementFindFirstArgs<ExtArgs>>): Prisma__TiktokEngagementClient<$Result.GetResult<Prisma.$TiktokEngagementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokEngagement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementFindFirstOrThrowArgs} args - Arguments to find a TiktokEngagement
     * @example
     * // Get one TiktokEngagement
     * const tiktokEngagement = await prisma.tiktokEngagement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TiktokEngagementFindFirstOrThrowArgs>(args?: SelectSubset<T, TiktokEngagementFindFirstOrThrowArgs<ExtArgs>>): Prisma__TiktokEngagementClient<$Result.GetResult<Prisma.$TiktokEngagementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TiktokEngagements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TiktokEngagements
     * const tiktokEngagements = await prisma.tiktokEngagement.findMany()
     * 
     * // Get first 10 TiktokEngagements
     * const tiktokEngagements = await prisma.tiktokEngagement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tiktokEngagementWithIdOnly = await prisma.tiktokEngagement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TiktokEngagementFindManyArgs>(args?: SelectSubset<T, TiktokEngagementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokEngagementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TiktokEngagement.
     * @param {TiktokEngagementCreateArgs} args - Arguments to create a TiktokEngagement.
     * @example
     * // Create one TiktokEngagement
     * const TiktokEngagement = await prisma.tiktokEngagement.create({
     *   data: {
     *     // ... data to create a TiktokEngagement
     *   }
     * })
     * 
     */
    create<T extends TiktokEngagementCreateArgs>(args: SelectSubset<T, TiktokEngagementCreateArgs<ExtArgs>>): Prisma__TiktokEngagementClient<$Result.GetResult<Prisma.$TiktokEngagementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TiktokEngagements.
     * @param {TiktokEngagementCreateManyArgs} args - Arguments to create many TiktokEngagements.
     * @example
     * // Create many TiktokEngagements
     * const tiktokEngagement = await prisma.tiktokEngagement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TiktokEngagementCreateManyArgs>(args?: SelectSubset<T, TiktokEngagementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TiktokEngagements and returns the data saved in the database.
     * @param {TiktokEngagementCreateManyAndReturnArgs} args - Arguments to create many TiktokEngagements.
     * @example
     * // Create many TiktokEngagements
     * const tiktokEngagement = await prisma.tiktokEngagement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TiktokEngagements and only return the `id`
     * const tiktokEngagementWithIdOnly = await prisma.tiktokEngagement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TiktokEngagementCreateManyAndReturnArgs>(args?: SelectSubset<T, TiktokEngagementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokEngagementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TiktokEngagement.
     * @param {TiktokEngagementDeleteArgs} args - Arguments to delete one TiktokEngagement.
     * @example
     * // Delete one TiktokEngagement
     * const TiktokEngagement = await prisma.tiktokEngagement.delete({
     *   where: {
     *     // ... filter to delete one TiktokEngagement
     *   }
     * })
     * 
     */
    delete<T extends TiktokEngagementDeleteArgs>(args: SelectSubset<T, TiktokEngagementDeleteArgs<ExtArgs>>): Prisma__TiktokEngagementClient<$Result.GetResult<Prisma.$TiktokEngagementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TiktokEngagement.
     * @param {TiktokEngagementUpdateArgs} args - Arguments to update one TiktokEngagement.
     * @example
     * // Update one TiktokEngagement
     * const tiktokEngagement = await prisma.tiktokEngagement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TiktokEngagementUpdateArgs>(args: SelectSubset<T, TiktokEngagementUpdateArgs<ExtArgs>>): Prisma__TiktokEngagementClient<$Result.GetResult<Prisma.$TiktokEngagementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TiktokEngagements.
     * @param {TiktokEngagementDeleteManyArgs} args - Arguments to filter TiktokEngagements to delete.
     * @example
     * // Delete a few TiktokEngagements
     * const { count } = await prisma.tiktokEngagement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TiktokEngagementDeleteManyArgs>(args?: SelectSubset<T, TiktokEngagementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokEngagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TiktokEngagements
     * const tiktokEngagement = await prisma.tiktokEngagement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TiktokEngagementUpdateManyArgs>(args: SelectSubset<T, TiktokEngagementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokEngagements and returns the data updated in the database.
     * @param {TiktokEngagementUpdateManyAndReturnArgs} args - Arguments to update many TiktokEngagements.
     * @example
     * // Update many TiktokEngagements
     * const tiktokEngagement = await prisma.tiktokEngagement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TiktokEngagements and only return the `id`
     * const tiktokEngagementWithIdOnly = await prisma.tiktokEngagement.updateManyAndReturn({
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
    updateManyAndReturn<T extends TiktokEngagementUpdateManyAndReturnArgs>(args: SelectSubset<T, TiktokEngagementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokEngagementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TiktokEngagement.
     * @param {TiktokEngagementUpsertArgs} args - Arguments to update or create a TiktokEngagement.
     * @example
     * // Update or create a TiktokEngagement
     * const tiktokEngagement = await prisma.tiktokEngagement.upsert({
     *   create: {
     *     // ... data to create a TiktokEngagement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TiktokEngagement we want to update
     *   }
     * })
     */
    upsert<T extends TiktokEngagementUpsertArgs>(args: SelectSubset<T, TiktokEngagementUpsertArgs<ExtArgs>>): Prisma__TiktokEngagementClient<$Result.GetResult<Prisma.$TiktokEngagementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TiktokEngagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementCountArgs} args - Arguments to filter TiktokEngagements to count.
     * @example
     * // Count the number of TiktokEngagements
     * const count = await prisma.tiktokEngagement.count({
     *   where: {
     *     // ... the filter for the TiktokEngagements we want to count
     *   }
     * })
    **/
    count<T extends TiktokEngagementCountArgs>(
      args?: Subset<T, TiktokEngagementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiktokEngagementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TiktokEngagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TiktokEngagementAggregateArgs>(args: Subset<T, TiktokEngagementAggregateArgs>): Prisma.PrismaPromise<GetTiktokEngagementAggregateType<T>>

    /**
     * Group by TiktokEngagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokEngagementGroupByArgs} args - Group by arguments.
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
      T extends TiktokEngagementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TiktokEngagementGroupByArgs['orderBy'] }
        : { orderBy?: TiktokEngagementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TiktokEngagementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiktokEngagementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TiktokEngagement model
   */
  readonly fields: TiktokEngagementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TiktokEngagement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TiktokEngagementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends TiktokEngagement$eventArgs<ExtArgs> = {}>(args?: Subset<T, TiktokEngagement$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TiktokEngagement model
   */
  interface TiktokEngagementFieldRefs {
    readonly id: FieldRef<"TiktokEngagement", 'String'>
    readonly watchTime: FieldRef<"TiktokEngagement", 'Int'>
    readonly percentageWatched: FieldRef<"TiktokEngagement", 'Int'>
    readonly device: FieldRef<"TiktokEngagement", 'DeviceType'>
    readonly country: FieldRef<"TiktokEngagement", 'String'>
    readonly videoId: FieldRef<"TiktokEngagement", 'String'>
    readonly actionTime: FieldRef<"TiktokEngagement", 'DateTime'>
    readonly profileId: FieldRef<"TiktokEngagement", 'String'>
    readonly purchasedItem: FieldRef<"TiktokEngagement", 'String'>
    readonly purchaseAmount: FieldRef<"TiktokEngagement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TiktokEngagement findUnique
   */
  export type TiktokEngagementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagement
     */
    select?: TiktokEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagement
     */
    omit?: TiktokEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEngagement to fetch.
     */
    where: TiktokEngagementWhereUniqueInput
  }

  /**
   * TiktokEngagement findUniqueOrThrow
   */
  export type TiktokEngagementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagement
     */
    select?: TiktokEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagement
     */
    omit?: TiktokEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEngagement to fetch.
     */
    where: TiktokEngagementWhereUniqueInput
  }

  /**
   * TiktokEngagement findFirst
   */
  export type TiktokEngagementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagement
     */
    select?: TiktokEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagement
     */
    omit?: TiktokEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEngagement to fetch.
     */
    where?: TiktokEngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEngagements to fetch.
     */
    orderBy?: TiktokEngagementOrderByWithRelationInput | TiktokEngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokEngagements.
     */
    cursor?: TiktokEngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEngagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEngagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokEngagements.
     */
    distinct?: TiktokEngagementScalarFieldEnum | TiktokEngagementScalarFieldEnum[]
  }

  /**
   * TiktokEngagement findFirstOrThrow
   */
  export type TiktokEngagementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagement
     */
    select?: TiktokEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagement
     */
    omit?: TiktokEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEngagement to fetch.
     */
    where?: TiktokEngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEngagements to fetch.
     */
    orderBy?: TiktokEngagementOrderByWithRelationInput | TiktokEngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokEngagements.
     */
    cursor?: TiktokEngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEngagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEngagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokEngagements.
     */
    distinct?: TiktokEngagementScalarFieldEnum | TiktokEngagementScalarFieldEnum[]
  }

  /**
   * TiktokEngagement findMany
   */
  export type TiktokEngagementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagement
     */
    select?: TiktokEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagement
     */
    omit?: TiktokEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementInclude<ExtArgs> | null
    /**
     * Filter, which TiktokEngagements to fetch.
     */
    where?: TiktokEngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokEngagements to fetch.
     */
    orderBy?: TiktokEngagementOrderByWithRelationInput | TiktokEngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TiktokEngagements.
     */
    cursor?: TiktokEngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokEngagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokEngagements.
     */
    skip?: number
    distinct?: TiktokEngagementScalarFieldEnum | TiktokEngagementScalarFieldEnum[]
  }

  /**
   * TiktokEngagement create
   */
  export type TiktokEngagementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagement
     */
    select?: TiktokEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagement
     */
    omit?: TiktokEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementInclude<ExtArgs> | null
    /**
     * The data needed to create a TiktokEngagement.
     */
    data?: XOR<TiktokEngagementCreateInput, TiktokEngagementUncheckedCreateInput>
  }

  /**
   * TiktokEngagement createMany
   */
  export type TiktokEngagementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TiktokEngagements.
     */
    data: TiktokEngagementCreateManyInput | TiktokEngagementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiktokEngagement createManyAndReturn
   */
  export type TiktokEngagementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagement
     */
    select?: TiktokEngagementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagement
     */
    omit?: TiktokEngagementOmit<ExtArgs> | null
    /**
     * The data used to create many TiktokEngagements.
     */
    data: TiktokEngagementCreateManyInput | TiktokEngagementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiktokEngagement update
   */
  export type TiktokEngagementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagement
     */
    select?: TiktokEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagement
     */
    omit?: TiktokEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementInclude<ExtArgs> | null
    /**
     * The data needed to update a TiktokEngagement.
     */
    data: XOR<TiktokEngagementUpdateInput, TiktokEngagementUncheckedUpdateInput>
    /**
     * Choose, which TiktokEngagement to update.
     */
    where: TiktokEngagementWhereUniqueInput
  }

  /**
   * TiktokEngagement updateMany
   */
  export type TiktokEngagementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TiktokEngagements.
     */
    data: XOR<TiktokEngagementUpdateManyMutationInput, TiktokEngagementUncheckedUpdateManyInput>
    /**
     * Filter which TiktokEngagements to update
     */
    where?: TiktokEngagementWhereInput
    /**
     * Limit how many TiktokEngagements to update.
     */
    limit?: number
  }

  /**
   * TiktokEngagement updateManyAndReturn
   */
  export type TiktokEngagementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagement
     */
    select?: TiktokEngagementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagement
     */
    omit?: TiktokEngagementOmit<ExtArgs> | null
    /**
     * The data used to update TiktokEngagements.
     */
    data: XOR<TiktokEngagementUpdateManyMutationInput, TiktokEngagementUncheckedUpdateManyInput>
    /**
     * Filter which TiktokEngagements to update
     */
    where?: TiktokEngagementWhereInput
    /**
     * Limit how many TiktokEngagements to update.
     */
    limit?: number
  }

  /**
   * TiktokEngagement upsert
   */
  export type TiktokEngagementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagement
     */
    select?: TiktokEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagement
     */
    omit?: TiktokEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementInclude<ExtArgs> | null
    /**
     * The filter to search for the TiktokEngagement to update in case it exists.
     */
    where: TiktokEngagementWhereUniqueInput
    /**
     * In case the TiktokEngagement found by the `where` argument doesn't exist, create a new TiktokEngagement with this data.
     */
    create: XOR<TiktokEngagementCreateInput, TiktokEngagementUncheckedCreateInput>
    /**
     * In case the TiktokEngagement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TiktokEngagementUpdateInput, TiktokEngagementUncheckedUpdateInput>
  }

  /**
   * TiktokEngagement delete
   */
  export type TiktokEngagementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagement
     */
    select?: TiktokEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagement
     */
    omit?: TiktokEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementInclude<ExtArgs> | null
    /**
     * Filter which TiktokEngagement to delete.
     */
    where: TiktokEngagementWhereUniqueInput
  }

  /**
   * TiktokEngagement deleteMany
   */
  export type TiktokEngagementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokEngagements to delete
     */
    where?: TiktokEngagementWhereInput
    /**
     * Limit how many TiktokEngagements to delete.
     */
    limit?: number
  }

  /**
   * TiktokEngagement.event
   */
  export type TiktokEngagement$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * TiktokEngagement without action
   */
  export type TiktokEngagementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokEngagement
     */
    select?: TiktokEngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokEngagement
     */
    omit?: TiktokEngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokEngagementInclude<ExtArgs> | null
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


  export const EventScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    timestamp: 'timestamp',
    source: 'source',
    funnelStage: 'funnelStage',
    eventType: 'eventType',
    facebookUserId: 'facebookUserId',
    tiktokUserId: 'tiktokUserId',
    facebookEngagementId: 'facebookEngagementId',
    tiktokEngagementId: 'tiktokEngagementId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const FacebookUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    age: 'age',
    gender: 'gender',
    country: 'country',
    city: 'city'
  };

  export type FacebookUserScalarFieldEnum = (typeof FacebookUserScalarFieldEnum)[keyof typeof FacebookUserScalarFieldEnum]


  export const TiktokUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    username: 'username',
    followers: 'followers'
  };

  export type TiktokUserScalarFieldEnum = (typeof TiktokUserScalarFieldEnum)[keyof typeof TiktokUserScalarFieldEnum]


  export const FacebookEngagementScalarFieldEnum: {
    id: 'id',
    actionTime: 'actionTime',
    referrer: 'referrer',
    videoId: 'videoId',
    adId: 'adId',
    campaignId: 'campaignId',
    clickPosition: 'clickPosition',
    device: 'device',
    browser: 'browser',
    purchaseAmount: 'purchaseAmount'
  };

  export type FacebookEngagementScalarFieldEnum = (typeof FacebookEngagementScalarFieldEnum)[keyof typeof FacebookEngagementScalarFieldEnum]


  export const TiktokEngagementScalarFieldEnum: {
    id: 'id',
    watchTime: 'watchTime',
    percentageWatched: 'percentageWatched',
    device: 'device',
    country: 'country',
    videoId: 'videoId',
    actionTime: 'actionTime',
    profileId: 'profileId',
    purchasedItem: 'purchasedItem',
    purchaseAmount: 'purchaseAmount'
  };

  export type TiktokEngagementScalarFieldEnum = (typeof TiktokEngagementScalarFieldEnum)[keyof typeof TiktokEngagementScalarFieldEnum]


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
   * Reference to a field of type 'SourcePlatform'
   */
  export type EnumSourcePlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SourcePlatform'>
    


  /**
   * Reference to a field of type 'SourcePlatform[]'
   */
  export type ListEnumSourcePlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SourcePlatform[]'>
    


  /**
   * Reference to a field of type 'FunnelStage'
   */
  export type EnumFunnelStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FunnelStage'>
    


  /**
   * Reference to a field of type 'FunnelStage[]'
   */
  export type ListEnumFunnelStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FunnelStage[]'>
    


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
   * Reference to a field of type 'DeviceType'
   */
  export type EnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType'>
    


  /**
   * Reference to a field of type 'DeviceType[]'
   */
  export type ListEnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType[]'>
    


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


  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    eventId?: StringFilter<"Event"> | string
    timestamp?: DateTimeFilter<"Event"> | Date | string
    source?: EnumSourcePlatformFilter<"Event"> | $Enums.SourcePlatform
    funnelStage?: EnumFunnelStageFilter<"Event"> | $Enums.FunnelStage
    eventType?: StringFilter<"Event"> | string
    facebookUserId?: StringNullableFilter<"Event"> | string | null
    tiktokUserId?: StringNullableFilter<"Event"> | string | null
    facebookEngagementId?: StringNullableFilter<"Event"> | string | null
    tiktokEngagementId?: StringNullableFilter<"Event"> | string | null
    facebookUser?: XOR<FacebookUserNullableScalarRelationFilter, FacebookUserWhereInput> | null
    tiktokUser?: XOR<TiktokUserNullableScalarRelationFilter, TiktokUserWhereInput> | null
    facebookEngagement?: XOR<FacebookEngagementNullableScalarRelationFilter, FacebookEngagementWhereInput> | null
    tiktokEngagement?: XOR<TiktokEngagementNullableScalarRelationFilter, TiktokEngagementWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    facebookUserId?: SortOrderInput | SortOrder
    tiktokUserId?: SortOrderInput | SortOrder
    facebookEngagementId?: SortOrderInput | SortOrder
    tiktokEngagementId?: SortOrderInput | SortOrder
    facebookUser?: FacebookUserOrderByWithRelationInput
    tiktokUser?: TiktokUserOrderByWithRelationInput
    facebookEngagement?: FacebookEngagementOrderByWithRelationInput
    tiktokEngagement?: TiktokEngagementOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId?: string
    facebookUserId?: string
    tiktokUserId?: string
    facebookEngagementId?: string
    tiktokEngagementId?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    timestamp?: DateTimeFilter<"Event"> | Date | string
    source?: EnumSourcePlatformFilter<"Event"> | $Enums.SourcePlatform
    funnelStage?: EnumFunnelStageFilter<"Event"> | $Enums.FunnelStage
    eventType?: StringFilter<"Event"> | string
    facebookUser?: XOR<FacebookUserNullableScalarRelationFilter, FacebookUserWhereInput> | null
    tiktokUser?: XOR<TiktokUserNullableScalarRelationFilter, TiktokUserWhereInput> | null
    facebookEngagement?: XOR<FacebookEngagementNullableScalarRelationFilter, FacebookEngagementWhereInput> | null
    tiktokEngagement?: XOR<TiktokEngagementNullableScalarRelationFilter, TiktokEngagementWhereInput> | null
  }, "id" | "eventId" | "facebookUserId" | "tiktokUserId" | "facebookEngagementId" | "tiktokEngagementId">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    facebookUserId?: SortOrderInput | SortOrder
    tiktokUserId?: SortOrderInput | SortOrder
    facebookEngagementId?: SortOrderInput | SortOrder
    tiktokEngagementId?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    eventId?: StringWithAggregatesFilter<"Event"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    source?: EnumSourcePlatformWithAggregatesFilter<"Event"> | $Enums.SourcePlatform
    funnelStage?: EnumFunnelStageWithAggregatesFilter<"Event"> | $Enums.FunnelStage
    eventType?: StringWithAggregatesFilter<"Event"> | string
    facebookUserId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    tiktokUserId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    facebookEngagementId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    tiktokEngagementId?: StringNullableWithAggregatesFilter<"Event"> | string | null
  }

  export type FacebookUserWhereInput = {
    AND?: FacebookUserWhereInput | FacebookUserWhereInput[]
    OR?: FacebookUserWhereInput[]
    NOT?: FacebookUserWhereInput | FacebookUserWhereInput[]
    id?: StringFilter<"FacebookUser"> | string
    userId?: StringFilter<"FacebookUser"> | string
    name?: StringFilter<"FacebookUser"> | string
    age?: IntFilter<"FacebookUser"> | number
    gender?: EnumGenderFilter<"FacebookUser"> | $Enums.Gender
    country?: StringFilter<"FacebookUser"> | string
    city?: StringFilter<"FacebookUser"> | string
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }

  export type FacebookUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    city?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type FacebookUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacebookUserWhereInput | FacebookUserWhereInput[]
    OR?: FacebookUserWhereInput[]
    NOT?: FacebookUserWhereInput | FacebookUserWhereInput[]
    userId?: StringFilter<"FacebookUser"> | string
    name?: StringFilter<"FacebookUser"> | string
    age?: IntFilter<"FacebookUser"> | number
    gender?: EnumGenderFilter<"FacebookUser"> | $Enums.Gender
    country?: StringFilter<"FacebookUser"> | string
    city?: StringFilter<"FacebookUser"> | string
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }, "id">

  export type FacebookUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    city?: SortOrder
    _count?: FacebookUserCountOrderByAggregateInput
    _avg?: FacebookUserAvgOrderByAggregateInput
    _max?: FacebookUserMaxOrderByAggregateInput
    _min?: FacebookUserMinOrderByAggregateInput
    _sum?: FacebookUserSumOrderByAggregateInput
  }

  export type FacebookUserScalarWhereWithAggregatesInput = {
    AND?: FacebookUserScalarWhereWithAggregatesInput | FacebookUserScalarWhereWithAggregatesInput[]
    OR?: FacebookUserScalarWhereWithAggregatesInput[]
    NOT?: FacebookUserScalarWhereWithAggregatesInput | FacebookUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacebookUser"> | string
    userId?: StringWithAggregatesFilter<"FacebookUser"> | string
    name?: StringWithAggregatesFilter<"FacebookUser"> | string
    age?: IntWithAggregatesFilter<"FacebookUser"> | number
    gender?: EnumGenderWithAggregatesFilter<"FacebookUser"> | $Enums.Gender
    country?: StringWithAggregatesFilter<"FacebookUser"> | string
    city?: StringWithAggregatesFilter<"FacebookUser"> | string
  }

  export type TiktokUserWhereInput = {
    AND?: TiktokUserWhereInput | TiktokUserWhereInput[]
    OR?: TiktokUserWhereInput[]
    NOT?: TiktokUserWhereInput | TiktokUserWhereInput[]
    id?: StringFilter<"TiktokUser"> | string
    userId?: StringFilter<"TiktokUser"> | string
    username?: StringFilter<"TiktokUser"> | string
    followers?: IntFilter<"TiktokUser"> | number
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }

  export type TiktokUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    followers?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type TiktokUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TiktokUserWhereInput | TiktokUserWhereInput[]
    OR?: TiktokUserWhereInput[]
    NOT?: TiktokUserWhereInput | TiktokUserWhereInput[]
    userId?: StringFilter<"TiktokUser"> | string
    username?: StringFilter<"TiktokUser"> | string
    followers?: IntFilter<"TiktokUser"> | number
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }, "id">

  export type TiktokUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    followers?: SortOrder
    _count?: TiktokUserCountOrderByAggregateInput
    _avg?: TiktokUserAvgOrderByAggregateInput
    _max?: TiktokUserMaxOrderByAggregateInput
    _min?: TiktokUserMinOrderByAggregateInput
    _sum?: TiktokUserSumOrderByAggregateInput
  }

  export type TiktokUserScalarWhereWithAggregatesInput = {
    AND?: TiktokUserScalarWhereWithAggregatesInput | TiktokUserScalarWhereWithAggregatesInput[]
    OR?: TiktokUserScalarWhereWithAggregatesInput[]
    NOT?: TiktokUserScalarWhereWithAggregatesInput | TiktokUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TiktokUser"> | string
    userId?: StringWithAggregatesFilter<"TiktokUser"> | string
    username?: StringWithAggregatesFilter<"TiktokUser"> | string
    followers?: IntWithAggregatesFilter<"TiktokUser"> | number
  }

  export type FacebookEngagementWhereInput = {
    AND?: FacebookEngagementWhereInput | FacebookEngagementWhereInput[]
    OR?: FacebookEngagementWhereInput[]
    NOT?: FacebookEngagementWhereInput | FacebookEngagementWhereInput[]
    id?: StringFilter<"FacebookEngagement"> | string
    actionTime?: DateTimeNullableFilter<"FacebookEngagement"> | Date | string | null
    referrer?: EnumReferrerNullableFilter<"FacebookEngagement"> | $Enums.Referrer | null
    videoId?: StringNullableFilter<"FacebookEngagement"> | string | null
    adId?: StringNullableFilter<"FacebookEngagement"> | string | null
    campaignId?: StringNullableFilter<"FacebookEngagement"> | string | null
    clickPosition?: EnumClickPositionNullableFilter<"FacebookEngagement"> | $Enums.ClickPosition | null
    device?: EnumDeviceNullableFilter<"FacebookEngagement"> | $Enums.Device | null
    browser?: EnumBrowserNullableFilter<"FacebookEngagement"> | $Enums.Browser | null
    purchaseAmount?: StringNullableFilter<"FacebookEngagement"> | string | null
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }

  export type FacebookEngagementOrderByWithRelationInput = {
    id?: SortOrder
    actionTime?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    videoId?: SortOrderInput | SortOrder
    adId?: SortOrderInput | SortOrder
    campaignId?: SortOrderInput | SortOrder
    clickPosition?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    purchaseAmount?: SortOrderInput | SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type FacebookEngagementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacebookEngagementWhereInput | FacebookEngagementWhereInput[]
    OR?: FacebookEngagementWhereInput[]
    NOT?: FacebookEngagementWhereInput | FacebookEngagementWhereInput[]
    actionTime?: DateTimeNullableFilter<"FacebookEngagement"> | Date | string | null
    referrer?: EnumReferrerNullableFilter<"FacebookEngagement"> | $Enums.Referrer | null
    videoId?: StringNullableFilter<"FacebookEngagement"> | string | null
    adId?: StringNullableFilter<"FacebookEngagement"> | string | null
    campaignId?: StringNullableFilter<"FacebookEngagement"> | string | null
    clickPosition?: EnumClickPositionNullableFilter<"FacebookEngagement"> | $Enums.ClickPosition | null
    device?: EnumDeviceNullableFilter<"FacebookEngagement"> | $Enums.Device | null
    browser?: EnumBrowserNullableFilter<"FacebookEngagement"> | $Enums.Browser | null
    purchaseAmount?: StringNullableFilter<"FacebookEngagement"> | string | null
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }, "id">

  export type FacebookEngagementOrderByWithAggregationInput = {
    id?: SortOrder
    actionTime?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    videoId?: SortOrderInput | SortOrder
    adId?: SortOrderInput | SortOrder
    campaignId?: SortOrderInput | SortOrder
    clickPosition?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    purchaseAmount?: SortOrderInput | SortOrder
    _count?: FacebookEngagementCountOrderByAggregateInput
    _max?: FacebookEngagementMaxOrderByAggregateInput
    _min?: FacebookEngagementMinOrderByAggregateInput
  }

  export type FacebookEngagementScalarWhereWithAggregatesInput = {
    AND?: FacebookEngagementScalarWhereWithAggregatesInput | FacebookEngagementScalarWhereWithAggregatesInput[]
    OR?: FacebookEngagementScalarWhereWithAggregatesInput[]
    NOT?: FacebookEngagementScalarWhereWithAggregatesInput | FacebookEngagementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacebookEngagement"> | string
    actionTime?: DateTimeNullableWithAggregatesFilter<"FacebookEngagement"> | Date | string | null
    referrer?: EnumReferrerNullableWithAggregatesFilter<"FacebookEngagement"> | $Enums.Referrer | null
    videoId?: StringNullableWithAggregatesFilter<"FacebookEngagement"> | string | null
    adId?: StringNullableWithAggregatesFilter<"FacebookEngagement"> | string | null
    campaignId?: StringNullableWithAggregatesFilter<"FacebookEngagement"> | string | null
    clickPosition?: EnumClickPositionNullableWithAggregatesFilter<"FacebookEngagement"> | $Enums.ClickPosition | null
    device?: EnumDeviceNullableWithAggregatesFilter<"FacebookEngagement"> | $Enums.Device | null
    browser?: EnumBrowserNullableWithAggregatesFilter<"FacebookEngagement"> | $Enums.Browser | null
    purchaseAmount?: StringNullableWithAggregatesFilter<"FacebookEngagement"> | string | null
  }

  export type TiktokEngagementWhereInput = {
    AND?: TiktokEngagementWhereInput | TiktokEngagementWhereInput[]
    OR?: TiktokEngagementWhereInput[]
    NOT?: TiktokEngagementWhereInput | TiktokEngagementWhereInput[]
    id?: StringFilter<"TiktokEngagement"> | string
    watchTime?: IntNullableFilter<"TiktokEngagement"> | number | null
    percentageWatched?: IntNullableFilter<"TiktokEngagement"> | number | null
    device?: EnumDeviceTypeNullableFilter<"TiktokEngagement"> | $Enums.DeviceType | null
    country?: StringNullableFilter<"TiktokEngagement"> | string | null
    videoId?: StringNullableFilter<"TiktokEngagement"> | string | null
    actionTime?: DateTimeNullableFilter<"TiktokEngagement"> | Date | string | null
    profileId?: StringNullableFilter<"TiktokEngagement"> | string | null
    purchasedItem?: StringNullableFilter<"TiktokEngagement"> | string | null
    purchaseAmount?: StringNullableFilter<"TiktokEngagement"> | string | null
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }

  export type TiktokEngagementOrderByWithRelationInput = {
    id?: SortOrder
    watchTime?: SortOrderInput | SortOrder
    percentageWatched?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    videoId?: SortOrderInput | SortOrder
    actionTime?: SortOrderInput | SortOrder
    profileId?: SortOrderInput | SortOrder
    purchasedItem?: SortOrderInput | SortOrder
    purchaseAmount?: SortOrderInput | SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type TiktokEngagementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TiktokEngagementWhereInput | TiktokEngagementWhereInput[]
    OR?: TiktokEngagementWhereInput[]
    NOT?: TiktokEngagementWhereInput | TiktokEngagementWhereInput[]
    watchTime?: IntNullableFilter<"TiktokEngagement"> | number | null
    percentageWatched?: IntNullableFilter<"TiktokEngagement"> | number | null
    device?: EnumDeviceTypeNullableFilter<"TiktokEngagement"> | $Enums.DeviceType | null
    country?: StringNullableFilter<"TiktokEngagement"> | string | null
    videoId?: StringNullableFilter<"TiktokEngagement"> | string | null
    actionTime?: DateTimeNullableFilter<"TiktokEngagement"> | Date | string | null
    profileId?: StringNullableFilter<"TiktokEngagement"> | string | null
    purchasedItem?: StringNullableFilter<"TiktokEngagement"> | string | null
    purchaseAmount?: StringNullableFilter<"TiktokEngagement"> | string | null
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }, "id">

  export type TiktokEngagementOrderByWithAggregationInput = {
    id?: SortOrder
    watchTime?: SortOrderInput | SortOrder
    percentageWatched?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    videoId?: SortOrderInput | SortOrder
    actionTime?: SortOrderInput | SortOrder
    profileId?: SortOrderInput | SortOrder
    purchasedItem?: SortOrderInput | SortOrder
    purchaseAmount?: SortOrderInput | SortOrder
    _count?: TiktokEngagementCountOrderByAggregateInput
    _avg?: TiktokEngagementAvgOrderByAggregateInput
    _max?: TiktokEngagementMaxOrderByAggregateInput
    _min?: TiktokEngagementMinOrderByAggregateInput
    _sum?: TiktokEngagementSumOrderByAggregateInput
  }

  export type TiktokEngagementScalarWhereWithAggregatesInput = {
    AND?: TiktokEngagementScalarWhereWithAggregatesInput | TiktokEngagementScalarWhereWithAggregatesInput[]
    OR?: TiktokEngagementScalarWhereWithAggregatesInput[]
    NOT?: TiktokEngagementScalarWhereWithAggregatesInput | TiktokEngagementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TiktokEngagement"> | string
    watchTime?: IntNullableWithAggregatesFilter<"TiktokEngagement"> | number | null
    percentageWatched?: IntNullableWithAggregatesFilter<"TiktokEngagement"> | number | null
    device?: EnumDeviceTypeNullableWithAggregatesFilter<"TiktokEngagement"> | $Enums.DeviceType | null
    country?: StringNullableWithAggregatesFilter<"TiktokEngagement"> | string | null
    videoId?: StringNullableWithAggregatesFilter<"TiktokEngagement"> | string | null
    actionTime?: DateTimeNullableWithAggregatesFilter<"TiktokEngagement"> | Date | string | null
    profileId?: StringNullableWithAggregatesFilter<"TiktokEngagement"> | string | null
    purchasedItem?: StringNullableWithAggregatesFilter<"TiktokEngagement"> | string | null
    purchaseAmount?: StringNullableWithAggregatesFilter<"TiktokEngagement"> | string | null
  }

  export type EventCreateInput = {
    id?: string
    eventId: string
    timestamp: Date | string
    source: $Enums.SourcePlatform
    funnelStage: $Enums.FunnelStage
    eventType: string
    facebookUser?: FacebookUserCreateNestedOneWithoutEventInput
    tiktokUser?: TiktokUserCreateNestedOneWithoutEventInput
    facebookEngagement?: FacebookEngagementCreateNestedOneWithoutEventInput
    tiktokEngagement?: TiktokEngagementCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    eventId: string
    timestamp: Date | string
    source: $Enums.SourcePlatform
    funnelStage: $Enums.FunnelStage
    eventType: string
    facebookUserId?: string | null
    tiktokUserId?: string | null
    facebookEngagementId?: string | null
    tiktokEngagementId?: string | null
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcePlatformFieldUpdateOperationsInput | $Enums.SourcePlatform
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    facebookUser?: FacebookUserUpdateOneWithoutEventNestedInput
    tiktokUser?: TiktokUserUpdateOneWithoutEventNestedInput
    facebookEngagement?: FacebookEngagementUpdateOneWithoutEventNestedInput
    tiktokEngagement?: TiktokEngagementUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcePlatformFieldUpdateOperationsInput | $Enums.SourcePlatform
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    facebookUserId?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUserId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookEngagementId?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokEngagementId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventCreateManyInput = {
    id?: string
    eventId: string
    timestamp: Date | string
    source: $Enums.SourcePlatform
    funnelStage: $Enums.FunnelStage
    eventType: string
    facebookUserId?: string | null
    tiktokUserId?: string | null
    facebookEngagementId?: string | null
    tiktokEngagementId?: string | null
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcePlatformFieldUpdateOperationsInput | $Enums.SourcePlatform
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcePlatformFieldUpdateOperationsInput | $Enums.SourcePlatform
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    facebookUserId?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUserId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookEngagementId?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokEngagementId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacebookUserCreateInput = {
    id?: string
    userId: string
    name: string
    age: number
    gender: $Enums.Gender
    country: string
    city: string
    event?: EventCreateNestedOneWithoutFacebookUserInput
  }

  export type FacebookUserUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    age: number
    gender: $Enums.Gender
    country: string
    city: string
    event?: EventUncheckedCreateNestedOneWithoutFacebookUserInput
  }

  export type FacebookUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneWithoutFacebookUserNestedInput
  }

  export type FacebookUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    event?: EventUncheckedUpdateOneWithoutFacebookUserNestedInput
  }

  export type FacebookUserCreateManyInput = {
    id?: string
    userId: string
    name: string
    age: number
    gender: $Enums.Gender
    country: string
    city: string
  }

  export type FacebookUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type FacebookUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type TiktokUserCreateInput = {
    id?: string
    userId: string
    username: string
    followers: number
    event?: EventCreateNestedOneWithoutTiktokUserInput
  }

  export type TiktokUserUncheckedCreateInput = {
    id?: string
    userId: string
    username: string
    followers: number
    event?: EventUncheckedCreateNestedOneWithoutTiktokUserInput
  }

  export type TiktokUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
    event?: EventUpdateOneWithoutTiktokUserNestedInput
  }

  export type TiktokUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
    event?: EventUncheckedUpdateOneWithoutTiktokUserNestedInput
  }

  export type TiktokUserCreateManyInput = {
    id?: string
    userId: string
    username: string
    followers: number
  }

  export type TiktokUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
  }

  export type TiktokUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
  }

  export type FacebookEngagementCreateInput = {
    id?: string
    actionTime?: Date | string | null
    referrer?: $Enums.Referrer | null
    videoId?: string | null
    adId?: string | null
    campaignId?: string | null
    clickPosition?: $Enums.ClickPosition | null
    device?: $Enums.Device | null
    browser?: $Enums.Browser | null
    purchaseAmount?: string | null
    event?: EventCreateNestedOneWithoutFacebookEngagementInput
  }

  export type FacebookEngagementUncheckedCreateInput = {
    id?: string
    actionTime?: Date | string | null
    referrer?: $Enums.Referrer | null
    videoId?: string | null
    adId?: string | null
    campaignId?: string | null
    clickPosition?: $Enums.ClickPosition | null
    device?: $Enums.Device | null
    browser?: $Enums.Browser | null
    purchaseAmount?: string | null
    event?: EventUncheckedCreateNestedOneWithoutFacebookEngagementInput
  }

  export type FacebookEngagementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referrer?: NullableEnumReferrerFieldUpdateOperationsInput | $Enums.Referrer | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    clickPosition?: NullableEnumClickPositionFieldUpdateOperationsInput | $Enums.ClickPosition | null
    device?: NullableEnumDeviceFieldUpdateOperationsInput | $Enums.Device | null
    browser?: NullableEnumBrowserFieldUpdateOperationsInput | $Enums.Browser | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EventUpdateOneWithoutFacebookEngagementNestedInput
  }

  export type FacebookEngagementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referrer?: NullableEnumReferrerFieldUpdateOperationsInput | $Enums.Referrer | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    clickPosition?: NullableEnumClickPositionFieldUpdateOperationsInput | $Enums.ClickPosition | null
    device?: NullableEnumDeviceFieldUpdateOperationsInput | $Enums.Device | null
    browser?: NullableEnumBrowserFieldUpdateOperationsInput | $Enums.Browser | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EventUncheckedUpdateOneWithoutFacebookEngagementNestedInput
  }

  export type FacebookEngagementCreateManyInput = {
    id?: string
    actionTime?: Date | string | null
    referrer?: $Enums.Referrer | null
    videoId?: string | null
    adId?: string | null
    campaignId?: string | null
    clickPosition?: $Enums.ClickPosition | null
    device?: $Enums.Device | null
    browser?: $Enums.Browser | null
    purchaseAmount?: string | null
  }

  export type FacebookEngagementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referrer?: NullableEnumReferrerFieldUpdateOperationsInput | $Enums.Referrer | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    clickPosition?: NullableEnumClickPositionFieldUpdateOperationsInput | $Enums.ClickPosition | null
    device?: NullableEnumDeviceFieldUpdateOperationsInput | $Enums.Device | null
    browser?: NullableEnumBrowserFieldUpdateOperationsInput | $Enums.Browser | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacebookEngagementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referrer?: NullableEnumReferrerFieldUpdateOperationsInput | $Enums.Referrer | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    clickPosition?: NullableEnumClickPositionFieldUpdateOperationsInput | $Enums.ClickPosition | null
    device?: NullableEnumDeviceFieldUpdateOperationsInput | $Enums.Device | null
    browser?: NullableEnumBrowserFieldUpdateOperationsInput | $Enums.Browser | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TiktokEngagementCreateInput = {
    id?: string
    watchTime?: number | null
    percentageWatched?: number | null
    device?: $Enums.DeviceType | null
    country?: string | null
    videoId?: string | null
    actionTime?: Date | string | null
    profileId?: string | null
    purchasedItem?: string | null
    purchaseAmount?: string | null
    event?: EventCreateNestedOneWithoutTiktokEngagementInput
  }

  export type TiktokEngagementUncheckedCreateInput = {
    id?: string
    watchTime?: number | null
    percentageWatched?: number | null
    device?: $Enums.DeviceType | null
    country?: string | null
    videoId?: string | null
    actionTime?: Date | string | null
    profileId?: string | null
    purchasedItem?: string | null
    purchaseAmount?: string | null
    event?: EventUncheckedCreateNestedOneWithoutTiktokEngagementInput
  }

  export type TiktokEngagementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchTime?: NullableIntFieldUpdateOperationsInput | number | null
    percentageWatched?: NullableIntFieldUpdateOperationsInput | number | null
    device?: NullableEnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedItem?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EventUpdateOneWithoutTiktokEngagementNestedInput
  }

  export type TiktokEngagementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchTime?: NullableIntFieldUpdateOperationsInput | number | null
    percentageWatched?: NullableIntFieldUpdateOperationsInput | number | null
    device?: NullableEnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedItem?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EventUncheckedUpdateOneWithoutTiktokEngagementNestedInput
  }

  export type TiktokEngagementCreateManyInput = {
    id?: string
    watchTime?: number | null
    percentageWatched?: number | null
    device?: $Enums.DeviceType | null
    country?: string | null
    videoId?: string | null
    actionTime?: Date | string | null
    profileId?: string | null
    purchasedItem?: string | null
    purchaseAmount?: string | null
  }

  export type TiktokEngagementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchTime?: NullableIntFieldUpdateOperationsInput | number | null
    percentageWatched?: NullableIntFieldUpdateOperationsInput | number | null
    device?: NullableEnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedItem?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TiktokEngagementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchTime?: NullableIntFieldUpdateOperationsInput | number | null
    percentageWatched?: NullableIntFieldUpdateOperationsInput | number | null
    device?: NullableEnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedItem?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumSourcePlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.SourcePlatform | EnumSourcePlatformFieldRefInput<$PrismaModel>
    in?: $Enums.SourcePlatform[] | ListEnumSourcePlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourcePlatform[] | ListEnumSourcePlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumSourcePlatformFilter<$PrismaModel> | $Enums.SourcePlatform
  }

  export type EnumFunnelStageFilter<$PrismaModel = never> = {
    equals?: $Enums.FunnelStage | EnumFunnelStageFieldRefInput<$PrismaModel>
    in?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    not?: NestedEnumFunnelStageFilter<$PrismaModel> | $Enums.FunnelStage
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

  export type FacebookUserNullableScalarRelationFilter = {
    is?: FacebookUserWhereInput | null
    isNot?: FacebookUserWhereInput | null
  }

  export type TiktokUserNullableScalarRelationFilter = {
    is?: TiktokUserWhereInput | null
    isNot?: TiktokUserWhereInput | null
  }

  export type FacebookEngagementNullableScalarRelationFilter = {
    is?: FacebookEngagementWhereInput | null
    isNot?: FacebookEngagementWhereInput | null
  }

  export type TiktokEngagementNullableScalarRelationFilter = {
    is?: TiktokEngagementWhereInput | null
    isNot?: TiktokEngagementWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    facebookUserId?: SortOrder
    tiktokUserId?: SortOrder
    facebookEngagementId?: SortOrder
    tiktokEngagementId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    facebookUserId?: SortOrder
    tiktokUserId?: SortOrder
    facebookEngagementId?: SortOrder
    tiktokEngagementId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    funnelStage?: SortOrder
    eventType?: SortOrder
    facebookUserId?: SortOrder
    tiktokUserId?: SortOrder
    facebookEngagementId?: SortOrder
    tiktokEngagementId?: SortOrder
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

  export type EnumSourcePlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourcePlatform | EnumSourcePlatformFieldRefInput<$PrismaModel>
    in?: $Enums.SourcePlatform[] | ListEnumSourcePlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourcePlatform[] | ListEnumSourcePlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumSourcePlatformWithAggregatesFilter<$PrismaModel> | $Enums.SourcePlatform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourcePlatformFilter<$PrismaModel>
    _max?: NestedEnumSourcePlatformFilter<$PrismaModel>
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

  export type EventNullableScalarRelationFilter = {
    is?: EventWhereInput | null
    isNot?: EventWhereInput | null
  }

  export type FacebookUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    city?: SortOrder
  }

  export type FacebookUserAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type FacebookUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    city?: SortOrder
  }

  export type FacebookUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    city?: SortOrder
  }

  export type FacebookUserSumOrderByAggregateInput = {
    age?: SortOrder
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

  export type TiktokUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    followers?: SortOrder
  }

  export type TiktokUserAvgOrderByAggregateInput = {
    followers?: SortOrder
  }

  export type TiktokUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    followers?: SortOrder
  }

  export type TiktokUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    followers?: SortOrder
  }

  export type TiktokUserSumOrderByAggregateInput = {
    followers?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumReferrerNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Referrer | EnumReferrerFieldRefInput<$PrismaModel> | null
    in?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel> | null
    not?: NestedEnumReferrerNullableFilter<$PrismaModel> | $Enums.Referrer | null
  }

  export type EnumClickPositionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ClickPosition | EnumClickPositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumClickPositionNullableFilter<$PrismaModel> | $Enums.ClickPosition | null
  }

  export type EnumDeviceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Device | EnumDeviceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceNullableFilter<$PrismaModel> | $Enums.Device | null
  }

  export type EnumBrowserNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Browser | EnumBrowserFieldRefInput<$PrismaModel> | null
    in?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBrowserNullableFilter<$PrismaModel> | $Enums.Browser | null
  }

  export type FacebookEngagementCountOrderByAggregateInput = {
    id?: SortOrder
    actionTime?: SortOrder
    referrer?: SortOrder
    videoId?: SortOrder
    adId?: SortOrder
    campaignId?: SortOrder
    clickPosition?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    purchaseAmount?: SortOrder
  }

  export type FacebookEngagementMaxOrderByAggregateInput = {
    id?: SortOrder
    actionTime?: SortOrder
    referrer?: SortOrder
    videoId?: SortOrder
    adId?: SortOrder
    campaignId?: SortOrder
    clickPosition?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    purchaseAmount?: SortOrder
  }

  export type FacebookEngagementMinOrderByAggregateInput = {
    id?: SortOrder
    actionTime?: SortOrder
    referrer?: SortOrder
    videoId?: SortOrder
    adId?: SortOrder
    campaignId?: SortOrder
    clickPosition?: SortOrder
    device?: SortOrder
    browser?: SortOrder
    purchaseAmount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumReferrerNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Referrer | EnumReferrerFieldRefInput<$PrismaModel> | null
    in?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel> | null
    not?: NestedEnumReferrerNullableWithAggregatesFilter<$PrismaModel> | $Enums.Referrer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumReferrerNullableFilter<$PrismaModel>
    _max?: NestedEnumReferrerNullableFilter<$PrismaModel>
  }

  export type EnumClickPositionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClickPosition | EnumClickPositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumClickPositionNullableWithAggregatesFilter<$PrismaModel> | $Enums.ClickPosition | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumClickPositionNullableFilter<$PrismaModel>
    _max?: NestedEnumClickPositionNullableFilter<$PrismaModel>
  }

  export type EnumDeviceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Device | EnumDeviceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceNullableWithAggregatesFilter<$PrismaModel> | $Enums.Device | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDeviceNullableFilter<$PrismaModel>
    _max?: NestedEnumDeviceNullableFilter<$PrismaModel>
  }

  export type EnumBrowserNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Browser | EnumBrowserFieldRefInput<$PrismaModel> | null
    in?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBrowserNullableWithAggregatesFilter<$PrismaModel> | $Enums.Browser | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBrowserNullableFilter<$PrismaModel>
    _max?: NestedEnumBrowserNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumDeviceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceTypeNullableFilter<$PrismaModel> | $Enums.DeviceType | null
  }

  export type TiktokEngagementCountOrderByAggregateInput = {
    id?: SortOrder
    watchTime?: SortOrder
    percentageWatched?: SortOrder
    device?: SortOrder
    country?: SortOrder
    videoId?: SortOrder
    actionTime?: SortOrder
    profileId?: SortOrder
    purchasedItem?: SortOrder
    purchaseAmount?: SortOrder
  }

  export type TiktokEngagementAvgOrderByAggregateInput = {
    watchTime?: SortOrder
    percentageWatched?: SortOrder
  }

  export type TiktokEngagementMaxOrderByAggregateInput = {
    id?: SortOrder
    watchTime?: SortOrder
    percentageWatched?: SortOrder
    device?: SortOrder
    country?: SortOrder
    videoId?: SortOrder
    actionTime?: SortOrder
    profileId?: SortOrder
    purchasedItem?: SortOrder
    purchaseAmount?: SortOrder
  }

  export type TiktokEngagementMinOrderByAggregateInput = {
    id?: SortOrder
    watchTime?: SortOrder
    percentageWatched?: SortOrder
    device?: SortOrder
    country?: SortOrder
    videoId?: SortOrder
    actionTime?: SortOrder
    profileId?: SortOrder
    purchasedItem?: SortOrder
    purchaseAmount?: SortOrder
  }

  export type TiktokEngagementSumOrderByAggregateInput = {
    watchTime?: SortOrder
    percentageWatched?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumDeviceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeNullableFilter<$PrismaModel>
  }

  export type FacebookUserCreateNestedOneWithoutEventInput = {
    create?: XOR<FacebookUserCreateWithoutEventInput, FacebookUserUncheckedCreateWithoutEventInput>
    connectOrCreate?: FacebookUserCreateOrConnectWithoutEventInput
    connect?: FacebookUserWhereUniqueInput
  }

  export type TiktokUserCreateNestedOneWithoutEventInput = {
    create?: XOR<TiktokUserCreateWithoutEventInput, TiktokUserUncheckedCreateWithoutEventInput>
    connectOrCreate?: TiktokUserCreateOrConnectWithoutEventInput
    connect?: TiktokUserWhereUniqueInput
  }

  export type FacebookEngagementCreateNestedOneWithoutEventInput = {
    create?: XOR<FacebookEngagementCreateWithoutEventInput, FacebookEngagementUncheckedCreateWithoutEventInput>
    connectOrCreate?: FacebookEngagementCreateOrConnectWithoutEventInput
    connect?: FacebookEngagementWhereUniqueInput
  }

  export type TiktokEngagementCreateNestedOneWithoutEventInput = {
    create?: XOR<TiktokEngagementCreateWithoutEventInput, TiktokEngagementUncheckedCreateWithoutEventInput>
    connectOrCreate?: TiktokEngagementCreateOrConnectWithoutEventInput
    connect?: TiktokEngagementWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumSourcePlatformFieldUpdateOperationsInput = {
    set?: $Enums.SourcePlatform
  }

  export type EnumFunnelStageFieldUpdateOperationsInput = {
    set?: $Enums.FunnelStage
  }

  export type FacebookUserUpdateOneWithoutEventNestedInput = {
    create?: XOR<FacebookUserCreateWithoutEventInput, FacebookUserUncheckedCreateWithoutEventInput>
    connectOrCreate?: FacebookUserCreateOrConnectWithoutEventInput
    upsert?: FacebookUserUpsertWithoutEventInput
    disconnect?: FacebookUserWhereInput | boolean
    delete?: FacebookUserWhereInput | boolean
    connect?: FacebookUserWhereUniqueInput
    update?: XOR<XOR<FacebookUserUpdateToOneWithWhereWithoutEventInput, FacebookUserUpdateWithoutEventInput>, FacebookUserUncheckedUpdateWithoutEventInput>
  }

  export type TiktokUserUpdateOneWithoutEventNestedInput = {
    create?: XOR<TiktokUserCreateWithoutEventInput, TiktokUserUncheckedCreateWithoutEventInput>
    connectOrCreate?: TiktokUserCreateOrConnectWithoutEventInput
    upsert?: TiktokUserUpsertWithoutEventInput
    disconnect?: TiktokUserWhereInput | boolean
    delete?: TiktokUserWhereInput | boolean
    connect?: TiktokUserWhereUniqueInput
    update?: XOR<XOR<TiktokUserUpdateToOneWithWhereWithoutEventInput, TiktokUserUpdateWithoutEventInput>, TiktokUserUncheckedUpdateWithoutEventInput>
  }

  export type FacebookEngagementUpdateOneWithoutEventNestedInput = {
    create?: XOR<FacebookEngagementCreateWithoutEventInput, FacebookEngagementUncheckedCreateWithoutEventInput>
    connectOrCreate?: FacebookEngagementCreateOrConnectWithoutEventInput
    upsert?: FacebookEngagementUpsertWithoutEventInput
    disconnect?: FacebookEngagementWhereInput | boolean
    delete?: FacebookEngagementWhereInput | boolean
    connect?: FacebookEngagementWhereUniqueInput
    update?: XOR<XOR<FacebookEngagementUpdateToOneWithWhereWithoutEventInput, FacebookEngagementUpdateWithoutEventInput>, FacebookEngagementUncheckedUpdateWithoutEventInput>
  }

  export type TiktokEngagementUpdateOneWithoutEventNestedInput = {
    create?: XOR<TiktokEngagementCreateWithoutEventInput, TiktokEngagementUncheckedCreateWithoutEventInput>
    connectOrCreate?: TiktokEngagementCreateOrConnectWithoutEventInput
    upsert?: TiktokEngagementUpsertWithoutEventInput
    disconnect?: TiktokEngagementWhereInput | boolean
    delete?: TiktokEngagementWhereInput | boolean
    connect?: TiktokEngagementWhereUniqueInput
    update?: XOR<XOR<TiktokEngagementUpdateToOneWithWhereWithoutEventInput, TiktokEngagementUpdateWithoutEventInput>, TiktokEngagementUncheckedUpdateWithoutEventInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EventCreateNestedOneWithoutFacebookUserInput = {
    create?: XOR<EventCreateWithoutFacebookUserInput, EventUncheckedCreateWithoutFacebookUserInput>
    connectOrCreate?: EventCreateOrConnectWithoutFacebookUserInput
    connect?: EventWhereUniqueInput
  }

  export type EventUncheckedCreateNestedOneWithoutFacebookUserInput = {
    create?: XOR<EventCreateWithoutFacebookUserInput, EventUncheckedCreateWithoutFacebookUserInput>
    connectOrCreate?: EventCreateOrConnectWithoutFacebookUserInput
    connect?: EventWhereUniqueInput
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

  export type EventUpdateOneWithoutFacebookUserNestedInput = {
    create?: XOR<EventCreateWithoutFacebookUserInput, EventUncheckedCreateWithoutFacebookUserInput>
    connectOrCreate?: EventCreateOrConnectWithoutFacebookUserInput
    upsert?: EventUpsertWithoutFacebookUserInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutFacebookUserInput, EventUpdateWithoutFacebookUserInput>, EventUncheckedUpdateWithoutFacebookUserInput>
  }

  export type EventUncheckedUpdateOneWithoutFacebookUserNestedInput = {
    create?: XOR<EventCreateWithoutFacebookUserInput, EventUncheckedCreateWithoutFacebookUserInput>
    connectOrCreate?: EventCreateOrConnectWithoutFacebookUserInput
    upsert?: EventUpsertWithoutFacebookUserInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutFacebookUserInput, EventUpdateWithoutFacebookUserInput>, EventUncheckedUpdateWithoutFacebookUserInput>
  }

  export type EventCreateNestedOneWithoutTiktokUserInput = {
    create?: XOR<EventCreateWithoutTiktokUserInput, EventUncheckedCreateWithoutTiktokUserInput>
    connectOrCreate?: EventCreateOrConnectWithoutTiktokUserInput
    connect?: EventWhereUniqueInput
  }

  export type EventUncheckedCreateNestedOneWithoutTiktokUserInput = {
    create?: XOR<EventCreateWithoutTiktokUserInput, EventUncheckedCreateWithoutTiktokUserInput>
    connectOrCreate?: EventCreateOrConnectWithoutTiktokUserInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneWithoutTiktokUserNestedInput = {
    create?: XOR<EventCreateWithoutTiktokUserInput, EventUncheckedCreateWithoutTiktokUserInput>
    connectOrCreate?: EventCreateOrConnectWithoutTiktokUserInput
    upsert?: EventUpsertWithoutTiktokUserInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTiktokUserInput, EventUpdateWithoutTiktokUserInput>, EventUncheckedUpdateWithoutTiktokUserInput>
  }

  export type EventUncheckedUpdateOneWithoutTiktokUserNestedInput = {
    create?: XOR<EventCreateWithoutTiktokUserInput, EventUncheckedCreateWithoutTiktokUserInput>
    connectOrCreate?: EventCreateOrConnectWithoutTiktokUserInput
    upsert?: EventUpsertWithoutTiktokUserInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTiktokUserInput, EventUpdateWithoutTiktokUserInput>, EventUncheckedUpdateWithoutTiktokUserInput>
  }

  export type EventCreateNestedOneWithoutFacebookEngagementInput = {
    create?: XOR<EventCreateWithoutFacebookEngagementInput, EventUncheckedCreateWithoutFacebookEngagementInput>
    connectOrCreate?: EventCreateOrConnectWithoutFacebookEngagementInput
    connect?: EventWhereUniqueInput
  }

  export type EventUncheckedCreateNestedOneWithoutFacebookEngagementInput = {
    create?: XOR<EventCreateWithoutFacebookEngagementInput, EventUncheckedCreateWithoutFacebookEngagementInput>
    connectOrCreate?: EventCreateOrConnectWithoutFacebookEngagementInput
    connect?: EventWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumReferrerFieldUpdateOperationsInput = {
    set?: $Enums.Referrer | null
  }

  export type NullableEnumClickPositionFieldUpdateOperationsInput = {
    set?: $Enums.ClickPosition | null
  }

  export type NullableEnumDeviceFieldUpdateOperationsInput = {
    set?: $Enums.Device | null
  }

  export type NullableEnumBrowserFieldUpdateOperationsInput = {
    set?: $Enums.Browser | null
  }

  export type EventUpdateOneWithoutFacebookEngagementNestedInput = {
    create?: XOR<EventCreateWithoutFacebookEngagementInput, EventUncheckedCreateWithoutFacebookEngagementInput>
    connectOrCreate?: EventCreateOrConnectWithoutFacebookEngagementInput
    upsert?: EventUpsertWithoutFacebookEngagementInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutFacebookEngagementInput, EventUpdateWithoutFacebookEngagementInput>, EventUncheckedUpdateWithoutFacebookEngagementInput>
  }

  export type EventUncheckedUpdateOneWithoutFacebookEngagementNestedInput = {
    create?: XOR<EventCreateWithoutFacebookEngagementInput, EventUncheckedCreateWithoutFacebookEngagementInput>
    connectOrCreate?: EventCreateOrConnectWithoutFacebookEngagementInput
    upsert?: EventUpsertWithoutFacebookEngagementInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutFacebookEngagementInput, EventUpdateWithoutFacebookEngagementInput>, EventUncheckedUpdateWithoutFacebookEngagementInput>
  }

  export type EventCreateNestedOneWithoutTiktokEngagementInput = {
    create?: XOR<EventCreateWithoutTiktokEngagementInput, EventUncheckedCreateWithoutTiktokEngagementInput>
    connectOrCreate?: EventCreateOrConnectWithoutTiktokEngagementInput
    connect?: EventWhereUniqueInput
  }

  export type EventUncheckedCreateNestedOneWithoutTiktokEngagementInput = {
    create?: XOR<EventCreateWithoutTiktokEngagementInput, EventUncheckedCreateWithoutTiktokEngagementInput>
    connectOrCreate?: EventCreateOrConnectWithoutTiktokEngagementInput
    connect?: EventWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumDeviceTypeFieldUpdateOperationsInput = {
    set?: $Enums.DeviceType | null
  }

  export type EventUpdateOneWithoutTiktokEngagementNestedInput = {
    create?: XOR<EventCreateWithoutTiktokEngagementInput, EventUncheckedCreateWithoutTiktokEngagementInput>
    connectOrCreate?: EventCreateOrConnectWithoutTiktokEngagementInput
    upsert?: EventUpsertWithoutTiktokEngagementInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTiktokEngagementInput, EventUpdateWithoutTiktokEngagementInput>, EventUncheckedUpdateWithoutTiktokEngagementInput>
  }

  export type EventUncheckedUpdateOneWithoutTiktokEngagementNestedInput = {
    create?: XOR<EventCreateWithoutTiktokEngagementInput, EventUncheckedCreateWithoutTiktokEngagementInput>
    connectOrCreate?: EventCreateOrConnectWithoutTiktokEngagementInput
    upsert?: EventUpsertWithoutTiktokEngagementInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTiktokEngagementInput, EventUpdateWithoutTiktokEngagementInput>, EventUncheckedUpdateWithoutTiktokEngagementInput>
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

  export type NestedEnumSourcePlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.SourcePlatform | EnumSourcePlatformFieldRefInput<$PrismaModel>
    in?: $Enums.SourcePlatform[] | ListEnumSourcePlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourcePlatform[] | ListEnumSourcePlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumSourcePlatformFilter<$PrismaModel> | $Enums.SourcePlatform
  }

  export type NestedEnumFunnelStageFilter<$PrismaModel = never> = {
    equals?: $Enums.FunnelStage | EnumFunnelStageFieldRefInput<$PrismaModel>
    in?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.FunnelStage[] | ListEnumFunnelStageFieldRefInput<$PrismaModel>
    not?: NestedEnumFunnelStageFilter<$PrismaModel> | $Enums.FunnelStage
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

  export type NestedEnumSourcePlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourcePlatform | EnumSourcePlatformFieldRefInput<$PrismaModel>
    in?: $Enums.SourcePlatform[] | ListEnumSourcePlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourcePlatform[] | ListEnumSourcePlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumSourcePlatformWithAggregatesFilter<$PrismaModel> | $Enums.SourcePlatform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourcePlatformFilter<$PrismaModel>
    _max?: NestedEnumSourcePlatformFilter<$PrismaModel>
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumReferrerNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Referrer | EnumReferrerFieldRefInput<$PrismaModel> | null
    in?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel> | null
    not?: NestedEnumReferrerNullableFilter<$PrismaModel> | $Enums.Referrer | null
  }

  export type NestedEnumClickPositionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ClickPosition | EnumClickPositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumClickPositionNullableFilter<$PrismaModel> | $Enums.ClickPosition | null
  }

  export type NestedEnumDeviceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Device | EnumDeviceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceNullableFilter<$PrismaModel> | $Enums.Device | null
  }

  export type NestedEnumBrowserNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Browser | EnumBrowserFieldRefInput<$PrismaModel> | null
    in?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBrowserNullableFilter<$PrismaModel> | $Enums.Browser | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumReferrerNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Referrer | EnumReferrerFieldRefInput<$PrismaModel> | null
    in?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Referrer[] | ListEnumReferrerFieldRefInput<$PrismaModel> | null
    not?: NestedEnumReferrerNullableWithAggregatesFilter<$PrismaModel> | $Enums.Referrer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumReferrerNullableFilter<$PrismaModel>
    _max?: NestedEnumReferrerNullableFilter<$PrismaModel>
  }

  export type NestedEnumClickPositionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClickPosition | EnumClickPositionFieldRefInput<$PrismaModel> | null
    in?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ClickPosition[] | ListEnumClickPositionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumClickPositionNullableWithAggregatesFilter<$PrismaModel> | $Enums.ClickPosition | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumClickPositionNullableFilter<$PrismaModel>
    _max?: NestedEnumClickPositionNullableFilter<$PrismaModel>
  }

  export type NestedEnumDeviceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Device | EnumDeviceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Device[] | ListEnumDeviceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceNullableWithAggregatesFilter<$PrismaModel> | $Enums.Device | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDeviceNullableFilter<$PrismaModel>
    _max?: NestedEnumDeviceNullableFilter<$PrismaModel>
  }

  export type NestedEnumBrowserNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Browser | EnumBrowserFieldRefInput<$PrismaModel> | null
    in?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Browser[] | ListEnumBrowserFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBrowserNullableWithAggregatesFilter<$PrismaModel> | $Enums.Browser | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBrowserNullableFilter<$PrismaModel>
    _max?: NestedEnumBrowserNullableFilter<$PrismaModel>
  }

  export type NestedEnumDeviceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceTypeNullableFilter<$PrismaModel> | $Enums.DeviceType | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDeviceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDeviceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeNullableFilter<$PrismaModel>
  }

  export type FacebookUserCreateWithoutEventInput = {
    id?: string
    userId: string
    name: string
    age: number
    gender: $Enums.Gender
    country: string
    city: string
  }

  export type FacebookUserUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    name: string
    age: number
    gender: $Enums.Gender
    country: string
    city: string
  }

  export type FacebookUserCreateOrConnectWithoutEventInput = {
    where: FacebookUserWhereUniqueInput
    create: XOR<FacebookUserCreateWithoutEventInput, FacebookUserUncheckedCreateWithoutEventInput>
  }

  export type TiktokUserCreateWithoutEventInput = {
    id?: string
    userId: string
    username: string
    followers: number
  }

  export type TiktokUserUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    username: string
    followers: number
  }

  export type TiktokUserCreateOrConnectWithoutEventInput = {
    where: TiktokUserWhereUniqueInput
    create: XOR<TiktokUserCreateWithoutEventInput, TiktokUserUncheckedCreateWithoutEventInput>
  }

  export type FacebookEngagementCreateWithoutEventInput = {
    id?: string
    actionTime?: Date | string | null
    referrer?: $Enums.Referrer | null
    videoId?: string | null
    adId?: string | null
    campaignId?: string | null
    clickPosition?: $Enums.ClickPosition | null
    device?: $Enums.Device | null
    browser?: $Enums.Browser | null
    purchaseAmount?: string | null
  }

  export type FacebookEngagementUncheckedCreateWithoutEventInput = {
    id?: string
    actionTime?: Date | string | null
    referrer?: $Enums.Referrer | null
    videoId?: string | null
    adId?: string | null
    campaignId?: string | null
    clickPosition?: $Enums.ClickPosition | null
    device?: $Enums.Device | null
    browser?: $Enums.Browser | null
    purchaseAmount?: string | null
  }

  export type FacebookEngagementCreateOrConnectWithoutEventInput = {
    where: FacebookEngagementWhereUniqueInput
    create: XOR<FacebookEngagementCreateWithoutEventInput, FacebookEngagementUncheckedCreateWithoutEventInput>
  }

  export type TiktokEngagementCreateWithoutEventInput = {
    id?: string
    watchTime?: number | null
    percentageWatched?: number | null
    device?: $Enums.DeviceType | null
    country?: string | null
    videoId?: string | null
    actionTime?: Date | string | null
    profileId?: string | null
    purchasedItem?: string | null
    purchaseAmount?: string | null
  }

  export type TiktokEngagementUncheckedCreateWithoutEventInput = {
    id?: string
    watchTime?: number | null
    percentageWatched?: number | null
    device?: $Enums.DeviceType | null
    country?: string | null
    videoId?: string | null
    actionTime?: Date | string | null
    profileId?: string | null
    purchasedItem?: string | null
    purchaseAmount?: string | null
  }

  export type TiktokEngagementCreateOrConnectWithoutEventInput = {
    where: TiktokEngagementWhereUniqueInput
    create: XOR<TiktokEngagementCreateWithoutEventInput, TiktokEngagementUncheckedCreateWithoutEventInput>
  }

  export type FacebookUserUpsertWithoutEventInput = {
    update: XOR<FacebookUserUpdateWithoutEventInput, FacebookUserUncheckedUpdateWithoutEventInput>
    create: XOR<FacebookUserCreateWithoutEventInput, FacebookUserUncheckedCreateWithoutEventInput>
    where?: FacebookUserWhereInput
  }

  export type FacebookUserUpdateToOneWithWhereWithoutEventInput = {
    where?: FacebookUserWhereInput
    data: XOR<FacebookUserUpdateWithoutEventInput, FacebookUserUncheckedUpdateWithoutEventInput>
  }

  export type FacebookUserUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type FacebookUserUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type TiktokUserUpsertWithoutEventInput = {
    update: XOR<TiktokUserUpdateWithoutEventInput, TiktokUserUncheckedUpdateWithoutEventInput>
    create: XOR<TiktokUserCreateWithoutEventInput, TiktokUserUncheckedCreateWithoutEventInput>
    where?: TiktokUserWhereInput
  }

  export type TiktokUserUpdateToOneWithWhereWithoutEventInput = {
    where?: TiktokUserWhereInput
    data: XOR<TiktokUserUpdateWithoutEventInput, TiktokUserUncheckedUpdateWithoutEventInput>
  }

  export type TiktokUserUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
  }

  export type TiktokUserUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
  }

  export type FacebookEngagementUpsertWithoutEventInput = {
    update: XOR<FacebookEngagementUpdateWithoutEventInput, FacebookEngagementUncheckedUpdateWithoutEventInput>
    create: XOR<FacebookEngagementCreateWithoutEventInput, FacebookEngagementUncheckedCreateWithoutEventInput>
    where?: FacebookEngagementWhereInput
  }

  export type FacebookEngagementUpdateToOneWithWhereWithoutEventInput = {
    where?: FacebookEngagementWhereInput
    data: XOR<FacebookEngagementUpdateWithoutEventInput, FacebookEngagementUncheckedUpdateWithoutEventInput>
  }

  export type FacebookEngagementUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referrer?: NullableEnumReferrerFieldUpdateOperationsInput | $Enums.Referrer | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    clickPosition?: NullableEnumClickPositionFieldUpdateOperationsInput | $Enums.ClickPosition | null
    device?: NullableEnumDeviceFieldUpdateOperationsInput | $Enums.Device | null
    browser?: NullableEnumBrowserFieldUpdateOperationsInput | $Enums.Browser | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacebookEngagementUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referrer?: NullableEnumReferrerFieldUpdateOperationsInput | $Enums.Referrer | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    clickPosition?: NullableEnumClickPositionFieldUpdateOperationsInput | $Enums.ClickPosition | null
    device?: NullableEnumDeviceFieldUpdateOperationsInput | $Enums.Device | null
    browser?: NullableEnumBrowserFieldUpdateOperationsInput | $Enums.Browser | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TiktokEngagementUpsertWithoutEventInput = {
    update: XOR<TiktokEngagementUpdateWithoutEventInput, TiktokEngagementUncheckedUpdateWithoutEventInput>
    create: XOR<TiktokEngagementCreateWithoutEventInput, TiktokEngagementUncheckedCreateWithoutEventInput>
    where?: TiktokEngagementWhereInput
  }

  export type TiktokEngagementUpdateToOneWithWhereWithoutEventInput = {
    where?: TiktokEngagementWhereInput
    data: XOR<TiktokEngagementUpdateWithoutEventInput, TiktokEngagementUncheckedUpdateWithoutEventInput>
  }

  export type TiktokEngagementUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchTime?: NullableIntFieldUpdateOperationsInput | number | null
    percentageWatched?: NullableIntFieldUpdateOperationsInput | number | null
    device?: NullableEnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedItem?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TiktokEngagementUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchTime?: NullableIntFieldUpdateOperationsInput | number | null
    percentageWatched?: NullableIntFieldUpdateOperationsInput | number | null
    device?: NullableEnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    actionTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedItem?: NullableStringFieldUpdateOperationsInput | string | null
    purchaseAmount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventCreateWithoutFacebookUserInput = {
    id?: string
    eventId: string
    timestamp: Date | string
    source: $Enums.SourcePlatform
    funnelStage: $Enums.FunnelStage
    eventType: string
    tiktokUser?: TiktokUserCreateNestedOneWithoutEventInput
    facebookEngagement?: FacebookEngagementCreateNestedOneWithoutEventInput
    tiktokEngagement?: TiktokEngagementCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutFacebookUserInput = {
    id?: string
    eventId: string
    timestamp: Date | string
    source: $Enums.SourcePlatform
    funnelStage: $Enums.FunnelStage
    eventType: string
    tiktokUserId?: string | null
    facebookEngagementId?: string | null
    tiktokEngagementId?: string | null
  }

  export type EventCreateOrConnectWithoutFacebookUserInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutFacebookUserInput, EventUncheckedCreateWithoutFacebookUserInput>
  }

  export type EventUpsertWithoutFacebookUserInput = {
    update: XOR<EventUpdateWithoutFacebookUserInput, EventUncheckedUpdateWithoutFacebookUserInput>
    create: XOR<EventCreateWithoutFacebookUserInput, EventUncheckedCreateWithoutFacebookUserInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutFacebookUserInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutFacebookUserInput, EventUncheckedUpdateWithoutFacebookUserInput>
  }

  export type EventUpdateWithoutFacebookUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcePlatformFieldUpdateOperationsInput | $Enums.SourcePlatform
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    tiktokUser?: TiktokUserUpdateOneWithoutEventNestedInput
    facebookEngagement?: FacebookEngagementUpdateOneWithoutEventNestedInput
    tiktokEngagement?: TiktokEngagementUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutFacebookUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcePlatformFieldUpdateOperationsInput | $Enums.SourcePlatform
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    tiktokUserId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookEngagementId?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokEngagementId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventCreateWithoutTiktokUserInput = {
    id?: string
    eventId: string
    timestamp: Date | string
    source: $Enums.SourcePlatform
    funnelStage: $Enums.FunnelStage
    eventType: string
    facebookUser?: FacebookUserCreateNestedOneWithoutEventInput
    facebookEngagement?: FacebookEngagementCreateNestedOneWithoutEventInput
    tiktokEngagement?: TiktokEngagementCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTiktokUserInput = {
    id?: string
    eventId: string
    timestamp: Date | string
    source: $Enums.SourcePlatform
    funnelStage: $Enums.FunnelStage
    eventType: string
    facebookUserId?: string | null
    facebookEngagementId?: string | null
    tiktokEngagementId?: string | null
  }

  export type EventCreateOrConnectWithoutTiktokUserInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTiktokUserInput, EventUncheckedCreateWithoutTiktokUserInput>
  }

  export type EventUpsertWithoutTiktokUserInput = {
    update: XOR<EventUpdateWithoutTiktokUserInput, EventUncheckedUpdateWithoutTiktokUserInput>
    create: XOR<EventCreateWithoutTiktokUserInput, EventUncheckedCreateWithoutTiktokUserInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTiktokUserInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTiktokUserInput, EventUncheckedUpdateWithoutTiktokUserInput>
  }

  export type EventUpdateWithoutTiktokUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcePlatformFieldUpdateOperationsInput | $Enums.SourcePlatform
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    facebookUser?: FacebookUserUpdateOneWithoutEventNestedInput
    facebookEngagement?: FacebookEngagementUpdateOneWithoutEventNestedInput
    tiktokEngagement?: TiktokEngagementUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTiktokUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcePlatformFieldUpdateOperationsInput | $Enums.SourcePlatform
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    facebookUserId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookEngagementId?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokEngagementId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventCreateWithoutFacebookEngagementInput = {
    id?: string
    eventId: string
    timestamp: Date | string
    source: $Enums.SourcePlatform
    funnelStage: $Enums.FunnelStage
    eventType: string
    facebookUser?: FacebookUserCreateNestedOneWithoutEventInput
    tiktokUser?: TiktokUserCreateNestedOneWithoutEventInput
    tiktokEngagement?: TiktokEngagementCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutFacebookEngagementInput = {
    id?: string
    eventId: string
    timestamp: Date | string
    source: $Enums.SourcePlatform
    funnelStage: $Enums.FunnelStage
    eventType: string
    facebookUserId?: string | null
    tiktokUserId?: string | null
    tiktokEngagementId?: string | null
  }

  export type EventCreateOrConnectWithoutFacebookEngagementInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutFacebookEngagementInput, EventUncheckedCreateWithoutFacebookEngagementInput>
  }

  export type EventUpsertWithoutFacebookEngagementInput = {
    update: XOR<EventUpdateWithoutFacebookEngagementInput, EventUncheckedUpdateWithoutFacebookEngagementInput>
    create: XOR<EventCreateWithoutFacebookEngagementInput, EventUncheckedCreateWithoutFacebookEngagementInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutFacebookEngagementInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutFacebookEngagementInput, EventUncheckedUpdateWithoutFacebookEngagementInput>
  }

  export type EventUpdateWithoutFacebookEngagementInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcePlatformFieldUpdateOperationsInput | $Enums.SourcePlatform
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    facebookUser?: FacebookUserUpdateOneWithoutEventNestedInput
    tiktokUser?: TiktokUserUpdateOneWithoutEventNestedInput
    tiktokEngagement?: TiktokEngagementUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutFacebookEngagementInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcePlatformFieldUpdateOperationsInput | $Enums.SourcePlatform
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    facebookUserId?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUserId?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokEngagementId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventCreateWithoutTiktokEngagementInput = {
    id?: string
    eventId: string
    timestamp: Date | string
    source: $Enums.SourcePlatform
    funnelStage: $Enums.FunnelStage
    eventType: string
    facebookUser?: FacebookUserCreateNestedOneWithoutEventInput
    tiktokUser?: TiktokUserCreateNestedOneWithoutEventInput
    facebookEngagement?: FacebookEngagementCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTiktokEngagementInput = {
    id?: string
    eventId: string
    timestamp: Date | string
    source: $Enums.SourcePlatform
    funnelStage: $Enums.FunnelStage
    eventType: string
    facebookUserId?: string | null
    tiktokUserId?: string | null
    facebookEngagementId?: string | null
  }

  export type EventCreateOrConnectWithoutTiktokEngagementInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTiktokEngagementInput, EventUncheckedCreateWithoutTiktokEngagementInput>
  }

  export type EventUpsertWithoutTiktokEngagementInput = {
    update: XOR<EventUpdateWithoutTiktokEngagementInput, EventUncheckedUpdateWithoutTiktokEngagementInput>
    create: XOR<EventCreateWithoutTiktokEngagementInput, EventUncheckedCreateWithoutTiktokEngagementInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTiktokEngagementInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTiktokEngagementInput, EventUncheckedUpdateWithoutTiktokEngagementInput>
  }

  export type EventUpdateWithoutTiktokEngagementInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcePlatformFieldUpdateOperationsInput | $Enums.SourcePlatform
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    facebookUser?: FacebookUserUpdateOneWithoutEventNestedInput
    tiktokUser?: TiktokUserUpdateOneWithoutEventNestedInput
    facebookEngagement?: FacebookEngagementUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTiktokEngagementInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcePlatformFieldUpdateOperationsInput | $Enums.SourcePlatform
    funnelStage?: EnumFunnelStageFieldUpdateOperationsInput | $Enums.FunnelStage
    eventType?: StringFieldUpdateOperationsInput | string
    facebookUserId?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUserId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookEngagementId?: NullableStringFieldUpdateOperationsInput | string | null
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