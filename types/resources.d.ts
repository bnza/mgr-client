import type {ApiResourceKey} from "~/utils/consts/resources";
import type {GetCollectionPathResponseMap} from "~~/types/openapi-helpers";
import type {ReadonlyHeaders} from "~~/types/vuetify";

export type ApiDataResourceKey = Exclude<ApiResourceKey, never>;

export type ResourceConfig = {
  apiPath: keyof GetCollectionPathResponseMap
  appPath: string
  name: ApiDataResourceKey
  labels: [string, string]
  protectedFields?: string[]
  defaultHeaders: ReadonlyHeaders[]
}


