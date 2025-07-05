import qs from "qs";

export default function useApiRequestConfig() {

  const config = useRuntimeConfig()
  const baseURL = config.public.apiBaseUrl
  const getApiPath = (path: string) => `${baseURL}${path}`

  const {token} = useAuth()

  const headers = computed(() => {
    const _headers: Record<string, string> = {
      'Content-Type': 'application/ld+json',
      'Accept': 'application/ld+json',
    }
    if (token.value) {
      _headers['Authorization'] = token.value
    }
    return _headers
  })

  return {
    baseURL,
    getApiPath,
    headers,
  }
}
