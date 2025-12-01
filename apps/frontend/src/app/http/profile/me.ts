import { api } from '../../lib/axios'

export type MeResponse = {
  id: string
  name: string
  email: string
}

export async function me(): Promise<MeResponse> {
  const result = await api.get('/profile/me')

  return result.data
}
