import { type UseMutationOptions, useMutation } from '@tanstack/react-query'
import { archiveTask } from '@/http/tasks/archive'
import { TASKS_QUERY_KEY } from './useListTasks'

type UseDeleteTaskParams = UseMutationOptions<void, unknown, string>

export function useArchiveTask({
  onSuccess,
  onError,
}: UseDeleteTaskParams = {}) {
  const { mutate: archiveTaskMutation, isPending: isArchiveTaskPending } =
    useMutation<void, unknown, string>({
      mutationFn: (taskId) => archiveTask(taskId),
      onSuccess: (data, variables, onMutateResult, context) => {
        context.client.invalidateQueries({
          queryKey: [TASKS_QUERY_KEY],
          exact: false,
        })
        onSuccess?.(data, variables, onMutateResult, context)
      },
      onError,
    })

  return { archiveTaskMutation, isArchiveTaskPending }
}
