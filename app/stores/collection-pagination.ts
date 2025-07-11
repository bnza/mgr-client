import type {DataTableComponentOptions, GetCollectionPathResponseMap} from "~~/types";
import {dataTableOptionsToQsObject} from "~/utils/requests";

const defaultPagination = () => ({
  page: 1,
  itemsPerPage: 10,
  sortBy: [],
  groupBy: [],
}) as const as DataTableComponentOptions

const useCollectionPaginationStore = <PATH extends keyof GetCollectionPathResponseMap>(path: PATH) => {
  return defineStore(`collection-query-pagination:${path}`, () => {
    const component = reactive(defaultPagination())

    const query = computed(() => dataTableOptionsToQsObject(component))

    return {
      component,
      query,
    }
  })()
}

export default useCollectionPaginationStore
