import { useTaskListItemToggleButtonModel } from './task-list-item-toggle-button.model'
import type { TaskListItemToggleButtonViewModelProps } from './task-list-item-toggle-button.types'
import { TaskListItemToggleButtonView } from './task-list-item-toggle-button.view'

export function TaskListItemToggleButtonViewModel({
  taskId,
  completed,
  isVisible = true,
}: TaskListItemToggleButtonViewModelProps) {
  const model = useTaskListItemToggleButtonModel({ taskId, completed })

  if (!isVisible) {
    return null
  }

  return <TaskListItemToggleButtonView model={model} />
}
