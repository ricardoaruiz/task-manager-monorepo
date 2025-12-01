import type { ComponentProps } from 'react'
import type { useTaskListItemToggleButtonModel } from './task-list-item-toggle-button.model'

export type TaskListItemToggleButtonModelProps = {
  taskId: string
  completed: boolean
}

export type TaskListItemToggleButtonViewProps = {
  model: ReturnType<typeof useTaskListItemToggleButtonModel>
}

export type TaskListItemToggleButtonViewModelProps =
  ComponentProps<'button'> & {
    taskId: string
    completed: boolean
    isVisible?: boolean
  }
