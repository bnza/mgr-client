import type {ApiAclResource, GetItemResponse, GetItemPathResponseMap} from "~~/types";
import qs from "qs";

const useItemQueryStore = <PATH extends keyof GetItemPathResponseMap>(path: PATH) => {
  return defineStore(`item-query:${path}`, () => {

    type ApiResponse = GetItemResponse<PATH> & ApiAclResource

    const id = ref<string>('')

    const {baseURL, headers} = useApiRequestConfig()

    const {data, status, error, refresh} = useQuery<ApiResponse>({
      key: () => [path, id.value],
      query: async () => {
        const apiPath = path.replace('{id}', String(id.value))
        return $fetch<ApiResponse>(apiPath, {
          baseURL,
          headers: headers.value
        })
      },
      enabled: !id.value
    })

    const acl = computed(() => data.value?._acl)

    return {
      acl,
      id,
      data,
      status,
      error,
      refresh,
    }
  })()
}

export default useItemQueryStore
