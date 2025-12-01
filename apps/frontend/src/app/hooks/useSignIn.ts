import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { type SigninParams, signin } from '../http/auth/signin'

type UseSigninParams = {
  onSuccess?: () => void
  onError?: (error: Error) => void
}

/**
 * Custom hook to handle user sign-in.
 * @param onSuccess - Callback function to be called on successful sign-in.
 * @param onError - Callback function to be called on sign-in error.
 * @returns An object containing the signin function and signing-in state.
 */
export function useSignIn({ onSuccess, onError }: UseSigninParams = {}) {
  const { mutate, isPending } = useMutation<void, unknown, SigninParams>({
    mutationFn: signin,
    onSuccess,
    onError: (error) => {
      const axiosError = error as AxiosError
      onError?.(axiosError.response?.data as Error)
    },
  })

  return { signin: mutate, isSigningIn: isPending }
}
