import {
  DMMF,
  DMMFClass,
  Engine,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  sqltag as sql,
  empty,
  join,
  raw,
} from './runtime';

export { PrismaClientKnownRequestError }
export { PrismaClientUnknownRequestError }
export { PrismaClientRustPanicError }
export { PrismaClientInitializationError }
export { PrismaClientValidationError }

/**
 * Re-export of sql-template-tag
 */
export { sql, empty, join, raw }

/**
 * Prisma Client JS version: 2.6.0
 * Query Engine version: 650b5d0348ec38ae61e1e7db69bb54808418ede4
 */
export declare type PrismaVersion = {
  client: string
}

export declare const prismaVersion: PrismaVersion 

/**
 * Utility Types
 */

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON object.
 * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
 */
export declare type JsonObject = {[Key in string]?: JsonValue}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON array.
 */
export declare interface JsonArray extends Array<JsonValue> {}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches any valid JSON value.
 */
export declare type JsonValue = string | number | boolean | null | JsonObject | JsonArray

/**
 * Same as JsonObject, but allows undefined
 */
export declare type InputJsonObject = {[Key in string]?: JsonValue}
 
export declare interface InputJsonArray extends Array<JsonValue> {}
 
export declare type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray

declare type SelectAndInclude = {
  select: any
  include: any
}

declare type HasSelect = {
  select: any
}

declare type HasInclude = {
  include: any
}

declare type CheckSelect<T, S, U> = T extends SelectAndInclude
  ? 'Please either choose `select` or `include`'
  : T extends HasSelect
  ? U
  : T extends HasInclude
  ? U
  : S

/**
 * Get the type of the value, that the Promise holds.
 */
export declare type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

/**
 * Get the return type of a function which returns a Promise.
 */
export declare type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>


export declare type Enumerable<T> = T | Array<T>;

export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

export declare type TruthyKeys<T> = {
  [key in keyof T]: T[key] extends false | undefined | null ? never : key
}[keyof T]

export declare type TrueKeys<T> = TruthyKeys<Pick<T, RequiredKeys<T>>>

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export declare type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};
declare class PrismaClientFetcher {
  private readonly prisma;
  private readonly debug;
  private readonly hooks?;
  constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
  request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
  sanitizeMessage(message: string): string;
  protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
}


/**
 * Client
**/

export declare type Datasource = {
  url?: string
}

export type Datasources = {
  db?: Datasource
}

export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

export interface PrismaClientOptions {
  /**
   * Overwrites the datasource url from your prisma.schema file
   */
  datasources?: Datasources

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
   *  { emit: 'stdout', level: 'query' },
   *  { emit: 'stdout', level: 'info' },
   *  { emit: 'stdout', level: 'warn' }
   *  { emit: 'stdout', level: 'error' }
   * ]
   * ```
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
   */
  log?: Array<LogLevel | LogDefinition>
}

export type Hooks = {
  beforeRequest?: (options: {query: string, path: string[], rootField?: string, typeName?: string, document: any}) => any
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
  | 'findOne'
  | 'findMany'
  | 'create'
  | 'update'
  | 'updateMany'
  | 'upsert'
  | 'delete'
  | 'deleteMany'
  | 'executeRaw'
  | 'queryRaw'
  | 'aggregate'

/**
 * These options are being passed in to the middleware as "params"
 */
export type MiddlewareParams = {
  model?: string
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
  next: (params: MiddlewareParams) => Promise<T>,
) => Promise<T>

// tested in getLogLevel.test.ts
export declare function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Modules
 * const modules = await prisma.module.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare class PrismaClient<
  T extends PrismaClientOptions = PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<LogLevel | LogDefinition> ? GetEvents<T['log']> : never : never
> {
  /**
   * @private
   */
  private fetcher;
  /**
   * @private
   */
  private readonly dmmf;
  /**
   * @private
   */
  private connectionPromise?;
  /**
   * @private
   */
  private disconnectionPromise?;
  /**
   * @private
   */
  private readonly engineConfig;
  /**
   * @private
   */
  private readonly measurePerformance;
  /**
   * @private
   */
  private engine: Engine;
  /**
   * @private
   */
  private errorFormat: ErrorFormat;

  /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Modules
   * const modules = await prisma.module.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
  constructor(optionsArg?: T);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * @deprecated renamed to `$on`
   */
  on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * Connect with the database
   */
  $connect(): Promise<void>;
  /**
   * @deprecated renamed to `$connect`
   */
  connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;
  /**
   * @deprecated renamed to `$disconnect`
   */
  disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<number>;

  /**
   * @deprecated renamed to `$executeRaw`
   */
  executeRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<T>;
 
  /**
   * @deprecated renamed to `$executeRaw`
   */
  queryRaw<T = any>(query: string | TemplateStringsArray, ...values: any[]): Promise<T>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): ModuleDelegate;
}



/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export declare const ModuleDistinctFieldEnum: {
  id: 'id',
  title: 'title',
  description: 'description'
};

export declare type ModuleDistinctFieldEnum = (typeof ModuleDistinctFieldEnum)[keyof typeof ModuleDistinctFieldEnum]


export declare const SortOrder: {
  asc: 'asc',
  desc: 'desc'
};

export declare type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]



/**
 * Model Module
 */

export type Module = {
  id: number
  title: string
  description: string
}


export type AggregateModule = {
  count: number
  avg: ModuleAvgAggregateOutputType | null
  sum: ModuleSumAggregateOutputType | null
  min: ModuleMinAggregateOutputType | null
  max: ModuleMaxAggregateOutputType | null
}

export type ModuleAvgAggregateOutputType = {
  id: number
}

export type ModuleSumAggregateOutputType = {
  id: number
}

export type ModuleMinAggregateOutputType = {
  id: number
}

export type ModuleMaxAggregateOutputType = {
  id: number
}


export type ModuleAvgAggregateInputType = {
  id?: true
}

export type ModuleSumAggregateInputType = {
  id?: true
}

export type ModuleMinAggregateInputType = {
  id?: true
}

export type ModuleMaxAggregateInputType = {
  id?: true
}

export type AggregateModuleArgs = {
  where?: ModuleWhereInput
  orderBy?: Enumerable<ModuleOrderByInput>
  cursor?: ModuleWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<ModuleDistinctFieldEnum>
  count?: true
  avg?: ModuleAvgAggregateInputType
  sum?: ModuleSumAggregateInputType
  min?: ModuleMinAggregateInputType
  max?: ModuleMaxAggregateInputType
}

export type GetModuleAggregateType<T extends AggregateModuleArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetModuleAggregateScalarType<T[P]>
}

export type GetModuleAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof ModuleAvgAggregateOutputType ? ModuleAvgAggregateOutputType[P] : never
}
    
    

export type ModuleSelect = {
  id?: boolean
  title?: boolean
  description?: boolean
}

export type ModuleGetPayload<
  S extends boolean | null | undefined | ModuleArgs,
  U = keyof S
> = S extends true
  ? Module
  : S extends undefined
  ? never
  : S extends ModuleArgs | FindManyModuleArgs
  ? 'include' extends U
    ? Module 
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof Module ? Module[P]
: 
 never
    }
  : Module
: Module


export interface ModuleDelegate {
  /**
   * Find zero or one Module.
   * @param {FindOneModuleArgs} args - Arguments to find a Module
   * @example
   * // Get one Module
   * const module = await prisma.module.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneModuleArgs>(
    args: Subset<T, FindOneModuleArgs>
  ): CheckSelect<T, Prisma__ModuleClient<Module | null>, Prisma__ModuleClient<ModuleGetPayload<T> | null>>
  /**
   * Find zero or more Modules.
   * @param {FindManyModuleArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Modules
   * const modules = await prisma.module.findMany()
   * 
   * // Get first 10 Modules
   * const modules = await prisma.module.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyModuleArgs>(
    args?: Subset<T, FindManyModuleArgs>
  ): CheckSelect<T, Promise<Array<Module>>, Promise<Array<ModuleGetPayload<T>>>>
  /**
   * Create a Module.
   * @param {ModuleCreateArgs} args - Arguments to create a Module.
   * @example
   * // Create one Module
   * const Module = await prisma.module.create({
   *   data: {
   *     // ... data to create a Module
   *   }
   * })
   * 
  **/
  create<T extends ModuleCreateArgs>(
    args: Subset<T, ModuleCreateArgs>
  ): CheckSelect<T, Prisma__ModuleClient<Module>, Prisma__ModuleClient<ModuleGetPayload<T>>>
  /**
   * Delete a Module.
   * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
   * @example
   * // Delete one Module
   * const Module = await prisma.module.delete({
   *   where: {
   *     // ... filter to delete one Module
   *   }
   * })
   * 
  **/
  delete<T extends ModuleDeleteArgs>(
    args: Subset<T, ModuleDeleteArgs>
  ): CheckSelect<T, Prisma__ModuleClient<Module>, Prisma__ModuleClient<ModuleGetPayload<T>>>
  /**
   * Update one Module.
   * @param {ModuleUpdateArgs} args - Arguments to update one Module.
   * @example
   * // Update one Module
   * const module = await prisma.module.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends ModuleUpdateArgs>(
    args: Subset<T, ModuleUpdateArgs>
  ): CheckSelect<T, Prisma__ModuleClient<Module>, Prisma__ModuleClient<ModuleGetPayload<T>>>
  /**
   * Delete zero or more Modules.
   * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
   * @example
   * // Delete a few Modules
   * const { count } = await prisma.module.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends ModuleDeleteManyArgs>(
    args: Subset<T, ModuleDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more Modules.
   * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Modules
   * const module = await prisma.module.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends ModuleUpdateManyArgs>(
    args: Subset<T, ModuleUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one Module.
   * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
   * @example
   * // Update or create a Module
   * const module = await prisma.module.upsert({
   *   create: {
   *     // ... data to create a Module
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Module we want to update
   *   }
   * })
  **/
  upsert<T extends ModuleUpsertArgs>(
    args: Subset<T, ModuleUpsertArgs>
  ): CheckSelect<T, Prisma__ModuleClient<Module>, Prisma__ModuleClient<ModuleGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyModuleArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateModuleArgs>(args: Subset<T, AggregateModuleArgs>): Promise<GetModuleAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for Module.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__ModuleClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';


  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * Module findOne
 */
export type FindOneModuleArgs = {
  /**
   * Select specific fields to fetch from the Module
  **/
  select?: ModuleSelect | null
  /**
   * Filter, which Module to fetch.
  **/
  where: ModuleWhereUniqueInput
}


/**
 * Module findMany
 */
export type FindManyModuleArgs = {
  /**
   * Select specific fields to fetch from the Module
  **/
  select?: ModuleSelect | null
  /**
   * Filter, which Modules to fetch.
  **/
  where?: ModuleWhereInput
  /**
   * Determine the order of the Modules to fetch.
  **/
  orderBy?: Enumerable<ModuleOrderByInput>
  /**
   * Sets the position for listing Modules.
  **/
  cursor?: ModuleWhereUniqueInput
  /**
   * The number of Modules to fetch. If negative number, it will take Modules before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` Modules.
  **/
  skip?: number
  distinct?: Enumerable<ModuleDistinctFieldEnum>
}


/**
 * Module create
 */
export type ModuleCreateArgs = {
  /**
   * Select specific fields to fetch from the Module
  **/
  select?: ModuleSelect | null
  /**
   * The data needed to create a Module.
  **/
  data: ModuleCreateInput
}


/**
 * Module update
 */
export type ModuleUpdateArgs = {
  /**
   * Select specific fields to fetch from the Module
  **/
  select?: ModuleSelect | null
  /**
   * The data needed to update a Module.
  **/
  data: ModuleUpdateInput
  /**
   * Choose, which Module to update.
  **/
  where: ModuleWhereUniqueInput
}


/**
 * Module updateMany
 */
export type ModuleUpdateManyArgs = {
  data: ModuleUpdateManyMutationInput
  where?: ModuleWhereInput
}


/**
 * Module upsert
 */
export type ModuleUpsertArgs = {
  /**
   * Select specific fields to fetch from the Module
  **/
  select?: ModuleSelect | null
  /**
   * The filter to search for the Module to update in case it exists.
  **/
  where: ModuleWhereUniqueInput
  /**
   * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
  **/
  create: ModuleCreateInput
  /**
   * In case the Module was found with the provided `where` argument, update it with this data.
  **/
  update: ModuleUpdateInput
}


/**
 * Module delete
 */
export type ModuleDeleteArgs = {
  /**
   * Select specific fields to fetch from the Module
  **/
  select?: ModuleSelect | null
  /**
   * Filter which Module to delete.
  **/
  where: ModuleWhereUniqueInput
}


/**
 * Module deleteMany
 */
export type ModuleDeleteManyArgs = {
  where?: ModuleWhereInput
}


/**
 * Module without action
 */
export type ModuleArgs = {
  /**
   * Select specific fields to fetch from the Module
  **/
  select?: ModuleSelect | null
}



/**
 * Deep Input Types
 */


export type ModuleWhereInput = {
  AND?: Enumerable<ModuleWhereInput>
  OR?: Array<ModuleWhereInput>
  NOT?: Enumerable<ModuleWhereInput>
  id?: number | IntFilter
  title?: string | StringFilter
  description?: string | StringFilter
}

export type ModuleOrderByInput = {
  id?: SortOrder
  title?: SortOrder
  description?: SortOrder
}

export type ModuleWhereUniqueInput = {
  id?: number
}

export type ModuleCreateInput = {
  title: string
  description: string
}

export type ModuleUpdateInput = {
  title?: string | StringFieldUpdateOperationsInput
  description?: string | StringFieldUpdateOperationsInput
}

export type ModuleUpdateManyMutationInput = {
  title?: string | StringFieldUpdateOperationsInput
  description?: string | StringFieldUpdateOperationsInput
}

export type IntFilter = {
  equals?: number
  in?: Enumerable<number>
  notIn?: Enumerable<number>
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: number | NestedIntFilter
}

export type StringFilter = {
  equals?: string
  in?: Enumerable<string>
  notIn?: Enumerable<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: string | NestedStringFilter
}

export type StringFieldUpdateOperationsInput = {
  set?: string
}

export type NestedIntFilter = {
  equals?: number
  in?: Enumerable<number>
  notIn?: Enumerable<number>
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter | null
}

export type NestedStringFilter = {
  equals?: string
  in?: Enumerable<string>
  notIn?: Enumerable<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter | null
}

/**
 * Batch Payload for updateMany & deleteMany
 */

export type BatchPayload = {
  count: number
}

/**
 * DMMF
 */
export declare const dmmf: DMMF.Document;
export {};
