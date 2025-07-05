import type {PostPath, PostPathRequestMap, PostPathResponseMap} from "~~/types";

const useCollectionMutationCreateStore = <PATH extends PostPath>(path: PATH) => {
  return defineStore(`collection-mutation-create:${path}`, () => {

    type ApiResponse = PostPathResponseMap[PATH]
    type RequestBody = PostPathRequestMap[PATH]

    const isDialogOpen = ref(false)

    const {baseURL, headers} = useApiRequestConfig()
    const {
      data,
      error,
      isLoading,
      mutateAsync: submit,
      status,
      variables
    } = useMutation<ApiResponse, Error, RequestBody>({
      mutation: (jsonBody: RequestBody) => $fetch<ApiResponse>(
        path as string,
        {
          baseURL,
          method: 'post',
          body: JSON.stringify(jsonBody),
          headers: headers.value
        }
      )
    })

    return {
      data,
      error,
      isDialogOpen,
      isLoading,
      status,
      submit,
      variables,
    }
  })()
}

export default useCollectionMutationCreateStore
