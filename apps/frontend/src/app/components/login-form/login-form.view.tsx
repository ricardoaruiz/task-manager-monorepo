import { Loader2Icon, LogInIcon } from 'lucide-react'
import { Controller } from 'react-hook-form'
import { Button } from '../ui/button'
import { Field, FieldError, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import type { LoginFormViewProps } from './login-form.types'

export function LoginFormView({ model, ...props }: LoginFormViewProps) {
  const { form, onSubmit, isSigningIn } = model

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full grid gap-5 max-w-[400px] mx-auto"
        {...props}
      >
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                {...field}
                type="email"
                id="email"
                name="email"
                aria-invalid={fieldState.invalid}
                autoComplete="off"
              />
              <div className="min-h-5">
                <FieldError errors={[fieldState.error]} />
              </div>
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                {...field}
                type="password"
                id="password"
                name="password"
                aria-invalid={fieldState.invalid}
                autoComplete="off"
              />
              <div className="min-h-5">
                <FieldError errors={[fieldState.error]} />
              </div>
            </Field>
          )}
        />

        <Button type="submit" size="lg" disabled={isSigningIn}>
          {isSigningIn ? (
            <>
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
              Logging...
            </>
          ) : (
            <>
              <LogInIcon className="mr-2 h-4 w-4" />
              Login
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
