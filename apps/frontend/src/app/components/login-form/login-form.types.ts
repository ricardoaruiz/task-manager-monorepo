import type { ComponentProps } from 'react'
import type z from 'zod'
import type { useLoginFormModel } from './login-form.model'
import type { FORM_SCHEMA } from './login-form.schema'

export type LoginFormViewModelProps = {
  onSuccess: () => void
}
export type LoginFormModelProps = LoginFormViewModelProps
export type LoginFormViewProps = ComponentProps<'form'> & {
  model: ReturnType<typeof useLoginFormModel>
}
export type LoginFormData = z.infer<typeof FORM_SCHEMA>
