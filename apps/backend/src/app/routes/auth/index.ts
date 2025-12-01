import type { FastifyInstance } from 'fastify'
import { getUseCaseFactory } from '../../use-cases/factory'
import { loginRoute } from './login'
import { logoutRoute } from './logout'
import { signupRoute } from './signup'

export const authRoutes = (app: FastifyInstance) => {
  const loginUseCase = getUseCaseFactory().makeLoginUseCase()
  const signupUseCase = getUseCaseFactory().makeSignupUseCase()

  signupRoute(app, {
    useCases: { signup: signupUseCase },
  })

  loginRoute(app, {
    useCases: { login: loginUseCase },
  })

  logoutRoute(app, {})
}
