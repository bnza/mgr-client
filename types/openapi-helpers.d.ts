import type {paths} from './openapi'
import {GetCollectionPathResponseMap, GetItemPathResponseMap} from "~~/types/openapi-operations";

// Generic helper type to filter paths by HTTP method
export type PathsWithMethod<Method extends keyof paths[keyof paths]> = {
  [K in keyof paths]: paths[K] extends { [M in Method]: any } ? K : never
}[keyof paths]

// Extract response type for a given path
export type GetCollectionResponse<T extends keyof GetCollectionPathResponseMap> = GetCollectionPathResponseMap[T]

export type GetItemResponse<T extends keyof GetItemPathResponseMap> = GetItemPathResponseMap[T]

// Extract member type from collection response
export type CollectionMemberType<T extends keyof GetCollectionPathResponseMap> =
  GetCollectionPathResponseMap[T] extends { member: Array<infer Item> }
    ? Item
    : never

// Helper types for working with specific operations
type OperationDetails<T extends keyof paths, Method extends keyof paths[T]> =
  paths[T][Method]

export type OperationPathParams<T extends keyof paths, Method extends keyof paths[T]> =
  OperationDetails<T, Method> extends { parameters: { path: infer Path } }
    ? Path
    : never

export type OperationQueryParams<T extends keyof paths, Method extends keyof paths[T]> =
  OperationDetails<T, Method> extends { parameters: { query: infer Query } }
    ? Query
    : never
