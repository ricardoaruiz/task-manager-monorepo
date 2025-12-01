import { api } from '../../lib/axios'

export type SigninParams = {
  email: string
  password: string
}

export async function signin({ email, password }: SigninParams): Promise<void> {
  await api.post(
    '/auth/login',
    {
      email,
      password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  return
}
