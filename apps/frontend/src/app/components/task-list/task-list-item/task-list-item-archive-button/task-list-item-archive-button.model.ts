import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useArchiveTask } from '@/hooks/useArchiveTask'
import { TASKS_QUERY_KEY } from '@/hooks/useListTasks'
import type { Task } from '@/http/tasks/list'
import type { TaskListItemArchiveButtonModelProps } from './task-list-item-archive-button.types'

export function useTaskListItemArchiveButtonModel({
  taskId,
}: TaskListItemArchiveButtonModelProps) {
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

  const { archiveTaskMutation, isArchiveTaskPending } = useArchiveTask({
    onSuccess: () => {
      updateViewData()
      toast.success('Task archived successfully!', { position: 'top-center' })
    },
    onError: () => {
      toast.error('Failed to archive the task. Please try again.', {
        position: 'top-center',
      })
    },
  })

  const archiveTask = () => archiveTaskMutation(taskId)

  return { archiveTask, isArchiveTaskPending }
}
