import { token } from '../config/env'

const BASE_URL = 'http://ec2-54-91-215-149.compute-1.amazonaws.com/api/'

const HEADERS = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${token()}`,
}

const METHOD = {
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
}

export const client = {
  [METHOD.POST]: async ({ url, payload }: { url: string; payload: any }) => {
    const data = await fetch(`${BASE_URL}${url}`, {
      method: METHOD.POST,
      headers: HEADERS,
      body: JSON.stringify(payload),
    })
    return data.json()
  },
  [METHOD.PUT]: async ({ url, payload }: { url: string; payload: any }) => {
    const data = await fetch(`${BASE_URL}${url}`, {
      method: METHOD.PUT,
      headers: HEADERS,
      body: JSON.stringify(payload),
    })
    return data.json()
  },
  [METHOD.DELETE]: async ({ url, payload }: { url: string; payload: any }) => {
    const data = await fetch(`${BASE_URL}${url}`, {
      method: METHOD.DELETE,
      headers: HEADERS,
      body: JSON.stringify(payload),
    })
    return data.json()
  },
}
