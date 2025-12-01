import { useTaskListItemArchiveButtonModel } from './task-list-item-archive-button.model'
import type { TaskListItemArchiveButtonViewModelProps } from './task-list-item-archive-button.types'
import { TaskListItemArchiveButtonView } from './task-list-item-archive-button.view'

export function TaskListItemArchiveButtonViewModel({
  taskId,
  isVisible,
}: TaskListItemArchiveButtonViewModelProps) {
  const model = useTaskListItemArchiveButtonModel({ taskId })

  if (!isVisible) {
    return null
  }

  return <TaskListItemArchiveButtonView model={model} />
}
