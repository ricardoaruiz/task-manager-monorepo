import { useTaskListItemDeleteButtonModel } from './task-list-item-delete-button.model'
import type { TaskListItemDeleteButtonViewModelProps } from './task-list-item-delete-button.types'
import { TaskListItemDeleteButtonView } from './task-list-item-delete-button.view'

export function TaskListItemDeleteButtonViewModel({
  taskId,
  isVisible,
}: TaskListItemDeleteButtonViewModelProps) {
  const model = useTaskListItemDeleteButtonModel({ taskId })

  if (!isVisible) {
    return null
  }

  return <TaskListItemDeleteButtonView model={model} />
}
