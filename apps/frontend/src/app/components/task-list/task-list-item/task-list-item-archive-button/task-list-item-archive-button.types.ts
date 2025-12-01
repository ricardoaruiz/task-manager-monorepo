import type { ComponentProps } from 'react'
import type { useTaskListItemArchiveButtonModel } from './task-list-item-archive-button.model'

export type TaskListItemArchiveButtonModelProps = {
  taskId: string
}

export type TaskListItemArchiveButtonViewProps = {
  model: ReturnType<typeof useTaskListItemArchiveButtonModel>
}

export type TaskListItemArchiveButtonViewModelProps =
  ComponentProps<'button'> & {
    taskId: string
    isVisible?: boolean
  }
