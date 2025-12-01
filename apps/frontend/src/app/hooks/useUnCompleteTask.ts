import { type UseMutationOptions, useMutation } from '@tanstack/react-query'
import { uncompleteTask } from '@/http/tasks/uncomplete'
import { TASKS_QUERY_KEY } from './useListTasks'

type UseUnCompleteTaskParams = UseMutationOptions<void, unknown, string>

export function useUnCompleteTask({
  onSuccess,
  onError,
}: UseUnCompleteTaskParams = {}) {
  const { mutate: unCompleteTaskMutation, isPending: isUnCompleteTaskPending } =
    useMutation<void, unknown, string>({
      mutationFn: (taskId) => uncompleteTask(taskId),
      onSuccess: (data, variables, onMutateResult, context) => {
        context.client.invalidateQueries({
          queryKey: [TASKS_QUERY_KEY],
          exact: false,
        })
        onSuccess?.(data, variables, onMutateResult, context)
      },
      onError,
    })

  return { unCompleteTaskMutation, isUnCompleteTaskPending }
}
