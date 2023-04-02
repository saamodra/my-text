export type FetchResponseProps<T = Response> = {
  result: T | null
  error: RawResponseError | Error | null
}

export type RawResponseProps = {
  response: Response | null
  error: Error | null
}

export type RawResponseError = Error & { response?: Response }

const INITIAL_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const rawFetch = (
  url: string,
  config: RequestInit,
): Promise<Response> => fetch(url, config)

export const raw = (
  url: string,
  config: Object = {},
): Promise<FetchResponseProps> => fetch(url, config)
  .then((response) => {
    if (!response.ok) {
      const error = new Error(
        `FetchAdapter::fetch failed to access ${url} with ${response.status}`,
      ) as RawResponseError

      error.response = response
      throw error
    }

    return { result: response, error: null }
  })
  .catch((err) => ({ result: null, error: err }))

export const get = (url: string = '', config: Object = {}) => {
  const options: Object = {
    method: 'GET',
    ...INITIAL_CONFIG,
    ...config,
  }

  return raw(url, options)
}

export const post = (url: string = '', config: Object = {}) => {
  const options: Object = {
    method: 'POST',
    ...INITIAL_CONFIG,
    ...config,
  }

  return raw(url, options)
}

export const destroy = (url: string = '', config: Object = {}) => {
  const options: Object = {
    method: 'DELETE',
    ...INITIAL_CONFIG,
    ...config,
  }

  return raw(url, options)
}
