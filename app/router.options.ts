import type { RouterConfig } from '@nuxt/schema'
import qs from 'qs'

export default <RouterConfig>{
  hashMode: true,
  parseQuery: qs.parse,
  stringifyQuery: qs.stringify,
}
