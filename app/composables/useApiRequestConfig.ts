import qs from "qs";

export default function useApiRequestConfig() {

  const config = useRuntimeConfig()
  const baseURL = config.public.apiBaseUrl

  const {token} = useAuth()

  const headers = computed(() => {
    const _headers: Record<string, string> = {
      'Content-Type': 'application/ld+json',
    }
    if (token.value) {
      _headers['Authorization'] = token.value
    }
    return _headers
  })

  return {
    baseURL,
    headers,
  }
}
