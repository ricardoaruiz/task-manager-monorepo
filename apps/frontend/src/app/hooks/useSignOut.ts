import { useMutation, useQueryClient } from '@tanstack/react-query'
import { signout } from '../http/auth/signout'
import { TASKS_QUERY_KEY } from './useListTasks'
import { ME_QUERY_KEY } from './useMe'

type UseSignOutParams = {
  onSuccess?: () => void
}

export function useSignOut({ onSuccess }: UseSignOutParams = {}) {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: signout,
    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: [TASKS_QUERY_KEY],
      })
      queryClient.removeQueries({ queryKey: [ME_QUERY_KEY] })
      onSuccess?.()
    },
  })

  return { signout: mutate, isSigningOut: isPending }
}
