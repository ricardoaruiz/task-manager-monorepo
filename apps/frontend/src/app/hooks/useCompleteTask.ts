import { type UseMutationOptions, useMutation } from '@tanstack/react-query'
import { completeTask } from '@/http/tasks/complete'
import { TASKS_QUERY_KEY } from './useListTasks'

type UseCompleteTaskParams = UseMutationOptions<void, unknown, string>

export function useCompleteTask({
  onSuccess,
  onError,
}: UseCompleteTaskParams = {}) {
  const { mutate: completeTaskMutation, isPending: isCompleteTaskPending } =
    useMutation<void, unknown, string>({
      mutationFn: (taskId) => completeTask(taskId),
      onSuccess: (data, variables, onMutateResult, context) => {
        context.client.invalidateQueries({
          queryKey: [TASKS_QUERY_KEY],
          exact: false,
        })
        onSuccess?.(data, variables, onMutateResult, context)
      },
      onError,
    })

  return { completeTaskMutation, isCompleteTaskPending }
}
