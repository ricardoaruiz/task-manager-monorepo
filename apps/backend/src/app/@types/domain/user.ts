import { User } from '@task-manager/domain'

export type CreateUserInput = Omit<User, 'id'>
export type MeInput = {
  email: string
}
export type MeOutput = Omit<User, 'password'>
