import { useListTasks } from '@/hooks/useListTasks'
import type { UseTaskListItemsModel } from './task-list-items.types'

export function useTaskListItemsModel({
  filter,
  updateIsLoading,
  isArchived,
}: UseTaskListItemsModel) {
  const { title, description, completedStatus, pendingStatus } = filter
  const { tasksData, isTasksLoading } = useListTasks({
    title,
    description,
    completedStatus,
    pendingStatus,
    isArchived,
  })

  updateIsLoading(isTasksLoading)

  return {
    tasksData,
    isTasksLoading,
  }
}
