
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Song
 * 
 */
export type Song = $Result.DefaultSelection<Prisma.$SongPayload>
/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model Albums
 * 
 */
export type Albums = $Result.DefaultSelection<Prisma.$AlbumsPayload>
/**
 * Model LikedSong
 * 
 */
export type LikedSong = $Result.DefaultSelection<Prisma.$LikedSongPayload>
/**
 * Model LikedAlbums
 * 
 */
export type LikedAlbums = $Result.DefaultSelection<Prisma.$LikedAlbumsPayload>
/**
 * Model LikedPlaylist
 * 
 */
export type LikedPlaylist = $Result.DefaultSelection<Prisma.$LikedPlaylistPayload>
/**
 * Model Genres
 * 
 */
export type Genres = $Result.DefaultSelection<Prisma.$GenresPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model FollowedUser
 * 
 */
export type FollowedUser = $Result.DefaultSelection<Prisma.$FollowedUserPayload>
/**
 * Model FollowedBy
 * 
 */
export type FollowedBy = $Result.DefaultSelection<Prisma.$FollowedByPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.song`: Exposes CRUD operations for the **Song** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.song.findMany()
    * ```
    */
  get song(): Prisma.SongDelegate<ExtArgs>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs>;

  /**
   * `prisma.albums`: Exposes CRUD operations for the **Albums** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.albums.findMany()
    * ```
    */
  get albums(): Prisma.AlbumsDelegate<ExtArgs>;

  /**
   * `prisma.likedSong`: Exposes CRUD operations for the **LikedSong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikedSongs
    * const likedSongs = await prisma.likedSong.findMany()
    * ```
    */
  get likedSong(): Prisma.LikedSongDelegate<ExtArgs>;

  /**
   * `prisma.likedAlbums`: Exposes CRUD operations for the **LikedAlbums** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikedAlbums
    * const likedAlbums = await prisma.likedAlbums.findMany()
    * ```
    */
  get likedAlbums(): Prisma.LikedAlbumsDelegate<ExtArgs>;

  /**
   * `prisma.likedPlaylist`: Exposes CRUD operations for the **LikedPlaylist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikedPlaylists
    * const likedPlaylists = await prisma.likedPlaylist.findMany()
    * ```
    */
  get likedPlaylist(): Prisma.LikedPlaylistDelegate<ExtArgs>;

  /**
   * `prisma.genres`: Exposes CRUD operations for the **Genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genres.findMany()
    * ```
    */
  get genres(): Prisma.GenresDelegate<ExtArgs>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs>;

  /**
   * `prisma.followedUser`: Exposes CRUD operations for the **FollowedUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FollowedUsers
    * const followedUsers = await prisma.followedUser.findMany()
    * ```
    */
  get followedUser(): Prisma.FollowedUserDelegate<ExtArgs>;

  /**
   * `prisma.followedBy`: Exposes CRUD operations for the **FollowedBy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FollowedBies
    * const followedBies = await prisma.followedBy.findMany()
    * ```
    */
  get followedBy(): Prisma.FollowedByDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Song: 'Song',
    Artist: 'Artist',
    Albums: 'Albums',
    LikedSong: 'LikedSong',
    LikedAlbums: 'LikedAlbums',
    LikedPlaylist: 'LikedPlaylist',
    Genres: 'Genres',
    Playlist: 'Playlist',
    FollowedUser: 'FollowedUser',
    FollowedBy: 'FollowedBy'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'song' | 'artist' | 'albums' | 'likedSong' | 'likedAlbums' | 'likedPlaylist' | 'genres' | 'playlist' | 'followedUser' | 'followedBy'
      txIsolationLevel: never
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Song: {
        payload: Prisma.$SongPayload<ExtArgs>
        fields: Prisma.SongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findFirst: {
            args: Prisma.SongFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findMany: {
            args: Prisma.SongFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          create: {
            args: Prisma.SongCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          createMany: {
            args: Prisma.SongCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SongDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          update: {
            args: Prisma.SongUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          deleteMany: {
            args: Prisma.SongDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SongUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SongUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          aggregate: {
            args: Prisma.SongAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSong>
          }
          groupBy: {
            args: Prisma.SongGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SongGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SongFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.SongAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.SongCountArgs<ExtArgs>,
            result: $Utils.Optional<SongCountAggregateOutputType> | number
          }
        }
      }
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ArtistFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ArtistAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>,
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      Albums: {
        payload: Prisma.$AlbumsPayload<ExtArgs>
        fields: Prisma.AlbumsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          findFirst: {
            args: Prisma.AlbumsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          findMany: {
            args: Prisma.AlbumsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>[]
          }
          create: {
            args: Prisma.AlbumsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          createMany: {
            args: Prisma.AlbumsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AlbumsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          update: {
            args: Prisma.AlbumsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          deleteMany: {
            args: Prisma.AlbumsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AlbumsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          aggregate: {
            args: Prisma.AlbumsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAlbums>
          }
          groupBy: {
            args: Prisma.AlbumsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlbumsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AlbumsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AlbumsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AlbumsCountArgs<ExtArgs>,
            result: $Utils.Optional<AlbumsCountAggregateOutputType> | number
          }
        }
      }
      LikedSong: {
        payload: Prisma.$LikedSongPayload<ExtArgs>
        fields: Prisma.LikedSongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedSongFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedSongFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          findFirst: {
            args: Prisma.LikedSongFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedSongFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          findMany: {
            args: Prisma.LikedSongFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>[]
          }
          create: {
            args: Prisma.LikedSongCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          createMany: {
            args: Prisma.LikedSongCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LikedSongDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          update: {
            args: Prisma.LikedSongUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          deleteMany: {
            args: Prisma.LikedSongDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LikedSongUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LikedSongUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedSongPayload>
          }
          aggregate: {
            args: Prisma.LikedSongAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLikedSong>
          }
          groupBy: {
            args: Prisma.LikedSongGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LikedSongGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LikedSongFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.LikedSongAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.LikedSongCountArgs<ExtArgs>,
            result: $Utils.Optional<LikedSongCountAggregateOutputType> | number
          }
        }
      }
      LikedAlbums: {
        payload: Prisma.$LikedAlbumsPayload<ExtArgs>
        fields: Prisma.LikedAlbumsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedAlbumsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedAlbumsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          findFirst: {
            args: Prisma.LikedAlbumsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedAlbumsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          findMany: {
            args: Prisma.LikedAlbumsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>[]
          }
          create: {
            args: Prisma.LikedAlbumsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          createMany: {
            args: Prisma.LikedAlbumsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LikedAlbumsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          update: {
            args: Prisma.LikedAlbumsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          deleteMany: {
            args: Prisma.LikedAlbumsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LikedAlbumsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LikedAlbumsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedAlbumsPayload>
          }
          aggregate: {
            args: Prisma.LikedAlbumsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLikedAlbums>
          }
          groupBy: {
            args: Prisma.LikedAlbumsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LikedAlbumsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LikedAlbumsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.LikedAlbumsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.LikedAlbumsCountArgs<ExtArgs>,
            result: $Utils.Optional<LikedAlbumsCountAggregateOutputType> | number
          }
        }
      }
      LikedPlaylist: {
        payload: Prisma.$LikedPlaylistPayload<ExtArgs>
        fields: Prisma.LikedPlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedPlaylistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedPlaylistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload>
          }
          findFirst: {
            args: Prisma.LikedPlaylistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedPlaylistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload>
          }
          findMany: {
            args: Prisma.LikedPlaylistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload>[]
          }
          create: {
            args: Prisma.LikedPlaylistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload>
          }
          createMany: {
            args: Prisma.LikedPlaylistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LikedPlaylistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload>
          }
          update: {
            args: Prisma.LikedPlaylistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload>
          }
          deleteMany: {
            args: Prisma.LikedPlaylistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LikedPlaylistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LikedPlaylistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikedPlaylistPayload>
          }
          aggregate: {
            args: Prisma.LikedPlaylistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLikedPlaylist>
          }
          groupBy: {
            args: Prisma.LikedPlaylistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LikedPlaylistGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LikedPlaylistFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.LikedPlaylistAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.LikedPlaylistCountArgs<ExtArgs>,
            result: $Utils.Optional<LikedPlaylistCountAggregateOutputType> | number
          }
        }
      }
      Genres: {
        payload: Prisma.$GenresPayload<ExtArgs>
        fields: Prisma.GenresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenresFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenresFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          findFirst: {
            args: Prisma.GenresFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenresFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          findMany: {
            args: Prisma.GenresFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>[]
          }
          create: {
            args: Prisma.GenresCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          createMany: {
            args: Prisma.GenresCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GenresDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          update: {
            args: Prisma.GenresUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          deleteMany: {
            args: Prisma.GenresDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GenresUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GenresUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          aggregate: {
            args: Prisma.GenresAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGenres>
          }
          groupBy: {
            args: Prisma.GenresGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GenresGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GenresFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.GenresAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.GenresCountArgs<ExtArgs>,
            result: $Utils.Optional<GenresCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PlaylistFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PlaylistAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>,
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      FollowedUser: {
        payload: Prisma.$FollowedUserPayload<ExtArgs>
        fields: Prisma.FollowedUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowedUserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowedUserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedUserPayload>
          }
          findFirst: {
            args: Prisma.FollowedUserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowedUserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedUserPayload>
          }
          findMany: {
            args: Prisma.FollowedUserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedUserPayload>[]
          }
          create: {
            args: Prisma.FollowedUserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedUserPayload>
          }
          createMany: {
            args: Prisma.FollowedUserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FollowedUserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedUserPayload>
          }
          update: {
            args: Prisma.FollowedUserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedUserPayload>
          }
          deleteMany: {
            args: Prisma.FollowedUserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FollowedUserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FollowedUserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedUserPayload>
          }
          aggregate: {
            args: Prisma.FollowedUserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFollowedUser>
          }
          groupBy: {
            args: Prisma.FollowedUserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FollowedUserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FollowedUserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.FollowedUserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.FollowedUserCountArgs<ExtArgs>,
            result: $Utils.Optional<FollowedUserCountAggregateOutputType> | number
          }
        }
      }
      FollowedBy: {
        payload: Prisma.$FollowedByPayload<ExtArgs>
        fields: Prisma.FollowedByFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowedByFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedByPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowedByFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedByPayload>
          }
          findFirst: {
            args: Prisma.FollowedByFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedByPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowedByFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedByPayload>
          }
          findMany: {
            args: Prisma.FollowedByFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedByPayload>[]
          }
          create: {
            args: Prisma.FollowedByCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedByPayload>
          }
          createMany: {
            args: Prisma.FollowedByCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FollowedByDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedByPayload>
          }
          update: {
            args: Prisma.FollowedByUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedByPayload>
          }
          deleteMany: {
            args: Prisma.FollowedByDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FollowedByUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FollowedByUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowedByPayload>
          }
          aggregate: {
            args: Prisma.FollowedByAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFollowedBy>
          }
          groupBy: {
            args: Prisma.FollowedByGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FollowedByGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FollowedByFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.FollowedByAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.FollowedByCountArgs<ExtArgs>,
            result: $Utils.Optional<FollowedByCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Song: number
    LikedSong: number
    LikedAlbums: number
    Playlist: number
    LikedPlaylist: number
    FollowedUser: number
    FollowedBy: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Song?: boolean | UserCountOutputTypeCountSongArgs
    LikedSong?: boolean | UserCountOutputTypeCountLikedSongArgs
    LikedAlbums?: boolean | UserCountOutputTypeCountLikedAlbumsArgs
    Playlist?: boolean | UserCountOutputTypeCountPlaylistArgs
    LikedPlaylist?: boolean | UserCountOutputTypeCountLikedPlaylistArgs
    FollowedUser?: boolean | UserCountOutputTypeCountFollowedUserArgs
    FollowedBy?: boolean | UserCountOutputTypeCountFollowedByArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedSongWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedAlbumsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedPlaylistWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowedUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowedUserWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowedByWhereInput
  }



  /**
   * Count Type SongCountOutputType
   */

  export type SongCountOutputType = {
    Artist: number
    Album: number
    Genres: number
    LikedSong: number
    Playlist: number
  }

  export type SongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Artist?: boolean | SongCountOutputTypeCountArtistArgs
    Album?: boolean | SongCountOutputTypeCountAlbumArgs
    Genres?: boolean | SongCountOutputTypeCountGenresArgs
    LikedSong?: boolean | SongCountOutputTypeCountLikedSongArgs
    Playlist?: boolean | SongCountOutputTypeCountPlaylistArgs
  }

  // Custom InputTypes

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCountOutputType
     */
    select?: SongCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountArtistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
  }


  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountAlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumsWhereInput
  }


  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenresWhereInput
  }


  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountLikedSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedSongWhereInput
  }


  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }



  /**
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    Song: number
    Albums: number
    Genres: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Song?: boolean | ArtistCountOutputTypeCountSongArgs
    Albums?: boolean | ArtistCountOutputTypeCountAlbumsArgs
    Genres?: boolean | ArtistCountOutputTypeCountGenresArgs
  }

  // Custom InputTypes

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }


  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumsWhereInput
  }


  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenresWhereInput
  }



  /**
   * Count Type AlbumsCountOutputType
   */

  export type AlbumsCountOutputType = {
    LikedAlbums: number
    Song: number
    Artist: number
    Genres: number
  }

  export type AlbumsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LikedAlbums?: boolean | AlbumsCountOutputTypeCountLikedAlbumsArgs
    Song?: boolean | AlbumsCountOutputTypeCountSongArgs
    Artist?: boolean | AlbumsCountOutputTypeCountArtistArgs
    Genres?: boolean | AlbumsCountOutputTypeCountGenresArgs
  }

  // Custom InputTypes

  /**
   * AlbumsCountOutputType without action
   */
  export type AlbumsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumsCountOutputType
     */
    select?: AlbumsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AlbumsCountOutputType without action
   */
  export type AlbumsCountOutputTypeCountLikedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedAlbumsWhereInput
  }


  /**
   * AlbumsCountOutputType without action
   */
  export type AlbumsCountOutputTypeCountSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }


  /**
   * AlbumsCountOutputType without action
   */
  export type AlbumsCountOutputTypeCountArtistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
  }


  /**
   * AlbumsCountOutputType without action
   */
  export type AlbumsCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenresWhereInput
  }



  /**
   * Count Type GenresCountOutputType
   */

  export type GenresCountOutputType = {
    Song: number
    Artist: number
    Albums: number
  }

  export type GenresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Song?: boolean | GenresCountOutputTypeCountSongArgs
    Artist?: boolean | GenresCountOutputTypeCountArtistArgs
    Albums?: boolean | GenresCountOutputTypeCountAlbumsArgs
  }

  // Custom InputTypes

  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenresCountOutputType
     */
    select?: GenresCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeCountSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }


  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeCountArtistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
  }


  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumsWhereInput
  }



  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    Song: number
    LikedPlaylist: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Song?: boolean | PlaylistCountOutputTypeCountSongArgs
    LikedPlaylist?: boolean | PlaylistCountOutputTypeCountLikedPlaylistArgs
  }

  // Custom InputTypes

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
  }


  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountLikedPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedPlaylistWhereInput
  }



  /**
   * Count Type FollowedUserCountOutputType
   */

  export type FollowedUserCountOutputType = {
    User: number
  }

  export type FollowedUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | FollowedUserCountOutputTypeCountUserArgs
  }

  // Custom InputTypes

  /**
   * FollowedUserCountOutputType without action
   */
  export type FollowedUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedUserCountOutputType
     */
    select?: FollowedUserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FollowedUserCountOutputType without action
   */
  export type FollowedUserCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type FollowedByCountOutputType
   */

  export type FollowedByCountOutputType = {
    User: number
  }

  export type FollowedByCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | FollowedByCountOutputTypeCountUserArgs
  }

  // Custom InputTypes

  /**
   * FollowedByCountOutputType without action
   */
  export type FollowedByCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedByCountOutputType
     */
    select?: FollowedByCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FollowedByCountOutputType without action
   */
  export type FollowedByCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    avatar: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    avatar: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    avatar: number
    followedUserId: number
    followedById: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    avatar?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    avatar?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    avatar?: true
    followedUserId?: true
    followedById?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    avatar: string
    followedUserId: string[]
    followedById: string[]
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    avatar?: boolean
    followedUserId?: boolean
    followedById?: boolean
    Song?: boolean | User$SongArgs<ExtArgs>
    LikedSong?: boolean | User$LikedSongArgs<ExtArgs>
    LikedAlbums?: boolean | User$LikedAlbumsArgs<ExtArgs>
    Playlist?: boolean | User$PlaylistArgs<ExtArgs>
    LikedPlaylist?: boolean | User$LikedPlaylistArgs<ExtArgs>
    FollowedUser?: boolean | User$FollowedUserArgs<ExtArgs>
    FollowedBy?: boolean | User$FollowedByArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    avatar?: boolean
    followedUserId?: boolean
    followedById?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Song?: boolean | User$SongArgs<ExtArgs>
    LikedSong?: boolean | User$LikedSongArgs<ExtArgs>
    LikedAlbums?: boolean | User$LikedAlbumsArgs<ExtArgs>
    Playlist?: boolean | User$PlaylistArgs<ExtArgs>
    LikedPlaylist?: boolean | User$LikedPlaylistArgs<ExtArgs>
    FollowedUser?: boolean | User$FollowedUserArgs<ExtArgs>
    FollowedBy?: boolean | User$FollowedByArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Song: Prisma.$SongPayload<ExtArgs>[]
      LikedSong: Prisma.$LikedSongPayload<ExtArgs>[]
      LikedAlbums: Prisma.$LikedAlbumsPayload<ExtArgs>[]
      Playlist: Prisma.$PlaylistPayload<ExtArgs>[]
      LikedPlaylist: Prisma.$LikedPlaylistPayload<ExtArgs>[]
      FollowedUser: Prisma.$FollowedUserPayload<ExtArgs>[]
      FollowedBy: Prisma.$FollowedByPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      avatar: string
      followedUserId: string[]
      followedById: string[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Song<T extends User$SongArgs<ExtArgs> = {}>(args?: Subset<T, User$SongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'> | Null>;

    LikedSong<T extends User$LikedSongArgs<ExtArgs> = {}>(args?: Subset<T, User$LikedSongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, 'findMany'> | Null>;

    LikedAlbums<T extends User$LikedAlbumsArgs<ExtArgs> = {}>(args?: Subset<T, User$LikedAlbumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'findMany'> | Null>;

    Playlist<T extends User$PlaylistArgs<ExtArgs> = {}>(args?: Subset<T, User$PlaylistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findMany'> | Null>;

    LikedPlaylist<T extends User$LikedPlaylistArgs<ExtArgs> = {}>(args?: Subset<T, User$LikedPlaylistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, 'findMany'> | Null>;

    FollowedUser<T extends User$FollowedUserArgs<ExtArgs> = {}>(args?: Subset<T, User$FollowedUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowedUserPayload<ExtArgs>, T, 'findMany'> | Null>;

    FollowedBy<T extends User$FollowedByArgs<ExtArgs> = {}>(args?: Subset<T, User$FollowedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowedByPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly followedUserId: FieldRef<"User", 'String[]'>
    readonly followedById: FieldRef<"User", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.Song
   */
  export type User$SongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * User.LikedSong
   */
  export type User$LikedSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedSongInclude<ExtArgs> | null
    where?: LikedSongWhereInput
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    cursor?: LikedSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedSongScalarFieldEnum | LikedSongScalarFieldEnum[]
  }


  /**
   * User.LikedAlbums
   */
  export type User$LikedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    where?: LikedAlbumsWhereInput
    orderBy?: LikedAlbumsOrderByWithRelationInput | LikedAlbumsOrderByWithRelationInput[]
    cursor?: LikedAlbumsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedAlbumsScalarFieldEnum | LikedAlbumsScalarFieldEnum[]
  }


  /**
   * User.Playlist
   */
  export type User$PlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * User.LikedPlaylist
   */
  export type User$LikedPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    where?: LikedPlaylistWhereInput
    orderBy?: LikedPlaylistOrderByWithRelationInput | LikedPlaylistOrderByWithRelationInput[]
    cursor?: LikedPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedPlaylistScalarFieldEnum | LikedPlaylistScalarFieldEnum[]
  }


  /**
   * User.FollowedUser
   */
  export type User$FollowedUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedUser
     */
    select?: FollowedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedUserInclude<ExtArgs> | null
    where?: FollowedUserWhereInput
    orderBy?: FollowedUserOrderByWithRelationInput | FollowedUserOrderByWithRelationInput[]
    cursor?: FollowedUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowedUserScalarFieldEnum | FollowedUserScalarFieldEnum[]
  }


  /**
   * User.FollowedBy
   */
  export type User$FollowedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedBy
     */
    select?: FollowedBySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedByInclude<ExtArgs> | null
    where?: FollowedByWhereInput
    orderBy?: FollowedByOrderByWithRelationInput | FollowedByOrderByWithRelationInput[]
    cursor?: FollowedByWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowedByScalarFieldEnum | FollowedByScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Song
   */

  export type AggregateSong = {
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  export type SongAvgAggregateOutputType = {
    listened: number | null
  }

  export type SongSumAggregateOutputType = {
    listened: number | null
  }

  export type SongMinAggregateOutputType = {
    id: string | null
    url: string | null
    cover: string | null
    name: string | null
    duration: string | null
    listened: number | null
    userId: string | null
  }

  export type SongMaxAggregateOutputType = {
    id: string | null
    url: string | null
    cover: string | null
    name: string | null
    duration: string | null
    listened: number | null
    userId: string | null
  }

  export type SongCountAggregateOutputType = {
    id: number
    url: number
    cover: number
    name: number
    duration: number
    listened: number
    artistId: number
    albumId: number
    genreId: number
    userId: number
    playlistId: number
    _all: number
  }


  export type SongAvgAggregateInputType = {
    listened?: true
  }

  export type SongSumAggregateInputType = {
    listened?: true
  }

  export type SongMinAggregateInputType = {
    id?: true
    url?: true
    cover?: true
    name?: true
    duration?: true
    listened?: true
    userId?: true
  }

  export type SongMaxAggregateInputType = {
    id?: true
    url?: true
    cover?: true
    name?: true
    duration?: true
    listened?: true
    userId?: true
  }

  export type SongCountAggregateInputType = {
    id?: true
    url?: true
    cover?: true
    name?: true
    duration?: true
    listened?: true
    artistId?: true
    albumId?: true
    genreId?: true
    userId?: true
    playlistId?: true
    _all?: true
  }

  export type SongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Song to aggregate.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Songs
    **/
    _count?: true | SongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongMaxAggregateInputType
  }

  export type GetSongAggregateType<T extends SongAggregateArgs> = {
        [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSong[P]>
      : GetScalarType<T[P], AggregateSong[P]>
  }




  export type SongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
    orderBy?: SongOrderByWithAggregationInput | SongOrderByWithAggregationInput[]
    by: SongScalarFieldEnum[] | SongScalarFieldEnum
    having?: SongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongCountAggregateInputType | true
    _avg?: SongAvgAggregateInputType
    _sum?: SongSumAggregateInputType
    _min?: SongMinAggregateInputType
    _max?: SongMaxAggregateInputType
  }

  export type SongGroupByOutputType = {
    id: string
    url: string
    cover: string
    name: string
    duration: string | null
    listened: number | null
    artistId: string[]
    albumId: string[]
    genreId: string[]
    userId: string | null
    playlistId: string[]
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  type GetSongGroupByPayload<T extends SongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongGroupByOutputType[P]>
            : GetScalarType<T[P], SongGroupByOutputType[P]>
        }
      >
    >


  export type SongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    cover?: boolean
    name?: boolean
    duration?: boolean
    listened?: boolean
    artistId?: boolean
    albumId?: boolean
    genreId?: boolean
    userId?: boolean
    playlistId?: boolean
    Artist?: boolean | Song$ArtistArgs<ExtArgs>
    Album?: boolean | Song$AlbumArgs<ExtArgs>
    Genres?: boolean | Song$GenresArgs<ExtArgs>
    User?: boolean | Song$UserArgs<ExtArgs>
    LikedSong?: boolean | Song$LikedSongArgs<ExtArgs>
    Playlist?: boolean | Song$PlaylistArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectScalar = {
    id?: boolean
    url?: boolean
    cover?: boolean
    name?: boolean
    duration?: boolean
    listened?: boolean
    artistId?: boolean
    albumId?: boolean
    genreId?: boolean
    userId?: boolean
    playlistId?: boolean
  }

  export type SongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Artist?: boolean | Song$ArtistArgs<ExtArgs>
    Album?: boolean | Song$AlbumArgs<ExtArgs>
    Genres?: boolean | Song$GenresArgs<ExtArgs>
    User?: boolean | Song$UserArgs<ExtArgs>
    LikedSong?: boolean | Song$LikedSongArgs<ExtArgs>
    Playlist?: boolean | Song$PlaylistArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Song"
    objects: {
      Artist: Prisma.$ArtistPayload<ExtArgs>[]
      Album: Prisma.$AlbumsPayload<ExtArgs>[]
      Genres: Prisma.$GenresPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
      LikedSong: Prisma.$LikedSongPayload<ExtArgs>[]
      Playlist: Prisma.$PlaylistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      cover: string
      name: string
      duration: string | null
      listened: number | null
      artistId: string[]
      albumId: string[]
      genreId: string[]
      userId: string | null
      playlistId: string[]
    }, ExtArgs["result"]["song"]>
    composites: {}
  }


  type SongGetPayload<S extends boolean | null | undefined | SongDefaultArgs> = $Result.GetResult<Prisma.$SongPayload, S>

  type SongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SongFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SongCountAggregateInputType | true
    }

  export interface SongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Song'], meta: { name: 'Song' } }
    /**
     * Find zero or one Song that matches the filter.
     * @param {SongFindUniqueArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SongFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SongFindUniqueArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Song that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SongFindUniqueOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SongFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SongFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindFirstArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Song that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SongFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.song.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.song.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songWithIdOnly = await prisma.song.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SongFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Song.
     * @param {SongCreateArgs} args - Arguments to create a Song.
     * @example
     * // Create one Song
     * const Song = await prisma.song.create({
     *   data: {
     *     // ... data to create a Song
     *   }
     * })
     * 
    **/
    create<T extends SongCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SongCreateArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Songs.
     *     @param {SongCreateManyArgs} args - Arguments to create many Songs.
     *     @example
     *     // Create many Songs
     *     const song = await prisma.song.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SongCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Song.
     * @param {SongDeleteArgs} args - Arguments to delete one Song.
     * @example
     * // Delete one Song
     * const Song = await prisma.song.delete({
     *   where: {
     *     // ... filter to delete one Song
     *   }
     * })
     * 
    **/
    delete<T extends SongDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SongDeleteArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Song.
     * @param {SongUpdateArgs} args - Arguments to update one Song.
     * @example
     * // Update one Song
     * const song = await prisma.song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SongUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpdateArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Songs.
     * @param {SongDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SongDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SongUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Song.
     * @param {SongUpsertArgs} args - Arguments to update or create a Song.
     * @example
     * // Update or create a Song
     * const song = await prisma.song.upsert({
     *   create: {
     *     // ... data to create a Song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song we want to update
     *   }
     * })
    **/
    upsert<T extends SongUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpsertArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Songs that matches the filter.
     * @param {SongFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const song = await prisma.song.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SongFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Song.
     * @param {SongAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const song = await prisma.song.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SongAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.song.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends SongCountArgs>(
      args?: Subset<T, SongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SongAggregateArgs>(args: Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>

    /**
     * Group by Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGroupByArgs} args - Group by arguments.
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
      T extends SongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongGroupByArgs['orderBy'] }
        : { orderBy?: SongGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Song model
   */
  readonly fields: SongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Song.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Artist<T extends Song$ArtistArgs<ExtArgs> = {}>(args?: Subset<T, Song$ArtistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findMany'> | Null>;

    Album<T extends Song$AlbumArgs<ExtArgs> = {}>(args?: Subset<T, Song$AlbumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findMany'> | Null>;

    Genres<T extends Song$GenresArgs<ExtArgs> = {}>(args?: Subset<T, Song$GenresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findMany'> | Null>;

    User<T extends Song$UserArgs<ExtArgs> = {}>(args?: Subset<T, Song$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    LikedSong<T extends Song$LikedSongArgs<ExtArgs> = {}>(args?: Subset<T, Song$LikedSongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, 'findMany'> | Null>;

    Playlist<T extends Song$PlaylistArgs<ExtArgs> = {}>(args?: Subset<T, Song$PlaylistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Song model
   */ 
  interface SongFieldRefs {
    readonly id: FieldRef<"Song", 'String'>
    readonly url: FieldRef<"Song", 'String'>
    readonly cover: FieldRef<"Song", 'String'>
    readonly name: FieldRef<"Song", 'String'>
    readonly duration: FieldRef<"Song", 'String'>
    readonly listened: FieldRef<"Song", 'Int'>
    readonly artistId: FieldRef<"Song", 'String[]'>
    readonly albumId: FieldRef<"Song", 'String[]'>
    readonly genreId: FieldRef<"Song", 'String[]'>
    readonly userId: FieldRef<"Song", 'String'>
    readonly playlistId: FieldRef<"Song", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Song findUnique
   */
  export type SongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song findUniqueOrThrow
   */
  export type SongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song findFirst
   */
  export type SongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Song findFirstOrThrow
   */
  export type SongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Song findMany
   */
  export type SongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Song create
   */
  export type SongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to create a Song.
     */
    data: XOR<SongCreateInput, SongUncheckedCreateInput>
  }


  /**
   * Song createMany
   */
  export type SongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
  }


  /**
   * Song update
   */
  export type SongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to update a Song.
     */
    data: XOR<SongUpdateInput, SongUncheckedUpdateInput>
    /**
     * Choose, which Song to update.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song updateMany
   */
  export type SongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
  }


  /**
   * Song upsert
   */
  export type SongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The filter to search for the Song to update in case it exists.
     */
    where: SongWhereUniqueInput
    /**
     * In case the Song found by the `where` argument doesn't exist, create a new Song with this data.
     */
    create: XOR<SongCreateInput, SongUncheckedCreateInput>
    /**
     * In case the Song was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongUpdateInput, SongUncheckedUpdateInput>
  }


  /**
   * Song delete
   */
  export type SongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter which Song to delete.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song deleteMany
   */
  export type SongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songs to delete
     */
    where?: SongWhereInput
  }


  /**
   * Song findRaw
   */
  export type SongFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Song aggregateRaw
   */
  export type SongAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Song.Artist
   */
  export type Song$ArtistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    cursor?: ArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * Song.Album
   */
  export type Song$AlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    where?: AlbumsWhereInput
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    cursor?: AlbumsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }


  /**
   * Song.Genres
   */
  export type Song$GenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    where?: GenresWhereInput
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    cursor?: GenresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }


  /**
   * Song.User
   */
  export type Song$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Song.LikedSong
   */
  export type Song$LikedSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedSongInclude<ExtArgs> | null
    where?: LikedSongWhereInput
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    cursor?: LikedSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedSongScalarFieldEnum | LikedSongScalarFieldEnum[]
  }


  /**
   * Song.Playlist
   */
  export type Song$PlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * Song without action
   */
  export type SongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
  }



  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistMinAggregateOutputType = {
    id: string | null
    name: string | null
    img: string | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    img: string | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    name: number
    img: number
    songId: number
    albumsId: number
    genreId: number
    _all: number
  }


  export type ArtistMinAggregateInputType = {
    id?: true
    name?: true
    img?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    name?: true
    img?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    name?: true
    img?: true
    songId?: true
    albumsId?: true
    genreId?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: string
    name: string
    img: string
    songId: string[]
    albumsId: string[]
    genreId: string[]
    _count: ArtistCountAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    img?: boolean
    songId?: boolean
    albumsId?: boolean
    genreId?: boolean
    Song?: boolean | Artist$SongArgs<ExtArgs>
    Albums?: boolean | Artist$AlbumsArgs<ExtArgs>
    Genres?: boolean | Artist$GenresArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    id?: boolean
    name?: boolean
    img?: boolean
    songId?: boolean
    albumsId?: boolean
    genreId?: boolean
  }

  export type ArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Song?: boolean | Artist$SongArgs<ExtArgs>
    Albums?: boolean | Artist$AlbumsArgs<ExtArgs>
    Genres?: boolean | Artist$GenresArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      Song: Prisma.$SongPayload<ExtArgs>[]
      Albums: Prisma.$AlbumsPayload<ExtArgs>[]
      Genres: Prisma.$GenresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      img: string
      songId: string[]
      albumsId: string[]
      genreId: string[]
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }


  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArtistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Artist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArtistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArtistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
    **/
    create<T extends ArtistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Artists.
     *     @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     *     @example
     *     // Create many Artists
     *     const artist = await prisma.artist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArtistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
    **/
    delete<T extends ArtistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArtistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArtistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArtistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
    **/
    upsert<T extends ArtistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Artists that matches the filter.
     * @param {ArtistFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const artist = await prisma.artist.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ArtistFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Artist.
     * @param {ArtistAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const artist = await prisma.artist.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ArtistAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
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
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Song<T extends Artist$SongArgs<ExtArgs> = {}>(args?: Subset<T, Artist$SongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'> | Null>;

    Albums<T extends Artist$AlbumsArgs<ExtArgs> = {}>(args?: Subset<T, Artist$AlbumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findMany'> | Null>;

    Genres<T extends Artist$GenresArgs<ExtArgs> = {}>(args?: Subset<T, Artist$GenresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Artist model
   */ 
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'String'>
    readonly name: FieldRef<"Artist", 'String'>
    readonly img: FieldRef<"Artist", 'String'>
    readonly songId: FieldRef<"Artist", 'String[]'>
    readonly albumsId: FieldRef<"Artist", 'String[]'>
    readonly genreId: FieldRef<"Artist", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }


  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
  }


  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
  }


  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }


  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
  }


  /**
   * Artist findRaw
   */
  export type ArtistFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Artist aggregateRaw
   */
  export type ArtistAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Artist.Song
   */
  export type Artist$SongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Artist.Albums
   */
  export type Artist$AlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    where?: AlbumsWhereInput
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    cursor?: AlbumsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }


  /**
   * Artist.Genres
   */
  export type Artist$GenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    where?: GenresWhereInput
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    cursor?: GenresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }


  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
  }



  /**
   * Model Albums
   */

  export type AggregateAlbums = {
    _count: AlbumsCountAggregateOutputType | null
    _min: AlbumsMinAggregateOutputType | null
    _max: AlbumsMaxAggregateOutputType | null
  }

  export type AlbumsMinAggregateOutputType = {
    id: string | null
    name: string | null
    cover: string | null
  }

  export type AlbumsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cover: string | null
  }

  export type AlbumsCountAggregateOutputType = {
    id: number
    name: number
    cover: number
    songId: number
    artistId: number
    genreId: number
    _all: number
  }


  export type AlbumsMinAggregateInputType = {
    id?: true
    name?: true
    cover?: true
  }

  export type AlbumsMaxAggregateInputType = {
    id?: true
    name?: true
    cover?: true
  }

  export type AlbumsCountAggregateInputType = {
    id?: true
    name?: true
    cover?: true
    songId?: true
    artistId?: true
    genreId?: true
    _all?: true
  }

  export type AlbumsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to aggregate.
     */
    where?: AlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumsMaxAggregateInputType
  }

  export type GetAlbumsAggregateType<T extends AlbumsAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbums]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbums[P]>
      : GetScalarType<T[P], AggregateAlbums[P]>
  }




  export type AlbumsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumsWhereInput
    orderBy?: AlbumsOrderByWithAggregationInput | AlbumsOrderByWithAggregationInput[]
    by: AlbumsScalarFieldEnum[] | AlbumsScalarFieldEnum
    having?: AlbumsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumsCountAggregateInputType | true
    _min?: AlbumsMinAggregateInputType
    _max?: AlbumsMaxAggregateInputType
  }

  export type AlbumsGroupByOutputType = {
    id: string
    name: string
    cover: string
    songId: string[]
    artistId: string[]
    genreId: string[]
    _count: AlbumsCountAggregateOutputType | null
    _min: AlbumsMinAggregateOutputType | null
    _max: AlbumsMaxAggregateOutputType | null
  }

  type GetAlbumsGroupByPayload<T extends AlbumsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumsGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumsGroupByOutputType[P]>
        }
      >
    >


  export type AlbumsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cover?: boolean
    songId?: boolean
    artistId?: boolean
    genreId?: boolean
    LikedAlbums?: boolean | Albums$LikedAlbumsArgs<ExtArgs>
    Song?: boolean | Albums$SongArgs<ExtArgs>
    Artist?: boolean | Albums$ArtistArgs<ExtArgs>
    Genres?: boolean | Albums$GenresArgs<ExtArgs>
    _count?: boolean | AlbumsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albums"]>

  export type AlbumsSelectScalar = {
    id?: boolean
    name?: boolean
    cover?: boolean
    songId?: boolean
    artistId?: boolean
    genreId?: boolean
  }

  export type AlbumsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LikedAlbums?: boolean | Albums$LikedAlbumsArgs<ExtArgs>
    Song?: boolean | Albums$SongArgs<ExtArgs>
    Artist?: boolean | Albums$ArtistArgs<ExtArgs>
    Genres?: boolean | Albums$GenresArgs<ExtArgs>
    _count?: boolean | AlbumsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AlbumsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Albums"
    objects: {
      LikedAlbums: Prisma.$LikedAlbumsPayload<ExtArgs>[]
      Song: Prisma.$SongPayload<ExtArgs>[]
      Artist: Prisma.$ArtistPayload<ExtArgs>[]
      Genres: Prisma.$GenresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cover: string
      songId: string[]
      artistId: string[]
      genreId: string[]
    }, ExtArgs["result"]["albums"]>
    composites: {}
  }


  type AlbumsGetPayload<S extends boolean | null | undefined | AlbumsDefaultArgs> = $Result.GetResult<Prisma.$AlbumsPayload, S>

  type AlbumsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlbumsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlbumsCountAggregateInputType | true
    }

  export interface AlbumsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Albums'], meta: { name: 'Albums' } }
    /**
     * Find zero or one Albums that matches the filter.
     * @param {AlbumsFindUniqueArgs} args - Arguments to find a Albums
     * @example
     * // Get one Albums
     * const albums = await prisma.albums.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlbumsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsFindUniqueArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Albums that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlbumsFindUniqueOrThrowArgs} args - Arguments to find a Albums
     * @example
     * // Get one Albums
     * const albums = await prisma.albums.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlbumsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsFindFirstArgs} args - Arguments to find a Albums
     * @example
     * // Get one Albums
     * const albums = await prisma.albums.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlbumsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsFindFirstArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Albums that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsFindFirstOrThrowArgs} args - Arguments to find a Albums
     * @example
     * // Get one Albums
     * const albums = await prisma.albums.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlbumsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.albums.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.albums.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumsWithIdOnly = await prisma.albums.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlbumsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Albums.
     * @param {AlbumsCreateArgs} args - Arguments to create a Albums.
     * @example
     * // Create one Albums
     * const Albums = await prisma.albums.create({
     *   data: {
     *     // ... data to create a Albums
     *   }
     * })
     * 
    **/
    create<T extends AlbumsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsCreateArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Albums.
     *     @param {AlbumsCreateManyArgs} args - Arguments to create many Albums.
     *     @example
     *     // Create many Albums
     *     const albums = await prisma.albums.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlbumsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Albums.
     * @param {AlbumsDeleteArgs} args - Arguments to delete one Albums.
     * @example
     * // Delete one Albums
     * const Albums = await prisma.albums.delete({
     *   where: {
     *     // ... filter to delete one Albums
     *   }
     * })
     * 
    **/
    delete<T extends AlbumsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsDeleteArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Albums.
     * @param {AlbumsUpdateArgs} args - Arguments to update one Albums.
     * @example
     * // Update one Albums
     * const albums = await prisma.albums.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlbumsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsUpdateArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Albums.
     * @param {AlbumsDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.albums.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlbumsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const albums = await prisma.albums.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlbumsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Albums.
     * @param {AlbumsUpsertArgs} args - Arguments to update or create a Albums.
     * @example
     * // Update or create a Albums
     * const albums = await prisma.albums.upsert({
     *   create: {
     *     // ... data to create a Albums
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Albums we want to update
     *   }
     * })
    **/
    upsert<T extends AlbumsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsUpsertArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Albums that matches the filter.
     * @param {AlbumsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const albums = await prisma.albums.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AlbumsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Albums.
     * @param {AlbumsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const albums = await prisma.albums.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AlbumsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.albums.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumsCountArgs>(
      args?: Subset<T, AlbumsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumsAggregateArgs>(args: Subset<T, AlbumsAggregateArgs>): Prisma.PrismaPromise<GetAlbumsAggregateType<T>>

    /**
     * Group by Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsGroupByArgs} args - Group by arguments.
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
      T extends AlbumsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumsGroupByArgs['orderBy'] }
        : { orderBy?: AlbumsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlbumsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Albums model
   */
  readonly fields: AlbumsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Albums.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    LikedAlbums<T extends Albums$LikedAlbumsArgs<ExtArgs> = {}>(args?: Subset<T, Albums$LikedAlbumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'findMany'> | Null>;

    Song<T extends Albums$SongArgs<ExtArgs> = {}>(args?: Subset<T, Albums$SongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'> | Null>;

    Artist<T extends Albums$ArtistArgs<ExtArgs> = {}>(args?: Subset<T, Albums$ArtistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findMany'> | Null>;

    Genres<T extends Albums$GenresArgs<ExtArgs> = {}>(args?: Subset<T, Albums$GenresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Albums model
   */ 
  interface AlbumsFieldRefs {
    readonly id: FieldRef<"Albums", 'String'>
    readonly name: FieldRef<"Albums", 'String'>
    readonly cover: FieldRef<"Albums", 'String'>
    readonly songId: FieldRef<"Albums", 'String[]'>
    readonly artistId: FieldRef<"Albums", 'String[]'>
    readonly genreId: FieldRef<"Albums", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Albums findUnique
   */
  export type AlbumsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where: AlbumsWhereUniqueInput
  }


  /**
   * Albums findUniqueOrThrow
   */
  export type AlbumsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where: AlbumsWhereUniqueInput
  }


  /**
   * Albums findFirst
   */
  export type AlbumsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }


  /**
   * Albums findFirstOrThrow
   */
  export type AlbumsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }


  /**
   * Albums findMany
   */
  export type AlbumsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }


  /**
   * Albums create
   */
  export type AlbumsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * The data needed to create a Albums.
     */
    data: XOR<AlbumsCreateInput, AlbumsUncheckedCreateInput>
  }


  /**
   * Albums createMany
   */
  export type AlbumsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumsCreateManyInput | AlbumsCreateManyInput[]
  }


  /**
   * Albums update
   */
  export type AlbumsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * The data needed to update a Albums.
     */
    data: XOR<AlbumsUpdateInput, AlbumsUncheckedUpdateInput>
    /**
     * Choose, which Albums to update.
     */
    where: AlbumsWhereUniqueInput
  }


  /**
   * Albums updateMany
   */
  export type AlbumsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumsUpdateManyMutationInput, AlbumsUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumsWhereInput
  }


  /**
   * Albums upsert
   */
  export type AlbumsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * The filter to search for the Albums to update in case it exists.
     */
    where: AlbumsWhereUniqueInput
    /**
     * In case the Albums found by the `where` argument doesn't exist, create a new Albums with this data.
     */
    create: XOR<AlbumsCreateInput, AlbumsUncheckedCreateInput>
    /**
     * In case the Albums was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumsUpdateInput, AlbumsUncheckedUpdateInput>
  }


  /**
   * Albums delete
   */
  export type AlbumsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter which Albums to delete.
     */
    where: AlbumsWhereUniqueInput
  }


  /**
   * Albums deleteMany
   */
  export type AlbumsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumsWhereInput
  }


  /**
   * Albums findRaw
   */
  export type AlbumsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Albums aggregateRaw
   */
  export type AlbumsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Albums.LikedAlbums
   */
  export type Albums$LikedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    where?: LikedAlbumsWhereInput
    orderBy?: LikedAlbumsOrderByWithRelationInput | LikedAlbumsOrderByWithRelationInput[]
    cursor?: LikedAlbumsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedAlbumsScalarFieldEnum | LikedAlbumsScalarFieldEnum[]
  }


  /**
   * Albums.Song
   */
  export type Albums$SongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Albums.Artist
   */
  export type Albums$ArtistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    cursor?: ArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * Albums.Genres
   */
  export type Albums$GenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    where?: GenresWhereInput
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    cursor?: GenresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }


  /**
   * Albums without action
   */
  export type AlbumsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
  }



  /**
   * Model LikedSong
   */

  export type AggregateLikedSong = {
    _count: LikedSongCountAggregateOutputType | null
    _min: LikedSongMinAggregateOutputType | null
    _max: LikedSongMaxAggregateOutputType | null
  }

  export type LikedSongMinAggregateOutputType = {
    id: string | null
    liked: boolean | null
    userId: string | null
    songId: string | null
  }

  export type LikedSongMaxAggregateOutputType = {
    id: string | null
    liked: boolean | null
    userId: string | null
    songId: string | null
  }

  export type LikedSongCountAggregateOutputType = {
    id: number
    liked: number
    userId: number
    songId: number
    _all: number
  }


  export type LikedSongMinAggregateInputType = {
    id?: true
    liked?: true
    userId?: true
    songId?: true
  }

  export type LikedSongMaxAggregateInputType = {
    id?: true
    liked?: true
    userId?: true
    songId?: true
  }

  export type LikedSongCountAggregateInputType = {
    id?: true
    liked?: true
    userId?: true
    songId?: true
    _all?: true
  }

  export type LikedSongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedSong to aggregate.
     */
    where?: LikedSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedSongs to fetch.
     */
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikedSongs
    **/
    _count?: true | LikedSongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedSongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedSongMaxAggregateInputType
  }

  export type GetLikedSongAggregateType<T extends LikedSongAggregateArgs> = {
        [P in keyof T & keyof AggregateLikedSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikedSong[P]>
      : GetScalarType<T[P], AggregateLikedSong[P]>
  }




  export type LikedSongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedSongWhereInput
    orderBy?: LikedSongOrderByWithAggregationInput | LikedSongOrderByWithAggregationInput[]
    by: LikedSongScalarFieldEnum[] | LikedSongScalarFieldEnum
    having?: LikedSongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedSongCountAggregateInputType | true
    _min?: LikedSongMinAggregateInputType
    _max?: LikedSongMaxAggregateInputType
  }

  export type LikedSongGroupByOutputType = {
    id: string
    liked: boolean
    userId: string | null
    songId: string | null
    _count: LikedSongCountAggregateOutputType | null
    _min: LikedSongMinAggregateOutputType | null
    _max: LikedSongMaxAggregateOutputType | null
  }

  type GetLikedSongGroupByPayload<T extends LikedSongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedSongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedSongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedSongGroupByOutputType[P]>
            : GetScalarType<T[P], LikedSongGroupByOutputType[P]>
        }
      >
    >


  export type LikedSongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liked?: boolean
    userId?: boolean
    songId?: boolean
    User?: boolean | LikedSong$UserArgs<ExtArgs>
    Song?: boolean | LikedSong$SongArgs<ExtArgs>
  }, ExtArgs["result"]["likedSong"]>

  export type LikedSongSelectScalar = {
    id?: boolean
    liked?: boolean
    userId?: boolean
    songId?: boolean
  }

  export type LikedSongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | LikedSong$UserArgs<ExtArgs>
    Song?: boolean | LikedSong$SongArgs<ExtArgs>
  }


  export type $LikedSongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikedSong"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      Song: Prisma.$SongPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      liked: boolean
      userId: string | null
      songId: string | null
    }, ExtArgs["result"]["likedSong"]>
    composites: {}
  }


  type LikedSongGetPayload<S extends boolean | null | undefined | LikedSongDefaultArgs> = $Result.GetResult<Prisma.$LikedSongPayload, S>

  type LikedSongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LikedSongFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LikedSongCountAggregateInputType | true
    }

  export interface LikedSongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikedSong'], meta: { name: 'LikedSong' } }
    /**
     * Find zero or one LikedSong that matches the filter.
     * @param {LikedSongFindUniqueArgs} args - Arguments to find a LikedSong
     * @example
     * // Get one LikedSong
     * const likedSong = await prisma.likedSong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LikedSongFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LikedSongFindUniqueArgs<ExtArgs>>
    ): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LikedSong that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LikedSongFindUniqueOrThrowArgs} args - Arguments to find a LikedSong
     * @example
     * // Get one LikedSong
     * const likedSong = await prisma.likedSong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LikedSongFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedSongFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LikedSong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongFindFirstArgs} args - Arguments to find a LikedSong
     * @example
     * // Get one LikedSong
     * const likedSong = await prisma.likedSong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LikedSongFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedSongFindFirstArgs<ExtArgs>>
    ): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LikedSong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongFindFirstOrThrowArgs} args - Arguments to find a LikedSong
     * @example
     * // Get one LikedSong
     * const likedSong = await prisma.likedSong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LikedSongFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedSongFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LikedSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikedSongs
     * const likedSongs = await prisma.likedSong.findMany()
     * 
     * // Get first 10 LikedSongs
     * const likedSongs = await prisma.likedSong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likedSongWithIdOnly = await prisma.likedSong.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LikedSongFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedSongFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LikedSong.
     * @param {LikedSongCreateArgs} args - Arguments to create a LikedSong.
     * @example
     * // Create one LikedSong
     * const LikedSong = await prisma.likedSong.create({
     *   data: {
     *     // ... data to create a LikedSong
     *   }
     * })
     * 
    **/
    create<T extends LikedSongCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LikedSongCreateArgs<ExtArgs>>
    ): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LikedSongs.
     *     @param {LikedSongCreateManyArgs} args - Arguments to create many LikedSongs.
     *     @example
     *     // Create many LikedSongs
     *     const likedSong = await prisma.likedSong.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LikedSongCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedSongCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LikedSong.
     * @param {LikedSongDeleteArgs} args - Arguments to delete one LikedSong.
     * @example
     * // Delete one LikedSong
     * const LikedSong = await prisma.likedSong.delete({
     *   where: {
     *     // ... filter to delete one LikedSong
     *   }
     * })
     * 
    **/
    delete<T extends LikedSongDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LikedSongDeleteArgs<ExtArgs>>
    ): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LikedSong.
     * @param {LikedSongUpdateArgs} args - Arguments to update one LikedSong.
     * @example
     * // Update one LikedSong
     * const likedSong = await prisma.likedSong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LikedSongUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LikedSongUpdateArgs<ExtArgs>>
    ): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LikedSongs.
     * @param {LikedSongDeleteManyArgs} args - Arguments to filter LikedSongs to delete.
     * @example
     * // Delete a few LikedSongs
     * const { count } = await prisma.likedSong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LikedSongDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedSongDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikedSongs
     * const likedSong = await prisma.likedSong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LikedSongUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LikedSongUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LikedSong.
     * @param {LikedSongUpsertArgs} args - Arguments to update or create a LikedSong.
     * @example
     * // Update or create a LikedSong
     * const likedSong = await prisma.likedSong.upsert({
     *   create: {
     *     // ... data to create a LikedSong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikedSong we want to update
     *   }
     * })
    **/
    upsert<T extends LikedSongUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LikedSongUpsertArgs<ExtArgs>>
    ): Prisma__LikedSongClient<$Result.GetResult<Prisma.$LikedSongPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more LikedSongs that matches the filter.
     * @param {LikedSongFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const likedSong = await prisma.likedSong.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: LikedSongFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LikedSong.
     * @param {LikedSongAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const likedSong = await prisma.likedSong.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: LikedSongAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of LikedSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongCountArgs} args - Arguments to filter LikedSongs to count.
     * @example
     * // Count the number of LikedSongs
     * const count = await prisma.likedSong.count({
     *   where: {
     *     // ... the filter for the LikedSongs we want to count
     *   }
     * })
    **/
    count<T extends LikedSongCountArgs>(
      args?: Subset<T, LikedSongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedSongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikedSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikedSongAggregateArgs>(args: Subset<T, LikedSongAggregateArgs>): Prisma.PrismaPromise<GetLikedSongAggregateType<T>>

    /**
     * Group by LikedSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedSongGroupByArgs} args - Group by arguments.
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
      T extends LikedSongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedSongGroupByArgs['orderBy'] }
        : { orderBy?: LikedSongGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikedSongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikedSong model
   */
  readonly fields: LikedSongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikedSong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedSongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends LikedSong$UserArgs<ExtArgs> = {}>(args?: Subset<T, LikedSong$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Song<T extends LikedSong$SongArgs<ExtArgs> = {}>(args?: Subset<T, LikedSong$SongArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LikedSong model
   */ 
  interface LikedSongFieldRefs {
    readonly id: FieldRef<"LikedSong", 'String'>
    readonly liked: FieldRef<"LikedSong", 'Boolean'>
    readonly userId: FieldRef<"LikedSong", 'String'>
    readonly songId: FieldRef<"LikedSong", 'String'>
  }
    

  // Custom InputTypes

  /**
   * LikedSong findUnique
   */
  export type LikedSongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter, which LikedSong to fetch.
     */
    where: LikedSongWhereUniqueInput
  }


  /**
   * LikedSong findUniqueOrThrow
   */
  export type LikedSongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter, which LikedSong to fetch.
     */
    where: LikedSongWhereUniqueInput
  }


  /**
   * LikedSong findFirst
   */
  export type LikedSongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter, which LikedSong to fetch.
     */
    where?: LikedSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedSongs to fetch.
     */
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedSongs.
     */
    cursor?: LikedSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedSongs.
     */
    distinct?: LikedSongScalarFieldEnum | LikedSongScalarFieldEnum[]
  }


  /**
   * LikedSong findFirstOrThrow
   */
  export type LikedSongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter, which LikedSong to fetch.
     */
    where?: LikedSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedSongs to fetch.
     */
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedSongs.
     */
    cursor?: LikedSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedSongs.
     */
    distinct?: LikedSongScalarFieldEnum | LikedSongScalarFieldEnum[]
  }


  /**
   * LikedSong findMany
   */
  export type LikedSongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter, which LikedSongs to fetch.
     */
    where?: LikedSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedSongs to fetch.
     */
    orderBy?: LikedSongOrderByWithRelationInput | LikedSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikedSongs.
     */
    cursor?: LikedSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedSongs.
     */
    skip?: number
    distinct?: LikedSongScalarFieldEnum | LikedSongScalarFieldEnum[]
  }


  /**
   * LikedSong create
   */
  export type LikedSongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * The data needed to create a LikedSong.
     */
    data: XOR<LikedSongCreateInput, LikedSongUncheckedCreateInput>
  }


  /**
   * LikedSong createMany
   */
  export type LikedSongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikedSongs.
     */
    data: LikedSongCreateManyInput | LikedSongCreateManyInput[]
  }


  /**
   * LikedSong update
   */
  export type LikedSongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * The data needed to update a LikedSong.
     */
    data: XOR<LikedSongUpdateInput, LikedSongUncheckedUpdateInput>
    /**
     * Choose, which LikedSong to update.
     */
    where: LikedSongWhereUniqueInput
  }


  /**
   * LikedSong updateMany
   */
  export type LikedSongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikedSongs.
     */
    data: XOR<LikedSongUpdateManyMutationInput, LikedSongUncheckedUpdateManyInput>
    /**
     * Filter which LikedSongs to update
     */
    where?: LikedSongWhereInput
  }


  /**
   * LikedSong upsert
   */
  export type LikedSongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * The filter to search for the LikedSong to update in case it exists.
     */
    where: LikedSongWhereUniqueInput
    /**
     * In case the LikedSong found by the `where` argument doesn't exist, create a new LikedSong with this data.
     */
    create: XOR<LikedSongCreateInput, LikedSongUncheckedCreateInput>
    /**
     * In case the LikedSong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedSongUpdateInput, LikedSongUncheckedUpdateInput>
  }


  /**
   * LikedSong delete
   */
  export type LikedSongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedSongInclude<ExtArgs> | null
    /**
     * Filter which LikedSong to delete.
     */
    where: LikedSongWhereUniqueInput
  }


  /**
   * LikedSong deleteMany
   */
  export type LikedSongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedSongs to delete
     */
    where?: LikedSongWhereInput
  }


  /**
   * LikedSong findRaw
   */
  export type LikedSongFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * LikedSong aggregateRaw
   */
  export type LikedSongAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * LikedSong.User
   */
  export type LikedSong$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * LikedSong.Song
   */
  export type LikedSong$SongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
  }


  /**
   * LikedSong without action
   */
  export type LikedSongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedSong
     */
    select?: LikedSongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedSongInclude<ExtArgs> | null
  }



  /**
   * Model LikedAlbums
   */

  export type AggregateLikedAlbums = {
    _count: LikedAlbumsCountAggregateOutputType | null
    _min: LikedAlbumsMinAggregateOutputType | null
    _max: LikedAlbumsMaxAggregateOutputType | null
  }

  export type LikedAlbumsMinAggregateOutputType = {
    id: string | null
    liked: boolean | null
    userId: string | null
    albumId: string | null
  }

  export type LikedAlbumsMaxAggregateOutputType = {
    id: string | null
    liked: boolean | null
    userId: string | null
    albumId: string | null
  }

  export type LikedAlbumsCountAggregateOutputType = {
    id: number
    liked: number
    userId: number
    albumId: number
    _all: number
  }


  export type LikedAlbumsMinAggregateInputType = {
    id?: true
    liked?: true
    userId?: true
    albumId?: true
  }

  export type LikedAlbumsMaxAggregateInputType = {
    id?: true
    liked?: true
    userId?: true
    albumId?: true
  }

  export type LikedAlbumsCountAggregateInputType = {
    id?: true
    liked?: true
    userId?: true
    albumId?: true
    _all?: true
  }

  export type LikedAlbumsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedAlbums to aggregate.
     */
    where?: LikedAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedAlbums to fetch.
     */
    orderBy?: LikedAlbumsOrderByWithRelationInput | LikedAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikedAlbums
    **/
    _count?: true | LikedAlbumsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedAlbumsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedAlbumsMaxAggregateInputType
  }

  export type GetLikedAlbumsAggregateType<T extends LikedAlbumsAggregateArgs> = {
        [P in keyof T & keyof AggregateLikedAlbums]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikedAlbums[P]>
      : GetScalarType<T[P], AggregateLikedAlbums[P]>
  }




  export type LikedAlbumsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedAlbumsWhereInput
    orderBy?: LikedAlbumsOrderByWithAggregationInput | LikedAlbumsOrderByWithAggregationInput[]
    by: LikedAlbumsScalarFieldEnum[] | LikedAlbumsScalarFieldEnum
    having?: LikedAlbumsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedAlbumsCountAggregateInputType | true
    _min?: LikedAlbumsMinAggregateInputType
    _max?: LikedAlbumsMaxAggregateInputType
  }

  export type LikedAlbumsGroupByOutputType = {
    id: string
    liked: boolean
    userId: string | null
    albumId: string | null
    _count: LikedAlbumsCountAggregateOutputType | null
    _min: LikedAlbumsMinAggregateOutputType | null
    _max: LikedAlbumsMaxAggregateOutputType | null
  }

  type GetLikedAlbumsGroupByPayload<T extends LikedAlbumsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedAlbumsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedAlbumsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedAlbumsGroupByOutputType[P]>
            : GetScalarType<T[P], LikedAlbumsGroupByOutputType[P]>
        }
      >
    >


  export type LikedAlbumsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liked?: boolean
    userId?: boolean
    albumId?: boolean
    User?: boolean | LikedAlbums$UserArgs<ExtArgs>
    Albums?: boolean | LikedAlbums$AlbumsArgs<ExtArgs>
  }, ExtArgs["result"]["likedAlbums"]>

  export type LikedAlbumsSelectScalar = {
    id?: boolean
    liked?: boolean
    userId?: boolean
    albumId?: boolean
  }

  export type LikedAlbumsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | LikedAlbums$UserArgs<ExtArgs>
    Albums?: boolean | LikedAlbums$AlbumsArgs<ExtArgs>
  }


  export type $LikedAlbumsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikedAlbums"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      Albums: Prisma.$AlbumsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      liked: boolean
      userId: string | null
      albumId: string | null
    }, ExtArgs["result"]["likedAlbums"]>
    composites: {}
  }


  type LikedAlbumsGetPayload<S extends boolean | null | undefined | LikedAlbumsDefaultArgs> = $Result.GetResult<Prisma.$LikedAlbumsPayload, S>

  type LikedAlbumsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LikedAlbumsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LikedAlbumsCountAggregateInputType | true
    }

  export interface LikedAlbumsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikedAlbums'], meta: { name: 'LikedAlbums' } }
    /**
     * Find zero or one LikedAlbums that matches the filter.
     * @param {LikedAlbumsFindUniqueArgs} args - Arguments to find a LikedAlbums
     * @example
     * // Get one LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LikedAlbumsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LikedAlbumsFindUniqueArgs<ExtArgs>>
    ): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LikedAlbums that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LikedAlbumsFindUniqueOrThrowArgs} args - Arguments to find a LikedAlbums
     * @example
     * // Get one LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LikedAlbumsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedAlbumsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LikedAlbums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsFindFirstArgs} args - Arguments to find a LikedAlbums
     * @example
     * // Get one LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LikedAlbumsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedAlbumsFindFirstArgs<ExtArgs>>
    ): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LikedAlbums that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsFindFirstOrThrowArgs} args - Arguments to find a LikedAlbums
     * @example
     * // Get one LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LikedAlbumsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedAlbumsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LikedAlbums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findMany()
     * 
     * // Get first 10 LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likedAlbumsWithIdOnly = await prisma.likedAlbums.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LikedAlbumsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedAlbumsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LikedAlbums.
     * @param {LikedAlbumsCreateArgs} args - Arguments to create a LikedAlbums.
     * @example
     * // Create one LikedAlbums
     * const LikedAlbums = await prisma.likedAlbums.create({
     *   data: {
     *     // ... data to create a LikedAlbums
     *   }
     * })
     * 
    **/
    create<T extends LikedAlbumsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LikedAlbumsCreateArgs<ExtArgs>>
    ): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LikedAlbums.
     *     @param {LikedAlbumsCreateManyArgs} args - Arguments to create many LikedAlbums.
     *     @example
     *     // Create many LikedAlbums
     *     const likedAlbums = await prisma.likedAlbums.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LikedAlbumsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedAlbumsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LikedAlbums.
     * @param {LikedAlbumsDeleteArgs} args - Arguments to delete one LikedAlbums.
     * @example
     * // Delete one LikedAlbums
     * const LikedAlbums = await prisma.likedAlbums.delete({
     *   where: {
     *     // ... filter to delete one LikedAlbums
     *   }
     * })
     * 
    **/
    delete<T extends LikedAlbumsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LikedAlbumsDeleteArgs<ExtArgs>>
    ): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LikedAlbums.
     * @param {LikedAlbumsUpdateArgs} args - Arguments to update one LikedAlbums.
     * @example
     * // Update one LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LikedAlbumsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LikedAlbumsUpdateArgs<ExtArgs>>
    ): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LikedAlbums.
     * @param {LikedAlbumsDeleteManyArgs} args - Arguments to filter LikedAlbums to delete.
     * @example
     * // Delete a few LikedAlbums
     * const { count } = await prisma.likedAlbums.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LikedAlbumsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedAlbumsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LikedAlbumsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LikedAlbumsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LikedAlbums.
     * @param {LikedAlbumsUpsertArgs} args - Arguments to update or create a LikedAlbums.
     * @example
     * // Update or create a LikedAlbums
     * const likedAlbums = await prisma.likedAlbums.upsert({
     *   create: {
     *     // ... data to create a LikedAlbums
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikedAlbums we want to update
     *   }
     * })
    **/
    upsert<T extends LikedAlbumsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LikedAlbumsUpsertArgs<ExtArgs>>
    ): Prisma__LikedAlbumsClient<$Result.GetResult<Prisma.$LikedAlbumsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more LikedAlbums that matches the filter.
     * @param {LikedAlbumsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const likedAlbums = await prisma.likedAlbums.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: LikedAlbumsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LikedAlbums.
     * @param {LikedAlbumsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const likedAlbums = await prisma.likedAlbums.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: LikedAlbumsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of LikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsCountArgs} args - Arguments to filter LikedAlbums to count.
     * @example
     * // Count the number of LikedAlbums
     * const count = await prisma.likedAlbums.count({
     *   where: {
     *     // ... the filter for the LikedAlbums we want to count
     *   }
     * })
    **/
    count<T extends LikedAlbumsCountArgs>(
      args?: Subset<T, LikedAlbumsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedAlbumsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikedAlbumsAggregateArgs>(args: Subset<T, LikedAlbumsAggregateArgs>): Prisma.PrismaPromise<GetLikedAlbumsAggregateType<T>>

    /**
     * Group by LikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAlbumsGroupByArgs} args - Group by arguments.
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
      T extends LikedAlbumsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedAlbumsGroupByArgs['orderBy'] }
        : { orderBy?: LikedAlbumsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikedAlbumsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedAlbumsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikedAlbums model
   */
  readonly fields: LikedAlbumsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikedAlbums.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedAlbumsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends LikedAlbums$UserArgs<ExtArgs> = {}>(args?: Subset<T, LikedAlbums$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Albums<T extends LikedAlbums$AlbumsArgs<ExtArgs> = {}>(args?: Subset<T, LikedAlbums$AlbumsArgs<ExtArgs>>): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LikedAlbums model
   */ 
  interface LikedAlbumsFieldRefs {
    readonly id: FieldRef<"LikedAlbums", 'String'>
    readonly liked: FieldRef<"LikedAlbums", 'Boolean'>
    readonly userId: FieldRef<"LikedAlbums", 'String'>
    readonly albumId: FieldRef<"LikedAlbums", 'String'>
  }
    

  // Custom InputTypes

  /**
   * LikedAlbums findUnique
   */
  export type LikedAlbumsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which LikedAlbums to fetch.
     */
    where: LikedAlbumsWhereUniqueInput
  }


  /**
   * LikedAlbums findUniqueOrThrow
   */
  export type LikedAlbumsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which LikedAlbums to fetch.
     */
    where: LikedAlbumsWhereUniqueInput
  }


  /**
   * LikedAlbums findFirst
   */
  export type LikedAlbumsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which LikedAlbums to fetch.
     */
    where?: LikedAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedAlbums to fetch.
     */
    orderBy?: LikedAlbumsOrderByWithRelationInput | LikedAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedAlbums.
     */
    cursor?: LikedAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedAlbums.
     */
    distinct?: LikedAlbumsScalarFieldEnum | LikedAlbumsScalarFieldEnum[]
  }


  /**
   * LikedAlbums findFirstOrThrow
   */
  export type LikedAlbumsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which LikedAlbums to fetch.
     */
    where?: LikedAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedAlbums to fetch.
     */
    orderBy?: LikedAlbumsOrderByWithRelationInput | LikedAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedAlbums.
     */
    cursor?: LikedAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedAlbums.
     */
    distinct?: LikedAlbumsScalarFieldEnum | LikedAlbumsScalarFieldEnum[]
  }


  /**
   * LikedAlbums findMany
   */
  export type LikedAlbumsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which LikedAlbums to fetch.
     */
    where?: LikedAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedAlbums to fetch.
     */
    orderBy?: LikedAlbumsOrderByWithRelationInput | LikedAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikedAlbums.
     */
    cursor?: LikedAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedAlbums.
     */
    skip?: number
    distinct?: LikedAlbumsScalarFieldEnum | LikedAlbumsScalarFieldEnum[]
  }


  /**
   * LikedAlbums create
   */
  export type LikedAlbumsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * The data needed to create a LikedAlbums.
     */
    data: XOR<LikedAlbumsCreateInput, LikedAlbumsUncheckedCreateInput>
  }


  /**
   * LikedAlbums createMany
   */
  export type LikedAlbumsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikedAlbums.
     */
    data: LikedAlbumsCreateManyInput | LikedAlbumsCreateManyInput[]
  }


  /**
   * LikedAlbums update
   */
  export type LikedAlbumsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * The data needed to update a LikedAlbums.
     */
    data: XOR<LikedAlbumsUpdateInput, LikedAlbumsUncheckedUpdateInput>
    /**
     * Choose, which LikedAlbums to update.
     */
    where: LikedAlbumsWhereUniqueInput
  }


  /**
   * LikedAlbums updateMany
   */
  export type LikedAlbumsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikedAlbums.
     */
    data: XOR<LikedAlbumsUpdateManyMutationInput, LikedAlbumsUncheckedUpdateManyInput>
    /**
     * Filter which LikedAlbums to update
     */
    where?: LikedAlbumsWhereInput
  }


  /**
   * LikedAlbums upsert
   */
  export type LikedAlbumsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * The filter to search for the LikedAlbums to update in case it exists.
     */
    where: LikedAlbumsWhereUniqueInput
    /**
     * In case the LikedAlbums found by the `where` argument doesn't exist, create a new LikedAlbums with this data.
     */
    create: XOR<LikedAlbumsCreateInput, LikedAlbumsUncheckedCreateInput>
    /**
     * In case the LikedAlbums was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedAlbumsUpdateInput, LikedAlbumsUncheckedUpdateInput>
  }


  /**
   * LikedAlbums delete
   */
  export type LikedAlbumsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter which LikedAlbums to delete.
     */
    where: LikedAlbumsWhereUniqueInput
  }


  /**
   * LikedAlbums deleteMany
   */
  export type LikedAlbumsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedAlbums to delete
     */
    where?: LikedAlbumsWhereInput
  }


  /**
   * LikedAlbums findRaw
   */
  export type LikedAlbumsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * LikedAlbums aggregateRaw
   */
  export type LikedAlbumsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * LikedAlbums.User
   */
  export type LikedAlbums$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * LikedAlbums.Albums
   */
  export type LikedAlbums$AlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    where?: AlbumsWhereInput
  }


  /**
   * LikedAlbums without action
   */
  export type LikedAlbumsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedAlbums
     */
    select?: LikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedAlbumsInclude<ExtArgs> | null
  }



  /**
   * Model LikedPlaylist
   */

  export type AggregateLikedPlaylist = {
    _count: LikedPlaylistCountAggregateOutputType | null
    _min: LikedPlaylistMinAggregateOutputType | null
    _max: LikedPlaylistMaxAggregateOutputType | null
  }

  export type LikedPlaylistMinAggregateOutputType = {
    id: string | null
    liked: boolean | null
    userId: string | null
    playlistId: string | null
  }

  export type LikedPlaylistMaxAggregateOutputType = {
    id: string | null
    liked: boolean | null
    userId: string | null
    playlistId: string | null
  }

  export type LikedPlaylistCountAggregateOutputType = {
    id: number
    liked: number
    userId: number
    playlistId: number
    _all: number
  }


  export type LikedPlaylistMinAggregateInputType = {
    id?: true
    liked?: true
    userId?: true
    playlistId?: true
  }

  export type LikedPlaylistMaxAggregateInputType = {
    id?: true
    liked?: true
    userId?: true
    playlistId?: true
  }

  export type LikedPlaylistCountAggregateInputType = {
    id?: true
    liked?: true
    userId?: true
    playlistId?: true
    _all?: true
  }

  export type LikedPlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedPlaylist to aggregate.
     */
    where?: LikedPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedPlaylists to fetch.
     */
    orderBy?: LikedPlaylistOrderByWithRelationInput | LikedPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikedPlaylists
    **/
    _count?: true | LikedPlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedPlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedPlaylistMaxAggregateInputType
  }

  export type GetLikedPlaylistAggregateType<T extends LikedPlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregateLikedPlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikedPlaylist[P]>
      : GetScalarType<T[P], AggregateLikedPlaylist[P]>
  }




  export type LikedPlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedPlaylistWhereInput
    orderBy?: LikedPlaylistOrderByWithAggregationInput | LikedPlaylistOrderByWithAggregationInput[]
    by: LikedPlaylistScalarFieldEnum[] | LikedPlaylistScalarFieldEnum
    having?: LikedPlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedPlaylistCountAggregateInputType | true
    _min?: LikedPlaylistMinAggregateInputType
    _max?: LikedPlaylistMaxAggregateInputType
  }

  export type LikedPlaylistGroupByOutputType = {
    id: string
    liked: boolean
    userId: string | null
    playlistId: string | null
    _count: LikedPlaylistCountAggregateOutputType | null
    _min: LikedPlaylistMinAggregateOutputType | null
    _max: LikedPlaylistMaxAggregateOutputType | null
  }

  type GetLikedPlaylistGroupByPayload<T extends LikedPlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedPlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedPlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedPlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], LikedPlaylistGroupByOutputType[P]>
        }
      >
    >


  export type LikedPlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liked?: boolean
    userId?: boolean
    playlistId?: boolean
    User?: boolean | LikedPlaylist$UserArgs<ExtArgs>
    Playlists?: boolean | LikedPlaylist$PlaylistsArgs<ExtArgs>
  }, ExtArgs["result"]["likedPlaylist"]>

  export type LikedPlaylistSelectScalar = {
    id?: boolean
    liked?: boolean
    userId?: boolean
    playlistId?: boolean
  }

  export type LikedPlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | LikedPlaylist$UserArgs<ExtArgs>
    Playlists?: boolean | LikedPlaylist$PlaylistsArgs<ExtArgs>
  }


  export type $LikedPlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikedPlaylist"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      Playlists: Prisma.$PlaylistPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      liked: boolean
      userId: string | null
      playlistId: string | null
    }, ExtArgs["result"]["likedPlaylist"]>
    composites: {}
  }


  type LikedPlaylistGetPayload<S extends boolean | null | undefined | LikedPlaylistDefaultArgs> = $Result.GetResult<Prisma.$LikedPlaylistPayload, S>

  type LikedPlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LikedPlaylistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LikedPlaylistCountAggregateInputType | true
    }

  export interface LikedPlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikedPlaylist'], meta: { name: 'LikedPlaylist' } }
    /**
     * Find zero or one LikedPlaylist that matches the filter.
     * @param {LikedPlaylistFindUniqueArgs} args - Arguments to find a LikedPlaylist
     * @example
     * // Get one LikedPlaylist
     * const likedPlaylist = await prisma.likedPlaylist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LikedPlaylistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LikedPlaylistFindUniqueArgs<ExtArgs>>
    ): Prisma__LikedPlaylistClient<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LikedPlaylist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LikedPlaylistFindUniqueOrThrowArgs} args - Arguments to find a LikedPlaylist
     * @example
     * // Get one LikedPlaylist
     * const likedPlaylist = await prisma.likedPlaylist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LikedPlaylistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedPlaylistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LikedPlaylistClient<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LikedPlaylist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPlaylistFindFirstArgs} args - Arguments to find a LikedPlaylist
     * @example
     * // Get one LikedPlaylist
     * const likedPlaylist = await prisma.likedPlaylist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LikedPlaylistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedPlaylistFindFirstArgs<ExtArgs>>
    ): Prisma__LikedPlaylistClient<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LikedPlaylist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPlaylistFindFirstOrThrowArgs} args - Arguments to find a LikedPlaylist
     * @example
     * // Get one LikedPlaylist
     * const likedPlaylist = await prisma.likedPlaylist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LikedPlaylistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedPlaylistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LikedPlaylistClient<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LikedPlaylists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPlaylistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikedPlaylists
     * const likedPlaylists = await prisma.likedPlaylist.findMany()
     * 
     * // Get first 10 LikedPlaylists
     * const likedPlaylists = await prisma.likedPlaylist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likedPlaylistWithIdOnly = await prisma.likedPlaylist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LikedPlaylistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedPlaylistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LikedPlaylist.
     * @param {LikedPlaylistCreateArgs} args - Arguments to create a LikedPlaylist.
     * @example
     * // Create one LikedPlaylist
     * const LikedPlaylist = await prisma.likedPlaylist.create({
     *   data: {
     *     // ... data to create a LikedPlaylist
     *   }
     * })
     * 
    **/
    create<T extends LikedPlaylistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LikedPlaylistCreateArgs<ExtArgs>>
    ): Prisma__LikedPlaylistClient<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LikedPlaylists.
     *     @param {LikedPlaylistCreateManyArgs} args - Arguments to create many LikedPlaylists.
     *     @example
     *     // Create many LikedPlaylists
     *     const likedPlaylist = await prisma.likedPlaylist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LikedPlaylistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedPlaylistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LikedPlaylist.
     * @param {LikedPlaylistDeleteArgs} args - Arguments to delete one LikedPlaylist.
     * @example
     * // Delete one LikedPlaylist
     * const LikedPlaylist = await prisma.likedPlaylist.delete({
     *   where: {
     *     // ... filter to delete one LikedPlaylist
     *   }
     * })
     * 
    **/
    delete<T extends LikedPlaylistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LikedPlaylistDeleteArgs<ExtArgs>>
    ): Prisma__LikedPlaylistClient<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LikedPlaylist.
     * @param {LikedPlaylistUpdateArgs} args - Arguments to update one LikedPlaylist.
     * @example
     * // Update one LikedPlaylist
     * const likedPlaylist = await prisma.likedPlaylist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LikedPlaylistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LikedPlaylistUpdateArgs<ExtArgs>>
    ): Prisma__LikedPlaylistClient<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LikedPlaylists.
     * @param {LikedPlaylistDeleteManyArgs} args - Arguments to filter LikedPlaylists to delete.
     * @example
     * // Delete a few LikedPlaylists
     * const { count } = await prisma.likedPlaylist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LikedPlaylistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikedPlaylistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikedPlaylists
     * const likedPlaylist = await prisma.likedPlaylist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LikedPlaylistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LikedPlaylistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LikedPlaylist.
     * @param {LikedPlaylistUpsertArgs} args - Arguments to update or create a LikedPlaylist.
     * @example
     * // Update or create a LikedPlaylist
     * const likedPlaylist = await prisma.likedPlaylist.upsert({
     *   create: {
     *     // ... data to create a LikedPlaylist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikedPlaylist we want to update
     *   }
     * })
    **/
    upsert<T extends LikedPlaylistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LikedPlaylistUpsertArgs<ExtArgs>>
    ): Prisma__LikedPlaylistClient<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more LikedPlaylists that matches the filter.
     * @param {LikedPlaylistFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const likedPlaylist = await prisma.likedPlaylist.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: LikedPlaylistFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LikedPlaylist.
     * @param {LikedPlaylistAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const likedPlaylist = await prisma.likedPlaylist.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: LikedPlaylistAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of LikedPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPlaylistCountArgs} args - Arguments to filter LikedPlaylists to count.
     * @example
     * // Count the number of LikedPlaylists
     * const count = await prisma.likedPlaylist.count({
     *   where: {
     *     // ... the filter for the LikedPlaylists we want to count
     *   }
     * })
    **/
    count<T extends LikedPlaylistCountArgs>(
      args?: Subset<T, LikedPlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedPlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikedPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikedPlaylistAggregateArgs>(args: Subset<T, LikedPlaylistAggregateArgs>): Prisma.PrismaPromise<GetLikedPlaylistAggregateType<T>>

    /**
     * Group by LikedPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedPlaylistGroupByArgs} args - Group by arguments.
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
      T extends LikedPlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedPlaylistGroupByArgs['orderBy'] }
        : { orderBy?: LikedPlaylistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikedPlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikedPlaylist model
   */
  readonly fields: LikedPlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikedPlaylist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedPlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends LikedPlaylist$UserArgs<ExtArgs> = {}>(args?: Subset<T, LikedPlaylist$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Playlists<T extends LikedPlaylist$PlaylistsArgs<ExtArgs> = {}>(args?: Subset<T, LikedPlaylist$PlaylistsArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LikedPlaylist model
   */ 
  interface LikedPlaylistFieldRefs {
    readonly id: FieldRef<"LikedPlaylist", 'String'>
    readonly liked: FieldRef<"LikedPlaylist", 'Boolean'>
    readonly userId: FieldRef<"LikedPlaylist", 'String'>
    readonly playlistId: FieldRef<"LikedPlaylist", 'String'>
  }
    

  // Custom InputTypes

  /**
   * LikedPlaylist findUnique
   */
  export type LikedPlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which LikedPlaylist to fetch.
     */
    where: LikedPlaylistWhereUniqueInput
  }


  /**
   * LikedPlaylist findUniqueOrThrow
   */
  export type LikedPlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which LikedPlaylist to fetch.
     */
    where: LikedPlaylistWhereUniqueInput
  }


  /**
   * LikedPlaylist findFirst
   */
  export type LikedPlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which LikedPlaylist to fetch.
     */
    where?: LikedPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedPlaylists to fetch.
     */
    orderBy?: LikedPlaylistOrderByWithRelationInput | LikedPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedPlaylists.
     */
    cursor?: LikedPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedPlaylists.
     */
    distinct?: LikedPlaylistScalarFieldEnum | LikedPlaylistScalarFieldEnum[]
  }


  /**
   * LikedPlaylist findFirstOrThrow
   */
  export type LikedPlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which LikedPlaylist to fetch.
     */
    where?: LikedPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedPlaylists to fetch.
     */
    orderBy?: LikedPlaylistOrderByWithRelationInput | LikedPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedPlaylists.
     */
    cursor?: LikedPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedPlaylists.
     */
    distinct?: LikedPlaylistScalarFieldEnum | LikedPlaylistScalarFieldEnum[]
  }


  /**
   * LikedPlaylist findMany
   */
  export type LikedPlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which LikedPlaylists to fetch.
     */
    where?: LikedPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedPlaylists to fetch.
     */
    orderBy?: LikedPlaylistOrderByWithRelationInput | LikedPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikedPlaylists.
     */
    cursor?: LikedPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedPlaylists.
     */
    skip?: number
    distinct?: LikedPlaylistScalarFieldEnum | LikedPlaylistScalarFieldEnum[]
  }


  /**
   * LikedPlaylist create
   */
  export type LikedPlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a LikedPlaylist.
     */
    data: XOR<LikedPlaylistCreateInput, LikedPlaylistUncheckedCreateInput>
  }


  /**
   * LikedPlaylist createMany
   */
  export type LikedPlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikedPlaylists.
     */
    data: LikedPlaylistCreateManyInput | LikedPlaylistCreateManyInput[]
  }


  /**
   * LikedPlaylist update
   */
  export type LikedPlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a LikedPlaylist.
     */
    data: XOR<LikedPlaylistUpdateInput, LikedPlaylistUncheckedUpdateInput>
    /**
     * Choose, which LikedPlaylist to update.
     */
    where: LikedPlaylistWhereUniqueInput
  }


  /**
   * LikedPlaylist updateMany
   */
  export type LikedPlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikedPlaylists.
     */
    data: XOR<LikedPlaylistUpdateManyMutationInput, LikedPlaylistUncheckedUpdateManyInput>
    /**
     * Filter which LikedPlaylists to update
     */
    where?: LikedPlaylistWhereInput
  }


  /**
   * LikedPlaylist upsert
   */
  export type LikedPlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the LikedPlaylist to update in case it exists.
     */
    where: LikedPlaylistWhereUniqueInput
    /**
     * In case the LikedPlaylist found by the `where` argument doesn't exist, create a new LikedPlaylist with this data.
     */
    create: XOR<LikedPlaylistCreateInput, LikedPlaylistUncheckedCreateInput>
    /**
     * In case the LikedPlaylist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedPlaylistUpdateInput, LikedPlaylistUncheckedUpdateInput>
  }


  /**
   * LikedPlaylist delete
   */
  export type LikedPlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    /**
     * Filter which LikedPlaylist to delete.
     */
    where: LikedPlaylistWhereUniqueInput
  }


  /**
   * LikedPlaylist deleteMany
   */
  export type LikedPlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedPlaylists to delete
     */
    where?: LikedPlaylistWhereInput
  }


  /**
   * LikedPlaylist findRaw
   */
  export type LikedPlaylistFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * LikedPlaylist aggregateRaw
   */
  export type LikedPlaylistAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * LikedPlaylist.User
   */
  export type LikedPlaylist$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * LikedPlaylist.Playlists
   */
  export type LikedPlaylist$PlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
  }


  /**
   * LikedPlaylist without action
   */
  export type LikedPlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
  }



  /**
   * Model Genres
   */

  export type AggregateGenres = {
    _count: GenresCountAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  export type GenresMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type GenresMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type GenresCountAggregateOutputType = {
    id: number
    name: number
    songId: number
    artistId: number
    albumId: number
    _all: number
  }


  export type GenresMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenresMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenresCountAggregateInputType = {
    id?: true
    name?: true
    songId?: true
    artistId?: true
    albumId?: true
    _all?: true
  }

  export type GenresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to aggregate.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenresMaxAggregateInputType
  }

  export type GetGenresAggregateType<T extends GenresAggregateArgs> = {
        [P in keyof T & keyof AggregateGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenres[P]>
      : GetScalarType<T[P], AggregateGenres[P]>
  }




  export type GenresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenresWhereInput
    orderBy?: GenresOrderByWithAggregationInput | GenresOrderByWithAggregationInput[]
    by: GenresScalarFieldEnum[] | GenresScalarFieldEnum
    having?: GenresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenresCountAggregateInputType | true
    _min?: GenresMinAggregateInputType
    _max?: GenresMaxAggregateInputType
  }

  export type GenresGroupByOutputType = {
    id: string
    name: string
    songId: string[]
    artistId: string[]
    albumId: string[]
    _count: GenresCountAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  type GetGenresGroupByPayload<T extends GenresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenresGroupByOutputType[P]>
            : GetScalarType<T[P], GenresGroupByOutputType[P]>
        }
      >
    >


  export type GenresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    songId?: boolean
    artistId?: boolean
    albumId?: boolean
    Song?: boolean | Genres$SongArgs<ExtArgs>
    Artist?: boolean | Genres$ArtistArgs<ExtArgs>
    Albums?: boolean | Genres$AlbumsArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genres"]>

  export type GenresSelectScalar = {
    id?: boolean
    name?: boolean
    songId?: boolean
    artistId?: boolean
    albumId?: boolean
  }

  export type GenresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Song?: boolean | Genres$SongArgs<ExtArgs>
    Artist?: boolean | Genres$ArtistArgs<ExtArgs>
    Albums?: boolean | Genres$AlbumsArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GenresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genres"
    objects: {
      Song: Prisma.$SongPayload<ExtArgs>[]
      Artist: Prisma.$ArtistPayload<ExtArgs>[]
      Albums: Prisma.$AlbumsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      songId: string[]
      artistId: string[]
      albumId: string[]
    }, ExtArgs["result"]["genres"]>
    composites: {}
  }


  type GenresGetPayload<S extends boolean | null | undefined | GenresDefaultArgs> = $Result.GetResult<Prisma.$GenresPayload, S>

  type GenresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GenresFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GenresCountAggregateInputType | true
    }

  export interface GenresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genres'], meta: { name: 'Genres' } }
    /**
     * Find zero or one Genres that matches the filter.
     * @param {GenresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenresFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GenresFindUniqueArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Genres that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GenresFindUniqueOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GenresFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenresFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresFindFirstArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindFirstOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GenresFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genres.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genresWithIdOnly = await prisma.genres.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GenresFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Genres.
     * @param {GenresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     * 
    **/
    create<T extends GenresCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GenresCreateArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Genres.
     *     @param {GenresCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genres = await prisma.genres.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GenresCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genres.
     * @param {GenresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     * 
    **/
    delete<T extends GenresDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GenresDeleteArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Genres.
     * @param {GenresUpdateArgs} args - Arguments to update one Genres.
     * @example
     * // Update one Genres
     * const genres = await prisma.genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenresUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GenresUpdateArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Genres.
     * @param {GenresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenresDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenresUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GenresUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genres.
     * @param {GenresUpsertArgs} args - Arguments to update or create a Genres.
     * @example
     * // Update or create a Genres
     * const genres = await prisma.genres.upsert({
     *   create: {
     *     // ... data to create a Genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genres we want to update
     *   }
     * })
    **/
    upsert<T extends GenresUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GenresUpsertArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * @param {GenresFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const genres = await prisma.genres.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: GenresFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Genres.
     * @param {GenresAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const genres = await prisma.genres.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: GenresAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenresCountArgs>(
      args?: Subset<T, GenresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenresAggregateArgs>(args: Subset<T, GenresAggregateArgs>): Prisma.PrismaPromise<GetGenresAggregateType<T>>

    /**
     * Group by Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresGroupByArgs} args - Group by arguments.
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
      T extends GenresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenresGroupByArgs['orderBy'] }
        : { orderBy?: GenresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genres model
   */
  readonly fields: GenresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Song<T extends Genres$SongArgs<ExtArgs> = {}>(args?: Subset<T, Genres$SongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'> | Null>;

    Artist<T extends Genres$ArtistArgs<ExtArgs> = {}>(args?: Subset<T, Genres$ArtistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findMany'> | Null>;

    Albums<T extends Genres$AlbumsArgs<ExtArgs> = {}>(args?: Subset<T, Genres$AlbumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Genres model
   */ 
  interface GenresFieldRefs {
    readonly id: FieldRef<"Genres", 'String'>
    readonly name: FieldRef<"Genres", 'String'>
    readonly songId: FieldRef<"Genres", 'String[]'>
    readonly artistId: FieldRef<"Genres", 'String[]'>
    readonly albumId: FieldRef<"Genres", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Genres findUnique
   */
  export type GenresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where: GenresWhereUniqueInput
  }


  /**
   * Genres findUniqueOrThrow
   */
  export type GenresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where: GenresWhereUniqueInput
  }


  /**
   * Genres findFirst
   */
  export type GenresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }


  /**
   * Genres findFirstOrThrow
   */
  export type GenresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }


  /**
   * Genres findMany
   */
  export type GenresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }


  /**
   * Genres create
   */
  export type GenresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The data needed to create a Genres.
     */
    data: XOR<GenresCreateInput, GenresUncheckedCreateInput>
  }


  /**
   * Genres createMany
   */
  export type GenresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenresCreateManyInput | GenresCreateManyInput[]
  }


  /**
   * Genres update
   */
  export type GenresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The data needed to update a Genres.
     */
    data: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>
    /**
     * Choose, which Genres to update.
     */
    where: GenresWhereUniqueInput
  }


  /**
   * Genres updateMany
   */
  export type GenresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenresWhereInput
  }


  /**
   * Genres upsert
   */
  export type GenresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The filter to search for the Genres to update in case it exists.
     */
    where: GenresWhereUniqueInput
    /**
     * In case the Genres found by the `where` argument doesn't exist, create a new Genres with this data.
     */
    create: XOR<GenresCreateInput, GenresUncheckedCreateInput>
    /**
     * In case the Genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>
  }


  /**
   * Genres delete
   */
  export type GenresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter which Genres to delete.
     */
    where: GenresWhereUniqueInput
  }


  /**
   * Genres deleteMany
   */
  export type GenresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenresWhereInput
  }


  /**
   * Genres findRaw
   */
  export type GenresFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Genres aggregateRaw
   */
  export type GenresAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Genres.Song
   */
  export type Genres$SongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Genres.Artist
   */
  export type Genres$ArtistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    cursor?: ArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * Genres.Albums
   */
  export type Genres$AlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    where?: AlbumsWhereInput
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    cursor?: AlbumsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }


  /**
   * Genres without action
   */
  export type GenresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
  }



  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistAvgAggregateOutputType = {
    numSong: number | null
  }

  export type PlaylistSumAggregateOutputType = {
    numSong: number | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: string | null
    name: string | null
    cover: string | null
    numSong: number | null
    userId: string | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cover: string | null
    numSong: number | null
    userId: string | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    name: number
    cover: number
    numSong: number
    songId: number
    userId: number
    _all: number
  }


  export type PlaylistAvgAggregateInputType = {
    numSong?: true
  }

  export type PlaylistSumAggregateInputType = {
    numSong?: true
  }

  export type PlaylistMinAggregateInputType = {
    id?: true
    name?: true
    cover?: true
    numSong?: true
    userId?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    name?: true
    cover?: true
    numSong?: true
    userId?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    name?: true
    cover?: true
    numSong?: true
    songId?: true
    userId?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _avg?: PlaylistAvgAggregateInputType
    _sum?: PlaylistSumAggregateInputType
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: string
    name: string
    cover: string
    numSong: number | null
    songId: string[]
    userId: string | null
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cover?: boolean
    numSong?: boolean
    songId?: boolean
    userId?: boolean
    Song?: boolean | Playlist$SongArgs<ExtArgs>
    User?: boolean | Playlist$UserArgs<ExtArgs>
    LikedPlaylist?: boolean | Playlist$LikedPlaylistArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    name?: boolean
    cover?: boolean
    numSong?: boolean
    songId?: boolean
    userId?: boolean
  }

  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Song?: boolean | Playlist$SongArgs<ExtArgs>
    User?: boolean | Playlist$UserArgs<ExtArgs>
    LikedPlaylist?: boolean | Playlist$LikedPlaylistArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      Song: Prisma.$SongPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
      LikedPlaylist: Prisma.$LikedPlaylistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cover: string
      numSong: number | null
      songId: string[]
      userId: string | null
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }


  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlaylistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Playlist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlaylistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlaylistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
    **/
    create<T extends PlaylistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Playlists.
     *     @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     *     @example
     *     // Create many Playlists
     *     const playlist = await prisma.playlist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlaylistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
    **/
    delete<T extends PlaylistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlaylistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlaylistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlaylistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
    **/
    upsert<T extends PlaylistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>
    ): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Playlists that matches the filter.
     * @param {PlaylistFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const playlist = await prisma.playlist.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PlaylistFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Playlist.
     * @param {PlaylistAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const playlist = await prisma.playlist.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PlaylistAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
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
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Song<T extends Playlist$SongArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$SongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'> | Null>;

    User<T extends Playlist$UserArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    LikedPlaylist<T extends Playlist$LikedPlaylistArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$LikedPlaylistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedPlaylistPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Playlist model
   */ 
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'String'>
    readonly name: FieldRef<"Playlist", 'String'>
    readonly cover: FieldRef<"Playlist", 'String'>
    readonly numSong: FieldRef<"Playlist", 'Int'>
    readonly songId: FieldRef<"Playlist", 'String[]'>
    readonly userId: FieldRef<"Playlist", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }


  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }


  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
  }


  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
  }


  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }


  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
  }


  /**
   * Playlist findRaw
   */
  export type PlaylistFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Playlist aggregateRaw
   */
  export type PlaylistAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Playlist.Song
   */
  export type Playlist$SongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    where?: SongWhereInput
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    cursor?: SongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Playlist.User
   */
  export type Playlist$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Playlist.LikedPlaylist
   */
  export type Playlist$LikedPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedPlaylist
     */
    select?: LikedPlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikedPlaylistInclude<ExtArgs> | null
    where?: LikedPlaylistWhereInput
    orderBy?: LikedPlaylistOrderByWithRelationInput | LikedPlaylistOrderByWithRelationInput[]
    cursor?: LikedPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedPlaylistScalarFieldEnum | LikedPlaylistScalarFieldEnum[]
  }


  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude<ExtArgs> | null
  }



  /**
   * Model FollowedUser
   */

  export type AggregateFollowedUser = {
    _count: FollowedUserCountAggregateOutputType | null
    _min: FollowedUserMinAggregateOutputType | null
    _max: FollowedUserMaxAggregateOutputType | null
  }

  export type FollowedUserMinAggregateOutputType = {
    id: string | null
    followed: boolean | null
  }

  export type FollowedUserMaxAggregateOutputType = {
    id: string | null
    followed: boolean | null
  }

  export type FollowedUserCountAggregateOutputType = {
    id: number
    userId: number
    followed: number
    _all: number
  }


  export type FollowedUserMinAggregateInputType = {
    id?: true
    followed?: true
  }

  export type FollowedUserMaxAggregateInputType = {
    id?: true
    followed?: true
  }

  export type FollowedUserCountAggregateInputType = {
    id?: true
    userId?: true
    followed?: true
    _all?: true
  }

  export type FollowedUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowedUser to aggregate.
     */
    where?: FollowedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowedUsers to fetch.
     */
    orderBy?: FollowedUserOrderByWithRelationInput | FollowedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FollowedUsers
    **/
    _count?: true | FollowedUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowedUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowedUserMaxAggregateInputType
  }

  export type GetFollowedUserAggregateType<T extends FollowedUserAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowedUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowedUser[P]>
      : GetScalarType<T[P], AggregateFollowedUser[P]>
  }




  export type FollowedUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowedUserWhereInput
    orderBy?: FollowedUserOrderByWithAggregationInput | FollowedUserOrderByWithAggregationInput[]
    by: FollowedUserScalarFieldEnum[] | FollowedUserScalarFieldEnum
    having?: FollowedUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowedUserCountAggregateInputType | true
    _min?: FollowedUserMinAggregateInputType
    _max?: FollowedUserMaxAggregateInputType
  }

  export type FollowedUserGroupByOutputType = {
    id: string
    userId: string[]
    followed: boolean
    _count: FollowedUserCountAggregateOutputType | null
    _min: FollowedUserMinAggregateOutputType | null
    _max: FollowedUserMaxAggregateOutputType | null
  }

  type GetFollowedUserGroupByPayload<T extends FollowedUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowedUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowedUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowedUserGroupByOutputType[P]>
            : GetScalarType<T[P], FollowedUserGroupByOutputType[P]>
        }
      >
    >


  export type FollowedUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    followed?: boolean
    User?: boolean | FollowedUser$UserArgs<ExtArgs>
    _count?: boolean | FollowedUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followedUser"]>

  export type FollowedUserSelectScalar = {
    id?: boolean
    userId?: boolean
    followed?: boolean
  }

  export type FollowedUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | FollowedUser$UserArgs<ExtArgs>
    _count?: boolean | FollowedUserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FollowedUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FollowedUser"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string[]
      followed: boolean
    }, ExtArgs["result"]["followedUser"]>
    composites: {}
  }


  type FollowedUserGetPayload<S extends boolean | null | undefined | FollowedUserDefaultArgs> = $Result.GetResult<Prisma.$FollowedUserPayload, S>

  type FollowedUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FollowedUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FollowedUserCountAggregateInputType | true
    }

  export interface FollowedUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FollowedUser'], meta: { name: 'FollowedUser' } }
    /**
     * Find zero or one FollowedUser that matches the filter.
     * @param {FollowedUserFindUniqueArgs} args - Arguments to find a FollowedUser
     * @example
     * // Get one FollowedUser
     * const followedUser = await prisma.followedUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FollowedUserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FollowedUserFindUniqueArgs<ExtArgs>>
    ): Prisma__FollowedUserClient<$Result.GetResult<Prisma.$FollowedUserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FollowedUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FollowedUserFindUniqueOrThrowArgs} args - Arguments to find a FollowedUser
     * @example
     * // Get one FollowedUser
     * const followedUser = await prisma.followedUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FollowedUserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowedUserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FollowedUserClient<$Result.GetResult<Prisma.$FollowedUserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FollowedUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowedUserFindFirstArgs} args - Arguments to find a FollowedUser
     * @example
     * // Get one FollowedUser
     * const followedUser = await prisma.followedUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FollowedUserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowedUserFindFirstArgs<ExtArgs>>
    ): Prisma__FollowedUserClient<$Result.GetResult<Prisma.$FollowedUserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FollowedUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowedUserFindFirstOrThrowArgs} args - Arguments to find a FollowedUser
     * @example
     * // Get one FollowedUser
     * const followedUser = await prisma.followedUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FollowedUserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowedUserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FollowedUserClient<$Result.GetResult<Prisma.$FollowedUserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FollowedUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowedUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FollowedUsers
     * const followedUsers = await prisma.followedUser.findMany()
     * 
     * // Get first 10 FollowedUsers
     * const followedUsers = await prisma.followedUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followedUserWithIdOnly = await prisma.followedUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FollowedUserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowedUserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowedUserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FollowedUser.
     * @param {FollowedUserCreateArgs} args - Arguments to create a FollowedUser.
     * @example
     * // Create one FollowedUser
     * const FollowedUser = await prisma.followedUser.create({
     *   data: {
     *     // ... data to create a FollowedUser
     *   }
     * })
     * 
    **/
    create<T extends FollowedUserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FollowedUserCreateArgs<ExtArgs>>
    ): Prisma__FollowedUserClient<$Result.GetResult<Prisma.$FollowedUserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FollowedUsers.
     *     @param {FollowedUserCreateManyArgs} args - Arguments to create many FollowedUsers.
     *     @example
     *     // Create many FollowedUsers
     *     const followedUser = await prisma.followedUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FollowedUserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowedUserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FollowedUser.
     * @param {FollowedUserDeleteArgs} args - Arguments to delete one FollowedUser.
     * @example
     * // Delete one FollowedUser
     * const FollowedUser = await prisma.followedUser.delete({
     *   where: {
     *     // ... filter to delete one FollowedUser
     *   }
     * })
     * 
    **/
    delete<T extends FollowedUserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FollowedUserDeleteArgs<ExtArgs>>
    ): Prisma__FollowedUserClient<$Result.GetResult<Prisma.$FollowedUserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FollowedUser.
     * @param {FollowedUserUpdateArgs} args - Arguments to update one FollowedUser.
     * @example
     * // Update one FollowedUser
     * const followedUser = await prisma.followedUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FollowedUserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FollowedUserUpdateArgs<ExtArgs>>
    ): Prisma__FollowedUserClient<$Result.GetResult<Prisma.$FollowedUserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FollowedUsers.
     * @param {FollowedUserDeleteManyArgs} args - Arguments to filter FollowedUsers to delete.
     * @example
     * // Delete a few FollowedUsers
     * const { count } = await prisma.followedUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FollowedUserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowedUserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FollowedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowedUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FollowedUsers
     * const followedUser = await prisma.followedUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FollowedUserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FollowedUserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FollowedUser.
     * @param {FollowedUserUpsertArgs} args - Arguments to update or create a FollowedUser.
     * @example
     * // Update or create a FollowedUser
     * const followedUser = await prisma.followedUser.upsert({
     *   create: {
     *     // ... data to create a FollowedUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FollowedUser we want to update
     *   }
     * })
    **/
    upsert<T extends FollowedUserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FollowedUserUpsertArgs<ExtArgs>>
    ): Prisma__FollowedUserClient<$Result.GetResult<Prisma.$FollowedUserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more FollowedUsers that matches the filter.
     * @param {FollowedUserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const followedUser = await prisma.followedUser.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: FollowedUserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FollowedUser.
     * @param {FollowedUserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const followedUser = await prisma.followedUser.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: FollowedUserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of FollowedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowedUserCountArgs} args - Arguments to filter FollowedUsers to count.
     * @example
     * // Count the number of FollowedUsers
     * const count = await prisma.followedUser.count({
     *   where: {
     *     // ... the filter for the FollowedUsers we want to count
     *   }
     * })
    **/
    count<T extends FollowedUserCountArgs>(
      args?: Subset<T, FollowedUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowedUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FollowedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowedUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowedUserAggregateArgs>(args: Subset<T, FollowedUserAggregateArgs>): Prisma.PrismaPromise<GetFollowedUserAggregateType<T>>

    /**
     * Group by FollowedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowedUserGroupByArgs} args - Group by arguments.
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
      T extends FollowedUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowedUserGroupByArgs['orderBy'] }
        : { orderBy?: FollowedUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowedUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowedUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FollowedUser model
   */
  readonly fields: FollowedUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FollowedUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowedUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends FollowedUser$UserArgs<ExtArgs> = {}>(args?: Subset<T, FollowedUser$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FollowedUser model
   */ 
  interface FollowedUserFieldRefs {
    readonly id: FieldRef<"FollowedUser", 'String'>
    readonly userId: FieldRef<"FollowedUser", 'String[]'>
    readonly followed: FieldRef<"FollowedUser", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * FollowedUser findUnique
   */
  export type FollowedUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedUser
     */
    select?: FollowedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedUserInclude<ExtArgs> | null
    /**
     * Filter, which FollowedUser to fetch.
     */
    where: FollowedUserWhereUniqueInput
  }


  /**
   * FollowedUser findUniqueOrThrow
   */
  export type FollowedUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedUser
     */
    select?: FollowedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedUserInclude<ExtArgs> | null
    /**
     * Filter, which FollowedUser to fetch.
     */
    where: FollowedUserWhereUniqueInput
  }


  /**
   * FollowedUser findFirst
   */
  export type FollowedUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedUser
     */
    select?: FollowedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedUserInclude<ExtArgs> | null
    /**
     * Filter, which FollowedUser to fetch.
     */
    where?: FollowedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowedUsers to fetch.
     */
    orderBy?: FollowedUserOrderByWithRelationInput | FollowedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowedUsers.
     */
    cursor?: FollowedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowedUsers.
     */
    distinct?: FollowedUserScalarFieldEnum | FollowedUserScalarFieldEnum[]
  }


  /**
   * FollowedUser findFirstOrThrow
   */
  export type FollowedUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedUser
     */
    select?: FollowedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedUserInclude<ExtArgs> | null
    /**
     * Filter, which FollowedUser to fetch.
     */
    where?: FollowedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowedUsers to fetch.
     */
    orderBy?: FollowedUserOrderByWithRelationInput | FollowedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowedUsers.
     */
    cursor?: FollowedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowedUsers.
     */
    distinct?: FollowedUserScalarFieldEnum | FollowedUserScalarFieldEnum[]
  }


  /**
   * FollowedUser findMany
   */
  export type FollowedUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedUser
     */
    select?: FollowedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedUserInclude<ExtArgs> | null
    /**
     * Filter, which FollowedUsers to fetch.
     */
    where?: FollowedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowedUsers to fetch.
     */
    orderBy?: FollowedUserOrderByWithRelationInput | FollowedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FollowedUsers.
     */
    cursor?: FollowedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowedUsers.
     */
    skip?: number
    distinct?: FollowedUserScalarFieldEnum | FollowedUserScalarFieldEnum[]
  }


  /**
   * FollowedUser create
   */
  export type FollowedUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedUser
     */
    select?: FollowedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedUserInclude<ExtArgs> | null
    /**
     * The data needed to create a FollowedUser.
     */
    data: XOR<FollowedUserCreateInput, FollowedUserUncheckedCreateInput>
  }


  /**
   * FollowedUser createMany
   */
  export type FollowedUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FollowedUsers.
     */
    data: FollowedUserCreateManyInput | FollowedUserCreateManyInput[]
  }


  /**
   * FollowedUser update
   */
  export type FollowedUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedUser
     */
    select?: FollowedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedUserInclude<ExtArgs> | null
    /**
     * The data needed to update a FollowedUser.
     */
    data: XOR<FollowedUserUpdateInput, FollowedUserUncheckedUpdateInput>
    /**
     * Choose, which FollowedUser to update.
     */
    where: FollowedUserWhereUniqueInput
  }


  /**
   * FollowedUser updateMany
   */
  export type FollowedUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FollowedUsers.
     */
    data: XOR<FollowedUserUpdateManyMutationInput, FollowedUserUncheckedUpdateManyInput>
    /**
     * Filter which FollowedUsers to update
     */
    where?: FollowedUserWhereInput
  }


  /**
   * FollowedUser upsert
   */
  export type FollowedUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedUser
     */
    select?: FollowedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedUserInclude<ExtArgs> | null
    /**
     * The filter to search for the FollowedUser to update in case it exists.
     */
    where: FollowedUserWhereUniqueInput
    /**
     * In case the FollowedUser found by the `where` argument doesn't exist, create a new FollowedUser with this data.
     */
    create: XOR<FollowedUserCreateInput, FollowedUserUncheckedCreateInput>
    /**
     * In case the FollowedUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowedUserUpdateInput, FollowedUserUncheckedUpdateInput>
  }


  /**
   * FollowedUser delete
   */
  export type FollowedUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedUser
     */
    select?: FollowedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedUserInclude<ExtArgs> | null
    /**
     * Filter which FollowedUser to delete.
     */
    where: FollowedUserWhereUniqueInput
  }


  /**
   * FollowedUser deleteMany
   */
  export type FollowedUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowedUsers to delete
     */
    where?: FollowedUserWhereInput
  }


  /**
   * FollowedUser findRaw
   */
  export type FollowedUserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * FollowedUser aggregateRaw
   */
  export type FollowedUserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * FollowedUser.User
   */
  export type FollowedUser$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * FollowedUser without action
   */
  export type FollowedUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedUser
     */
    select?: FollowedUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedUserInclude<ExtArgs> | null
  }



  /**
   * Model FollowedBy
   */

  export type AggregateFollowedBy = {
    _count: FollowedByCountAggregateOutputType | null
    _min: FollowedByMinAggregateOutputType | null
    _max: FollowedByMaxAggregateOutputType | null
  }

  export type FollowedByMinAggregateOutputType = {
    id: string | null
    followed: boolean | null
  }

  export type FollowedByMaxAggregateOutputType = {
    id: string | null
    followed: boolean | null
  }

  export type FollowedByCountAggregateOutputType = {
    id: number
    userId: number
    followed: number
    _all: number
  }


  export type FollowedByMinAggregateInputType = {
    id?: true
    followed?: true
  }

  export type FollowedByMaxAggregateInputType = {
    id?: true
    followed?: true
  }

  export type FollowedByCountAggregateInputType = {
    id?: true
    userId?: true
    followed?: true
    _all?: true
  }

  export type FollowedByAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowedBy to aggregate.
     */
    where?: FollowedByWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowedBies to fetch.
     */
    orderBy?: FollowedByOrderByWithRelationInput | FollowedByOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowedByWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowedBies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowedBies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FollowedBies
    **/
    _count?: true | FollowedByCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowedByMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowedByMaxAggregateInputType
  }

  export type GetFollowedByAggregateType<T extends FollowedByAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowedBy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowedBy[P]>
      : GetScalarType<T[P], AggregateFollowedBy[P]>
  }




  export type FollowedByGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowedByWhereInput
    orderBy?: FollowedByOrderByWithAggregationInput | FollowedByOrderByWithAggregationInput[]
    by: FollowedByScalarFieldEnum[] | FollowedByScalarFieldEnum
    having?: FollowedByScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowedByCountAggregateInputType | true
    _min?: FollowedByMinAggregateInputType
    _max?: FollowedByMaxAggregateInputType
  }

  export type FollowedByGroupByOutputType = {
    id: string
    userId: string[]
    followed: boolean
    _count: FollowedByCountAggregateOutputType | null
    _min: FollowedByMinAggregateOutputType | null
    _max: FollowedByMaxAggregateOutputType | null
  }

  type GetFollowedByGroupByPayload<T extends FollowedByGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowedByGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowedByGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowedByGroupByOutputType[P]>
            : GetScalarType<T[P], FollowedByGroupByOutputType[P]>
        }
      >
    >


  export type FollowedBySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    followed?: boolean
    User?: boolean | FollowedBy$UserArgs<ExtArgs>
    _count?: boolean | FollowedByCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followedBy"]>

  export type FollowedBySelectScalar = {
    id?: boolean
    userId?: boolean
    followed?: boolean
  }

  export type FollowedByInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | FollowedBy$UserArgs<ExtArgs>
    _count?: boolean | FollowedByCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FollowedByPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FollowedBy"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string[]
      followed: boolean
    }, ExtArgs["result"]["followedBy"]>
    composites: {}
  }


  type FollowedByGetPayload<S extends boolean | null | undefined | FollowedByDefaultArgs> = $Result.GetResult<Prisma.$FollowedByPayload, S>

  type FollowedByCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FollowedByFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FollowedByCountAggregateInputType | true
    }

  export interface FollowedByDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FollowedBy'], meta: { name: 'FollowedBy' } }
    /**
     * Find zero or one FollowedBy that matches the filter.
     * @param {FollowedByFindUniqueArgs} args - Arguments to find a FollowedBy
     * @example
     * // Get one FollowedBy
     * const followedBy = await prisma.followedBy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FollowedByFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FollowedByFindUniqueArgs<ExtArgs>>
    ): Prisma__FollowedByClient<$Result.GetResult<Prisma.$FollowedByPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FollowedBy that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FollowedByFindUniqueOrThrowArgs} args - Arguments to find a FollowedBy
     * @example
     * // Get one FollowedBy
     * const followedBy = await prisma.followedBy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FollowedByFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowedByFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FollowedByClient<$Result.GetResult<Prisma.$FollowedByPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FollowedBy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowedByFindFirstArgs} args - Arguments to find a FollowedBy
     * @example
     * // Get one FollowedBy
     * const followedBy = await prisma.followedBy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FollowedByFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowedByFindFirstArgs<ExtArgs>>
    ): Prisma__FollowedByClient<$Result.GetResult<Prisma.$FollowedByPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FollowedBy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowedByFindFirstOrThrowArgs} args - Arguments to find a FollowedBy
     * @example
     * // Get one FollowedBy
     * const followedBy = await prisma.followedBy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FollowedByFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowedByFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FollowedByClient<$Result.GetResult<Prisma.$FollowedByPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FollowedBies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowedByFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FollowedBies
     * const followedBies = await prisma.followedBy.findMany()
     * 
     * // Get first 10 FollowedBies
     * const followedBies = await prisma.followedBy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followedByWithIdOnly = await prisma.followedBy.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FollowedByFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowedByFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowedByPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FollowedBy.
     * @param {FollowedByCreateArgs} args - Arguments to create a FollowedBy.
     * @example
     * // Create one FollowedBy
     * const FollowedBy = await prisma.followedBy.create({
     *   data: {
     *     // ... data to create a FollowedBy
     *   }
     * })
     * 
    **/
    create<T extends FollowedByCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FollowedByCreateArgs<ExtArgs>>
    ): Prisma__FollowedByClient<$Result.GetResult<Prisma.$FollowedByPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FollowedBies.
     *     @param {FollowedByCreateManyArgs} args - Arguments to create many FollowedBies.
     *     @example
     *     // Create many FollowedBies
     *     const followedBy = await prisma.followedBy.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FollowedByCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowedByCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FollowedBy.
     * @param {FollowedByDeleteArgs} args - Arguments to delete one FollowedBy.
     * @example
     * // Delete one FollowedBy
     * const FollowedBy = await prisma.followedBy.delete({
     *   where: {
     *     // ... filter to delete one FollowedBy
     *   }
     * })
     * 
    **/
    delete<T extends FollowedByDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FollowedByDeleteArgs<ExtArgs>>
    ): Prisma__FollowedByClient<$Result.GetResult<Prisma.$FollowedByPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FollowedBy.
     * @param {FollowedByUpdateArgs} args - Arguments to update one FollowedBy.
     * @example
     * // Update one FollowedBy
     * const followedBy = await prisma.followedBy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FollowedByUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FollowedByUpdateArgs<ExtArgs>>
    ): Prisma__FollowedByClient<$Result.GetResult<Prisma.$FollowedByPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FollowedBies.
     * @param {FollowedByDeleteManyArgs} args - Arguments to filter FollowedBies to delete.
     * @example
     * // Delete a few FollowedBies
     * const { count } = await prisma.followedBy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FollowedByDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowedByDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FollowedBies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowedByUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FollowedBies
     * const followedBy = await prisma.followedBy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FollowedByUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FollowedByUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FollowedBy.
     * @param {FollowedByUpsertArgs} args - Arguments to update or create a FollowedBy.
     * @example
     * // Update or create a FollowedBy
     * const followedBy = await prisma.followedBy.upsert({
     *   create: {
     *     // ... data to create a FollowedBy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FollowedBy we want to update
     *   }
     * })
    **/
    upsert<T extends FollowedByUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FollowedByUpsertArgs<ExtArgs>>
    ): Prisma__FollowedByClient<$Result.GetResult<Prisma.$FollowedByPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more FollowedBies that matches the filter.
     * @param {FollowedByFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const followedBy = await prisma.followedBy.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: FollowedByFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FollowedBy.
     * @param {FollowedByAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const followedBy = await prisma.followedBy.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: FollowedByAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of FollowedBies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowedByCountArgs} args - Arguments to filter FollowedBies to count.
     * @example
     * // Count the number of FollowedBies
     * const count = await prisma.followedBy.count({
     *   where: {
     *     // ... the filter for the FollowedBies we want to count
     *   }
     * })
    **/
    count<T extends FollowedByCountArgs>(
      args?: Subset<T, FollowedByCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowedByCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FollowedBy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowedByAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowedByAggregateArgs>(args: Subset<T, FollowedByAggregateArgs>): Prisma.PrismaPromise<GetFollowedByAggregateType<T>>

    /**
     * Group by FollowedBy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowedByGroupByArgs} args - Group by arguments.
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
      T extends FollowedByGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowedByGroupByArgs['orderBy'] }
        : { orderBy?: FollowedByGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowedByGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowedByGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FollowedBy model
   */
  readonly fields: FollowedByFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FollowedBy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowedByClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends FollowedBy$UserArgs<ExtArgs> = {}>(args?: Subset<T, FollowedBy$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FollowedBy model
   */ 
  interface FollowedByFieldRefs {
    readonly id: FieldRef<"FollowedBy", 'String'>
    readonly userId: FieldRef<"FollowedBy", 'String[]'>
    readonly followed: FieldRef<"FollowedBy", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * FollowedBy findUnique
   */
  export type FollowedByFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedBy
     */
    select?: FollowedBySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedByInclude<ExtArgs> | null
    /**
     * Filter, which FollowedBy to fetch.
     */
    where: FollowedByWhereUniqueInput
  }


  /**
   * FollowedBy findUniqueOrThrow
   */
  export type FollowedByFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedBy
     */
    select?: FollowedBySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedByInclude<ExtArgs> | null
    /**
     * Filter, which FollowedBy to fetch.
     */
    where: FollowedByWhereUniqueInput
  }


  /**
   * FollowedBy findFirst
   */
  export type FollowedByFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedBy
     */
    select?: FollowedBySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedByInclude<ExtArgs> | null
    /**
     * Filter, which FollowedBy to fetch.
     */
    where?: FollowedByWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowedBies to fetch.
     */
    orderBy?: FollowedByOrderByWithRelationInput | FollowedByOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowedBies.
     */
    cursor?: FollowedByWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowedBies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowedBies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowedBies.
     */
    distinct?: FollowedByScalarFieldEnum | FollowedByScalarFieldEnum[]
  }


  /**
   * FollowedBy findFirstOrThrow
   */
  export type FollowedByFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedBy
     */
    select?: FollowedBySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedByInclude<ExtArgs> | null
    /**
     * Filter, which FollowedBy to fetch.
     */
    where?: FollowedByWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowedBies to fetch.
     */
    orderBy?: FollowedByOrderByWithRelationInput | FollowedByOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowedBies.
     */
    cursor?: FollowedByWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowedBies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowedBies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowedBies.
     */
    distinct?: FollowedByScalarFieldEnum | FollowedByScalarFieldEnum[]
  }


  /**
   * FollowedBy findMany
   */
  export type FollowedByFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedBy
     */
    select?: FollowedBySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedByInclude<ExtArgs> | null
    /**
     * Filter, which FollowedBies to fetch.
     */
    where?: FollowedByWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowedBies to fetch.
     */
    orderBy?: FollowedByOrderByWithRelationInput | FollowedByOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FollowedBies.
     */
    cursor?: FollowedByWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowedBies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowedBies.
     */
    skip?: number
    distinct?: FollowedByScalarFieldEnum | FollowedByScalarFieldEnum[]
  }


  /**
   * FollowedBy create
   */
  export type FollowedByCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedBy
     */
    select?: FollowedBySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedByInclude<ExtArgs> | null
    /**
     * The data needed to create a FollowedBy.
     */
    data: XOR<FollowedByCreateInput, FollowedByUncheckedCreateInput>
  }


  /**
   * FollowedBy createMany
   */
  export type FollowedByCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FollowedBies.
     */
    data: FollowedByCreateManyInput | FollowedByCreateManyInput[]
  }


  /**
   * FollowedBy update
   */
  export type FollowedByUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedBy
     */
    select?: FollowedBySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedByInclude<ExtArgs> | null
    /**
     * The data needed to update a FollowedBy.
     */
    data: XOR<FollowedByUpdateInput, FollowedByUncheckedUpdateInput>
    /**
     * Choose, which FollowedBy to update.
     */
    where: FollowedByWhereUniqueInput
  }


  /**
   * FollowedBy updateMany
   */
  export type FollowedByUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FollowedBies.
     */
    data: XOR<FollowedByUpdateManyMutationInput, FollowedByUncheckedUpdateManyInput>
    /**
     * Filter which FollowedBies to update
     */
    where?: FollowedByWhereInput
  }


  /**
   * FollowedBy upsert
   */
  export type FollowedByUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedBy
     */
    select?: FollowedBySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedByInclude<ExtArgs> | null
    /**
     * The filter to search for the FollowedBy to update in case it exists.
     */
    where: FollowedByWhereUniqueInput
    /**
     * In case the FollowedBy found by the `where` argument doesn't exist, create a new FollowedBy with this data.
     */
    create: XOR<FollowedByCreateInput, FollowedByUncheckedCreateInput>
    /**
     * In case the FollowedBy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowedByUpdateInput, FollowedByUncheckedUpdateInput>
  }


  /**
   * FollowedBy delete
   */
  export type FollowedByDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedBy
     */
    select?: FollowedBySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedByInclude<ExtArgs> | null
    /**
     * Filter which FollowedBy to delete.
     */
    where: FollowedByWhereUniqueInput
  }


  /**
   * FollowedBy deleteMany
   */
  export type FollowedByDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowedBies to delete
     */
    where?: FollowedByWhereInput
  }


  /**
   * FollowedBy findRaw
   */
  export type FollowedByFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * FollowedBy aggregateRaw
   */
  export type FollowedByAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * FollowedBy.User
   */
  export type FollowedBy$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * FollowedBy without action
   */
  export type FollowedByDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowedBy
     */
    select?: FollowedBySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowedByInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    avatar: 'avatar',
    followedUserId: 'followedUserId',
    followedById: 'followedById'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SongScalarFieldEnum: {
    id: 'id',
    url: 'url',
    cover: 'cover',
    name: 'name',
    duration: 'duration',
    listened: 'listened',
    artistId: 'artistId',
    albumId: 'albumId',
    genreId: 'genreId',
    userId: 'userId',
    playlistId: 'playlistId'
  };

  export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    img: 'img',
    songId: 'songId',
    albumsId: 'albumsId',
    genreId: 'genreId'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const AlbumsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cover: 'cover',
    songId: 'songId',
    artistId: 'artistId',
    genreId: 'genreId'
  };

  export type AlbumsScalarFieldEnum = (typeof AlbumsScalarFieldEnum)[keyof typeof AlbumsScalarFieldEnum]


  export const LikedSongScalarFieldEnum: {
    id: 'id',
    liked: 'liked',
    userId: 'userId',
    songId: 'songId'
  };

  export type LikedSongScalarFieldEnum = (typeof LikedSongScalarFieldEnum)[keyof typeof LikedSongScalarFieldEnum]


  export const LikedAlbumsScalarFieldEnum: {
    id: 'id',
    liked: 'liked',
    userId: 'userId',
    albumId: 'albumId'
  };

  export type LikedAlbumsScalarFieldEnum = (typeof LikedAlbumsScalarFieldEnum)[keyof typeof LikedAlbumsScalarFieldEnum]


  export const LikedPlaylistScalarFieldEnum: {
    id: 'id',
    liked: 'liked',
    userId: 'userId',
    playlistId: 'playlistId'
  };

  export type LikedPlaylistScalarFieldEnum = (typeof LikedPlaylistScalarFieldEnum)[keyof typeof LikedPlaylistScalarFieldEnum]


  export const GenresScalarFieldEnum: {
    id: 'id',
    name: 'name',
    songId: 'songId',
    artistId: 'artistId',
    albumId: 'albumId'
  };

  export type GenresScalarFieldEnum = (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cover: 'cover',
    numSong: 'numSong',
    songId: 'songId',
    userId: 'userId'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const FollowedUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    followed: 'followed'
  };

  export type FollowedUserScalarFieldEnum = (typeof FollowedUserScalarFieldEnum)[keyof typeof FollowedUserScalarFieldEnum]


  export const FollowedByScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    followed: 'followed'
  };

  export type FollowedByScalarFieldEnum = (typeof FollowedByScalarFieldEnum)[keyof typeof FollowedByScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    followedUserId?: StringNullableListFilter<"User">
    followedById?: StringNullableListFilter<"User">
    Song?: SongListRelationFilter
    LikedSong?: LikedSongListRelationFilter
    LikedAlbums?: LikedAlbumsListRelationFilter
    Playlist?: PlaylistListRelationFilter
    LikedPlaylist?: LikedPlaylistListRelationFilter
    FollowedUser?: FollowedUserListRelationFilter
    FollowedBy?: FollowedByListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    followedUserId?: SortOrder
    followedById?: SortOrder
    Song?: SongOrderByRelationAggregateInput
    LikedSong?: LikedSongOrderByRelationAggregateInput
    LikedAlbums?: LikedAlbumsOrderByRelationAggregateInput
    Playlist?: PlaylistOrderByRelationAggregateInput
    LikedPlaylist?: LikedPlaylistOrderByRelationAggregateInput
    FollowedUser?: FollowedUserOrderByRelationAggregateInput
    FollowedBy?: FollowedByOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    followedUserId?: StringNullableListFilter<"User">
    followedById?: StringNullableListFilter<"User">
    Song?: SongListRelationFilter
    LikedSong?: LikedSongListRelationFilter
    LikedAlbums?: LikedAlbumsListRelationFilter
    Playlist?: PlaylistListRelationFilter
    LikedPlaylist?: LikedPlaylistListRelationFilter
    FollowedUser?: FollowedUserListRelationFilter
    FollowedBy?: FollowedByListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    followedUserId?: SortOrder
    followedById?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringWithAggregatesFilter<"User"> | string
    followedUserId?: StringNullableListFilter<"User">
    followedById?: StringNullableListFilter<"User">
  }

  export type SongWhereInput = {
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    id?: StringFilter<"Song"> | string
    url?: StringFilter<"Song"> | string
    cover?: StringFilter<"Song"> | string
    name?: StringFilter<"Song"> | string
    duration?: StringNullableFilter<"Song"> | string | null
    listened?: IntNullableFilter<"Song"> | number | null
    artistId?: StringNullableListFilter<"Song">
    albumId?: StringNullableListFilter<"Song">
    genreId?: StringNullableListFilter<"Song">
    userId?: StringNullableFilter<"Song"> | string | null
    playlistId?: StringNullableListFilter<"Song">
    Artist?: ArtistListRelationFilter
    Album?: AlbumsListRelationFilter
    Genres?: GenresListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    LikedSong?: LikedSongListRelationFilter
    Playlist?: PlaylistListRelationFilter
  }

  export type SongOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    cover?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    listened?: SortOrder
    artistId?: SortOrder
    albumId?: SortOrder
    genreId?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
    Artist?: ArtistOrderByRelationAggregateInput
    Album?: AlbumsOrderByRelationAggregateInput
    Genres?: GenresOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
    LikedSong?: LikedSongOrderByRelationAggregateInput
    Playlist?: PlaylistOrderByRelationAggregateInput
  }

  export type SongWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    url?: StringFilter<"Song"> | string
    cover?: StringFilter<"Song"> | string
    name?: StringFilter<"Song"> | string
    duration?: StringNullableFilter<"Song"> | string | null
    listened?: IntNullableFilter<"Song"> | number | null
    artistId?: StringNullableListFilter<"Song">
    albumId?: StringNullableListFilter<"Song">
    genreId?: StringNullableListFilter<"Song">
    userId?: StringNullableFilter<"Song"> | string | null
    playlistId?: StringNullableListFilter<"Song">
    Artist?: ArtistListRelationFilter
    Album?: AlbumsListRelationFilter
    Genres?: GenresListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    LikedSong?: LikedSongListRelationFilter
    Playlist?: PlaylistListRelationFilter
  }, "id">

  export type SongOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    cover?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    listened?: SortOrder
    artistId?: SortOrder
    albumId?: SortOrder
    genreId?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
    _count?: SongCountOrderByAggregateInput
    _avg?: SongAvgOrderByAggregateInput
    _max?: SongMaxOrderByAggregateInput
    _min?: SongMinOrderByAggregateInput
    _sum?: SongSumOrderByAggregateInput
  }

  export type SongScalarWhereWithAggregatesInput = {
    AND?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    OR?: SongScalarWhereWithAggregatesInput[]
    NOT?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Song"> | string
    url?: StringWithAggregatesFilter<"Song"> | string
    cover?: StringWithAggregatesFilter<"Song"> | string
    name?: StringWithAggregatesFilter<"Song"> | string
    duration?: StringNullableWithAggregatesFilter<"Song"> | string | null
    listened?: IntNullableWithAggregatesFilter<"Song"> | number | null
    artistId?: StringNullableListFilter<"Song">
    albumId?: StringNullableListFilter<"Song">
    genreId?: StringNullableListFilter<"Song">
    userId?: StringNullableWithAggregatesFilter<"Song"> | string | null
    playlistId?: StringNullableListFilter<"Song">
  }

  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: StringFilter<"Artist"> | string
    name?: StringFilter<"Artist"> | string
    img?: StringFilter<"Artist"> | string
    songId?: StringNullableListFilter<"Artist">
    albumsId?: StringNullableListFilter<"Artist">
    genreId?: StringNullableListFilter<"Artist">
    Song?: SongListRelationFilter
    Albums?: AlbumsListRelationFilter
    Genres?: GenresListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
    songId?: SortOrder
    albumsId?: SortOrder
    genreId?: SortOrder
    Song?: SongOrderByRelationAggregateInput
    Albums?: AlbumsOrderByRelationAggregateInput
    Genres?: GenresOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    name?: StringFilter<"Artist"> | string
    img?: StringFilter<"Artist"> | string
    songId?: StringNullableListFilter<"Artist">
    albumsId?: StringNullableListFilter<"Artist">
    genreId?: StringNullableListFilter<"Artist">
    Song?: SongListRelationFilter
    Albums?: AlbumsListRelationFilter
    Genres?: GenresListRelationFilter
  }, "id">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
    songId?: SortOrder
    albumsId?: SortOrder
    genreId?: SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artist"> | string
    name?: StringWithAggregatesFilter<"Artist"> | string
    img?: StringWithAggregatesFilter<"Artist"> | string
    songId?: StringNullableListFilter<"Artist">
    albumsId?: StringNullableListFilter<"Artist">
    genreId?: StringNullableListFilter<"Artist">
  }

  export type AlbumsWhereInput = {
    AND?: AlbumsWhereInput | AlbumsWhereInput[]
    OR?: AlbumsWhereInput[]
    NOT?: AlbumsWhereInput | AlbumsWhereInput[]
    id?: StringFilter<"Albums"> | string
    name?: StringFilter<"Albums"> | string
    cover?: StringFilter<"Albums"> | string
    songId?: StringNullableListFilter<"Albums">
    artistId?: StringNullableListFilter<"Albums">
    genreId?: StringNullableListFilter<"Albums">
    LikedAlbums?: LikedAlbumsListRelationFilter
    Song?: SongListRelationFilter
    Artist?: ArtistListRelationFilter
    Genres?: GenresListRelationFilter
  }

  export type AlbumsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    songId?: SortOrder
    artistId?: SortOrder
    genreId?: SortOrder
    LikedAlbums?: LikedAlbumsOrderByRelationAggregateInput
    Song?: SongOrderByRelationAggregateInput
    Artist?: ArtistOrderByRelationAggregateInput
    Genres?: GenresOrderByRelationAggregateInput
  }

  export type AlbumsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlbumsWhereInput | AlbumsWhereInput[]
    OR?: AlbumsWhereInput[]
    NOT?: AlbumsWhereInput | AlbumsWhereInput[]
    name?: StringFilter<"Albums"> | string
    cover?: StringFilter<"Albums"> | string
    songId?: StringNullableListFilter<"Albums">
    artistId?: StringNullableListFilter<"Albums">
    genreId?: StringNullableListFilter<"Albums">
    LikedAlbums?: LikedAlbumsListRelationFilter
    Song?: SongListRelationFilter
    Artist?: ArtistListRelationFilter
    Genres?: GenresListRelationFilter
  }, "id">

  export type AlbumsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    songId?: SortOrder
    artistId?: SortOrder
    genreId?: SortOrder
    _count?: AlbumsCountOrderByAggregateInput
    _max?: AlbumsMaxOrderByAggregateInput
    _min?: AlbumsMinOrderByAggregateInput
  }

  export type AlbumsScalarWhereWithAggregatesInput = {
    AND?: AlbumsScalarWhereWithAggregatesInput | AlbumsScalarWhereWithAggregatesInput[]
    OR?: AlbumsScalarWhereWithAggregatesInput[]
    NOT?: AlbumsScalarWhereWithAggregatesInput | AlbumsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Albums"> | string
    name?: StringWithAggregatesFilter<"Albums"> | string
    cover?: StringWithAggregatesFilter<"Albums"> | string
    songId?: StringNullableListFilter<"Albums">
    artistId?: StringNullableListFilter<"Albums">
    genreId?: StringNullableListFilter<"Albums">
  }

  export type LikedSongWhereInput = {
    AND?: LikedSongWhereInput | LikedSongWhereInput[]
    OR?: LikedSongWhereInput[]
    NOT?: LikedSongWhereInput | LikedSongWhereInput[]
    id?: StringFilter<"LikedSong"> | string
    liked?: BoolFilter<"LikedSong"> | boolean
    userId?: StringNullableFilter<"LikedSong"> | string | null
    songId?: StringNullableFilter<"LikedSong"> | string | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Song?: XOR<SongNullableRelationFilter, SongWhereInput> | null
  }

  export type LikedSongOrderByWithRelationInput = {
    id?: SortOrder
    liked?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    User?: UserOrderByWithRelationInput
    Song?: SongOrderByWithRelationInput
  }

  export type LikedSongWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LikedSongWhereInput | LikedSongWhereInput[]
    OR?: LikedSongWhereInput[]
    NOT?: LikedSongWhereInput | LikedSongWhereInput[]
    liked?: BoolFilter<"LikedSong"> | boolean
    userId?: StringNullableFilter<"LikedSong"> | string | null
    songId?: StringNullableFilter<"LikedSong"> | string | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Song?: XOR<SongNullableRelationFilter, SongWhereInput> | null
  }, "id">

  export type LikedSongOrderByWithAggregationInput = {
    id?: SortOrder
    liked?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    _count?: LikedSongCountOrderByAggregateInput
    _max?: LikedSongMaxOrderByAggregateInput
    _min?: LikedSongMinOrderByAggregateInput
  }

  export type LikedSongScalarWhereWithAggregatesInput = {
    AND?: LikedSongScalarWhereWithAggregatesInput | LikedSongScalarWhereWithAggregatesInput[]
    OR?: LikedSongScalarWhereWithAggregatesInput[]
    NOT?: LikedSongScalarWhereWithAggregatesInput | LikedSongScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LikedSong"> | string
    liked?: BoolWithAggregatesFilter<"LikedSong"> | boolean
    userId?: StringNullableWithAggregatesFilter<"LikedSong"> | string | null
    songId?: StringNullableWithAggregatesFilter<"LikedSong"> | string | null
  }

  export type LikedAlbumsWhereInput = {
    AND?: LikedAlbumsWhereInput | LikedAlbumsWhereInput[]
    OR?: LikedAlbumsWhereInput[]
    NOT?: LikedAlbumsWhereInput | LikedAlbumsWhereInput[]
    id?: StringFilter<"LikedAlbums"> | string
    liked?: BoolFilter<"LikedAlbums"> | boolean
    userId?: StringNullableFilter<"LikedAlbums"> | string | null
    albumId?: StringNullableFilter<"LikedAlbums"> | string | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Albums?: XOR<AlbumsNullableRelationFilter, AlbumsWhereInput> | null
  }

  export type LikedAlbumsOrderByWithRelationInput = {
    id?: SortOrder
    liked?: SortOrder
    userId?: SortOrder
    albumId?: SortOrder
    User?: UserOrderByWithRelationInput
    Albums?: AlbumsOrderByWithRelationInput
  }

  export type LikedAlbumsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LikedAlbumsWhereInput | LikedAlbumsWhereInput[]
    OR?: LikedAlbumsWhereInput[]
    NOT?: LikedAlbumsWhereInput | LikedAlbumsWhereInput[]
    liked?: BoolFilter<"LikedAlbums"> | boolean
    userId?: StringNullableFilter<"LikedAlbums"> | string | null
    albumId?: StringNullableFilter<"LikedAlbums"> | string | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Albums?: XOR<AlbumsNullableRelationFilter, AlbumsWhereInput> | null
  }, "id">

  export type LikedAlbumsOrderByWithAggregationInput = {
    id?: SortOrder
    liked?: SortOrder
    userId?: SortOrder
    albumId?: SortOrder
    _count?: LikedAlbumsCountOrderByAggregateInput
    _max?: LikedAlbumsMaxOrderByAggregateInput
    _min?: LikedAlbumsMinOrderByAggregateInput
  }

  export type LikedAlbumsScalarWhereWithAggregatesInput = {
    AND?: LikedAlbumsScalarWhereWithAggregatesInput | LikedAlbumsScalarWhereWithAggregatesInput[]
    OR?: LikedAlbumsScalarWhereWithAggregatesInput[]
    NOT?: LikedAlbumsScalarWhereWithAggregatesInput | LikedAlbumsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LikedAlbums"> | string
    liked?: BoolWithAggregatesFilter<"LikedAlbums"> | boolean
    userId?: StringNullableWithAggregatesFilter<"LikedAlbums"> | string | null
    albumId?: StringNullableWithAggregatesFilter<"LikedAlbums"> | string | null
  }

  export type LikedPlaylistWhereInput = {
    AND?: LikedPlaylistWhereInput | LikedPlaylistWhereInput[]
    OR?: LikedPlaylistWhereInput[]
    NOT?: LikedPlaylistWhereInput | LikedPlaylistWhereInput[]
    id?: StringFilter<"LikedPlaylist"> | string
    liked?: BoolFilter<"LikedPlaylist"> | boolean
    userId?: StringNullableFilter<"LikedPlaylist"> | string | null
    playlistId?: StringNullableFilter<"LikedPlaylist"> | string | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Playlists?: XOR<PlaylistNullableRelationFilter, PlaylistWhereInput> | null
  }

  export type LikedPlaylistOrderByWithRelationInput = {
    id?: SortOrder
    liked?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
    User?: UserOrderByWithRelationInput
    Playlists?: PlaylistOrderByWithRelationInput
  }

  export type LikedPlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LikedPlaylistWhereInput | LikedPlaylistWhereInput[]
    OR?: LikedPlaylistWhereInput[]
    NOT?: LikedPlaylistWhereInput | LikedPlaylistWhereInput[]
    liked?: BoolFilter<"LikedPlaylist"> | boolean
    userId?: StringNullableFilter<"LikedPlaylist"> | string | null
    playlistId?: StringNullableFilter<"LikedPlaylist"> | string | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Playlists?: XOR<PlaylistNullableRelationFilter, PlaylistWhereInput> | null
  }, "id">

  export type LikedPlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    liked?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
    _count?: LikedPlaylistCountOrderByAggregateInput
    _max?: LikedPlaylistMaxOrderByAggregateInput
    _min?: LikedPlaylistMinOrderByAggregateInput
  }

  export type LikedPlaylistScalarWhereWithAggregatesInput = {
    AND?: LikedPlaylistScalarWhereWithAggregatesInput | LikedPlaylistScalarWhereWithAggregatesInput[]
    OR?: LikedPlaylistScalarWhereWithAggregatesInput[]
    NOT?: LikedPlaylistScalarWhereWithAggregatesInput | LikedPlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LikedPlaylist"> | string
    liked?: BoolWithAggregatesFilter<"LikedPlaylist"> | boolean
    userId?: StringNullableWithAggregatesFilter<"LikedPlaylist"> | string | null
    playlistId?: StringNullableWithAggregatesFilter<"LikedPlaylist"> | string | null
  }

  export type GenresWhereInput = {
    AND?: GenresWhereInput | GenresWhereInput[]
    OR?: GenresWhereInput[]
    NOT?: GenresWhereInput | GenresWhereInput[]
    id?: StringFilter<"Genres"> | string
    name?: StringFilter<"Genres"> | string
    songId?: StringNullableListFilter<"Genres">
    artistId?: StringNullableListFilter<"Genres">
    albumId?: StringNullableListFilter<"Genres">
    Song?: SongListRelationFilter
    Artist?: ArtistListRelationFilter
    Albums?: AlbumsListRelationFilter
  }

  export type GenresOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    songId?: SortOrder
    artistId?: SortOrder
    albumId?: SortOrder
    Song?: SongOrderByRelationAggregateInput
    Artist?: ArtistOrderByRelationAggregateInput
    Albums?: AlbumsOrderByRelationAggregateInput
  }

  export type GenresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: GenresWhereInput | GenresWhereInput[]
    OR?: GenresWhereInput[]
    NOT?: GenresWhereInput | GenresWhereInput[]
    songId?: StringNullableListFilter<"Genres">
    artistId?: StringNullableListFilter<"Genres">
    albumId?: StringNullableListFilter<"Genres">
    Song?: SongListRelationFilter
    Artist?: ArtistListRelationFilter
    Albums?: AlbumsListRelationFilter
  }, "id" | "name">

  export type GenresOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    songId?: SortOrder
    artistId?: SortOrder
    albumId?: SortOrder
    _count?: GenresCountOrderByAggregateInput
    _max?: GenresMaxOrderByAggregateInput
    _min?: GenresMinOrderByAggregateInput
  }

  export type GenresScalarWhereWithAggregatesInput = {
    AND?: GenresScalarWhereWithAggregatesInput | GenresScalarWhereWithAggregatesInput[]
    OR?: GenresScalarWhereWithAggregatesInput[]
    NOT?: GenresScalarWhereWithAggregatesInput | GenresScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Genres"> | string
    name?: StringWithAggregatesFilter<"Genres"> | string
    songId?: StringNullableListFilter<"Genres">
    artistId?: StringNullableListFilter<"Genres">
    albumId?: StringNullableListFilter<"Genres">
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: StringFilter<"Playlist"> | string
    name?: StringFilter<"Playlist"> | string
    cover?: StringFilter<"Playlist"> | string
    numSong?: IntNullableFilter<"Playlist"> | number | null
    songId?: StringNullableListFilter<"Playlist">
    userId?: StringNullableFilter<"Playlist"> | string | null
    Song?: SongListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    LikedPlaylist?: LikedPlaylistListRelationFilter
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    numSong?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
    Song?: SongOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
    LikedPlaylist?: LikedPlaylistOrderByRelationAggregateInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    name?: StringFilter<"Playlist"> | string
    cover?: StringFilter<"Playlist"> | string
    numSong?: IntNullableFilter<"Playlist"> | number | null
    songId?: StringNullableListFilter<"Playlist">
    userId?: StringNullableFilter<"Playlist"> | string | null
    Song?: SongListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    LikedPlaylist?: LikedPlaylistListRelationFilter
  }, "id">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    numSong?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _avg?: PlaylistAvgOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
    _sum?: PlaylistSumOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Playlist"> | string
    name?: StringWithAggregatesFilter<"Playlist"> | string
    cover?: StringWithAggregatesFilter<"Playlist"> | string
    numSong?: IntNullableWithAggregatesFilter<"Playlist"> | number | null
    songId?: StringNullableListFilter<"Playlist">
    userId?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
  }

  export type FollowedUserWhereInput = {
    AND?: FollowedUserWhereInput | FollowedUserWhereInput[]
    OR?: FollowedUserWhereInput[]
    NOT?: FollowedUserWhereInput | FollowedUserWhereInput[]
    id?: StringFilter<"FollowedUser"> | string
    userId?: StringNullableListFilter<"FollowedUser">
    followed?: BoolFilter<"FollowedUser"> | boolean
    User?: UserListRelationFilter
  }

  export type FollowedUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    followed?: SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type FollowedUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FollowedUserWhereInput | FollowedUserWhereInput[]
    OR?: FollowedUserWhereInput[]
    NOT?: FollowedUserWhereInput | FollowedUserWhereInput[]
    userId?: StringNullableListFilter<"FollowedUser">
    followed?: BoolFilter<"FollowedUser"> | boolean
    User?: UserListRelationFilter
  }, "id">

  export type FollowedUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    followed?: SortOrder
    _count?: FollowedUserCountOrderByAggregateInput
    _max?: FollowedUserMaxOrderByAggregateInput
    _min?: FollowedUserMinOrderByAggregateInput
  }

  export type FollowedUserScalarWhereWithAggregatesInput = {
    AND?: FollowedUserScalarWhereWithAggregatesInput | FollowedUserScalarWhereWithAggregatesInput[]
    OR?: FollowedUserScalarWhereWithAggregatesInput[]
    NOT?: FollowedUserScalarWhereWithAggregatesInput | FollowedUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FollowedUser"> | string
    userId?: StringNullableListFilter<"FollowedUser">
    followed?: BoolWithAggregatesFilter<"FollowedUser"> | boolean
  }

  export type FollowedByWhereInput = {
    AND?: FollowedByWhereInput | FollowedByWhereInput[]
    OR?: FollowedByWhereInput[]
    NOT?: FollowedByWhereInput | FollowedByWhereInput[]
    id?: StringFilter<"FollowedBy"> | string
    userId?: StringNullableListFilter<"FollowedBy">
    followed?: BoolFilter<"FollowedBy"> | boolean
    User?: UserListRelationFilter
  }

  export type FollowedByOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    followed?: SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type FollowedByWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FollowedByWhereInput | FollowedByWhereInput[]
    OR?: FollowedByWhereInput[]
    NOT?: FollowedByWhereInput | FollowedByWhereInput[]
    userId?: StringNullableListFilter<"FollowedBy">
    followed?: BoolFilter<"FollowedBy"> | boolean
    User?: UserListRelationFilter
  }, "id">

  export type FollowedByOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    followed?: SortOrder
    _count?: FollowedByCountOrderByAggregateInput
    _max?: FollowedByMaxOrderByAggregateInput
    _min?: FollowedByMinOrderByAggregateInput
  }

  export type FollowedByScalarWhereWithAggregatesInput = {
    AND?: FollowedByScalarWhereWithAggregatesInput | FollowedByScalarWhereWithAggregatesInput[]
    OR?: FollowedByScalarWhereWithAggregatesInput[]
    NOT?: FollowedByScalarWhereWithAggregatesInput | FollowedByScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FollowedBy"> | string
    userId?: StringNullableListFilter<"FollowedBy">
    followed?: BoolWithAggregatesFilter<"FollowedBy"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar: string
    Song?: SongCreateNestedManyWithoutUserInput
    LikedSong?: LikedSongCreateNestedManyWithoutUserInput
    LikedAlbums?: LikedAlbumsCreateNestedManyWithoutUserInput
    Playlist?: PlaylistCreateNestedManyWithoutUserInput
    LikedPlaylist?: LikedPlaylistCreateNestedManyWithoutUserInput
    FollowedUser?: FollowedUserCreateNestedManyWithoutUserInput
    FollowedBy?: FollowedByCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar: string
    followedUserId?: UserCreatefollowedUserIdInput | string[]
    followedById?: UserCreatefollowedByIdInput | string[]
    Song?: SongUncheckedCreateNestedManyWithoutUserInput
    LikedSong?: LikedSongUncheckedCreateNestedManyWithoutUserInput
    LikedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutUserInput
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    LikedPlaylist?: LikedPlaylistUncheckedCreateNestedManyWithoutUserInput
    FollowedUser?: FollowedUserUncheckedCreateNestedManyWithoutUserInput
    FollowedBy?: FollowedByUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    Song?: SongUpdateManyWithoutUserNestedInput
    LikedSong?: LikedSongUpdateManyWithoutUserNestedInput
    LikedAlbums?: LikedAlbumsUpdateManyWithoutUserNestedInput
    Playlist?: PlaylistUpdateManyWithoutUserNestedInput
    LikedPlaylist?: LikedPlaylistUpdateManyWithoutUserNestedInput
    FollowedUser?: FollowedUserUpdateManyWithoutUserNestedInput
    FollowedBy?: FollowedByUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    followedUserId?: UserUpdatefollowedUserIdInput | string[]
    followedById?: UserUpdatefollowedByIdInput | string[]
    Song?: SongUncheckedUpdateManyWithoutUserNestedInput
    LikedSong?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
    LikedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutUserNestedInput
    Playlist?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    LikedPlaylist?: LikedPlaylistUncheckedUpdateManyWithoutUserNestedInput
    FollowedUser?: FollowedUserUncheckedUpdateManyWithoutUserNestedInput
    FollowedBy?: FollowedByUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar: string
    followedUserId?: UserCreatefollowedUserIdInput | string[]
    followedById?: UserCreatefollowedByIdInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    followedUserId?: UserUpdatefollowedUserIdInput | string[]
    followedById?: UserUpdatefollowedByIdInput | string[]
  }

  export type SongCreateInput = {
    id?: string
    url: string
    cover: string
    name: string
    duration?: string | null
    listened?: number | null
    Artist?: ArtistCreateNestedManyWithoutSongInput
    Album?: AlbumsCreateNestedManyWithoutSongInput
    Genres?: GenresCreateNestedManyWithoutSongInput
    User?: UserCreateNestedOneWithoutSongInput
    LikedSong?: LikedSongCreateNestedManyWithoutSongInput
    Playlist?: PlaylistCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateInput = {
    id?: string
    url: string
    cover: string
    name: string
    duration?: string | null
    listened?: number | null
    artistId?: SongCreateartistIdInput | string[]
    albumId?: SongCreatealbumIdInput | string[]
    genreId?: SongCreategenreIdInput | string[]
    userId?: string | null
    playlistId?: SongCreateplaylistIdInput | string[]
    Artist?: ArtistUncheckedCreateNestedManyWithoutSongInput
    Album?: AlbumsUncheckedCreateNestedManyWithoutSongInput
    Genres?: GenresUncheckedCreateNestedManyWithoutSongInput
    LikedSong?: LikedSongUncheckedCreateNestedManyWithoutSongInput
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    Artist?: ArtistUpdateManyWithoutSongNestedInput
    Album?: AlbumsUpdateManyWithoutSongNestedInput
    Genres?: GenresUpdateManyWithoutSongNestedInput
    User?: UserUpdateOneWithoutSongNestedInput
    LikedSong?: LikedSongUpdateManyWithoutSongNestedInput
    Playlist?: PlaylistUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: SongUpdateartistIdInput | string[]
    albumId?: SongUpdatealbumIdInput | string[]
    genreId?: SongUpdategenreIdInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: SongUpdateplaylistIdInput | string[]
    Artist?: ArtistUncheckedUpdateManyWithoutSongNestedInput
    Album?: AlbumsUncheckedUpdateManyWithoutSongNestedInput
    Genres?: GenresUncheckedUpdateManyWithoutSongNestedInput
    LikedSong?: LikedSongUncheckedUpdateManyWithoutSongNestedInput
    Playlist?: PlaylistUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongCreateManyInput = {
    id?: string
    url: string
    cover: string
    name: string
    duration?: string | null
    listened?: number | null
    artistId?: SongCreateartistIdInput | string[]
    albumId?: SongCreatealbumIdInput | string[]
    genreId?: SongCreategenreIdInput | string[]
    userId?: string | null
    playlistId?: SongCreateplaylistIdInput | string[]
  }

  export type SongUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SongUncheckedUpdateManyInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: SongUpdateartistIdInput | string[]
    albumId?: SongUpdatealbumIdInput | string[]
    genreId?: SongUpdategenreIdInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: SongUpdateplaylistIdInput | string[]
  }

  export type ArtistCreateInput = {
    id?: string
    name: string
    img: string
    Song?: SongCreateNestedManyWithoutArtistInput
    Albums?: AlbumsCreateNestedManyWithoutArtistInput
    Genres?: GenresCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateInput = {
    id?: string
    name: string
    img: string
    songId?: ArtistCreatesongIdInput | string[]
    albumsId?: ArtistCreatealbumsIdInput | string[]
    genreId?: ArtistCreategenreIdInput | string[]
    Song?: SongUncheckedCreateNestedManyWithoutArtistInput
    Albums?: AlbumsUncheckedCreateNestedManyWithoutArtistInput
    Genres?: GenresUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    Song?: SongUpdateManyWithoutArtistNestedInput
    Albums?: AlbumsUpdateManyWithoutArtistNestedInput
    Genres?: GenresUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    songId?: ArtistUpdatesongIdInput | string[]
    albumsId?: ArtistUpdatealbumsIdInput | string[]
    genreId?: ArtistUpdategenreIdInput | string[]
    Song?: SongUncheckedUpdateManyWithoutArtistNestedInput
    Albums?: AlbumsUncheckedUpdateManyWithoutArtistNestedInput
    Genres?: GenresUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateManyInput = {
    id?: string
    name: string
    img: string
    songId?: ArtistCreatesongIdInput | string[]
    albumsId?: ArtistCreatealbumsIdInput | string[]
    genreId?: ArtistCreategenreIdInput | string[]
  }

  export type ArtistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    songId?: ArtistUpdatesongIdInput | string[]
    albumsId?: ArtistUpdatealbumsIdInput | string[]
    genreId?: ArtistUpdategenreIdInput | string[]
  }

  export type AlbumsCreateInput = {
    id?: string
    name: string
    cover: string
    LikedAlbums?: LikedAlbumsCreateNestedManyWithoutAlbumsInput
    Song?: SongCreateNestedManyWithoutAlbumInput
    Artist?: ArtistCreateNestedManyWithoutAlbumsInput
    Genres?: GenresCreateNestedManyWithoutAlbumsInput
  }

  export type AlbumsUncheckedCreateInput = {
    id?: string
    name: string
    cover: string
    songId?: AlbumsCreatesongIdInput | string[]
    artistId?: AlbumsCreateartistIdInput | string[]
    genreId?: AlbumsCreategenreIdInput | string[]
    LikedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutAlbumsInput
    Song?: SongUncheckedCreateNestedManyWithoutAlbumInput
    Artist?: ArtistUncheckedCreateNestedManyWithoutAlbumsInput
    Genres?: GenresUncheckedCreateNestedManyWithoutAlbumsInput
  }

  export type AlbumsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    LikedAlbums?: LikedAlbumsUpdateManyWithoutAlbumsNestedInput
    Song?: SongUpdateManyWithoutAlbumNestedInput
    Artist?: ArtistUpdateManyWithoutAlbumsNestedInput
    Genres?: GenresUpdateManyWithoutAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    songId?: AlbumsUpdatesongIdInput | string[]
    artistId?: AlbumsUpdateartistIdInput | string[]
    genreId?: AlbumsUpdategenreIdInput | string[]
    LikedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutAlbumsNestedInput
    Song?: SongUncheckedUpdateManyWithoutAlbumNestedInput
    Artist?: ArtistUncheckedUpdateManyWithoutAlbumsNestedInput
    Genres?: GenresUncheckedUpdateManyWithoutAlbumsNestedInput
  }

  export type AlbumsCreateManyInput = {
    id?: string
    name: string
    cover: string
    songId?: AlbumsCreatesongIdInput | string[]
    artistId?: AlbumsCreateartistIdInput | string[]
    genreId?: AlbumsCreategenreIdInput | string[]
  }

  export type AlbumsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    songId?: AlbumsUpdatesongIdInput | string[]
    artistId?: AlbumsUpdateartistIdInput | string[]
    genreId?: AlbumsUpdategenreIdInput | string[]
  }

  export type LikedSongCreateInput = {
    id?: string
    liked: boolean
    User?: UserCreateNestedOneWithoutLikedSongInput
    Song?: SongCreateNestedOneWithoutLikedSongInput
  }

  export type LikedSongUncheckedCreateInput = {
    id?: string
    liked: boolean
    userId?: string | null
    songId?: string | null
  }

  export type LikedSongUpdateInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutLikedSongNestedInput
    Song?: SongUpdateOneWithoutLikedSongNestedInput
  }

  export type LikedSongUncheckedUpdateInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    songId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikedSongCreateManyInput = {
    id?: string
    liked: boolean
    userId?: string | null
    songId?: string | null
  }

  export type LikedSongUpdateManyMutationInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LikedSongUncheckedUpdateManyInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    songId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikedAlbumsCreateInput = {
    id?: string
    liked: boolean
    User?: UserCreateNestedOneWithoutLikedAlbumsInput
    Albums?: AlbumsCreateNestedOneWithoutLikedAlbumsInput
  }

  export type LikedAlbumsUncheckedCreateInput = {
    id?: string
    liked: boolean
    userId?: string | null
    albumId?: string | null
  }

  export type LikedAlbumsUpdateInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutLikedAlbumsNestedInput
    Albums?: AlbumsUpdateOneWithoutLikedAlbumsNestedInput
  }

  export type LikedAlbumsUncheckedUpdateInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikedAlbumsCreateManyInput = {
    id?: string
    liked: boolean
    userId?: string | null
    albumId?: string | null
  }

  export type LikedAlbumsUpdateManyMutationInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LikedAlbumsUncheckedUpdateManyInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikedPlaylistCreateInput = {
    id?: string
    liked: boolean
    User?: UserCreateNestedOneWithoutLikedPlaylistInput
    Playlists?: PlaylistCreateNestedOneWithoutLikedPlaylistInput
  }

  export type LikedPlaylistUncheckedCreateInput = {
    id?: string
    liked: boolean
    userId?: string | null
    playlistId?: string | null
  }

  export type LikedPlaylistUpdateInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutLikedPlaylistNestedInput
    Playlists?: PlaylistUpdateOneWithoutLikedPlaylistNestedInput
  }

  export type LikedPlaylistUncheckedUpdateInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikedPlaylistCreateManyInput = {
    id?: string
    liked: boolean
    userId?: string | null
    playlistId?: string | null
  }

  export type LikedPlaylistUpdateManyMutationInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LikedPlaylistUncheckedUpdateManyInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenresCreateInput = {
    id?: string
    name: string
    Song?: SongCreateNestedManyWithoutGenresInput
    Artist?: ArtistCreateNestedManyWithoutGenresInput
    Albums?: AlbumsCreateNestedManyWithoutGenresInput
  }

  export type GenresUncheckedCreateInput = {
    id?: string
    name: string
    songId?: GenresCreatesongIdInput | string[]
    artistId?: GenresCreateartistIdInput | string[]
    albumId?: GenresCreatealbumIdInput | string[]
    Song?: SongUncheckedCreateNestedManyWithoutGenresInput
    Artist?: ArtistUncheckedCreateNestedManyWithoutGenresInput
    Albums?: AlbumsUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenresUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Song?: SongUpdateManyWithoutGenresNestedInput
    Artist?: ArtistUpdateManyWithoutGenresNestedInput
    Albums?: AlbumsUpdateManyWithoutGenresNestedInput
  }

  export type GenresUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    songId?: GenresUpdatesongIdInput | string[]
    artistId?: GenresUpdateartistIdInput | string[]
    albumId?: GenresUpdatealbumIdInput | string[]
    Song?: SongUncheckedUpdateManyWithoutGenresNestedInput
    Artist?: ArtistUncheckedUpdateManyWithoutGenresNestedInput
    Albums?: AlbumsUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenresCreateManyInput = {
    id?: string
    name: string
    songId?: GenresCreatesongIdInput | string[]
    artistId?: GenresCreateartistIdInput | string[]
    albumId?: GenresCreatealbumIdInput | string[]
  }

  export type GenresUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenresUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    songId?: GenresUpdatesongIdInput | string[]
    artistId?: GenresUpdateartistIdInput | string[]
    albumId?: GenresUpdatealbumIdInput | string[]
  }

  export type PlaylistCreateInput = {
    id?: string
    name: string
    cover: string
    numSong?: number | null
    Song?: SongCreateNestedManyWithoutPlaylistInput
    User?: UserCreateNestedOneWithoutPlaylistInput
    LikedPlaylist?: LikedPlaylistCreateNestedManyWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: string
    name: string
    cover: string
    numSong?: number | null
    songId?: PlaylistCreatesongIdInput | string[]
    userId?: string | null
    Song?: SongUncheckedCreateNestedManyWithoutPlaylistInput
    LikedPlaylist?: LikedPlaylistUncheckedCreateNestedManyWithoutPlaylistsInput
  }

  export type PlaylistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    numSong?: NullableIntFieldUpdateOperationsInput | number | null
    Song?: SongUpdateManyWithoutPlaylistNestedInput
    User?: UserUpdateOneWithoutPlaylistNestedInput
    LikedPlaylist?: LikedPlaylistUpdateManyWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    numSong?: NullableIntFieldUpdateOperationsInput | number | null
    songId?: PlaylistUpdatesongIdInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    Song?: SongUncheckedUpdateManyWithoutPlaylistNestedInput
    LikedPlaylist?: LikedPlaylistUncheckedUpdateManyWithoutPlaylistsNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: string
    name: string
    cover: string
    numSong?: number | null
    songId?: PlaylistCreatesongIdInput | string[]
    userId?: string | null
  }

  export type PlaylistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    numSong?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlaylistUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    numSong?: NullableIntFieldUpdateOperationsInput | number | null
    songId?: PlaylistUpdatesongIdInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FollowedUserCreateInput = {
    id?: string
    followed: boolean
    User?: UserCreateNestedManyWithoutFollowedUserInput
  }

  export type FollowedUserUncheckedCreateInput = {
    id?: string
    userId?: FollowedUserCreateuserIdInput | string[]
    followed: boolean
    User?: UserUncheckedCreateNestedManyWithoutFollowedUserInput
  }

  export type FollowedUserUpdateInput = {
    followed?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateManyWithoutFollowedUserNestedInput
  }

  export type FollowedUserUncheckedUpdateInput = {
    userId?: FollowedUserUpdateuserIdInput | string[]
    followed?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUncheckedUpdateManyWithoutFollowedUserNestedInput
  }

  export type FollowedUserCreateManyInput = {
    id?: string
    userId?: FollowedUserCreateuserIdInput | string[]
    followed: boolean
  }

  export type FollowedUserUpdateManyMutationInput = {
    followed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FollowedUserUncheckedUpdateManyInput = {
    userId?: FollowedUserUpdateuserIdInput | string[]
    followed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FollowedByCreateInput = {
    id?: string
    followed: boolean
    User?: UserCreateNestedManyWithoutFollowedByInput
  }

  export type FollowedByUncheckedCreateInput = {
    id?: string
    userId?: FollowedByCreateuserIdInput | string[]
    followed: boolean
    User?: UserUncheckedCreateNestedManyWithoutFollowedByInput
  }

  export type FollowedByUpdateInput = {
    followed?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateManyWithoutFollowedByNestedInput
  }

  export type FollowedByUncheckedUpdateInput = {
    userId?: FollowedByUpdateuserIdInput | string[]
    followed?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUncheckedUpdateManyWithoutFollowedByNestedInput
  }

  export type FollowedByCreateManyInput = {
    id?: string
    userId?: FollowedByCreateuserIdInput | string[]
    followed: boolean
  }

  export type FollowedByUpdateManyMutationInput = {
    followed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FollowedByUncheckedUpdateManyInput = {
    userId?: FollowedByUpdateuserIdInput | string[]
    followed?: BoolFieldUpdateOperationsInput | boolean
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SongListRelationFilter = {
    every?: SongWhereInput
    some?: SongWhereInput
    none?: SongWhereInput
  }

  export type LikedSongListRelationFilter = {
    every?: LikedSongWhereInput
    some?: LikedSongWhereInput
    none?: LikedSongWhereInput
  }

  export type LikedAlbumsListRelationFilter = {
    every?: LikedAlbumsWhereInput
    some?: LikedAlbumsWhereInput
    none?: LikedAlbumsWhereInput
  }

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type LikedPlaylistListRelationFilter = {
    every?: LikedPlaylistWhereInput
    some?: LikedPlaylistWhereInput
    none?: LikedPlaylistWhereInput
  }

  export type FollowedUserListRelationFilter = {
    every?: FollowedUserWhereInput
    some?: FollowedUserWhereInput
    none?: FollowedUserWhereInput
  }

  export type FollowedByListRelationFilter = {
    every?: FollowedByWhereInput
    some?: FollowedByWhereInput
    none?: FollowedByWhereInput
  }

  export type SongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikedSongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikedAlbumsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikedPlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowedUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowedByOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    followedUserId?: SortOrder
    followedById?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type ArtistListRelationFilter = {
    every?: ArtistWhereInput
    some?: ArtistWhereInput
    none?: ArtistWhereInput
  }

  export type AlbumsListRelationFilter = {
    every?: AlbumsWhereInput
    some?: AlbumsWhereInput
    none?: AlbumsWhereInput
  }

  export type GenresListRelationFilter = {
    every?: GenresWhereInput
    some?: GenresWhereInput
    none?: GenresWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ArtistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    cover?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    listened?: SortOrder
    artistId?: SortOrder
    albumId?: SortOrder
    genreId?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
  }

  export type SongAvgOrderByAggregateInput = {
    listened?: SortOrder
  }

  export type SongMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    cover?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    listened?: SortOrder
    userId?: SortOrder
  }

  export type SongMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    cover?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    listened?: SortOrder
    userId?: SortOrder
  }

  export type SongSumOrderByAggregateInput = {
    listened?: SortOrder
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
    songId?: SortOrder
    albumsId?: SortOrder
    genreId?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    img?: SortOrder
  }

  export type AlbumsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    songId?: SortOrder
    artistId?: SortOrder
    genreId?: SortOrder
  }

  export type AlbumsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
  }

  export type AlbumsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SongNullableRelationFilter = {
    is?: SongWhereInput | null
    isNot?: SongWhereInput | null
  }

  export type LikedSongCountOrderByAggregateInput = {
    id?: SortOrder
    liked?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
  }

  export type LikedSongMaxOrderByAggregateInput = {
    id?: SortOrder
    liked?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
  }

  export type LikedSongMinOrderByAggregateInput = {
    id?: SortOrder
    liked?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AlbumsNullableRelationFilter = {
    is?: AlbumsWhereInput | null
    isNot?: AlbumsWhereInput | null
  }

  export type LikedAlbumsCountOrderByAggregateInput = {
    id?: SortOrder
    liked?: SortOrder
    userId?: SortOrder
    albumId?: SortOrder
  }

  export type LikedAlbumsMaxOrderByAggregateInput = {
    id?: SortOrder
    liked?: SortOrder
    userId?: SortOrder
    albumId?: SortOrder
  }

  export type LikedAlbumsMinOrderByAggregateInput = {
    id?: SortOrder
    liked?: SortOrder
    userId?: SortOrder
    albumId?: SortOrder
  }

  export type PlaylistNullableRelationFilter = {
    is?: PlaylistWhereInput | null
    isNot?: PlaylistWhereInput | null
  }

  export type LikedPlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    liked?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
  }

  export type LikedPlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    liked?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
  }

  export type LikedPlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    liked?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
  }

  export type GenresCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    songId?: SortOrder
    artistId?: SortOrder
    albumId?: SortOrder
  }

  export type GenresMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenresMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    numSong?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
  }

  export type PlaylistAvgOrderByAggregateInput = {
    numSong?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    numSong?: SortOrder
    userId?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cover?: SortOrder
    numSong?: SortOrder
    userId?: SortOrder
  }

  export type PlaylistSumOrderByAggregateInput = {
    numSong?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowedUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    followed?: SortOrder
  }

  export type FollowedUserMaxOrderByAggregateInput = {
    id?: SortOrder
    followed?: SortOrder
  }

  export type FollowedUserMinOrderByAggregateInput = {
    id?: SortOrder
    followed?: SortOrder
  }

  export type FollowedByCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    followed?: SortOrder
  }

  export type FollowedByMaxOrderByAggregateInput = {
    id?: SortOrder
    followed?: SortOrder
  }

  export type FollowedByMinOrderByAggregateInput = {
    id?: SortOrder
    followed?: SortOrder
  }

  export type SongCreateNestedManyWithoutUserInput = {
    create?: XOR<SongCreateWithoutUserInput, SongUncheckedCreateWithoutUserInput> | SongCreateWithoutUserInput[] | SongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUserInput | SongCreateOrConnectWithoutUserInput[]
    createMany?: SongCreateManyUserInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type LikedSongCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput> | LikedSongCreateWithoutUserInput[] | LikedSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutUserInput | LikedSongCreateOrConnectWithoutUserInput[]
    createMany?: LikedSongCreateManyUserInputEnvelope
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
  }

  export type LikedAlbumsCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedAlbumsCreateWithoutUserInput, LikedAlbumsUncheckedCreateWithoutUserInput> | LikedAlbumsCreateWithoutUserInput[] | LikedAlbumsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedAlbumsCreateOrConnectWithoutUserInput | LikedAlbumsCreateOrConnectWithoutUserInput[]
    createMany?: LikedAlbumsCreateManyUserInputEnvelope
    connect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
  }

  export type PlaylistCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type LikedPlaylistCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedPlaylistCreateWithoutUserInput, LikedPlaylistUncheckedCreateWithoutUserInput> | LikedPlaylistCreateWithoutUserInput[] | LikedPlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedPlaylistCreateOrConnectWithoutUserInput | LikedPlaylistCreateOrConnectWithoutUserInput[]
    createMany?: LikedPlaylistCreateManyUserInputEnvelope
    connect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
  }

  export type FollowedUserCreateNestedManyWithoutUserInput = {
    create?: XOR<FollowedUserCreateWithoutUserInput, FollowedUserUncheckedCreateWithoutUserInput> | FollowedUserCreateWithoutUserInput[] | FollowedUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowedUserCreateOrConnectWithoutUserInput | FollowedUserCreateOrConnectWithoutUserInput[]
    connect?: FollowedUserWhereUniqueInput | FollowedUserWhereUniqueInput[]
  }

  export type FollowedByCreateNestedManyWithoutUserInput = {
    create?: XOR<FollowedByCreateWithoutUserInput, FollowedByUncheckedCreateWithoutUserInput> | FollowedByCreateWithoutUserInput[] | FollowedByUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowedByCreateOrConnectWithoutUserInput | FollowedByCreateOrConnectWithoutUserInput[]
    connect?: FollowedByWhereUniqueInput | FollowedByWhereUniqueInput[]
  }

  export type UserCreatefollowedUserIdInput = {
    set: string[]
  }

  export type UserCreatefollowedByIdInput = {
    set: string[]
  }

  export type SongUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SongCreateWithoutUserInput, SongUncheckedCreateWithoutUserInput> | SongCreateWithoutUserInput[] | SongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUserInput | SongCreateOrConnectWithoutUserInput[]
    createMany?: SongCreateManyUserInputEnvelope
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type LikedSongUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput> | LikedSongCreateWithoutUserInput[] | LikedSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutUserInput | LikedSongCreateOrConnectWithoutUserInput[]
    createMany?: LikedSongCreateManyUserInputEnvelope
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
  }

  export type LikedAlbumsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedAlbumsCreateWithoutUserInput, LikedAlbumsUncheckedCreateWithoutUserInput> | LikedAlbumsCreateWithoutUserInput[] | LikedAlbumsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedAlbumsCreateOrConnectWithoutUserInput | LikedAlbumsCreateOrConnectWithoutUserInput[]
    createMany?: LikedAlbumsCreateManyUserInputEnvelope
    connect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type LikedPlaylistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikedPlaylistCreateWithoutUserInput, LikedPlaylistUncheckedCreateWithoutUserInput> | LikedPlaylistCreateWithoutUserInput[] | LikedPlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedPlaylistCreateOrConnectWithoutUserInput | LikedPlaylistCreateOrConnectWithoutUserInput[]
    createMany?: LikedPlaylistCreateManyUserInputEnvelope
    connect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
  }

  export type FollowedUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FollowedUserCreateWithoutUserInput, FollowedUserUncheckedCreateWithoutUserInput> | FollowedUserCreateWithoutUserInput[] | FollowedUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowedUserCreateOrConnectWithoutUserInput | FollowedUserCreateOrConnectWithoutUserInput[]
    connect?: FollowedUserWhereUniqueInput | FollowedUserWhereUniqueInput[]
  }

  export type FollowedByUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FollowedByCreateWithoutUserInput, FollowedByUncheckedCreateWithoutUserInput> | FollowedByCreateWithoutUserInput[] | FollowedByUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowedByCreateOrConnectWithoutUserInput | FollowedByCreateOrConnectWithoutUserInput[]
    connect?: FollowedByWhereUniqueInput | FollowedByWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SongUpdateManyWithoutUserNestedInput = {
    create?: XOR<SongCreateWithoutUserInput, SongUncheckedCreateWithoutUserInput> | SongCreateWithoutUserInput[] | SongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUserInput | SongCreateOrConnectWithoutUserInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutUserInput | SongUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SongCreateManyUserInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutUserInput | SongUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SongUpdateManyWithWhereWithoutUserInput | SongUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type LikedSongUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput> | LikedSongCreateWithoutUserInput[] | LikedSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutUserInput | LikedSongCreateOrConnectWithoutUserInput[]
    upsert?: LikedSongUpsertWithWhereUniqueWithoutUserInput | LikedSongUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedSongCreateManyUserInputEnvelope
    set?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    disconnect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    delete?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    update?: LikedSongUpdateWithWhereUniqueWithoutUserInput | LikedSongUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedSongUpdateManyWithWhereWithoutUserInput | LikedSongUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
  }

  export type LikedAlbumsUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedAlbumsCreateWithoutUserInput, LikedAlbumsUncheckedCreateWithoutUserInput> | LikedAlbumsCreateWithoutUserInput[] | LikedAlbumsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedAlbumsCreateOrConnectWithoutUserInput | LikedAlbumsCreateOrConnectWithoutUserInput[]
    upsert?: LikedAlbumsUpsertWithWhereUniqueWithoutUserInput | LikedAlbumsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedAlbumsCreateManyUserInputEnvelope
    set?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    disconnect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    delete?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    connect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    update?: LikedAlbumsUpdateWithWhereUniqueWithoutUserInput | LikedAlbumsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedAlbumsUpdateManyWithWhereWithoutUserInput | LikedAlbumsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedAlbumsScalarWhereInput | LikedAlbumsScalarWhereInput[]
  }

  export type PlaylistUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type LikedPlaylistUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedPlaylistCreateWithoutUserInput, LikedPlaylistUncheckedCreateWithoutUserInput> | LikedPlaylistCreateWithoutUserInput[] | LikedPlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedPlaylistCreateOrConnectWithoutUserInput | LikedPlaylistCreateOrConnectWithoutUserInput[]
    upsert?: LikedPlaylistUpsertWithWhereUniqueWithoutUserInput | LikedPlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedPlaylistCreateManyUserInputEnvelope
    set?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    disconnect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    delete?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    connect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    update?: LikedPlaylistUpdateWithWhereUniqueWithoutUserInput | LikedPlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedPlaylistUpdateManyWithWhereWithoutUserInput | LikedPlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedPlaylistScalarWhereInput | LikedPlaylistScalarWhereInput[]
  }

  export type FollowedUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<FollowedUserCreateWithoutUserInput, FollowedUserUncheckedCreateWithoutUserInput> | FollowedUserCreateWithoutUserInput[] | FollowedUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowedUserCreateOrConnectWithoutUserInput | FollowedUserCreateOrConnectWithoutUserInput[]
    upsert?: FollowedUserUpsertWithWhereUniqueWithoutUserInput | FollowedUserUpsertWithWhereUniqueWithoutUserInput[]
    set?: FollowedUserWhereUniqueInput | FollowedUserWhereUniqueInput[]
    disconnect?: FollowedUserWhereUniqueInput | FollowedUserWhereUniqueInput[]
    delete?: FollowedUserWhereUniqueInput | FollowedUserWhereUniqueInput[]
    connect?: FollowedUserWhereUniqueInput | FollowedUserWhereUniqueInput[]
    update?: FollowedUserUpdateWithWhereUniqueWithoutUserInput | FollowedUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FollowedUserUpdateManyWithWhereWithoutUserInput | FollowedUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FollowedUserScalarWhereInput | FollowedUserScalarWhereInput[]
  }

  export type FollowedByUpdateManyWithoutUserNestedInput = {
    create?: XOR<FollowedByCreateWithoutUserInput, FollowedByUncheckedCreateWithoutUserInput> | FollowedByCreateWithoutUserInput[] | FollowedByUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowedByCreateOrConnectWithoutUserInput | FollowedByCreateOrConnectWithoutUserInput[]
    upsert?: FollowedByUpsertWithWhereUniqueWithoutUserInput | FollowedByUpsertWithWhereUniqueWithoutUserInput[]
    set?: FollowedByWhereUniqueInput | FollowedByWhereUniqueInput[]
    disconnect?: FollowedByWhereUniqueInput | FollowedByWhereUniqueInput[]
    delete?: FollowedByWhereUniqueInput | FollowedByWhereUniqueInput[]
    connect?: FollowedByWhereUniqueInput | FollowedByWhereUniqueInput[]
    update?: FollowedByUpdateWithWhereUniqueWithoutUserInput | FollowedByUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FollowedByUpdateManyWithWhereWithoutUserInput | FollowedByUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FollowedByScalarWhereInput | FollowedByScalarWhereInput[]
  }

  export type UserUpdatefollowedUserIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdatefollowedByIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SongUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SongCreateWithoutUserInput, SongUncheckedCreateWithoutUserInput> | SongCreateWithoutUserInput[] | SongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SongCreateOrConnectWithoutUserInput | SongCreateOrConnectWithoutUserInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutUserInput | SongUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SongCreateManyUserInputEnvelope
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutUserInput | SongUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SongUpdateManyWithWhereWithoutUserInput | SongUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type LikedSongUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput> | LikedSongCreateWithoutUserInput[] | LikedSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutUserInput | LikedSongCreateOrConnectWithoutUserInput[]
    upsert?: LikedSongUpsertWithWhereUniqueWithoutUserInput | LikedSongUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedSongCreateManyUserInputEnvelope
    set?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    disconnect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    delete?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    update?: LikedSongUpdateWithWhereUniqueWithoutUserInput | LikedSongUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedSongUpdateManyWithWhereWithoutUserInput | LikedSongUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
  }

  export type LikedAlbumsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedAlbumsCreateWithoutUserInput, LikedAlbumsUncheckedCreateWithoutUserInput> | LikedAlbumsCreateWithoutUserInput[] | LikedAlbumsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedAlbumsCreateOrConnectWithoutUserInput | LikedAlbumsCreateOrConnectWithoutUserInput[]
    upsert?: LikedAlbumsUpsertWithWhereUniqueWithoutUserInput | LikedAlbumsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedAlbumsCreateManyUserInputEnvelope
    set?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    disconnect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    delete?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    connect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    update?: LikedAlbumsUpdateWithWhereUniqueWithoutUserInput | LikedAlbumsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedAlbumsUpdateManyWithWhereWithoutUserInput | LikedAlbumsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedAlbumsScalarWhereInput | LikedAlbumsScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type LikedPlaylistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikedPlaylistCreateWithoutUserInput, LikedPlaylistUncheckedCreateWithoutUserInput> | LikedPlaylistCreateWithoutUserInput[] | LikedPlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikedPlaylistCreateOrConnectWithoutUserInput | LikedPlaylistCreateOrConnectWithoutUserInput[]
    upsert?: LikedPlaylistUpsertWithWhereUniqueWithoutUserInput | LikedPlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikedPlaylistCreateManyUserInputEnvelope
    set?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    disconnect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    delete?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    connect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    update?: LikedPlaylistUpdateWithWhereUniqueWithoutUserInput | LikedPlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikedPlaylistUpdateManyWithWhereWithoutUserInput | LikedPlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikedPlaylistScalarWhereInput | LikedPlaylistScalarWhereInput[]
  }

  export type FollowedUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FollowedUserCreateWithoutUserInput, FollowedUserUncheckedCreateWithoutUserInput> | FollowedUserCreateWithoutUserInput[] | FollowedUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowedUserCreateOrConnectWithoutUserInput | FollowedUserCreateOrConnectWithoutUserInput[]
    upsert?: FollowedUserUpsertWithWhereUniqueWithoutUserInput | FollowedUserUpsertWithWhereUniqueWithoutUserInput[]
    set?: FollowedUserWhereUniqueInput | FollowedUserWhereUniqueInput[]
    disconnect?: FollowedUserWhereUniqueInput | FollowedUserWhereUniqueInput[]
    delete?: FollowedUserWhereUniqueInput | FollowedUserWhereUniqueInput[]
    connect?: FollowedUserWhereUniqueInput | FollowedUserWhereUniqueInput[]
    update?: FollowedUserUpdateWithWhereUniqueWithoutUserInput | FollowedUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FollowedUserUpdateManyWithWhereWithoutUserInput | FollowedUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FollowedUserScalarWhereInput | FollowedUserScalarWhereInput[]
  }

  export type FollowedByUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FollowedByCreateWithoutUserInput, FollowedByUncheckedCreateWithoutUserInput> | FollowedByCreateWithoutUserInput[] | FollowedByUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowedByCreateOrConnectWithoutUserInput | FollowedByCreateOrConnectWithoutUserInput[]
    upsert?: FollowedByUpsertWithWhereUniqueWithoutUserInput | FollowedByUpsertWithWhereUniqueWithoutUserInput[]
    set?: FollowedByWhereUniqueInput | FollowedByWhereUniqueInput[]
    disconnect?: FollowedByWhereUniqueInput | FollowedByWhereUniqueInput[]
    delete?: FollowedByWhereUniqueInput | FollowedByWhereUniqueInput[]
    connect?: FollowedByWhereUniqueInput | FollowedByWhereUniqueInput[]
    update?: FollowedByUpdateWithWhereUniqueWithoutUserInput | FollowedByUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FollowedByUpdateManyWithWhereWithoutUserInput | FollowedByUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FollowedByScalarWhereInput | FollowedByScalarWhereInput[]
  }

  export type ArtistCreateNestedManyWithoutSongInput = {
    create?: XOR<ArtistCreateWithoutSongInput, ArtistUncheckedCreateWithoutSongInput> | ArtistCreateWithoutSongInput[] | ArtistUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutSongInput | ArtistCreateOrConnectWithoutSongInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type AlbumsCreateNestedManyWithoutSongInput = {
    create?: XOR<AlbumsCreateWithoutSongInput, AlbumsUncheckedCreateWithoutSongInput> | AlbumsCreateWithoutSongInput[] | AlbumsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutSongInput | AlbumsCreateOrConnectWithoutSongInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
  }

  export type GenresCreateNestedManyWithoutSongInput = {
    create?: XOR<GenresCreateWithoutSongInput, GenresUncheckedCreateWithoutSongInput> | GenresCreateWithoutSongInput[] | GenresUncheckedCreateWithoutSongInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutSongInput | GenresCreateOrConnectWithoutSongInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSongInput = {
    create?: XOR<UserCreateWithoutSongInput, UserUncheckedCreateWithoutSongInput>
    connectOrCreate?: UserCreateOrConnectWithoutSongInput
    connect?: UserWhereUniqueInput
  }

  export type LikedSongCreateNestedManyWithoutSongInput = {
    create?: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput> | LikedSongCreateWithoutSongInput[] | LikedSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutSongInput | LikedSongCreateOrConnectWithoutSongInput[]
    createMany?: LikedSongCreateManySongInputEnvelope
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
  }

  export type PlaylistCreateNestedManyWithoutSongInput = {
    create?: XOR<PlaylistCreateWithoutSongInput, PlaylistUncheckedCreateWithoutSongInput> | PlaylistCreateWithoutSongInput[] | PlaylistUncheckedCreateWithoutSongInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongInput | PlaylistCreateOrConnectWithoutSongInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type SongCreateartistIdInput = {
    set: string[]
  }

  export type SongCreatealbumIdInput = {
    set: string[]
  }

  export type SongCreategenreIdInput = {
    set: string[]
  }

  export type SongCreateplaylistIdInput = {
    set: string[]
  }

  export type ArtistUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<ArtistCreateWithoutSongInput, ArtistUncheckedCreateWithoutSongInput> | ArtistCreateWithoutSongInput[] | ArtistUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutSongInput | ArtistCreateOrConnectWithoutSongInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type AlbumsUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<AlbumsCreateWithoutSongInput, AlbumsUncheckedCreateWithoutSongInput> | AlbumsCreateWithoutSongInput[] | AlbumsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutSongInput | AlbumsCreateOrConnectWithoutSongInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
  }

  export type GenresUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<GenresCreateWithoutSongInput, GenresUncheckedCreateWithoutSongInput> | GenresCreateWithoutSongInput[] | GenresUncheckedCreateWithoutSongInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutSongInput | GenresCreateOrConnectWithoutSongInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
  }

  export type LikedSongUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput> | LikedSongCreateWithoutSongInput[] | LikedSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutSongInput | LikedSongCreateOrConnectWithoutSongInput[]
    createMany?: LikedSongCreateManySongInputEnvelope
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<PlaylistCreateWithoutSongInput, PlaylistUncheckedCreateWithoutSongInput> | PlaylistCreateWithoutSongInput[] | PlaylistUncheckedCreateWithoutSongInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongInput | PlaylistCreateOrConnectWithoutSongInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ArtistUpdateManyWithoutSongNestedInput = {
    create?: XOR<ArtistCreateWithoutSongInput, ArtistUncheckedCreateWithoutSongInput> | ArtistCreateWithoutSongInput[] | ArtistUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutSongInput | ArtistCreateOrConnectWithoutSongInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutSongInput | ArtistUpsertWithWhereUniqueWithoutSongInput[]
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutSongInput | ArtistUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutSongInput | ArtistUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type AlbumsUpdateManyWithoutSongNestedInput = {
    create?: XOR<AlbumsCreateWithoutSongInput, AlbumsUncheckedCreateWithoutSongInput> | AlbumsCreateWithoutSongInput[] | AlbumsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutSongInput | AlbumsCreateOrConnectWithoutSongInput[]
    upsert?: AlbumsUpsertWithWhereUniqueWithoutSongInput | AlbumsUpsertWithWhereUniqueWithoutSongInput[]
    set?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    disconnect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    delete?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    update?: AlbumsUpdateWithWhereUniqueWithoutSongInput | AlbumsUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: AlbumsUpdateManyWithWhereWithoutSongInput | AlbumsUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
  }

  export type GenresUpdateManyWithoutSongNestedInput = {
    create?: XOR<GenresCreateWithoutSongInput, GenresUncheckedCreateWithoutSongInput> | GenresCreateWithoutSongInput[] | GenresUncheckedCreateWithoutSongInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutSongInput | GenresCreateOrConnectWithoutSongInput[]
    upsert?: GenresUpsertWithWhereUniqueWithoutSongInput | GenresUpsertWithWhereUniqueWithoutSongInput[]
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    update?: GenresUpdateWithWhereUniqueWithoutSongInput | GenresUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: GenresUpdateManyWithWhereWithoutSongInput | GenresUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[]
  }

  export type UserUpdateOneWithoutSongNestedInput = {
    create?: XOR<UserCreateWithoutSongInput, UserUncheckedCreateWithoutSongInput>
    connectOrCreate?: UserCreateOrConnectWithoutSongInput
    upsert?: UserUpsertWithoutSongInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSongInput, UserUpdateWithoutSongInput>, UserUncheckedUpdateWithoutSongInput>
  }

  export type LikedSongUpdateManyWithoutSongNestedInput = {
    create?: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput> | LikedSongCreateWithoutSongInput[] | LikedSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutSongInput | LikedSongCreateOrConnectWithoutSongInput[]
    upsert?: LikedSongUpsertWithWhereUniqueWithoutSongInput | LikedSongUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: LikedSongCreateManySongInputEnvelope
    set?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    disconnect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    delete?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    update?: LikedSongUpdateWithWhereUniqueWithoutSongInput | LikedSongUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: LikedSongUpdateManyWithWhereWithoutSongInput | LikedSongUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
  }

  export type PlaylistUpdateManyWithoutSongNestedInput = {
    create?: XOR<PlaylistCreateWithoutSongInput, PlaylistUncheckedCreateWithoutSongInput> | PlaylistCreateWithoutSongInput[] | PlaylistUncheckedCreateWithoutSongInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongInput | PlaylistCreateOrConnectWithoutSongInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutSongInput | PlaylistUpsertWithWhereUniqueWithoutSongInput[]
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutSongInput | PlaylistUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutSongInput | PlaylistUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type SongUpdateartistIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SongUpdatealbumIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SongUpdategenreIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SongUpdateplaylistIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ArtistUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<ArtistCreateWithoutSongInput, ArtistUncheckedCreateWithoutSongInput> | ArtistCreateWithoutSongInput[] | ArtistUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutSongInput | ArtistCreateOrConnectWithoutSongInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutSongInput | ArtistUpsertWithWhereUniqueWithoutSongInput[]
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutSongInput | ArtistUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutSongInput | ArtistUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type AlbumsUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<AlbumsCreateWithoutSongInput, AlbumsUncheckedCreateWithoutSongInput> | AlbumsCreateWithoutSongInput[] | AlbumsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutSongInput | AlbumsCreateOrConnectWithoutSongInput[]
    upsert?: AlbumsUpsertWithWhereUniqueWithoutSongInput | AlbumsUpsertWithWhereUniqueWithoutSongInput[]
    set?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    disconnect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    delete?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    update?: AlbumsUpdateWithWhereUniqueWithoutSongInput | AlbumsUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: AlbumsUpdateManyWithWhereWithoutSongInput | AlbumsUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
  }

  export type GenresUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<GenresCreateWithoutSongInput, GenresUncheckedCreateWithoutSongInput> | GenresCreateWithoutSongInput[] | GenresUncheckedCreateWithoutSongInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutSongInput | GenresCreateOrConnectWithoutSongInput[]
    upsert?: GenresUpsertWithWhereUniqueWithoutSongInput | GenresUpsertWithWhereUniqueWithoutSongInput[]
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    update?: GenresUpdateWithWhereUniqueWithoutSongInput | GenresUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: GenresUpdateManyWithWhereWithoutSongInput | GenresUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[]
  }

  export type LikedSongUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput> | LikedSongCreateWithoutSongInput[] | LikedSongUncheckedCreateWithoutSongInput[]
    connectOrCreate?: LikedSongCreateOrConnectWithoutSongInput | LikedSongCreateOrConnectWithoutSongInput[]
    upsert?: LikedSongUpsertWithWhereUniqueWithoutSongInput | LikedSongUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: LikedSongCreateManySongInputEnvelope
    set?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    disconnect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    delete?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    connect?: LikedSongWhereUniqueInput | LikedSongWhereUniqueInput[]
    update?: LikedSongUpdateWithWhereUniqueWithoutSongInput | LikedSongUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: LikedSongUpdateManyWithWhereWithoutSongInput | LikedSongUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<PlaylistCreateWithoutSongInput, PlaylistUncheckedCreateWithoutSongInput> | PlaylistCreateWithoutSongInput[] | PlaylistUncheckedCreateWithoutSongInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSongInput | PlaylistCreateOrConnectWithoutSongInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutSongInput | PlaylistUpsertWithWhereUniqueWithoutSongInput[]
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutSongInput | PlaylistUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutSongInput | PlaylistUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type SongCreateNestedManyWithoutArtistInput = {
    create?: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput> | SongCreateWithoutArtistInput[] | SongUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistInput | SongCreateOrConnectWithoutArtistInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type AlbumsCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumsCreateWithoutArtistInput, AlbumsUncheckedCreateWithoutArtistInput> | AlbumsCreateWithoutArtistInput[] | AlbumsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutArtistInput | AlbumsCreateOrConnectWithoutArtistInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
  }

  export type GenresCreateNestedManyWithoutArtistInput = {
    create?: XOR<GenresCreateWithoutArtistInput, GenresUncheckedCreateWithoutArtistInput> | GenresCreateWithoutArtistInput[] | GenresUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutArtistInput | GenresCreateOrConnectWithoutArtistInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
  }

  export type ArtistCreatesongIdInput = {
    set: string[]
  }

  export type ArtistCreatealbumsIdInput = {
    set: string[]
  }

  export type ArtistCreategenreIdInput = {
    set: string[]
  }

  export type SongUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput> | SongCreateWithoutArtistInput[] | SongUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistInput | SongCreateOrConnectWithoutArtistInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type AlbumsUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumsCreateWithoutArtistInput, AlbumsUncheckedCreateWithoutArtistInput> | AlbumsCreateWithoutArtistInput[] | AlbumsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutArtistInput | AlbumsCreateOrConnectWithoutArtistInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
  }

  export type GenresUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<GenresCreateWithoutArtistInput, GenresUncheckedCreateWithoutArtistInput> | GenresCreateWithoutArtistInput[] | GenresUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutArtistInput | GenresCreateOrConnectWithoutArtistInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
  }

  export type SongUpdateManyWithoutArtistNestedInput = {
    create?: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput> | SongCreateWithoutArtistInput[] | SongUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistInput | SongCreateOrConnectWithoutArtistInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutArtistInput | SongUpsertWithWhereUniqueWithoutArtistInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutArtistInput | SongUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: SongUpdateManyWithWhereWithoutArtistInput | SongUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type AlbumsUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumsCreateWithoutArtistInput, AlbumsUncheckedCreateWithoutArtistInput> | AlbumsCreateWithoutArtistInput[] | AlbumsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutArtistInput | AlbumsCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumsUpsertWithWhereUniqueWithoutArtistInput | AlbumsUpsertWithWhereUniqueWithoutArtistInput[]
    set?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    disconnect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    delete?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    update?: AlbumsUpdateWithWhereUniqueWithoutArtistInput | AlbumsUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumsUpdateManyWithWhereWithoutArtistInput | AlbumsUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
  }

  export type GenresUpdateManyWithoutArtistNestedInput = {
    create?: XOR<GenresCreateWithoutArtistInput, GenresUncheckedCreateWithoutArtistInput> | GenresCreateWithoutArtistInput[] | GenresUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutArtistInput | GenresCreateOrConnectWithoutArtistInput[]
    upsert?: GenresUpsertWithWhereUniqueWithoutArtistInput | GenresUpsertWithWhereUniqueWithoutArtistInput[]
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    update?: GenresUpdateWithWhereUniqueWithoutArtistInput | GenresUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: GenresUpdateManyWithWhereWithoutArtistInput | GenresUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[]
  }

  export type ArtistUpdatesongIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ArtistUpdatealbumsIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ArtistUpdategenreIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SongUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput> | SongCreateWithoutArtistInput[] | SongUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutArtistInput | SongCreateOrConnectWithoutArtistInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutArtistInput | SongUpsertWithWhereUniqueWithoutArtistInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutArtistInput | SongUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: SongUpdateManyWithWhereWithoutArtistInput | SongUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type AlbumsUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumsCreateWithoutArtistInput, AlbumsUncheckedCreateWithoutArtistInput> | AlbumsCreateWithoutArtistInput[] | AlbumsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutArtistInput | AlbumsCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumsUpsertWithWhereUniqueWithoutArtistInput | AlbumsUpsertWithWhereUniqueWithoutArtistInput[]
    set?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    disconnect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    delete?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    update?: AlbumsUpdateWithWhereUniqueWithoutArtistInput | AlbumsUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumsUpdateManyWithWhereWithoutArtistInput | AlbumsUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
  }

  export type GenresUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<GenresCreateWithoutArtistInput, GenresUncheckedCreateWithoutArtistInput> | GenresCreateWithoutArtistInput[] | GenresUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutArtistInput | GenresCreateOrConnectWithoutArtistInput[]
    upsert?: GenresUpsertWithWhereUniqueWithoutArtistInput | GenresUpsertWithWhereUniqueWithoutArtistInput[]
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    update?: GenresUpdateWithWhereUniqueWithoutArtistInput | GenresUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: GenresUpdateManyWithWhereWithoutArtistInput | GenresUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[]
  }

  export type LikedAlbumsCreateNestedManyWithoutAlbumsInput = {
    create?: XOR<LikedAlbumsCreateWithoutAlbumsInput, LikedAlbumsUncheckedCreateWithoutAlbumsInput> | LikedAlbumsCreateWithoutAlbumsInput[] | LikedAlbumsUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: LikedAlbumsCreateOrConnectWithoutAlbumsInput | LikedAlbumsCreateOrConnectWithoutAlbumsInput[]
    createMany?: LikedAlbumsCreateManyAlbumsInputEnvelope
    connect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
  }

  export type SongCreateNestedManyWithoutAlbumInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type ArtistCreateNestedManyWithoutAlbumsInput = {
    create?: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput> | ArtistCreateWithoutAlbumsInput[] | ArtistUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumsInput | ArtistCreateOrConnectWithoutAlbumsInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type GenresCreateNestedManyWithoutAlbumsInput = {
    create?: XOR<GenresCreateWithoutAlbumsInput, GenresUncheckedCreateWithoutAlbumsInput> | GenresCreateWithoutAlbumsInput[] | GenresUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutAlbumsInput | GenresCreateOrConnectWithoutAlbumsInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
  }

  export type AlbumsCreatesongIdInput = {
    set: string[]
  }

  export type AlbumsCreateartistIdInput = {
    set: string[]
  }

  export type AlbumsCreategenreIdInput = {
    set: string[]
  }

  export type LikedAlbumsUncheckedCreateNestedManyWithoutAlbumsInput = {
    create?: XOR<LikedAlbumsCreateWithoutAlbumsInput, LikedAlbumsUncheckedCreateWithoutAlbumsInput> | LikedAlbumsCreateWithoutAlbumsInput[] | LikedAlbumsUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: LikedAlbumsCreateOrConnectWithoutAlbumsInput | LikedAlbumsCreateOrConnectWithoutAlbumsInput[]
    createMany?: LikedAlbumsCreateManyAlbumsInputEnvelope
    connect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
  }

  export type SongUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type ArtistUncheckedCreateNestedManyWithoutAlbumsInput = {
    create?: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput> | ArtistCreateWithoutAlbumsInput[] | ArtistUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumsInput | ArtistCreateOrConnectWithoutAlbumsInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type GenresUncheckedCreateNestedManyWithoutAlbumsInput = {
    create?: XOR<GenresCreateWithoutAlbumsInput, GenresUncheckedCreateWithoutAlbumsInput> | GenresCreateWithoutAlbumsInput[] | GenresUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutAlbumsInput | GenresCreateOrConnectWithoutAlbumsInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
  }

  export type LikedAlbumsUpdateManyWithoutAlbumsNestedInput = {
    create?: XOR<LikedAlbumsCreateWithoutAlbumsInput, LikedAlbumsUncheckedCreateWithoutAlbumsInput> | LikedAlbumsCreateWithoutAlbumsInput[] | LikedAlbumsUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: LikedAlbumsCreateOrConnectWithoutAlbumsInput | LikedAlbumsCreateOrConnectWithoutAlbumsInput[]
    upsert?: LikedAlbumsUpsertWithWhereUniqueWithoutAlbumsInput | LikedAlbumsUpsertWithWhereUniqueWithoutAlbumsInput[]
    createMany?: LikedAlbumsCreateManyAlbumsInputEnvelope
    set?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    disconnect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    delete?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    connect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    update?: LikedAlbumsUpdateWithWhereUniqueWithoutAlbumsInput | LikedAlbumsUpdateWithWhereUniqueWithoutAlbumsInput[]
    updateMany?: LikedAlbumsUpdateManyWithWhereWithoutAlbumsInput | LikedAlbumsUpdateManyWithWhereWithoutAlbumsInput[]
    deleteMany?: LikedAlbumsScalarWhereInput | LikedAlbumsScalarWhereInput[]
  }

  export type SongUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutAlbumInput | SongUpsertWithWhereUniqueWithoutAlbumInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutAlbumInput | SongUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: SongUpdateManyWithWhereWithoutAlbumInput | SongUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type ArtistUpdateManyWithoutAlbumsNestedInput = {
    create?: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput> | ArtistCreateWithoutAlbumsInput[] | ArtistUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumsInput | ArtistCreateOrConnectWithoutAlbumsInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutAlbumsInput | ArtistUpsertWithWhereUniqueWithoutAlbumsInput[]
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutAlbumsInput | ArtistUpdateWithWhereUniqueWithoutAlbumsInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutAlbumsInput | ArtistUpdateManyWithWhereWithoutAlbumsInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type GenresUpdateManyWithoutAlbumsNestedInput = {
    create?: XOR<GenresCreateWithoutAlbumsInput, GenresUncheckedCreateWithoutAlbumsInput> | GenresCreateWithoutAlbumsInput[] | GenresUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutAlbumsInput | GenresCreateOrConnectWithoutAlbumsInput[]
    upsert?: GenresUpsertWithWhereUniqueWithoutAlbumsInput | GenresUpsertWithWhereUniqueWithoutAlbumsInput[]
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    update?: GenresUpdateWithWhereUniqueWithoutAlbumsInput | GenresUpdateWithWhereUniqueWithoutAlbumsInput[]
    updateMany?: GenresUpdateManyWithWhereWithoutAlbumsInput | GenresUpdateManyWithWhereWithoutAlbumsInput[]
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[]
  }

  export type AlbumsUpdatesongIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AlbumsUpdateartistIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AlbumsUpdategenreIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LikedAlbumsUncheckedUpdateManyWithoutAlbumsNestedInput = {
    create?: XOR<LikedAlbumsCreateWithoutAlbumsInput, LikedAlbumsUncheckedCreateWithoutAlbumsInput> | LikedAlbumsCreateWithoutAlbumsInput[] | LikedAlbumsUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: LikedAlbumsCreateOrConnectWithoutAlbumsInput | LikedAlbumsCreateOrConnectWithoutAlbumsInput[]
    upsert?: LikedAlbumsUpsertWithWhereUniqueWithoutAlbumsInput | LikedAlbumsUpsertWithWhereUniqueWithoutAlbumsInput[]
    createMany?: LikedAlbumsCreateManyAlbumsInputEnvelope
    set?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    disconnect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    delete?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    connect?: LikedAlbumsWhereUniqueInput | LikedAlbumsWhereUniqueInput[]
    update?: LikedAlbumsUpdateWithWhereUniqueWithoutAlbumsInput | LikedAlbumsUpdateWithWhereUniqueWithoutAlbumsInput[]
    updateMany?: LikedAlbumsUpdateManyWithWhereWithoutAlbumsInput | LikedAlbumsUpdateManyWithWhereWithoutAlbumsInput[]
    deleteMany?: LikedAlbumsScalarWhereInput | LikedAlbumsScalarWhereInput[]
  }

  export type SongUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput> | SongCreateWithoutAlbumInput[] | SongUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: SongCreateOrConnectWithoutAlbumInput | SongCreateOrConnectWithoutAlbumInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutAlbumInput | SongUpsertWithWhereUniqueWithoutAlbumInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutAlbumInput | SongUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: SongUpdateManyWithWhereWithoutAlbumInput | SongUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type ArtistUncheckedUpdateManyWithoutAlbumsNestedInput = {
    create?: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput> | ArtistCreateWithoutAlbumsInput[] | ArtistUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumsInput | ArtistCreateOrConnectWithoutAlbumsInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutAlbumsInput | ArtistUpsertWithWhereUniqueWithoutAlbumsInput[]
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutAlbumsInput | ArtistUpdateWithWhereUniqueWithoutAlbumsInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutAlbumsInput | ArtistUpdateManyWithWhereWithoutAlbumsInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type GenresUncheckedUpdateManyWithoutAlbumsNestedInput = {
    create?: XOR<GenresCreateWithoutAlbumsInput, GenresUncheckedCreateWithoutAlbumsInput> | GenresCreateWithoutAlbumsInput[] | GenresUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutAlbumsInput | GenresCreateOrConnectWithoutAlbumsInput[]
    upsert?: GenresUpsertWithWhereUniqueWithoutAlbumsInput | GenresUpsertWithWhereUniqueWithoutAlbumsInput[]
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    update?: GenresUpdateWithWhereUniqueWithoutAlbumsInput | GenresUpdateWithWhereUniqueWithoutAlbumsInput[]
    updateMany?: GenresUpdateManyWithWhereWithoutAlbumsInput | GenresUpdateManyWithWhereWithoutAlbumsInput[]
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLikedSongInput = {
    create?: XOR<UserCreateWithoutLikedSongInput, UserUncheckedCreateWithoutLikedSongInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedSongInput
    connect?: UserWhereUniqueInput
  }

  export type SongCreateNestedOneWithoutLikedSongInput = {
    create?: XOR<SongCreateWithoutLikedSongInput, SongUncheckedCreateWithoutLikedSongInput>
    connectOrCreate?: SongCreateOrConnectWithoutLikedSongInput
    connect?: SongWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutLikedSongNestedInput = {
    create?: XOR<UserCreateWithoutLikedSongInput, UserUncheckedCreateWithoutLikedSongInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedSongInput
    upsert?: UserUpsertWithoutLikedSongInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedSongInput, UserUpdateWithoutLikedSongInput>, UserUncheckedUpdateWithoutLikedSongInput>
  }

  export type SongUpdateOneWithoutLikedSongNestedInput = {
    create?: XOR<SongCreateWithoutLikedSongInput, SongUncheckedCreateWithoutLikedSongInput>
    connectOrCreate?: SongCreateOrConnectWithoutLikedSongInput
    upsert?: SongUpsertWithoutLikedSongInput
    disconnect?: boolean
    delete?: SongWhereInput | boolean
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutLikedSongInput, SongUpdateWithoutLikedSongInput>, SongUncheckedUpdateWithoutLikedSongInput>
  }

  export type UserCreateNestedOneWithoutLikedAlbumsInput = {
    create?: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedAlbumsInput
    connect?: UserWhereUniqueInput
  }

  export type AlbumsCreateNestedOneWithoutLikedAlbumsInput = {
    create?: XOR<AlbumsCreateWithoutLikedAlbumsInput, AlbumsUncheckedCreateWithoutLikedAlbumsInput>
    connectOrCreate?: AlbumsCreateOrConnectWithoutLikedAlbumsInput
    connect?: AlbumsWhereUniqueInput
  }

  export type UserUpdateOneWithoutLikedAlbumsNestedInput = {
    create?: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedAlbumsInput
    upsert?: UserUpsertWithoutLikedAlbumsInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedAlbumsInput, UserUpdateWithoutLikedAlbumsInput>, UserUncheckedUpdateWithoutLikedAlbumsInput>
  }

  export type AlbumsUpdateOneWithoutLikedAlbumsNestedInput = {
    create?: XOR<AlbumsCreateWithoutLikedAlbumsInput, AlbumsUncheckedCreateWithoutLikedAlbumsInput>
    connectOrCreate?: AlbumsCreateOrConnectWithoutLikedAlbumsInput
    upsert?: AlbumsUpsertWithoutLikedAlbumsInput
    disconnect?: boolean
    delete?: AlbumsWhereInput | boolean
    connect?: AlbumsWhereUniqueInput
    update?: XOR<XOR<AlbumsUpdateToOneWithWhereWithoutLikedAlbumsInput, AlbumsUpdateWithoutLikedAlbumsInput>, AlbumsUncheckedUpdateWithoutLikedAlbumsInput>
  }

  export type UserCreateNestedOneWithoutLikedPlaylistInput = {
    create?: XOR<UserCreateWithoutLikedPlaylistInput, UserUncheckedCreateWithoutLikedPlaylistInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedPlaylistInput
    connect?: UserWhereUniqueInput
  }

  export type PlaylistCreateNestedOneWithoutLikedPlaylistInput = {
    create?: XOR<PlaylistCreateWithoutLikedPlaylistInput, PlaylistUncheckedCreateWithoutLikedPlaylistInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutLikedPlaylistInput
    connect?: PlaylistWhereUniqueInput
  }

  export type UserUpdateOneWithoutLikedPlaylistNestedInput = {
    create?: XOR<UserCreateWithoutLikedPlaylistInput, UserUncheckedCreateWithoutLikedPlaylistInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedPlaylistInput
    upsert?: UserUpsertWithoutLikedPlaylistInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedPlaylistInput, UserUpdateWithoutLikedPlaylistInput>, UserUncheckedUpdateWithoutLikedPlaylistInput>
  }

  export type PlaylistUpdateOneWithoutLikedPlaylistNestedInput = {
    create?: XOR<PlaylistCreateWithoutLikedPlaylistInput, PlaylistUncheckedCreateWithoutLikedPlaylistInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutLikedPlaylistInput
    upsert?: PlaylistUpsertWithoutLikedPlaylistInput
    disconnect?: boolean
    delete?: PlaylistWhereInput | boolean
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutLikedPlaylistInput, PlaylistUpdateWithoutLikedPlaylistInput>, PlaylistUncheckedUpdateWithoutLikedPlaylistInput>
  }

  export type SongCreateNestedManyWithoutGenresInput = {
    create?: XOR<SongCreateWithoutGenresInput, SongUncheckedCreateWithoutGenresInput> | SongCreateWithoutGenresInput[] | SongUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: SongCreateOrConnectWithoutGenresInput | SongCreateOrConnectWithoutGenresInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type ArtistCreateNestedManyWithoutGenresInput = {
    create?: XOR<ArtistCreateWithoutGenresInput, ArtistUncheckedCreateWithoutGenresInput> | ArtistCreateWithoutGenresInput[] | ArtistUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutGenresInput | ArtistCreateOrConnectWithoutGenresInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type AlbumsCreateNestedManyWithoutGenresInput = {
    create?: XOR<AlbumsCreateWithoutGenresInput, AlbumsUncheckedCreateWithoutGenresInput> | AlbumsCreateWithoutGenresInput[] | AlbumsUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutGenresInput | AlbumsCreateOrConnectWithoutGenresInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
  }

  export type GenresCreatesongIdInput = {
    set: string[]
  }

  export type GenresCreateartistIdInput = {
    set: string[]
  }

  export type GenresCreatealbumIdInput = {
    set: string[]
  }

  export type SongUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<SongCreateWithoutGenresInput, SongUncheckedCreateWithoutGenresInput> | SongCreateWithoutGenresInput[] | SongUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: SongCreateOrConnectWithoutGenresInput | SongCreateOrConnectWithoutGenresInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type ArtistUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<ArtistCreateWithoutGenresInput, ArtistUncheckedCreateWithoutGenresInput> | ArtistCreateWithoutGenresInput[] | ArtistUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutGenresInput | ArtistCreateOrConnectWithoutGenresInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
  }

  export type AlbumsUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<AlbumsCreateWithoutGenresInput, AlbumsUncheckedCreateWithoutGenresInput> | AlbumsCreateWithoutGenresInput[] | AlbumsUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutGenresInput | AlbumsCreateOrConnectWithoutGenresInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
  }

  export type SongUpdateManyWithoutGenresNestedInput = {
    create?: XOR<SongCreateWithoutGenresInput, SongUncheckedCreateWithoutGenresInput> | SongCreateWithoutGenresInput[] | SongUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: SongCreateOrConnectWithoutGenresInput | SongCreateOrConnectWithoutGenresInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutGenresInput | SongUpsertWithWhereUniqueWithoutGenresInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutGenresInput | SongUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: SongUpdateManyWithWhereWithoutGenresInput | SongUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type ArtistUpdateManyWithoutGenresNestedInput = {
    create?: XOR<ArtistCreateWithoutGenresInput, ArtistUncheckedCreateWithoutGenresInput> | ArtistCreateWithoutGenresInput[] | ArtistUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutGenresInput | ArtistCreateOrConnectWithoutGenresInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutGenresInput | ArtistUpsertWithWhereUniqueWithoutGenresInput[]
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutGenresInput | ArtistUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutGenresInput | ArtistUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type AlbumsUpdateManyWithoutGenresNestedInput = {
    create?: XOR<AlbumsCreateWithoutGenresInput, AlbumsUncheckedCreateWithoutGenresInput> | AlbumsCreateWithoutGenresInput[] | AlbumsUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutGenresInput | AlbumsCreateOrConnectWithoutGenresInput[]
    upsert?: AlbumsUpsertWithWhereUniqueWithoutGenresInput | AlbumsUpsertWithWhereUniqueWithoutGenresInput[]
    set?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    disconnect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    delete?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    update?: AlbumsUpdateWithWhereUniqueWithoutGenresInput | AlbumsUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: AlbumsUpdateManyWithWhereWithoutGenresInput | AlbumsUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
  }

  export type GenresUpdatesongIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GenresUpdateartistIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GenresUpdatealbumIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SongUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<SongCreateWithoutGenresInput, SongUncheckedCreateWithoutGenresInput> | SongCreateWithoutGenresInput[] | SongUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: SongCreateOrConnectWithoutGenresInput | SongCreateOrConnectWithoutGenresInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutGenresInput | SongUpsertWithWhereUniqueWithoutGenresInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutGenresInput | SongUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: SongUpdateManyWithWhereWithoutGenresInput | SongUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type ArtistUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<ArtistCreateWithoutGenresInput, ArtistUncheckedCreateWithoutGenresInput> | ArtistCreateWithoutGenresInput[] | ArtistUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: ArtistCreateOrConnectWithoutGenresInput | ArtistCreateOrConnectWithoutGenresInput[]
    upsert?: ArtistUpsertWithWhereUniqueWithoutGenresInput | ArtistUpsertWithWhereUniqueWithoutGenresInput[]
    set?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    disconnect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    delete?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    connect?: ArtistWhereUniqueInput | ArtistWhereUniqueInput[]
    update?: ArtistUpdateWithWhereUniqueWithoutGenresInput | ArtistUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: ArtistUpdateManyWithWhereWithoutGenresInput | ArtistUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
  }

  export type AlbumsUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<AlbumsCreateWithoutGenresInput, AlbumsUncheckedCreateWithoutGenresInput> | AlbumsCreateWithoutGenresInput[] | AlbumsUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutGenresInput | AlbumsCreateOrConnectWithoutGenresInput[]
    upsert?: AlbumsUpsertWithWhereUniqueWithoutGenresInput | AlbumsUpsertWithWhereUniqueWithoutGenresInput[]
    set?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    disconnect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    delete?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    update?: AlbumsUpdateWithWhereUniqueWithoutGenresInput | AlbumsUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: AlbumsUpdateManyWithWhereWithoutGenresInput | AlbumsUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
  }

  export type SongCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput> | SongCreateWithoutPlaylistInput[] | SongUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistInput | SongCreateOrConnectWithoutPlaylistInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPlaylistInput = {
    create?: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistInput
    connect?: UserWhereUniqueInput
  }

  export type LikedPlaylistCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<LikedPlaylistCreateWithoutPlaylistsInput, LikedPlaylistUncheckedCreateWithoutPlaylistsInput> | LikedPlaylistCreateWithoutPlaylistsInput[] | LikedPlaylistUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: LikedPlaylistCreateOrConnectWithoutPlaylistsInput | LikedPlaylistCreateOrConnectWithoutPlaylistsInput[]
    createMany?: LikedPlaylistCreateManyPlaylistsInputEnvelope
    connect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
  }

  export type PlaylistCreatesongIdInput = {
    set: string[]
  }

  export type SongUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput> | SongCreateWithoutPlaylistInput[] | SongUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistInput | SongCreateOrConnectWithoutPlaylistInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
  }

  export type LikedPlaylistUncheckedCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<LikedPlaylistCreateWithoutPlaylistsInput, LikedPlaylistUncheckedCreateWithoutPlaylistsInput> | LikedPlaylistCreateWithoutPlaylistsInput[] | LikedPlaylistUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: LikedPlaylistCreateOrConnectWithoutPlaylistsInput | LikedPlaylistCreateOrConnectWithoutPlaylistsInput[]
    createMany?: LikedPlaylistCreateManyPlaylistsInputEnvelope
    connect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
  }

  export type SongUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput> | SongCreateWithoutPlaylistInput[] | SongUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistInput | SongCreateOrConnectWithoutPlaylistInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutPlaylistInput | SongUpsertWithWhereUniqueWithoutPlaylistInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutPlaylistInput | SongUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: SongUpdateManyWithWhereWithoutPlaylistInput | SongUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type UserUpdateOneWithoutPlaylistNestedInput = {
    create?: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistInput
    upsert?: UserUpsertWithoutPlaylistInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaylistInput, UserUpdateWithoutPlaylistInput>, UserUncheckedUpdateWithoutPlaylistInput>
  }

  export type LikedPlaylistUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<LikedPlaylistCreateWithoutPlaylistsInput, LikedPlaylistUncheckedCreateWithoutPlaylistsInput> | LikedPlaylistCreateWithoutPlaylistsInput[] | LikedPlaylistUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: LikedPlaylistCreateOrConnectWithoutPlaylistsInput | LikedPlaylistCreateOrConnectWithoutPlaylistsInput[]
    upsert?: LikedPlaylistUpsertWithWhereUniqueWithoutPlaylistsInput | LikedPlaylistUpsertWithWhereUniqueWithoutPlaylistsInput[]
    createMany?: LikedPlaylistCreateManyPlaylistsInputEnvelope
    set?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    disconnect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    delete?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    connect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    update?: LikedPlaylistUpdateWithWhereUniqueWithoutPlaylistsInput | LikedPlaylistUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: LikedPlaylistUpdateManyWithWhereWithoutPlaylistsInput | LikedPlaylistUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: LikedPlaylistScalarWhereInput | LikedPlaylistScalarWhereInput[]
  }

  export type PlaylistUpdatesongIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SongUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput> | SongCreateWithoutPlaylistInput[] | SongUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistInput | SongCreateOrConnectWithoutPlaylistInput[]
    upsert?: SongUpsertWithWhereUniqueWithoutPlaylistInput | SongUpsertWithWhereUniqueWithoutPlaylistInput[]
    set?: SongWhereUniqueInput | SongWhereUniqueInput[]
    disconnect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    delete?: SongWhereUniqueInput | SongWhereUniqueInput[]
    connect?: SongWhereUniqueInput | SongWhereUniqueInput[]
    update?: SongUpdateWithWhereUniqueWithoutPlaylistInput | SongUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: SongUpdateManyWithWhereWithoutPlaylistInput | SongUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: SongScalarWhereInput | SongScalarWhereInput[]
  }

  export type LikedPlaylistUncheckedUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<LikedPlaylistCreateWithoutPlaylistsInput, LikedPlaylistUncheckedCreateWithoutPlaylistsInput> | LikedPlaylistCreateWithoutPlaylistsInput[] | LikedPlaylistUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: LikedPlaylistCreateOrConnectWithoutPlaylistsInput | LikedPlaylistCreateOrConnectWithoutPlaylistsInput[]
    upsert?: LikedPlaylistUpsertWithWhereUniqueWithoutPlaylistsInput | LikedPlaylistUpsertWithWhereUniqueWithoutPlaylistsInput[]
    createMany?: LikedPlaylistCreateManyPlaylistsInputEnvelope
    set?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    disconnect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    delete?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    connect?: LikedPlaylistWhereUniqueInput | LikedPlaylistWhereUniqueInput[]
    update?: LikedPlaylistUpdateWithWhereUniqueWithoutPlaylistsInput | LikedPlaylistUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: LikedPlaylistUpdateManyWithWhereWithoutPlaylistsInput | LikedPlaylistUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: LikedPlaylistScalarWhereInput | LikedPlaylistScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutFollowedUserInput = {
    create?: XOR<UserCreateWithoutFollowedUserInput, UserUncheckedCreateWithoutFollowedUserInput> | UserCreateWithoutFollowedUserInput[] | UserUncheckedCreateWithoutFollowedUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedUserInput | UserCreateOrConnectWithoutFollowedUserInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FollowedUserCreateuserIdInput = {
    set: string[]
  }

  export type UserUncheckedCreateNestedManyWithoutFollowedUserInput = {
    create?: XOR<UserCreateWithoutFollowedUserInput, UserUncheckedCreateWithoutFollowedUserInput> | UserCreateWithoutFollowedUserInput[] | UserUncheckedCreateWithoutFollowedUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedUserInput | UserCreateOrConnectWithoutFollowedUserInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutFollowedUserNestedInput = {
    create?: XOR<UserCreateWithoutFollowedUserInput, UserUncheckedCreateWithoutFollowedUserInput> | UserCreateWithoutFollowedUserInput[] | UserUncheckedCreateWithoutFollowedUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedUserInput | UserCreateOrConnectWithoutFollowedUserInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowedUserInput | UserUpsertWithWhereUniqueWithoutFollowedUserInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowedUserInput | UserUpdateWithWhereUniqueWithoutFollowedUserInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowedUserInput | UserUpdateManyWithWhereWithoutFollowedUserInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FollowedUserUpdateuserIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUncheckedUpdateManyWithoutFollowedUserNestedInput = {
    create?: XOR<UserCreateWithoutFollowedUserInput, UserUncheckedCreateWithoutFollowedUserInput> | UserCreateWithoutFollowedUserInput[] | UserUncheckedCreateWithoutFollowedUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedUserInput | UserCreateOrConnectWithoutFollowedUserInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowedUserInput | UserUpsertWithWhereUniqueWithoutFollowedUserInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowedUserInput | UserUpdateWithWhereUniqueWithoutFollowedUserInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowedUserInput | UserUpdateManyWithWhereWithoutFollowedUserInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutFollowedByInput = {
    create?: XOR<UserCreateWithoutFollowedByInput, UserUncheckedCreateWithoutFollowedByInput> | UserCreateWithoutFollowedByInput[] | UserUncheckedCreateWithoutFollowedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedByInput | UserCreateOrConnectWithoutFollowedByInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FollowedByCreateuserIdInput = {
    set: string[]
  }

  export type UserUncheckedCreateNestedManyWithoutFollowedByInput = {
    create?: XOR<UserCreateWithoutFollowedByInput, UserUncheckedCreateWithoutFollowedByInput> | UserCreateWithoutFollowedByInput[] | UserUncheckedCreateWithoutFollowedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedByInput | UserCreateOrConnectWithoutFollowedByInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutFollowedByNestedInput = {
    create?: XOR<UserCreateWithoutFollowedByInput, UserUncheckedCreateWithoutFollowedByInput> | UserCreateWithoutFollowedByInput[] | UserUncheckedCreateWithoutFollowedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedByInput | UserCreateOrConnectWithoutFollowedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowedByInput | UserUpsertWithWhereUniqueWithoutFollowedByInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowedByInput | UserUpdateWithWhereUniqueWithoutFollowedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowedByInput | UserUpdateManyWithWhereWithoutFollowedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FollowedByUpdateuserIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUncheckedUpdateManyWithoutFollowedByNestedInput = {
    create?: XOR<UserCreateWithoutFollowedByInput, UserUncheckedCreateWithoutFollowedByInput> | UserCreateWithoutFollowedByInput[] | UserUncheckedCreateWithoutFollowedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFollowedByInput | UserCreateOrConnectWithoutFollowedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFollowedByInput | UserUpsertWithWhereUniqueWithoutFollowedByInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFollowedByInput | UserUpdateWithWhereUniqueWithoutFollowedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFollowedByInput | UserUpdateManyWithWhereWithoutFollowedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SongCreateWithoutUserInput = {
    id?: string
    url: string
    cover: string
    name: string
    duration?: string | null
    listened?: number | null
    Artist?: ArtistCreateNestedManyWithoutSongInput
    Album?: AlbumsCreateNestedManyWithoutSongInput
    Genres?: GenresCreateNestedManyWithoutSongInput
    LikedSong?: LikedSongCreateNestedManyWithoutSongInput
    Playlist?: PlaylistCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutUserInput = {
    id?: string
    url: string
    cover: string
    name: string
    duration?: string | null
    listened?: number | null
    artistId?: SongCreateartistIdInput | string[]
    albumId?: SongCreatealbumIdInput | string[]
    genreId?: SongCreategenreIdInput | string[]
    playlistId?: SongCreateplaylistIdInput | string[]
    Artist?: ArtistUncheckedCreateNestedManyWithoutSongInput
    Album?: AlbumsUncheckedCreateNestedManyWithoutSongInput
    Genres?: GenresUncheckedCreateNestedManyWithoutSongInput
    LikedSong?: LikedSongUncheckedCreateNestedManyWithoutSongInput
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutUserInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutUserInput, SongUncheckedCreateWithoutUserInput>
  }

  export type SongCreateManyUserInputEnvelope = {
    data: SongCreateManyUserInput | SongCreateManyUserInput[]
  }

  export type LikedSongCreateWithoutUserInput = {
    id?: string
    liked: boolean
    Song?: SongCreateNestedOneWithoutLikedSongInput
  }

  export type LikedSongUncheckedCreateWithoutUserInput = {
    id?: string
    liked: boolean
    songId?: string | null
  }

  export type LikedSongCreateOrConnectWithoutUserInput = {
    where: LikedSongWhereUniqueInput
    create: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput>
  }

  export type LikedSongCreateManyUserInputEnvelope = {
    data: LikedSongCreateManyUserInput | LikedSongCreateManyUserInput[]
  }

  export type LikedAlbumsCreateWithoutUserInput = {
    id?: string
    liked: boolean
    Albums?: AlbumsCreateNestedOneWithoutLikedAlbumsInput
  }

  export type LikedAlbumsUncheckedCreateWithoutUserInput = {
    id?: string
    liked: boolean
    albumId?: string | null
  }

  export type LikedAlbumsCreateOrConnectWithoutUserInput = {
    where: LikedAlbumsWhereUniqueInput
    create: XOR<LikedAlbumsCreateWithoutUserInput, LikedAlbumsUncheckedCreateWithoutUserInput>
  }

  export type LikedAlbumsCreateManyUserInputEnvelope = {
    data: LikedAlbumsCreateManyUserInput | LikedAlbumsCreateManyUserInput[]
  }

  export type PlaylistCreateWithoutUserInput = {
    id?: string
    name: string
    cover: string
    numSong?: number | null
    Song?: SongCreateNestedManyWithoutPlaylistInput
    LikedPlaylist?: LikedPlaylistCreateNestedManyWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    cover: string
    numSong?: number | null
    songId?: PlaylistCreatesongIdInput | string[]
    Song?: SongUncheckedCreateNestedManyWithoutPlaylistInput
    LikedPlaylist?: LikedPlaylistUncheckedCreateNestedManyWithoutPlaylistsInput
  }

  export type PlaylistCreateOrConnectWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistCreateManyUserInputEnvelope = {
    data: PlaylistCreateManyUserInput | PlaylistCreateManyUserInput[]
  }

  export type LikedPlaylistCreateWithoutUserInput = {
    id?: string
    liked: boolean
    Playlists?: PlaylistCreateNestedOneWithoutLikedPlaylistInput
  }

  export type LikedPlaylistUncheckedCreateWithoutUserInput = {
    id?: string
    liked: boolean
    playlistId?: string | null
  }

  export type LikedPlaylistCreateOrConnectWithoutUserInput = {
    where: LikedPlaylistWhereUniqueInput
    create: XOR<LikedPlaylistCreateWithoutUserInput, LikedPlaylistUncheckedCreateWithoutUserInput>
  }

  export type LikedPlaylistCreateManyUserInputEnvelope = {
    data: LikedPlaylistCreateManyUserInput | LikedPlaylistCreateManyUserInput[]
  }

  export type FollowedUserCreateWithoutUserInput = {
    id?: string
    followed: boolean
  }

  export type FollowedUserUncheckedCreateWithoutUserInput = {
    id?: string
    userId?: FollowedUserCreateuserIdInput | string[]
    followed: boolean
  }

  export type FollowedUserCreateOrConnectWithoutUserInput = {
    where: FollowedUserWhereUniqueInput
    create: XOR<FollowedUserCreateWithoutUserInput, FollowedUserUncheckedCreateWithoutUserInput>
  }

  export type FollowedByCreateWithoutUserInput = {
    id?: string
    followed: boolean
  }

  export type FollowedByUncheckedCreateWithoutUserInput = {
    id?: string
    userId?: FollowedByCreateuserIdInput | string[]
    followed: boolean
  }

  export type FollowedByCreateOrConnectWithoutUserInput = {
    where: FollowedByWhereUniqueInput
    create: XOR<FollowedByCreateWithoutUserInput, FollowedByUncheckedCreateWithoutUserInput>
  }

  export type SongUpsertWithWhereUniqueWithoutUserInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutUserInput, SongUncheckedUpdateWithoutUserInput>
    create: XOR<SongCreateWithoutUserInput, SongUncheckedCreateWithoutUserInput>
  }

  export type SongUpdateWithWhereUniqueWithoutUserInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutUserInput, SongUncheckedUpdateWithoutUserInput>
  }

  export type SongUpdateManyWithWhereWithoutUserInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutUserInput>
  }

  export type SongScalarWhereInput = {
    AND?: SongScalarWhereInput | SongScalarWhereInput[]
    OR?: SongScalarWhereInput[]
    NOT?: SongScalarWhereInput | SongScalarWhereInput[]
    id?: StringFilter<"Song"> | string
    url?: StringFilter<"Song"> | string
    cover?: StringFilter<"Song"> | string
    name?: StringFilter<"Song"> | string
    duration?: StringNullableFilter<"Song"> | string | null
    listened?: IntNullableFilter<"Song"> | number | null
    artistId?: StringNullableListFilter<"Song">
    albumId?: StringNullableListFilter<"Song">
    genreId?: StringNullableListFilter<"Song">
    userId?: StringNullableFilter<"Song"> | string | null
    playlistId?: StringNullableListFilter<"Song">
  }

  export type LikedSongUpsertWithWhereUniqueWithoutUserInput = {
    where: LikedSongWhereUniqueInput
    update: XOR<LikedSongUpdateWithoutUserInput, LikedSongUncheckedUpdateWithoutUserInput>
    create: XOR<LikedSongCreateWithoutUserInput, LikedSongUncheckedCreateWithoutUserInput>
  }

  export type LikedSongUpdateWithWhereUniqueWithoutUserInput = {
    where: LikedSongWhereUniqueInput
    data: XOR<LikedSongUpdateWithoutUserInput, LikedSongUncheckedUpdateWithoutUserInput>
  }

  export type LikedSongUpdateManyWithWhereWithoutUserInput = {
    where: LikedSongScalarWhereInput
    data: XOR<LikedSongUpdateManyMutationInput, LikedSongUncheckedUpdateManyWithoutUserInput>
  }

  export type LikedSongScalarWhereInput = {
    AND?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
    OR?: LikedSongScalarWhereInput[]
    NOT?: LikedSongScalarWhereInput | LikedSongScalarWhereInput[]
    id?: StringFilter<"LikedSong"> | string
    liked?: BoolFilter<"LikedSong"> | boolean
    userId?: StringNullableFilter<"LikedSong"> | string | null
    songId?: StringNullableFilter<"LikedSong"> | string | null
  }

  export type LikedAlbumsUpsertWithWhereUniqueWithoutUserInput = {
    where: LikedAlbumsWhereUniqueInput
    update: XOR<LikedAlbumsUpdateWithoutUserInput, LikedAlbumsUncheckedUpdateWithoutUserInput>
    create: XOR<LikedAlbumsCreateWithoutUserInput, LikedAlbumsUncheckedCreateWithoutUserInput>
  }

  export type LikedAlbumsUpdateWithWhereUniqueWithoutUserInput = {
    where: LikedAlbumsWhereUniqueInput
    data: XOR<LikedAlbumsUpdateWithoutUserInput, LikedAlbumsUncheckedUpdateWithoutUserInput>
  }

  export type LikedAlbumsUpdateManyWithWhereWithoutUserInput = {
    where: LikedAlbumsScalarWhereInput
    data: XOR<LikedAlbumsUpdateManyMutationInput, LikedAlbumsUncheckedUpdateManyWithoutUserInput>
  }

  export type LikedAlbumsScalarWhereInput = {
    AND?: LikedAlbumsScalarWhereInput | LikedAlbumsScalarWhereInput[]
    OR?: LikedAlbumsScalarWhereInput[]
    NOT?: LikedAlbumsScalarWhereInput | LikedAlbumsScalarWhereInput[]
    id?: StringFilter<"LikedAlbums"> | string
    liked?: BoolFilter<"LikedAlbums"> | boolean
    userId?: StringNullableFilter<"LikedAlbums"> | string | null
    albumId?: StringNullableFilter<"LikedAlbums"> | string | null
  }

  export type PlaylistUpsertWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutUserInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutUserInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    OR?: PlaylistScalarWhereInput[]
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    id?: StringFilter<"Playlist"> | string
    name?: StringFilter<"Playlist"> | string
    cover?: StringFilter<"Playlist"> | string
    numSong?: IntNullableFilter<"Playlist"> | number | null
    songId?: StringNullableListFilter<"Playlist">
    userId?: StringNullableFilter<"Playlist"> | string | null
  }

  export type LikedPlaylistUpsertWithWhereUniqueWithoutUserInput = {
    where: LikedPlaylistWhereUniqueInput
    update: XOR<LikedPlaylistUpdateWithoutUserInput, LikedPlaylistUncheckedUpdateWithoutUserInput>
    create: XOR<LikedPlaylistCreateWithoutUserInput, LikedPlaylistUncheckedCreateWithoutUserInput>
  }

  export type LikedPlaylistUpdateWithWhereUniqueWithoutUserInput = {
    where: LikedPlaylistWhereUniqueInput
    data: XOR<LikedPlaylistUpdateWithoutUserInput, LikedPlaylistUncheckedUpdateWithoutUserInput>
  }

  export type LikedPlaylistUpdateManyWithWhereWithoutUserInput = {
    where: LikedPlaylistScalarWhereInput
    data: XOR<LikedPlaylistUpdateManyMutationInput, LikedPlaylistUncheckedUpdateManyWithoutUserInput>
  }

  export type LikedPlaylistScalarWhereInput = {
    AND?: LikedPlaylistScalarWhereInput | LikedPlaylistScalarWhereInput[]
    OR?: LikedPlaylistScalarWhereInput[]
    NOT?: LikedPlaylistScalarWhereInput | LikedPlaylistScalarWhereInput[]
    id?: StringFilter<"LikedPlaylist"> | string
    liked?: BoolFilter<"LikedPlaylist"> | boolean
    userId?: StringNullableFilter<"LikedPlaylist"> | string | null
    playlistId?: StringNullableFilter<"LikedPlaylist"> | string | null
  }

  export type FollowedUserUpsertWithWhereUniqueWithoutUserInput = {
    where: FollowedUserWhereUniqueInput
    update: XOR<FollowedUserUpdateWithoutUserInput, FollowedUserUncheckedUpdateWithoutUserInput>
    create: XOR<FollowedUserCreateWithoutUserInput, FollowedUserUncheckedCreateWithoutUserInput>
  }

  export type FollowedUserUpdateWithWhereUniqueWithoutUserInput = {
    where: FollowedUserWhereUniqueInput
    data: XOR<FollowedUserUpdateWithoutUserInput, FollowedUserUncheckedUpdateWithoutUserInput>
  }

  export type FollowedUserUpdateManyWithWhereWithoutUserInput = {
    where: FollowedUserScalarWhereInput
    data: XOR<FollowedUserUpdateManyMutationInput, FollowedUserUncheckedUpdateManyWithoutUserInput>
  }

  export type FollowedUserScalarWhereInput = {
    AND?: FollowedUserScalarWhereInput | FollowedUserScalarWhereInput[]
    OR?: FollowedUserScalarWhereInput[]
    NOT?: FollowedUserScalarWhereInput | FollowedUserScalarWhereInput[]
    id?: StringFilter<"FollowedUser"> | string
    userId?: StringNullableListFilter<"FollowedUser">
    followed?: BoolFilter<"FollowedUser"> | boolean
  }

  export type FollowedByUpsertWithWhereUniqueWithoutUserInput = {
    where: FollowedByWhereUniqueInput
    update: XOR<FollowedByUpdateWithoutUserInput, FollowedByUncheckedUpdateWithoutUserInput>
    create: XOR<FollowedByCreateWithoutUserInput, FollowedByUncheckedCreateWithoutUserInput>
  }

  export type FollowedByUpdateWithWhereUniqueWithoutUserInput = {
    where: FollowedByWhereUniqueInput
    data: XOR<FollowedByUpdateWithoutUserInput, FollowedByUncheckedUpdateWithoutUserInput>
  }

  export type FollowedByUpdateManyWithWhereWithoutUserInput = {
    where: FollowedByScalarWhereInput
    data: XOR<FollowedByUpdateManyMutationInput, FollowedByUncheckedUpdateManyWithoutUserInput>
  }

  export type FollowedByScalarWhereInput = {
    AND?: FollowedByScalarWhereInput | FollowedByScalarWhereInput[]
    OR?: FollowedByScalarWhereInput[]
    NOT?: FollowedByScalarWhereInput | FollowedByScalarWhereInput[]
    id?: StringFilter<"FollowedBy"> | string
    userId?: StringNullableListFilter<"FollowedBy">
    followed?: BoolFilter<"FollowedBy"> | boolean
  }

  export type ArtistCreateWithoutSongInput = {
    id?: string
    name: string
    img: string
    Albums?: AlbumsCreateNestedManyWithoutArtistInput
    Genres?: GenresCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutSongInput = {
    id?: string
    name: string
    img: string
    songId?: ArtistCreatesongIdInput | string[]
    albumsId?: ArtistCreatealbumsIdInput | string[]
    genreId?: ArtistCreategenreIdInput | string[]
    Albums?: AlbumsUncheckedCreateNestedManyWithoutArtistInput
    Genres?: GenresUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutSongInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutSongInput, ArtistUncheckedCreateWithoutSongInput>
  }

  export type AlbumsCreateWithoutSongInput = {
    id?: string
    name: string
    cover: string
    LikedAlbums?: LikedAlbumsCreateNestedManyWithoutAlbumsInput
    Artist?: ArtistCreateNestedManyWithoutAlbumsInput
    Genres?: GenresCreateNestedManyWithoutAlbumsInput
  }

  export type AlbumsUncheckedCreateWithoutSongInput = {
    id?: string
    name: string
    cover: string
    songId?: AlbumsCreatesongIdInput | string[]
    artistId?: AlbumsCreateartistIdInput | string[]
    genreId?: AlbumsCreategenreIdInput | string[]
    LikedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutAlbumsInput
    Artist?: ArtistUncheckedCreateNestedManyWithoutAlbumsInput
    Genres?: GenresUncheckedCreateNestedManyWithoutAlbumsInput
  }

  export type AlbumsCreateOrConnectWithoutSongInput = {
    where: AlbumsWhereUniqueInput
    create: XOR<AlbumsCreateWithoutSongInput, AlbumsUncheckedCreateWithoutSongInput>
  }

  export type GenresCreateWithoutSongInput = {
    id?: string
    name: string
    Artist?: ArtistCreateNestedManyWithoutGenresInput
    Albums?: AlbumsCreateNestedManyWithoutGenresInput
  }

  export type GenresUncheckedCreateWithoutSongInput = {
    id?: string
    name: string
    songId?: GenresCreatesongIdInput | string[]
    artistId?: GenresCreateartistIdInput | string[]
    albumId?: GenresCreatealbumIdInput | string[]
    Artist?: ArtistUncheckedCreateNestedManyWithoutGenresInput
    Albums?: AlbumsUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenresCreateOrConnectWithoutSongInput = {
    where: GenresWhereUniqueInput
    create: XOR<GenresCreateWithoutSongInput, GenresUncheckedCreateWithoutSongInput>
  }

  export type UserCreateWithoutSongInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar: string
    LikedSong?: LikedSongCreateNestedManyWithoutUserInput
    LikedAlbums?: LikedAlbumsCreateNestedManyWithoutUserInput
    Playlist?: PlaylistCreateNestedManyWithoutUserInput
    LikedPlaylist?: LikedPlaylistCreateNestedManyWithoutUserInput
    FollowedUser?: FollowedUserCreateNestedManyWithoutUserInput
    FollowedBy?: FollowedByCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSongInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar: string
    followedUserId?: UserCreatefollowedUserIdInput | string[]
    followedById?: UserCreatefollowedByIdInput | string[]
    LikedSong?: LikedSongUncheckedCreateNestedManyWithoutUserInput
    LikedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutUserInput
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    LikedPlaylist?: LikedPlaylistUncheckedCreateNestedManyWithoutUserInput
    FollowedUser?: FollowedUserUncheckedCreateNestedManyWithoutUserInput
    FollowedBy?: FollowedByUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSongInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSongInput, UserUncheckedCreateWithoutSongInput>
  }

  export type LikedSongCreateWithoutSongInput = {
    id?: string
    liked: boolean
    User?: UserCreateNestedOneWithoutLikedSongInput
  }

  export type LikedSongUncheckedCreateWithoutSongInput = {
    id?: string
    liked: boolean
    userId?: string | null
  }

  export type LikedSongCreateOrConnectWithoutSongInput = {
    where: LikedSongWhereUniqueInput
    create: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput>
  }

  export type LikedSongCreateManySongInputEnvelope = {
    data: LikedSongCreateManySongInput | LikedSongCreateManySongInput[]
  }

  export type PlaylistCreateWithoutSongInput = {
    id?: string
    name: string
    cover: string
    numSong?: number | null
    User?: UserCreateNestedOneWithoutPlaylistInput
    LikedPlaylist?: LikedPlaylistCreateNestedManyWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutSongInput = {
    id?: string
    name: string
    cover: string
    numSong?: number | null
    songId?: PlaylistCreatesongIdInput | string[]
    userId?: string | null
    LikedPlaylist?: LikedPlaylistUncheckedCreateNestedManyWithoutPlaylistsInput
  }

  export type PlaylistCreateOrConnectWithoutSongInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutSongInput, PlaylistUncheckedCreateWithoutSongInput>
  }

  export type ArtistUpsertWithWhereUniqueWithoutSongInput = {
    where: ArtistWhereUniqueInput
    update: XOR<ArtistUpdateWithoutSongInput, ArtistUncheckedUpdateWithoutSongInput>
    create: XOR<ArtistCreateWithoutSongInput, ArtistUncheckedCreateWithoutSongInput>
  }

  export type ArtistUpdateWithWhereUniqueWithoutSongInput = {
    where: ArtistWhereUniqueInput
    data: XOR<ArtistUpdateWithoutSongInput, ArtistUncheckedUpdateWithoutSongInput>
  }

  export type ArtistUpdateManyWithWhereWithoutSongInput = {
    where: ArtistScalarWhereInput
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyWithoutSongInput>
  }

  export type ArtistScalarWhereInput = {
    AND?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
    OR?: ArtistScalarWhereInput[]
    NOT?: ArtistScalarWhereInput | ArtistScalarWhereInput[]
    id?: StringFilter<"Artist"> | string
    name?: StringFilter<"Artist"> | string
    img?: StringFilter<"Artist"> | string
    songId?: StringNullableListFilter<"Artist">
    albumsId?: StringNullableListFilter<"Artist">
    genreId?: StringNullableListFilter<"Artist">
  }

  export type AlbumsUpsertWithWhereUniqueWithoutSongInput = {
    where: AlbumsWhereUniqueInput
    update: XOR<AlbumsUpdateWithoutSongInput, AlbumsUncheckedUpdateWithoutSongInput>
    create: XOR<AlbumsCreateWithoutSongInput, AlbumsUncheckedCreateWithoutSongInput>
  }

  export type AlbumsUpdateWithWhereUniqueWithoutSongInput = {
    where: AlbumsWhereUniqueInput
    data: XOR<AlbumsUpdateWithoutSongInput, AlbumsUncheckedUpdateWithoutSongInput>
  }

  export type AlbumsUpdateManyWithWhereWithoutSongInput = {
    where: AlbumsScalarWhereInput
    data: XOR<AlbumsUpdateManyMutationInput, AlbumsUncheckedUpdateManyWithoutSongInput>
  }

  export type AlbumsScalarWhereInput = {
    AND?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
    OR?: AlbumsScalarWhereInput[]
    NOT?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
    id?: StringFilter<"Albums"> | string
    name?: StringFilter<"Albums"> | string
    cover?: StringFilter<"Albums"> | string
    songId?: StringNullableListFilter<"Albums">
    artistId?: StringNullableListFilter<"Albums">
    genreId?: StringNullableListFilter<"Albums">
  }

  export type GenresUpsertWithWhereUniqueWithoutSongInput = {
    where: GenresWhereUniqueInput
    update: XOR<GenresUpdateWithoutSongInput, GenresUncheckedUpdateWithoutSongInput>
    create: XOR<GenresCreateWithoutSongInput, GenresUncheckedCreateWithoutSongInput>
  }

  export type GenresUpdateWithWhereUniqueWithoutSongInput = {
    where: GenresWhereUniqueInput
    data: XOR<GenresUpdateWithoutSongInput, GenresUncheckedUpdateWithoutSongInput>
  }

  export type GenresUpdateManyWithWhereWithoutSongInput = {
    where: GenresScalarWhereInput
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyWithoutSongInput>
  }

  export type GenresScalarWhereInput = {
    AND?: GenresScalarWhereInput | GenresScalarWhereInput[]
    OR?: GenresScalarWhereInput[]
    NOT?: GenresScalarWhereInput | GenresScalarWhereInput[]
    id?: StringFilter<"Genres"> | string
    name?: StringFilter<"Genres"> | string
    songId?: StringNullableListFilter<"Genres">
    artistId?: StringNullableListFilter<"Genres">
    albumId?: StringNullableListFilter<"Genres">
  }

  export type UserUpsertWithoutSongInput = {
    update: XOR<UserUpdateWithoutSongInput, UserUncheckedUpdateWithoutSongInput>
    create: XOR<UserCreateWithoutSongInput, UserUncheckedCreateWithoutSongInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSongInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSongInput, UserUncheckedUpdateWithoutSongInput>
  }

  export type UserUpdateWithoutSongInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    LikedSong?: LikedSongUpdateManyWithoutUserNestedInput
    LikedAlbums?: LikedAlbumsUpdateManyWithoutUserNestedInput
    Playlist?: PlaylistUpdateManyWithoutUserNestedInput
    LikedPlaylist?: LikedPlaylistUpdateManyWithoutUserNestedInput
    FollowedUser?: FollowedUserUpdateManyWithoutUserNestedInput
    FollowedBy?: FollowedByUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSongInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    followedUserId?: UserUpdatefollowedUserIdInput | string[]
    followedById?: UserUpdatefollowedByIdInput | string[]
    LikedSong?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
    LikedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutUserNestedInput
    Playlist?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    LikedPlaylist?: LikedPlaylistUncheckedUpdateManyWithoutUserNestedInput
    FollowedUser?: FollowedUserUncheckedUpdateManyWithoutUserNestedInput
    FollowedBy?: FollowedByUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LikedSongUpsertWithWhereUniqueWithoutSongInput = {
    where: LikedSongWhereUniqueInput
    update: XOR<LikedSongUpdateWithoutSongInput, LikedSongUncheckedUpdateWithoutSongInput>
    create: XOR<LikedSongCreateWithoutSongInput, LikedSongUncheckedCreateWithoutSongInput>
  }

  export type LikedSongUpdateWithWhereUniqueWithoutSongInput = {
    where: LikedSongWhereUniqueInput
    data: XOR<LikedSongUpdateWithoutSongInput, LikedSongUncheckedUpdateWithoutSongInput>
  }

  export type LikedSongUpdateManyWithWhereWithoutSongInput = {
    where: LikedSongScalarWhereInput
    data: XOR<LikedSongUpdateManyMutationInput, LikedSongUncheckedUpdateManyWithoutSongInput>
  }

  export type PlaylistUpsertWithWhereUniqueWithoutSongInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutSongInput, PlaylistUncheckedUpdateWithoutSongInput>
    create: XOR<PlaylistCreateWithoutSongInput, PlaylistUncheckedCreateWithoutSongInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutSongInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutSongInput, PlaylistUncheckedUpdateWithoutSongInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutSongInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutSongInput>
  }

  export type SongCreateWithoutArtistInput = {
    id?: string
    url: string
    cover: string
    name: string
    duration?: string | null
    listened?: number | null
    Album?: AlbumsCreateNestedManyWithoutSongInput
    Genres?: GenresCreateNestedManyWithoutSongInput
    User?: UserCreateNestedOneWithoutSongInput
    LikedSong?: LikedSongCreateNestedManyWithoutSongInput
    Playlist?: PlaylistCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutArtistInput = {
    id?: string
    url: string
    cover: string
    name: string
    duration?: string | null
    listened?: number | null
    artistId?: SongCreateartistIdInput | string[]
    albumId?: SongCreatealbumIdInput | string[]
    genreId?: SongCreategenreIdInput | string[]
    userId?: string | null
    playlistId?: SongCreateplaylistIdInput | string[]
    Album?: AlbumsUncheckedCreateNestedManyWithoutSongInput
    Genres?: GenresUncheckedCreateNestedManyWithoutSongInput
    LikedSong?: LikedSongUncheckedCreateNestedManyWithoutSongInput
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutArtistInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput>
  }

  export type AlbumsCreateWithoutArtistInput = {
    id?: string
    name: string
    cover: string
    LikedAlbums?: LikedAlbumsCreateNestedManyWithoutAlbumsInput
    Song?: SongCreateNestedManyWithoutAlbumInput
    Genres?: GenresCreateNestedManyWithoutAlbumsInput
  }

  export type AlbumsUncheckedCreateWithoutArtistInput = {
    id?: string
    name: string
    cover: string
    songId?: AlbumsCreatesongIdInput | string[]
    artistId?: AlbumsCreateartistIdInput | string[]
    genreId?: AlbumsCreategenreIdInput | string[]
    LikedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutAlbumsInput
    Song?: SongUncheckedCreateNestedManyWithoutAlbumInput
    Genres?: GenresUncheckedCreateNestedManyWithoutAlbumsInput
  }

  export type AlbumsCreateOrConnectWithoutArtistInput = {
    where: AlbumsWhereUniqueInput
    create: XOR<AlbumsCreateWithoutArtistInput, AlbumsUncheckedCreateWithoutArtistInput>
  }

  export type GenresCreateWithoutArtistInput = {
    id?: string
    name: string
    Song?: SongCreateNestedManyWithoutGenresInput
    Albums?: AlbumsCreateNestedManyWithoutGenresInput
  }

  export type GenresUncheckedCreateWithoutArtistInput = {
    id?: string
    name: string
    songId?: GenresCreatesongIdInput | string[]
    artistId?: GenresCreateartistIdInput | string[]
    albumId?: GenresCreatealbumIdInput | string[]
    Song?: SongUncheckedCreateNestedManyWithoutGenresInput
    Albums?: AlbumsUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenresCreateOrConnectWithoutArtistInput = {
    where: GenresWhereUniqueInput
    create: XOR<GenresCreateWithoutArtistInput, GenresUncheckedCreateWithoutArtistInput>
  }

  export type SongUpsertWithWhereUniqueWithoutArtistInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutArtistInput, SongUncheckedUpdateWithoutArtistInput>
    create: XOR<SongCreateWithoutArtistInput, SongUncheckedCreateWithoutArtistInput>
  }

  export type SongUpdateWithWhereUniqueWithoutArtistInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutArtistInput, SongUncheckedUpdateWithoutArtistInput>
  }

  export type SongUpdateManyWithWhereWithoutArtistInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutArtistInput>
  }

  export type AlbumsUpsertWithWhereUniqueWithoutArtistInput = {
    where: AlbumsWhereUniqueInput
    update: XOR<AlbumsUpdateWithoutArtistInput, AlbumsUncheckedUpdateWithoutArtistInput>
    create: XOR<AlbumsCreateWithoutArtistInput, AlbumsUncheckedCreateWithoutArtistInput>
  }

  export type AlbumsUpdateWithWhereUniqueWithoutArtistInput = {
    where: AlbumsWhereUniqueInput
    data: XOR<AlbumsUpdateWithoutArtistInput, AlbumsUncheckedUpdateWithoutArtistInput>
  }

  export type AlbumsUpdateManyWithWhereWithoutArtistInput = {
    where: AlbumsScalarWhereInput
    data: XOR<AlbumsUpdateManyMutationInput, AlbumsUncheckedUpdateManyWithoutArtistInput>
  }

  export type GenresUpsertWithWhereUniqueWithoutArtistInput = {
    where: GenresWhereUniqueInput
    update: XOR<GenresUpdateWithoutArtistInput, GenresUncheckedUpdateWithoutArtistInput>
    create: XOR<GenresCreateWithoutArtistInput, GenresUncheckedCreateWithoutArtistInput>
  }

  export type GenresUpdateWithWhereUniqueWithoutArtistInput = {
    where: GenresWhereUniqueInput
    data: XOR<GenresUpdateWithoutArtistInput, GenresUncheckedUpdateWithoutArtistInput>
  }

  export type GenresUpdateManyWithWhereWithoutArtistInput = {
    where: GenresScalarWhereInput
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyWithoutArtistInput>
  }

  export type LikedAlbumsCreateWithoutAlbumsInput = {
    id?: string
    liked: boolean
    User?: UserCreateNestedOneWithoutLikedAlbumsInput
  }

  export type LikedAlbumsUncheckedCreateWithoutAlbumsInput = {
    id?: string
    liked: boolean
    userId?: string | null
  }

  export type LikedAlbumsCreateOrConnectWithoutAlbumsInput = {
    where: LikedAlbumsWhereUniqueInput
    create: XOR<LikedAlbumsCreateWithoutAlbumsInput, LikedAlbumsUncheckedCreateWithoutAlbumsInput>
  }

  export type LikedAlbumsCreateManyAlbumsInputEnvelope = {
    data: LikedAlbumsCreateManyAlbumsInput | LikedAlbumsCreateManyAlbumsInput[]
  }

  export type SongCreateWithoutAlbumInput = {
    id?: string
    url: string
    cover: string
    name: string
    duration?: string | null
    listened?: number | null
    Artist?: ArtistCreateNestedManyWithoutSongInput
    Genres?: GenresCreateNestedManyWithoutSongInput
    User?: UserCreateNestedOneWithoutSongInput
    LikedSong?: LikedSongCreateNestedManyWithoutSongInput
    Playlist?: PlaylistCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutAlbumInput = {
    id?: string
    url: string
    cover: string
    name: string
    duration?: string | null
    listened?: number | null
    artistId?: SongCreateartistIdInput | string[]
    albumId?: SongCreatealbumIdInput | string[]
    genreId?: SongCreategenreIdInput | string[]
    userId?: string | null
    playlistId?: SongCreateplaylistIdInput | string[]
    Artist?: ArtistUncheckedCreateNestedManyWithoutSongInput
    Genres?: GenresUncheckedCreateNestedManyWithoutSongInput
    LikedSong?: LikedSongUncheckedCreateNestedManyWithoutSongInput
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutAlbumInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput>
  }

  export type ArtistCreateWithoutAlbumsInput = {
    id?: string
    name: string
    img: string
    Song?: SongCreateNestedManyWithoutArtistInput
    Genres?: GenresCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutAlbumsInput = {
    id?: string
    name: string
    img: string
    songId?: ArtistCreatesongIdInput | string[]
    albumsId?: ArtistCreatealbumsIdInput | string[]
    genreId?: ArtistCreategenreIdInput | string[]
    Song?: SongUncheckedCreateNestedManyWithoutArtistInput
    Genres?: GenresUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutAlbumsInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
  }

  export type GenresCreateWithoutAlbumsInput = {
    id?: string
    name: string
    Song?: SongCreateNestedManyWithoutGenresInput
    Artist?: ArtistCreateNestedManyWithoutGenresInput
  }

  export type GenresUncheckedCreateWithoutAlbumsInput = {
    id?: string
    name: string
    songId?: GenresCreatesongIdInput | string[]
    artistId?: GenresCreateartistIdInput | string[]
    albumId?: GenresCreatealbumIdInput | string[]
    Song?: SongUncheckedCreateNestedManyWithoutGenresInput
    Artist?: ArtistUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenresCreateOrConnectWithoutAlbumsInput = {
    where: GenresWhereUniqueInput
    create: XOR<GenresCreateWithoutAlbumsInput, GenresUncheckedCreateWithoutAlbumsInput>
  }

  export type LikedAlbumsUpsertWithWhereUniqueWithoutAlbumsInput = {
    where: LikedAlbumsWhereUniqueInput
    update: XOR<LikedAlbumsUpdateWithoutAlbumsInput, LikedAlbumsUncheckedUpdateWithoutAlbumsInput>
    create: XOR<LikedAlbumsCreateWithoutAlbumsInput, LikedAlbumsUncheckedCreateWithoutAlbumsInput>
  }

  export type LikedAlbumsUpdateWithWhereUniqueWithoutAlbumsInput = {
    where: LikedAlbumsWhereUniqueInput
    data: XOR<LikedAlbumsUpdateWithoutAlbumsInput, LikedAlbumsUncheckedUpdateWithoutAlbumsInput>
  }

  export type LikedAlbumsUpdateManyWithWhereWithoutAlbumsInput = {
    where: LikedAlbumsScalarWhereInput
    data: XOR<LikedAlbumsUpdateManyMutationInput, LikedAlbumsUncheckedUpdateManyWithoutAlbumsInput>
  }

  export type SongUpsertWithWhereUniqueWithoutAlbumInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutAlbumInput, SongUncheckedUpdateWithoutAlbumInput>
    create: XOR<SongCreateWithoutAlbumInput, SongUncheckedCreateWithoutAlbumInput>
  }

  export type SongUpdateWithWhereUniqueWithoutAlbumInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutAlbumInput, SongUncheckedUpdateWithoutAlbumInput>
  }

  export type SongUpdateManyWithWhereWithoutAlbumInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutAlbumInput>
  }

  export type ArtistUpsertWithWhereUniqueWithoutAlbumsInput = {
    where: ArtistWhereUniqueInput
    update: XOR<ArtistUpdateWithoutAlbumsInput, ArtistUncheckedUpdateWithoutAlbumsInput>
    create: XOR<ArtistCreateWithoutAlbumsInput, ArtistUncheckedCreateWithoutAlbumsInput>
  }

  export type ArtistUpdateWithWhereUniqueWithoutAlbumsInput = {
    where: ArtistWhereUniqueInput
    data: XOR<ArtistUpdateWithoutAlbumsInput, ArtistUncheckedUpdateWithoutAlbumsInput>
  }

  export type ArtistUpdateManyWithWhereWithoutAlbumsInput = {
    where: ArtistScalarWhereInput
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyWithoutAlbumsInput>
  }

  export type GenresUpsertWithWhereUniqueWithoutAlbumsInput = {
    where: GenresWhereUniqueInput
    update: XOR<GenresUpdateWithoutAlbumsInput, GenresUncheckedUpdateWithoutAlbumsInput>
    create: XOR<GenresCreateWithoutAlbumsInput, GenresUncheckedCreateWithoutAlbumsInput>
  }

  export type GenresUpdateWithWhereUniqueWithoutAlbumsInput = {
    where: GenresWhereUniqueInput
    data: XOR<GenresUpdateWithoutAlbumsInput, GenresUncheckedUpdateWithoutAlbumsInput>
  }

  export type GenresUpdateManyWithWhereWithoutAlbumsInput = {
    where: GenresScalarWhereInput
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyWithoutAlbumsInput>
  }

  export type UserCreateWithoutLikedSongInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar: string
    Song?: SongCreateNestedManyWithoutUserInput
    LikedAlbums?: LikedAlbumsCreateNestedManyWithoutUserInput
    Playlist?: PlaylistCreateNestedManyWithoutUserInput
    LikedPlaylist?: LikedPlaylistCreateNestedManyWithoutUserInput
    FollowedUser?: FollowedUserCreateNestedManyWithoutUserInput
    FollowedBy?: FollowedByCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedSongInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar: string
    followedUserId?: UserCreatefollowedUserIdInput | string[]
    followedById?: UserCreatefollowedByIdInput | string[]
    Song?: SongUncheckedCreateNestedManyWithoutUserInput
    LikedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutUserInput
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    LikedPlaylist?: LikedPlaylistUncheckedCreateNestedManyWithoutUserInput
    FollowedUser?: FollowedUserUncheckedCreateNestedManyWithoutUserInput
    FollowedBy?: FollowedByUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedSongInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedSongInput, UserUncheckedCreateWithoutLikedSongInput>
  }

  export type SongCreateWithoutLikedSongInput = {
    id?: string
    url: string
    cover: string
    name: string
    duration?: string | null
    listened?: number | null
    Artist?: ArtistCreateNestedManyWithoutSongInput
    Album?: AlbumsCreateNestedManyWithoutSongInput
    Genres?: GenresCreateNestedManyWithoutSongInput
    User?: UserCreateNestedOneWithoutSongInput
    Playlist?: PlaylistCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutLikedSongInput = {
    id?: string
    url: string
    cover: string
    name: string
    duration?: string | null
    listened?: number | null
    artistId?: SongCreateartistIdInput | string[]
    albumId?: SongCreatealbumIdInput | string[]
    genreId?: SongCreategenreIdInput | string[]
    userId?: string | null
    playlistId?: SongCreateplaylistIdInput | string[]
    Artist?: ArtistUncheckedCreateNestedManyWithoutSongInput
    Album?: AlbumsUncheckedCreateNestedManyWithoutSongInput
    Genres?: GenresUncheckedCreateNestedManyWithoutSongInput
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutLikedSongInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutLikedSongInput, SongUncheckedCreateWithoutLikedSongInput>
  }

  export type UserUpsertWithoutLikedSongInput = {
    update: XOR<UserUpdateWithoutLikedSongInput, UserUncheckedUpdateWithoutLikedSongInput>
    create: XOR<UserCreateWithoutLikedSongInput, UserUncheckedCreateWithoutLikedSongInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedSongInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedSongInput, UserUncheckedUpdateWithoutLikedSongInput>
  }

  export type UserUpdateWithoutLikedSongInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    Song?: SongUpdateManyWithoutUserNestedInput
    LikedAlbums?: LikedAlbumsUpdateManyWithoutUserNestedInput
    Playlist?: PlaylistUpdateManyWithoutUserNestedInput
    LikedPlaylist?: LikedPlaylistUpdateManyWithoutUserNestedInput
    FollowedUser?: FollowedUserUpdateManyWithoutUserNestedInput
    FollowedBy?: FollowedByUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedSongInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    followedUserId?: UserUpdatefollowedUserIdInput | string[]
    followedById?: UserUpdatefollowedByIdInput | string[]
    Song?: SongUncheckedUpdateManyWithoutUserNestedInput
    LikedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutUserNestedInput
    Playlist?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    LikedPlaylist?: LikedPlaylistUncheckedUpdateManyWithoutUserNestedInput
    FollowedUser?: FollowedUserUncheckedUpdateManyWithoutUserNestedInput
    FollowedBy?: FollowedByUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SongUpsertWithoutLikedSongInput = {
    update: XOR<SongUpdateWithoutLikedSongInput, SongUncheckedUpdateWithoutLikedSongInput>
    create: XOR<SongCreateWithoutLikedSongInput, SongUncheckedCreateWithoutLikedSongInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutLikedSongInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutLikedSongInput, SongUncheckedUpdateWithoutLikedSongInput>
  }

  export type SongUpdateWithoutLikedSongInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    Artist?: ArtistUpdateManyWithoutSongNestedInput
    Album?: AlbumsUpdateManyWithoutSongNestedInput
    Genres?: GenresUpdateManyWithoutSongNestedInput
    User?: UserUpdateOneWithoutSongNestedInput
    Playlist?: PlaylistUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutLikedSongInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: SongUpdateartistIdInput | string[]
    albumId?: SongUpdatealbumIdInput | string[]
    genreId?: SongUpdategenreIdInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: SongUpdateplaylistIdInput | string[]
    Artist?: ArtistUncheckedUpdateManyWithoutSongNestedInput
    Album?: AlbumsUncheckedUpdateManyWithoutSongNestedInput
    Genres?: GenresUncheckedUpdateManyWithoutSongNestedInput
    Playlist?: PlaylistUncheckedUpdateManyWithoutSongNestedInput
  }

  export type UserCreateWithoutLikedAlbumsInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar: string
    Song?: SongCreateNestedManyWithoutUserInput
    LikedSong?: LikedSongCreateNestedManyWithoutUserInput
    Playlist?: PlaylistCreateNestedManyWithoutUserInput
    LikedPlaylist?: LikedPlaylistCreateNestedManyWithoutUserInput
    FollowedUser?: FollowedUserCreateNestedManyWithoutUserInput
    FollowedBy?: FollowedByCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedAlbumsInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar: string
    followedUserId?: UserCreatefollowedUserIdInput | string[]
    followedById?: UserCreatefollowedByIdInput | string[]
    Song?: SongUncheckedCreateNestedManyWithoutUserInput
    LikedSong?: LikedSongUncheckedCreateNestedManyWithoutUserInput
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    LikedPlaylist?: LikedPlaylistUncheckedCreateNestedManyWithoutUserInput
    FollowedUser?: FollowedUserUncheckedCreateNestedManyWithoutUserInput
    FollowedBy?: FollowedByUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedAlbumsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
  }

  export type AlbumsCreateWithoutLikedAlbumsInput = {
    id?: string
    name: string
    cover: string
    Song?: SongCreateNestedManyWithoutAlbumInput
    Artist?: ArtistCreateNestedManyWithoutAlbumsInput
    Genres?: GenresCreateNestedManyWithoutAlbumsInput
  }

  export type AlbumsUncheckedCreateWithoutLikedAlbumsInput = {
    id?: string
    name: string
    cover: string
    songId?: AlbumsCreatesongIdInput | string[]
    artistId?: AlbumsCreateartistIdInput | string[]
    genreId?: AlbumsCreategenreIdInput | string[]
    Song?: SongUncheckedCreateNestedManyWithoutAlbumInput
    Artist?: ArtistUncheckedCreateNestedManyWithoutAlbumsInput
    Genres?: GenresUncheckedCreateNestedManyWithoutAlbumsInput
  }

  export type AlbumsCreateOrConnectWithoutLikedAlbumsInput = {
    where: AlbumsWhereUniqueInput
    create: XOR<AlbumsCreateWithoutLikedAlbumsInput, AlbumsUncheckedCreateWithoutLikedAlbumsInput>
  }

  export type UserUpsertWithoutLikedAlbumsInput = {
    update: XOR<UserUpdateWithoutLikedAlbumsInput, UserUncheckedUpdateWithoutLikedAlbumsInput>
    create: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedAlbumsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedAlbumsInput, UserUncheckedUpdateWithoutLikedAlbumsInput>
  }

  export type UserUpdateWithoutLikedAlbumsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    Song?: SongUpdateManyWithoutUserNestedInput
    LikedSong?: LikedSongUpdateManyWithoutUserNestedInput
    Playlist?: PlaylistUpdateManyWithoutUserNestedInput
    LikedPlaylist?: LikedPlaylistUpdateManyWithoutUserNestedInput
    FollowedUser?: FollowedUserUpdateManyWithoutUserNestedInput
    FollowedBy?: FollowedByUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedAlbumsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    followedUserId?: UserUpdatefollowedUserIdInput | string[]
    followedById?: UserUpdatefollowedByIdInput | string[]
    Song?: SongUncheckedUpdateManyWithoutUserNestedInput
    LikedSong?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
    Playlist?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    LikedPlaylist?: LikedPlaylistUncheckedUpdateManyWithoutUserNestedInput
    FollowedUser?: FollowedUserUncheckedUpdateManyWithoutUserNestedInput
    FollowedBy?: FollowedByUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AlbumsUpsertWithoutLikedAlbumsInput = {
    update: XOR<AlbumsUpdateWithoutLikedAlbumsInput, AlbumsUncheckedUpdateWithoutLikedAlbumsInput>
    create: XOR<AlbumsCreateWithoutLikedAlbumsInput, AlbumsUncheckedCreateWithoutLikedAlbumsInput>
    where?: AlbumsWhereInput
  }

  export type AlbumsUpdateToOneWithWhereWithoutLikedAlbumsInput = {
    where?: AlbumsWhereInput
    data: XOR<AlbumsUpdateWithoutLikedAlbumsInput, AlbumsUncheckedUpdateWithoutLikedAlbumsInput>
  }

  export type AlbumsUpdateWithoutLikedAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    Song?: SongUpdateManyWithoutAlbumNestedInput
    Artist?: ArtistUpdateManyWithoutAlbumsNestedInput
    Genres?: GenresUpdateManyWithoutAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateWithoutLikedAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    songId?: AlbumsUpdatesongIdInput | string[]
    artistId?: AlbumsUpdateartistIdInput | string[]
    genreId?: AlbumsUpdategenreIdInput | string[]
    Song?: SongUncheckedUpdateManyWithoutAlbumNestedInput
    Artist?: ArtistUncheckedUpdateManyWithoutAlbumsNestedInput
    Genres?: GenresUncheckedUpdateManyWithoutAlbumsNestedInput
  }

  export type UserCreateWithoutLikedPlaylistInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar: string
    Song?: SongCreateNestedManyWithoutUserInput
    LikedSong?: LikedSongCreateNestedManyWithoutUserInput
    LikedAlbums?: LikedAlbumsCreateNestedManyWithoutUserInput
    Playlist?: PlaylistCreateNestedManyWithoutUserInput
    FollowedUser?: FollowedUserCreateNestedManyWithoutUserInput
    FollowedBy?: FollowedByCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedPlaylistInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar: string
    followedUserId?: UserCreatefollowedUserIdInput | string[]
    followedById?: UserCreatefollowedByIdInput | string[]
    Song?: SongUncheckedCreateNestedManyWithoutUserInput
    LikedSong?: LikedSongUncheckedCreateNestedManyWithoutUserInput
    LikedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutUserInput
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    FollowedUser?: FollowedUserUncheckedCreateNestedManyWithoutUserInput
    FollowedBy?: FollowedByUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedPlaylistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedPlaylistInput, UserUncheckedCreateWithoutLikedPlaylistInput>
  }

  export type PlaylistCreateWithoutLikedPlaylistInput = {
    id?: string
    name: string
    cover: string
    numSong?: number | null
    Song?: SongCreateNestedManyWithoutPlaylistInput
    User?: UserCreateNestedOneWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutLikedPlaylistInput = {
    id?: string
    name: string
    cover: string
    numSong?: number | null
    songId?: PlaylistCreatesongIdInput | string[]
    userId?: string | null
    Song?: SongUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutLikedPlaylistInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutLikedPlaylistInput, PlaylistUncheckedCreateWithoutLikedPlaylistInput>
  }

  export type UserUpsertWithoutLikedPlaylistInput = {
    update: XOR<UserUpdateWithoutLikedPlaylistInput, UserUncheckedUpdateWithoutLikedPlaylistInput>
    create: XOR<UserCreateWithoutLikedPlaylistInput, UserUncheckedCreateWithoutLikedPlaylistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedPlaylistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedPlaylistInput, UserUncheckedUpdateWithoutLikedPlaylistInput>
  }

  export type UserUpdateWithoutLikedPlaylistInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    Song?: SongUpdateManyWithoutUserNestedInput
    LikedSong?: LikedSongUpdateManyWithoutUserNestedInput
    LikedAlbums?: LikedAlbumsUpdateManyWithoutUserNestedInput
    Playlist?: PlaylistUpdateManyWithoutUserNestedInput
    FollowedUser?: FollowedUserUpdateManyWithoutUserNestedInput
    FollowedBy?: FollowedByUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedPlaylistInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    followedUserId?: UserUpdatefollowedUserIdInput | string[]
    followedById?: UserUpdatefollowedByIdInput | string[]
    Song?: SongUncheckedUpdateManyWithoutUserNestedInput
    LikedSong?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
    LikedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutUserNestedInput
    Playlist?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    FollowedUser?: FollowedUserUncheckedUpdateManyWithoutUserNestedInput
    FollowedBy?: FollowedByUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaylistUpsertWithoutLikedPlaylistInput = {
    update: XOR<PlaylistUpdateWithoutLikedPlaylistInput, PlaylistUncheckedUpdateWithoutLikedPlaylistInput>
    create: XOR<PlaylistCreateWithoutLikedPlaylistInput, PlaylistUncheckedCreateWithoutLikedPlaylistInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutLikedPlaylistInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutLikedPlaylistInput, PlaylistUncheckedUpdateWithoutLikedPlaylistInput>
  }

  export type PlaylistUpdateWithoutLikedPlaylistInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    numSong?: NullableIntFieldUpdateOperationsInput | number | null
    Song?: SongUpdateManyWithoutPlaylistNestedInput
    User?: UserUpdateOneWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutLikedPlaylistInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    numSong?: NullableIntFieldUpdateOperationsInput | number | null
    songId?: PlaylistUpdatesongIdInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    Song?: SongUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type SongCreateWithoutGenresInput = {
    id?: string
    url: string
    cover: string
    name: string
    duration?: string | null
    listened?: number | null
    Artist?: ArtistCreateNestedManyWithoutSongInput
    Album?: AlbumsCreateNestedManyWithoutSongInput
    User?: UserCreateNestedOneWithoutSongInput
    LikedSong?: LikedSongCreateNestedManyWithoutSongInput
    Playlist?: PlaylistCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutGenresInput = {
    id?: string
    url: string
    cover: string
    name: string
    duration?: string | null
    listened?: number | null
    artistId?: SongCreateartistIdInput | string[]
    albumId?: SongCreatealbumIdInput | string[]
    genreId?: SongCreategenreIdInput | string[]
    userId?: string | null
    playlistId?: SongCreateplaylistIdInput | string[]
    Artist?: ArtistUncheckedCreateNestedManyWithoutSongInput
    Album?: AlbumsUncheckedCreateNestedManyWithoutSongInput
    LikedSong?: LikedSongUncheckedCreateNestedManyWithoutSongInput
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutGenresInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutGenresInput, SongUncheckedCreateWithoutGenresInput>
  }

  export type ArtistCreateWithoutGenresInput = {
    id?: string
    name: string
    img: string
    Song?: SongCreateNestedManyWithoutArtistInput
    Albums?: AlbumsCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutGenresInput = {
    id?: string
    name: string
    img: string
    songId?: ArtistCreatesongIdInput | string[]
    albumsId?: ArtistCreatealbumsIdInput | string[]
    genreId?: ArtistCreategenreIdInput | string[]
    Song?: SongUncheckedCreateNestedManyWithoutArtistInput
    Albums?: AlbumsUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutGenresInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutGenresInput, ArtistUncheckedCreateWithoutGenresInput>
  }

  export type AlbumsCreateWithoutGenresInput = {
    id?: string
    name: string
    cover: string
    LikedAlbums?: LikedAlbumsCreateNestedManyWithoutAlbumsInput
    Song?: SongCreateNestedManyWithoutAlbumInput
    Artist?: ArtistCreateNestedManyWithoutAlbumsInput
  }

  export type AlbumsUncheckedCreateWithoutGenresInput = {
    id?: string
    name: string
    cover: string
    songId?: AlbumsCreatesongIdInput | string[]
    artistId?: AlbumsCreateartistIdInput | string[]
    genreId?: AlbumsCreategenreIdInput | string[]
    LikedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutAlbumsInput
    Song?: SongUncheckedCreateNestedManyWithoutAlbumInput
    Artist?: ArtistUncheckedCreateNestedManyWithoutAlbumsInput
  }

  export type AlbumsCreateOrConnectWithoutGenresInput = {
    where: AlbumsWhereUniqueInput
    create: XOR<AlbumsCreateWithoutGenresInput, AlbumsUncheckedCreateWithoutGenresInput>
  }

  export type SongUpsertWithWhereUniqueWithoutGenresInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutGenresInput, SongUncheckedUpdateWithoutGenresInput>
    create: XOR<SongCreateWithoutGenresInput, SongUncheckedCreateWithoutGenresInput>
  }

  export type SongUpdateWithWhereUniqueWithoutGenresInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutGenresInput, SongUncheckedUpdateWithoutGenresInput>
  }

  export type SongUpdateManyWithWhereWithoutGenresInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutGenresInput>
  }

  export type ArtistUpsertWithWhereUniqueWithoutGenresInput = {
    where: ArtistWhereUniqueInput
    update: XOR<ArtistUpdateWithoutGenresInput, ArtistUncheckedUpdateWithoutGenresInput>
    create: XOR<ArtistCreateWithoutGenresInput, ArtistUncheckedCreateWithoutGenresInput>
  }

  export type ArtistUpdateWithWhereUniqueWithoutGenresInput = {
    where: ArtistWhereUniqueInput
    data: XOR<ArtistUpdateWithoutGenresInput, ArtistUncheckedUpdateWithoutGenresInput>
  }

  export type ArtistUpdateManyWithWhereWithoutGenresInput = {
    where: ArtistScalarWhereInput
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyWithoutGenresInput>
  }

  export type AlbumsUpsertWithWhereUniqueWithoutGenresInput = {
    where: AlbumsWhereUniqueInput
    update: XOR<AlbumsUpdateWithoutGenresInput, AlbumsUncheckedUpdateWithoutGenresInput>
    create: XOR<AlbumsCreateWithoutGenresInput, AlbumsUncheckedCreateWithoutGenresInput>
  }

  export type AlbumsUpdateWithWhereUniqueWithoutGenresInput = {
    where: AlbumsWhereUniqueInput
    data: XOR<AlbumsUpdateWithoutGenresInput, AlbumsUncheckedUpdateWithoutGenresInput>
  }

  export type AlbumsUpdateManyWithWhereWithoutGenresInput = {
    where: AlbumsScalarWhereInput
    data: XOR<AlbumsUpdateManyMutationInput, AlbumsUncheckedUpdateManyWithoutGenresInput>
  }

  export type SongCreateWithoutPlaylistInput = {
    id?: string
    url: string
    cover: string
    name: string
    duration?: string | null
    listened?: number | null
    Artist?: ArtistCreateNestedManyWithoutSongInput
    Album?: AlbumsCreateNestedManyWithoutSongInput
    Genres?: GenresCreateNestedManyWithoutSongInput
    User?: UserCreateNestedOneWithoutSongInput
    LikedSong?: LikedSongCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateWithoutPlaylistInput = {
    id?: string
    url: string
    cover: string
    name: string
    duration?: string | null
    listened?: number | null
    artistId?: SongCreateartistIdInput | string[]
    albumId?: SongCreatealbumIdInput | string[]
    genreId?: SongCreategenreIdInput | string[]
    userId?: string | null
    playlistId?: SongCreateplaylistIdInput | string[]
    Artist?: ArtistUncheckedCreateNestedManyWithoutSongInput
    Album?: AlbumsUncheckedCreateNestedManyWithoutSongInput
    Genres?: GenresUncheckedCreateNestedManyWithoutSongInput
    LikedSong?: LikedSongUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongCreateOrConnectWithoutPlaylistInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput>
  }

  export type UserCreateWithoutPlaylistInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar: string
    Song?: SongCreateNestedManyWithoutUserInput
    LikedSong?: LikedSongCreateNestedManyWithoutUserInput
    LikedAlbums?: LikedAlbumsCreateNestedManyWithoutUserInput
    LikedPlaylist?: LikedPlaylistCreateNestedManyWithoutUserInput
    FollowedUser?: FollowedUserCreateNestedManyWithoutUserInput
    FollowedBy?: FollowedByCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlaylistInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar: string
    followedUserId?: UserCreatefollowedUserIdInput | string[]
    followedById?: UserCreatefollowedByIdInput | string[]
    Song?: SongUncheckedCreateNestedManyWithoutUserInput
    LikedSong?: LikedSongUncheckedCreateNestedManyWithoutUserInput
    LikedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutUserInput
    LikedPlaylist?: LikedPlaylistUncheckedCreateNestedManyWithoutUserInput
    FollowedUser?: FollowedUserUncheckedCreateNestedManyWithoutUserInput
    FollowedBy?: FollowedByUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlaylistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
  }

  export type LikedPlaylistCreateWithoutPlaylistsInput = {
    id?: string
    liked: boolean
    User?: UserCreateNestedOneWithoutLikedPlaylistInput
  }

  export type LikedPlaylistUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    liked: boolean
    userId?: string | null
  }

  export type LikedPlaylistCreateOrConnectWithoutPlaylistsInput = {
    where: LikedPlaylistWhereUniqueInput
    create: XOR<LikedPlaylistCreateWithoutPlaylistsInput, LikedPlaylistUncheckedCreateWithoutPlaylistsInput>
  }

  export type LikedPlaylistCreateManyPlaylistsInputEnvelope = {
    data: LikedPlaylistCreateManyPlaylistsInput | LikedPlaylistCreateManyPlaylistsInput[]
  }

  export type SongUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: SongWhereUniqueInput
    update: XOR<SongUpdateWithoutPlaylistInput, SongUncheckedUpdateWithoutPlaylistInput>
    create: XOR<SongCreateWithoutPlaylistInput, SongUncheckedCreateWithoutPlaylistInput>
  }

  export type SongUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: SongWhereUniqueInput
    data: XOR<SongUpdateWithoutPlaylistInput, SongUncheckedUpdateWithoutPlaylistInput>
  }

  export type SongUpdateManyWithWhereWithoutPlaylistInput = {
    where: SongScalarWhereInput
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type UserUpsertWithoutPlaylistInput = {
    update: XOR<UserUpdateWithoutPlaylistInput, UserUncheckedUpdateWithoutPlaylistInput>
    create: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaylistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaylistInput, UserUncheckedUpdateWithoutPlaylistInput>
  }

  export type UserUpdateWithoutPlaylistInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    Song?: SongUpdateManyWithoutUserNestedInput
    LikedSong?: LikedSongUpdateManyWithoutUserNestedInput
    LikedAlbums?: LikedAlbumsUpdateManyWithoutUserNestedInput
    LikedPlaylist?: LikedPlaylistUpdateManyWithoutUserNestedInput
    FollowedUser?: FollowedUserUpdateManyWithoutUserNestedInput
    FollowedBy?: FollowedByUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaylistInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    followedUserId?: UserUpdatefollowedUserIdInput | string[]
    followedById?: UserUpdatefollowedByIdInput | string[]
    Song?: SongUncheckedUpdateManyWithoutUserNestedInput
    LikedSong?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
    LikedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutUserNestedInput
    LikedPlaylist?: LikedPlaylistUncheckedUpdateManyWithoutUserNestedInput
    FollowedUser?: FollowedUserUncheckedUpdateManyWithoutUserNestedInput
    FollowedBy?: FollowedByUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LikedPlaylistUpsertWithWhereUniqueWithoutPlaylistsInput = {
    where: LikedPlaylistWhereUniqueInput
    update: XOR<LikedPlaylistUpdateWithoutPlaylistsInput, LikedPlaylistUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<LikedPlaylistCreateWithoutPlaylistsInput, LikedPlaylistUncheckedCreateWithoutPlaylistsInput>
  }

  export type LikedPlaylistUpdateWithWhereUniqueWithoutPlaylistsInput = {
    where: LikedPlaylistWhereUniqueInput
    data: XOR<LikedPlaylistUpdateWithoutPlaylistsInput, LikedPlaylistUncheckedUpdateWithoutPlaylistsInput>
  }

  export type LikedPlaylistUpdateManyWithWhereWithoutPlaylistsInput = {
    where: LikedPlaylistScalarWhereInput
    data: XOR<LikedPlaylistUpdateManyMutationInput, LikedPlaylistUncheckedUpdateManyWithoutPlaylistsInput>
  }

  export type UserCreateWithoutFollowedUserInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar: string
    Song?: SongCreateNestedManyWithoutUserInput
    LikedSong?: LikedSongCreateNestedManyWithoutUserInput
    LikedAlbums?: LikedAlbumsCreateNestedManyWithoutUserInput
    Playlist?: PlaylistCreateNestedManyWithoutUserInput
    LikedPlaylist?: LikedPlaylistCreateNestedManyWithoutUserInput
    FollowedBy?: FollowedByCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowedUserInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar: string
    followedUserId?: UserCreatefollowedUserIdInput | string[]
    followedById?: UserCreatefollowedByIdInput | string[]
    Song?: SongUncheckedCreateNestedManyWithoutUserInput
    LikedSong?: LikedSongUncheckedCreateNestedManyWithoutUserInput
    LikedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutUserInput
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    LikedPlaylist?: LikedPlaylistUncheckedCreateNestedManyWithoutUserInput
    FollowedBy?: FollowedByUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowedUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowedUserInput, UserUncheckedCreateWithoutFollowedUserInput>
  }

  export type UserUpsertWithWhereUniqueWithoutFollowedUserInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFollowedUserInput, UserUncheckedUpdateWithoutFollowedUserInput>
    create: XOR<UserCreateWithoutFollowedUserInput, UserUncheckedCreateWithoutFollowedUserInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFollowedUserInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFollowedUserInput, UserUncheckedUpdateWithoutFollowedUserInput>
  }

  export type UserUpdateManyWithWhereWithoutFollowedUserInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFollowedUserInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    followedUserId?: StringNullableListFilter<"User">
    followedById?: StringNullableListFilter<"User">
  }

  export type UserCreateWithoutFollowedByInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar: string
    Song?: SongCreateNestedManyWithoutUserInput
    LikedSong?: LikedSongCreateNestedManyWithoutUserInput
    LikedAlbums?: LikedAlbumsCreateNestedManyWithoutUserInput
    Playlist?: PlaylistCreateNestedManyWithoutUserInput
    LikedPlaylist?: LikedPlaylistCreateNestedManyWithoutUserInput
    FollowedUser?: FollowedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowedByInput = {
    id?: string
    email: string
    name: string
    password: string
    avatar: string
    followedUserId?: UserCreatefollowedUserIdInput | string[]
    followedById?: UserCreatefollowedByIdInput | string[]
    Song?: SongUncheckedCreateNestedManyWithoutUserInput
    LikedSong?: LikedSongUncheckedCreateNestedManyWithoutUserInput
    LikedAlbums?: LikedAlbumsUncheckedCreateNestedManyWithoutUserInput
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    LikedPlaylist?: LikedPlaylistUncheckedCreateNestedManyWithoutUserInput
    FollowedUser?: FollowedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowedByInput, UserUncheckedCreateWithoutFollowedByInput>
  }

  export type UserUpsertWithWhereUniqueWithoutFollowedByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFollowedByInput, UserUncheckedUpdateWithoutFollowedByInput>
    create: XOR<UserCreateWithoutFollowedByInput, UserUncheckedCreateWithoutFollowedByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFollowedByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFollowedByInput, UserUncheckedUpdateWithoutFollowedByInput>
  }

  export type UserUpdateManyWithWhereWithoutFollowedByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFollowedByInput>
  }

  export type SongCreateManyUserInput = {
    id?: string
    url: string
    cover: string
    name: string
    duration?: string | null
    listened?: number | null
    artistId?: SongCreateartistIdInput | string[]
    albumId?: SongCreatealbumIdInput | string[]
    genreId?: SongCreategenreIdInput | string[]
    playlistId?: SongCreateplaylistIdInput | string[]
  }

  export type LikedSongCreateManyUserInput = {
    id?: string
    liked: boolean
    songId?: string | null
  }

  export type LikedAlbumsCreateManyUserInput = {
    id?: string
    liked: boolean
    albumId?: string | null
  }

  export type PlaylistCreateManyUserInput = {
    id?: string
    name: string
    cover: string
    numSong?: number | null
    songId?: PlaylistCreatesongIdInput | string[]
  }

  export type LikedPlaylistCreateManyUserInput = {
    id?: string
    liked: boolean
    playlistId?: string | null
  }

  export type SongUpdateWithoutUserInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    Artist?: ArtistUpdateManyWithoutSongNestedInput
    Album?: AlbumsUpdateManyWithoutSongNestedInput
    Genres?: GenresUpdateManyWithoutSongNestedInput
    LikedSong?: LikedSongUpdateManyWithoutSongNestedInput
    Playlist?: PlaylistUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutUserInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: SongUpdateartistIdInput | string[]
    albumId?: SongUpdatealbumIdInput | string[]
    genreId?: SongUpdategenreIdInput | string[]
    playlistId?: SongUpdateplaylistIdInput | string[]
    Artist?: ArtistUncheckedUpdateManyWithoutSongNestedInput
    Album?: AlbumsUncheckedUpdateManyWithoutSongNestedInput
    Genres?: GenresUncheckedUpdateManyWithoutSongNestedInput
    LikedSong?: LikedSongUncheckedUpdateManyWithoutSongNestedInput
    Playlist?: PlaylistUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutUserInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: SongUpdateartistIdInput | string[]
    albumId?: SongUpdatealbumIdInput | string[]
    genreId?: SongUpdategenreIdInput | string[]
    playlistId?: SongUpdateplaylistIdInput | string[]
  }

  export type LikedSongUpdateWithoutUserInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    Song?: SongUpdateOneWithoutLikedSongNestedInput
  }

  export type LikedSongUncheckedUpdateWithoutUserInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    songId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikedSongUncheckedUpdateManyWithoutUserInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    songId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikedAlbumsUpdateWithoutUserInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    Albums?: AlbumsUpdateOneWithoutLikedAlbumsNestedInput
  }

  export type LikedAlbumsUncheckedUpdateWithoutUserInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikedAlbumsUncheckedUpdateManyWithoutUserInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    albumId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    numSong?: NullableIntFieldUpdateOperationsInput | number | null
    Song?: SongUpdateManyWithoutPlaylistNestedInput
    LikedPlaylist?: LikedPlaylistUpdateManyWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    numSong?: NullableIntFieldUpdateOperationsInput | number | null
    songId?: PlaylistUpdatesongIdInput | string[]
    Song?: SongUncheckedUpdateManyWithoutPlaylistNestedInput
    LikedPlaylist?: LikedPlaylistUncheckedUpdateManyWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    numSong?: NullableIntFieldUpdateOperationsInput | number | null
    songId?: PlaylistUpdatesongIdInput | string[]
  }

  export type LikedPlaylistUpdateWithoutUserInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    Playlists?: PlaylistUpdateOneWithoutLikedPlaylistNestedInput
  }

  export type LikedPlaylistUncheckedUpdateWithoutUserInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikedPlaylistUncheckedUpdateManyWithoutUserInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FollowedUserUpdateWithoutUserInput = {
    followed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FollowedUserUncheckedUpdateWithoutUserInput = {
    userId?: FollowedUserUpdateuserIdInput | string[]
    followed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FollowedUserUncheckedUpdateManyWithoutUserInput = {
    userId?: FollowedUserUpdateuserIdInput | string[]
    followed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FollowedByUpdateWithoutUserInput = {
    followed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FollowedByUncheckedUpdateWithoutUserInput = {
    userId?: FollowedByUpdateuserIdInput | string[]
    followed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FollowedByUncheckedUpdateManyWithoutUserInput = {
    userId?: FollowedByUpdateuserIdInput | string[]
    followed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LikedSongCreateManySongInput = {
    id?: string
    liked: boolean
    userId?: string | null
  }

  export type ArtistUpdateWithoutSongInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    Albums?: AlbumsUpdateManyWithoutArtistNestedInput
    Genres?: GenresUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutSongInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    songId?: ArtistUpdatesongIdInput | string[]
    albumsId?: ArtistUpdatealbumsIdInput | string[]
    genreId?: ArtistUpdategenreIdInput | string[]
    Albums?: AlbumsUncheckedUpdateManyWithoutArtistNestedInput
    Genres?: GenresUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateManyWithoutSongInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    songId?: ArtistUpdatesongIdInput | string[]
    albumsId?: ArtistUpdatealbumsIdInput | string[]
    genreId?: ArtistUpdategenreIdInput | string[]
  }

  export type AlbumsUpdateWithoutSongInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    LikedAlbums?: LikedAlbumsUpdateManyWithoutAlbumsNestedInput
    Artist?: ArtistUpdateManyWithoutAlbumsNestedInput
    Genres?: GenresUpdateManyWithoutAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateWithoutSongInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    songId?: AlbumsUpdatesongIdInput | string[]
    artistId?: AlbumsUpdateartistIdInput | string[]
    genreId?: AlbumsUpdategenreIdInput | string[]
    LikedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutAlbumsNestedInput
    Artist?: ArtistUncheckedUpdateManyWithoutAlbumsNestedInput
    Genres?: GenresUncheckedUpdateManyWithoutAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateManyWithoutSongInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    songId?: AlbumsUpdatesongIdInput | string[]
    artistId?: AlbumsUpdateartistIdInput | string[]
    genreId?: AlbumsUpdategenreIdInput | string[]
  }

  export type GenresUpdateWithoutSongInput = {
    name?: StringFieldUpdateOperationsInput | string
    Artist?: ArtistUpdateManyWithoutGenresNestedInput
    Albums?: AlbumsUpdateManyWithoutGenresNestedInput
  }

  export type GenresUncheckedUpdateWithoutSongInput = {
    name?: StringFieldUpdateOperationsInput | string
    songId?: GenresUpdatesongIdInput | string[]
    artistId?: GenresUpdateartistIdInput | string[]
    albumId?: GenresUpdatealbumIdInput | string[]
    Artist?: ArtistUncheckedUpdateManyWithoutGenresNestedInput
    Albums?: AlbumsUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenresUncheckedUpdateManyWithoutSongInput = {
    name?: StringFieldUpdateOperationsInput | string
    songId?: GenresUpdatesongIdInput | string[]
    artistId?: GenresUpdateartistIdInput | string[]
    albumId?: GenresUpdatealbumIdInput | string[]
  }

  export type LikedSongUpdateWithoutSongInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutLikedSongNestedInput
  }

  export type LikedSongUncheckedUpdateWithoutSongInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikedSongUncheckedUpdateManyWithoutSongInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistUpdateWithoutSongInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    numSong?: NullableIntFieldUpdateOperationsInput | number | null
    User?: UserUpdateOneWithoutPlaylistNestedInput
    LikedPlaylist?: LikedPlaylistUpdateManyWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutSongInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    numSong?: NullableIntFieldUpdateOperationsInput | number | null
    songId?: PlaylistUpdatesongIdInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    LikedPlaylist?: LikedPlaylistUncheckedUpdateManyWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutSongInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    numSong?: NullableIntFieldUpdateOperationsInput | number | null
    songId?: PlaylistUpdatesongIdInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SongUpdateWithoutArtistInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    Album?: AlbumsUpdateManyWithoutSongNestedInput
    Genres?: GenresUpdateManyWithoutSongNestedInput
    User?: UserUpdateOneWithoutSongNestedInput
    LikedSong?: LikedSongUpdateManyWithoutSongNestedInput
    Playlist?: PlaylistUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutArtistInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: SongUpdateartistIdInput | string[]
    albumId?: SongUpdatealbumIdInput | string[]
    genreId?: SongUpdategenreIdInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: SongUpdateplaylistIdInput | string[]
    Album?: AlbumsUncheckedUpdateManyWithoutSongNestedInput
    Genres?: GenresUncheckedUpdateManyWithoutSongNestedInput
    LikedSong?: LikedSongUncheckedUpdateManyWithoutSongNestedInput
    Playlist?: PlaylistUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutArtistInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: SongUpdateartistIdInput | string[]
    albumId?: SongUpdatealbumIdInput | string[]
    genreId?: SongUpdategenreIdInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: SongUpdateplaylistIdInput | string[]
  }

  export type AlbumsUpdateWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    LikedAlbums?: LikedAlbumsUpdateManyWithoutAlbumsNestedInput
    Song?: SongUpdateManyWithoutAlbumNestedInput
    Genres?: GenresUpdateManyWithoutAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    songId?: AlbumsUpdatesongIdInput | string[]
    artistId?: AlbumsUpdateartistIdInput | string[]
    genreId?: AlbumsUpdategenreIdInput | string[]
    LikedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutAlbumsNestedInput
    Song?: SongUncheckedUpdateManyWithoutAlbumNestedInput
    Genres?: GenresUncheckedUpdateManyWithoutAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateManyWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    songId?: AlbumsUpdatesongIdInput | string[]
    artistId?: AlbumsUpdateartistIdInput | string[]
    genreId?: AlbumsUpdategenreIdInput | string[]
  }

  export type GenresUpdateWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    Song?: SongUpdateManyWithoutGenresNestedInput
    Albums?: AlbumsUpdateManyWithoutGenresNestedInput
  }

  export type GenresUncheckedUpdateWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    songId?: GenresUpdatesongIdInput | string[]
    artistId?: GenresUpdateartistIdInput | string[]
    albumId?: GenresUpdatealbumIdInput | string[]
    Song?: SongUncheckedUpdateManyWithoutGenresNestedInput
    Albums?: AlbumsUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenresUncheckedUpdateManyWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    songId?: GenresUpdatesongIdInput | string[]
    artistId?: GenresUpdateartistIdInput | string[]
    albumId?: GenresUpdatealbumIdInput | string[]
  }

  export type LikedAlbumsCreateManyAlbumsInput = {
    id?: string
    liked: boolean
    userId?: string | null
  }

  export type LikedAlbumsUpdateWithoutAlbumsInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutLikedAlbumsNestedInput
  }

  export type LikedAlbumsUncheckedUpdateWithoutAlbumsInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikedAlbumsUncheckedUpdateManyWithoutAlbumsInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SongUpdateWithoutAlbumInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    Artist?: ArtistUpdateManyWithoutSongNestedInput
    Genres?: GenresUpdateManyWithoutSongNestedInput
    User?: UserUpdateOneWithoutSongNestedInput
    LikedSong?: LikedSongUpdateManyWithoutSongNestedInput
    Playlist?: PlaylistUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutAlbumInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: SongUpdateartistIdInput | string[]
    albumId?: SongUpdatealbumIdInput | string[]
    genreId?: SongUpdategenreIdInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: SongUpdateplaylistIdInput | string[]
    Artist?: ArtistUncheckedUpdateManyWithoutSongNestedInput
    Genres?: GenresUncheckedUpdateManyWithoutSongNestedInput
    LikedSong?: LikedSongUncheckedUpdateManyWithoutSongNestedInput
    Playlist?: PlaylistUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutAlbumInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: SongUpdateartistIdInput | string[]
    albumId?: SongUpdatealbumIdInput | string[]
    genreId?: SongUpdategenreIdInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: SongUpdateplaylistIdInput | string[]
  }

  export type ArtistUpdateWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    Song?: SongUpdateManyWithoutArtistNestedInput
    Genres?: GenresUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    songId?: ArtistUpdatesongIdInput | string[]
    albumsId?: ArtistUpdatealbumsIdInput | string[]
    genreId?: ArtistUpdategenreIdInput | string[]
    Song?: SongUncheckedUpdateManyWithoutArtistNestedInput
    Genres?: GenresUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateManyWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    songId?: ArtistUpdatesongIdInput | string[]
    albumsId?: ArtistUpdatealbumsIdInput | string[]
    genreId?: ArtistUpdategenreIdInput | string[]
  }

  export type GenresUpdateWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    Song?: SongUpdateManyWithoutGenresNestedInput
    Artist?: ArtistUpdateManyWithoutGenresNestedInput
  }

  export type GenresUncheckedUpdateWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    songId?: GenresUpdatesongIdInput | string[]
    artistId?: GenresUpdateartistIdInput | string[]
    albumId?: GenresUpdatealbumIdInput | string[]
    Song?: SongUncheckedUpdateManyWithoutGenresNestedInput
    Artist?: ArtistUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenresUncheckedUpdateManyWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    songId?: GenresUpdatesongIdInput | string[]
    artistId?: GenresUpdateartistIdInput | string[]
    albumId?: GenresUpdatealbumIdInput | string[]
  }

  export type SongUpdateWithoutGenresInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    Artist?: ArtistUpdateManyWithoutSongNestedInput
    Album?: AlbumsUpdateManyWithoutSongNestedInput
    User?: UserUpdateOneWithoutSongNestedInput
    LikedSong?: LikedSongUpdateManyWithoutSongNestedInput
    Playlist?: PlaylistUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutGenresInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: SongUpdateartistIdInput | string[]
    albumId?: SongUpdatealbumIdInput | string[]
    genreId?: SongUpdategenreIdInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: SongUpdateplaylistIdInput | string[]
    Artist?: ArtistUncheckedUpdateManyWithoutSongNestedInput
    Album?: AlbumsUncheckedUpdateManyWithoutSongNestedInput
    LikedSong?: LikedSongUncheckedUpdateManyWithoutSongNestedInput
    Playlist?: PlaylistUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutGenresInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: SongUpdateartistIdInput | string[]
    albumId?: SongUpdatealbumIdInput | string[]
    genreId?: SongUpdategenreIdInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: SongUpdateplaylistIdInput | string[]
  }

  export type ArtistUpdateWithoutGenresInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    Song?: SongUpdateManyWithoutArtistNestedInput
    Albums?: AlbumsUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutGenresInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    songId?: ArtistUpdatesongIdInput | string[]
    albumsId?: ArtistUpdatealbumsIdInput | string[]
    genreId?: ArtistUpdategenreIdInput | string[]
    Song?: SongUncheckedUpdateManyWithoutArtistNestedInput
    Albums?: AlbumsUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateManyWithoutGenresInput = {
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    songId?: ArtistUpdatesongIdInput | string[]
    albumsId?: ArtistUpdatealbumsIdInput | string[]
    genreId?: ArtistUpdategenreIdInput | string[]
  }

  export type AlbumsUpdateWithoutGenresInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    LikedAlbums?: LikedAlbumsUpdateManyWithoutAlbumsNestedInput
    Song?: SongUpdateManyWithoutAlbumNestedInput
    Artist?: ArtistUpdateManyWithoutAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateWithoutGenresInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    songId?: AlbumsUpdatesongIdInput | string[]
    artistId?: AlbumsUpdateartistIdInput | string[]
    genreId?: AlbumsUpdategenreIdInput | string[]
    LikedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutAlbumsNestedInput
    Song?: SongUncheckedUpdateManyWithoutAlbumNestedInput
    Artist?: ArtistUncheckedUpdateManyWithoutAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateManyWithoutGenresInput = {
    name?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    songId?: AlbumsUpdatesongIdInput | string[]
    artistId?: AlbumsUpdateartistIdInput | string[]
    genreId?: AlbumsUpdategenreIdInput | string[]
  }

  export type LikedPlaylistCreateManyPlaylistsInput = {
    id?: string
    liked: boolean
    userId?: string | null
  }

  export type SongUpdateWithoutPlaylistInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    Artist?: ArtistUpdateManyWithoutSongNestedInput
    Album?: AlbumsUpdateManyWithoutSongNestedInput
    Genres?: GenresUpdateManyWithoutSongNestedInput
    User?: UserUpdateOneWithoutSongNestedInput
    LikedSong?: LikedSongUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateWithoutPlaylistInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: SongUpdateartistIdInput | string[]
    albumId?: SongUpdatealbumIdInput | string[]
    genreId?: SongUpdategenreIdInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: SongUpdateplaylistIdInput | string[]
    Artist?: ArtistUncheckedUpdateManyWithoutSongNestedInput
    Album?: AlbumsUncheckedUpdateManyWithoutSongNestedInput
    Genres?: GenresUncheckedUpdateManyWithoutSongNestedInput
    LikedSong?: LikedSongUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateManyWithoutPlaylistInput = {
    url?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    listened?: NullableIntFieldUpdateOperationsInput | number | null
    artistId?: SongUpdateartistIdInput | string[]
    albumId?: SongUpdatealbumIdInput | string[]
    genreId?: SongUpdategenreIdInput | string[]
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: SongUpdateplaylistIdInput | string[]
  }

  export type LikedPlaylistUpdateWithoutPlaylistsInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutLikedPlaylistNestedInput
  }

  export type LikedPlaylistUncheckedUpdateWithoutPlaylistsInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikedPlaylistUncheckedUpdateManyWithoutPlaylistsInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutFollowedUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    Song?: SongUpdateManyWithoutUserNestedInput
    LikedSong?: LikedSongUpdateManyWithoutUserNestedInput
    LikedAlbums?: LikedAlbumsUpdateManyWithoutUserNestedInput
    Playlist?: PlaylistUpdateManyWithoutUserNestedInput
    LikedPlaylist?: LikedPlaylistUpdateManyWithoutUserNestedInput
    FollowedBy?: FollowedByUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowedUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    followedUserId?: UserUpdatefollowedUserIdInput | string[]
    followedById?: UserUpdatefollowedByIdInput | string[]
    Song?: SongUncheckedUpdateManyWithoutUserNestedInput
    LikedSong?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
    LikedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutUserNestedInput
    Playlist?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    LikedPlaylist?: LikedPlaylistUncheckedUpdateManyWithoutUserNestedInput
    FollowedBy?: FollowedByUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFollowedUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    followedUserId?: UserUpdatefollowedUserIdInput | string[]
    followedById?: UserUpdatefollowedByIdInput | string[]
  }

  export type UserUpdateWithoutFollowedByInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    Song?: SongUpdateManyWithoutUserNestedInput
    LikedSong?: LikedSongUpdateManyWithoutUserNestedInput
    LikedAlbums?: LikedAlbumsUpdateManyWithoutUserNestedInput
    Playlist?: PlaylistUpdateManyWithoutUserNestedInput
    LikedPlaylist?: LikedPlaylistUpdateManyWithoutUserNestedInput
    FollowedUser?: FollowedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowedByInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    followedUserId?: UserUpdatefollowedUserIdInput | string[]
    followedById?: UserUpdatefollowedByIdInput | string[]
    Song?: SongUncheckedUpdateManyWithoutUserNestedInput
    LikedSong?: LikedSongUncheckedUpdateManyWithoutUserNestedInput
    LikedAlbums?: LikedAlbumsUncheckedUpdateManyWithoutUserNestedInput
    Playlist?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    LikedPlaylist?: LikedPlaylistUncheckedUpdateManyWithoutUserNestedInput
    FollowedUser?: FollowedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFollowedByInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    followedUserId?: UserUpdatefollowedUserIdInput | string[]
    followedById?: UserUpdatefollowedByIdInput | string[]
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SongCountOutputTypeDefaultArgs instead
     */
    export type SongCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SongCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistCountOutputTypeDefaultArgs instead
     */
    export type ArtistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumsCountOutputTypeDefaultArgs instead
     */
    export type AlbumsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenresCountOutputTypeDefaultArgs instead
     */
    export type GenresCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenresCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistCountOutputTypeDefaultArgs instead
     */
    export type PlaylistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FollowedUserCountOutputTypeDefaultArgs instead
     */
    export type FollowedUserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FollowedUserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FollowedByCountOutputTypeDefaultArgs instead
     */
    export type FollowedByCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FollowedByCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SongDefaultArgs instead
     */
    export type SongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SongDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistDefaultArgs instead
     */
    export type ArtistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumsDefaultArgs instead
     */
    export type AlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LikedSongDefaultArgs instead
     */
    export type LikedSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LikedSongDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LikedAlbumsDefaultArgs instead
     */
    export type LikedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LikedAlbumsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LikedPlaylistDefaultArgs instead
     */
    export type LikedPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LikedPlaylistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenresDefaultArgs instead
     */
    export type GenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenresDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistDefaultArgs instead
     */
    export type PlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FollowedUserDefaultArgs instead
     */
    export type FollowedUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FollowedUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FollowedByDefaultArgs instead
     */
    export type FollowedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FollowedByDefaultArgs<ExtArgs>

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