import type {GetCollectionPathResponseMap} from "~~/types";

const useCollectionSearchStore = <PATH extends keyof GetCollectionPathResponseMap>(path: PATH) => {

  return defineStore(`collection-query-search:${path}`, () => {

    const isDialogOpen = ref(false)

    return {
      isDialogOpen
    }
  })()

}

export default useCollectionSearchStore
