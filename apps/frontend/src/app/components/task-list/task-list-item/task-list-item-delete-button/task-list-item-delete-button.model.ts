import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useDeleteTask } from '@/hooks/useDeleteTask'
import { TASKS_QUERY_KEY } from '@/hooks/useListTasks'
import type { Task } from '@/http/tasks/list'
import type { TaskListItemDeleteButtonModelProps } from './task-list-item-delete-button.types'

export function useTaskListItemDeleteButtonModel({
  taskId,
}: TaskListItemDeleteButtonModelProps) {
  const queryClient = useQueryClient()

  const updateViewData = () => {
    queryClient
      .getQueriesData({
        queryKey: [TASKS_QUERY_KEY],
      })
      .forEach(([key, _]) => {
        queryClient.setQueryData(key, (oldData: { tasks: Task[] }) => {
          const newData = oldData.tasks.filter((task) => task.id !== taskId)
          return { tasks: newData }
        })
      })
  }

  const { deleteTaskMutation, isDeleteTaskPending } = useDeleteTask({
    onSuccess: () => {
      updateViewData()
      toast.success('Task deleted successfully.', { position: 'top-center' })
    },
    onError: () => {
      toast.error('Failed to delete the task. Please try again.', {
        position: 'top-center',
      })
    },
  })

  const deleteTask = () => deleteTaskMutation(taskId)

  return { deleteTask, isDeleteTaskPending }
}
