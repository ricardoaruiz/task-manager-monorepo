import { useLoginFormModel } from './login-form.model'
import type { LoginFormViewModelProps } from './login-form.types'
import { LoginFormView } from './login-form.view'

export function LoginFormViewModel({ onSuccess }: LoginFormViewModelProps) {
  const mode = useLoginFormModel({ onSuccess })

  return <LoginFormView model={mode} />
}
