import type {PostPathRequest} from "~~/types/openapi-helpers";
import type {PostPath} from "~~/types/openapi-operations";

export type ValidationPath = PostPath
export type ValidationMethod = 'POST'

export type ValidationDefaultPostValue<PATH extends PostPath> = Partial<PostPathRequest<PATH>>
export type ValidationGetDefaultPostValue<PATH extends PostPath> = () => ValidationDefaultPostValue<PATH>

// Add the missing ValidationRequest type
export type ValidationRequest<METHOD extends ValidationMethod, PATH extends ValidationPath> =
  METHOD extends 'POST' ? PostPathRequest<PATH> : never

// Make ValidationConfigOption generic to match the expected model type
// export type ValidationConfigOption<T = any> = {
//   rules: Record<keyof T, Record<string, any>>
// }

// export type ValidationMap<T extends Record<string, any>> = {
//   [path: keyof T]: ValidationConfigOption
// }

// export type MethodValidationMap = {
//   [method in ValidationMethod]: ValidationMap
// }
//
// export type ImplementedValidationMap = typeof import('~/utils/validation').VALIDATION_MAP
// export type ImplementedValidationMethods = keyof ImplementedValidationMap
// export type ImplementedValidationPaths<METHOD extends ImplementedValidationMethods> =
//   keyof ImplementedValidationMap[METHOD] & PostPath
