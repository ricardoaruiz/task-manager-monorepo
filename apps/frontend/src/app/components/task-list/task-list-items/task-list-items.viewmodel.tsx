import { useSearch } from '@tanstack/react-router'
import { useTaskListItemsModel } from './task-list.model'
import type { TaskListItemViewModelProps } from './task-list-items.types'
import { TaskListItemsView } from './task-list-items.view'

export function TaskListItemsViewModel({
  updateIsLoading,
  isArchived,
}: TaskListItemViewModelProps) {
  const search = useSearch({
    strict: false,
  })

  const model = useTaskListItemsModel({
    filter: { ...search },
    updateIsLoading,
    isArchived,
  })

  return <TaskListItemsView model={model} />
}
