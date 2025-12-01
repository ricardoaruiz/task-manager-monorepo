import type { User } from '@task-manager/domain'

export type LoginInput = {
  email: string
  password: string
}

export type LoginOutput = Omit<User, 'password'> & {
  token: string
}
