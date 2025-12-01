import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useCompleteTask } from '@/hooks/useCompleteTask'
import { TASKS_QUERY_KEY } from '@/hooks/useListTasks'
import { useUnCompleteTask } from '@/hooks/useUnCompleteTask'
import type { Task } from '@/http/tasks/list'
import type { TaskListItemToggleButtonModelProps } from './task-list-item-toggle-button.types'

export function useTaskListItemToggleButtonModel({
  taskId,
  completed,
}: TaskListItemToggleButtonModelProps) {
  const queryClient = useQueryClient()

  const updateViewData = () => {
    queryClient
      .getQueriesData({
        queryKey: [TASKS_QUERY_KEY],
      })
      .forEach(([key, _]) => {
        queryClient.setQueryData(key, (oldData: { tasks: Task[] }) => {
          const newData = oldData.tasks.map((task) => {
            if (task.id === taskId) {
              return {
                ...task,
                completed_at: completed ? null : new Date().toISOString(),
              }
            }
            return task
          })

          return { tasks: newData }
        })
      })
  }

  const { completeTaskMutation, isCompleteTaskPending } = useCompleteTask({
    onSuccess: updateViewData,
    onError: () => {
      toast.error('Failed to complete the task. Please try again.', {
        position: 'top-center',
      })
    },
  })

  const { unCompleteTaskMutation, isUnCompleteTaskPending } = useUnCompleteTask(
    {
      onSuccess: updateViewData,
      onError: () => {
        toast.error('Failed to uncomplete the task. Please try again.', {
          position: 'top-center',
        })
      },
    },
  )

  const toggleTaskStatus = () =>
    completed ? unCompleteTaskMutation(taskId) : completeTaskMutation(taskId)

  const isPending = isCompleteTaskPending || isUnCompleteTaskPending

  return { isCompleted: completed, isPending, toggleTaskStatus }
}
