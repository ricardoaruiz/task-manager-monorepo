import type { ComponentProps } from 'react'
import type { useTaskListItemDeleteButtonModel } from './task-list-item-delete-button.model'

export type TaskListItemDeleteButtonModelProps = {
  taskId: string
}

export type TaskListItemDeleteButtonViewProps = {
  model: ReturnType<typeof useTaskListItemDeleteButtonModel>
}

export type TaskListItemDeleteButtonViewModelProps =
  ComponentProps<'button'> & {
    taskId: string
    isVisible?: boolean
  }
