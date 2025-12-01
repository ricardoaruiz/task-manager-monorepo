import { type UseMutationOptions, useMutation } from '@tanstack/react-query'
import { deleteTask } from '@/http/tasks/delete'

type UseDeleteTaskParams = UseMutationOptions<void, unknown, string>

export function useDeleteTask({
  onSuccess,
  onError,
}: UseDeleteTaskParams = {}) {
  const { mutate: deleteTaskMutation, isPending: isDeleteTaskPending } =
    useMutation<void, unknown, string>({
      mutationFn: (taskId) => deleteTask(taskId),
      onSuccess,
      onError,
    })

  return { deleteTaskMutation, isDeleteTaskPending }
}
