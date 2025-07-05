import {RESOURCE_CONFIG_MAP} from "~/utils/consts/configs";
import type {ApiResourceKey} from "~/utils/consts/resources";

export const getApiResourceConfig = (key: ApiResourceKey) => RESOURCE_CONFIG_MAP[key]
export const stripUndefined = <T extends Record<string, any>>(obj: T): Partial<T> => {
  const result: Partial<T> = {}

  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      result[key as keyof T] = value
    }
  }

  return result
}
