import { api } from '../../lib/axios'

export async function signout(): Promise<void> {
  await api.post('/auth/logout')
  return
}
