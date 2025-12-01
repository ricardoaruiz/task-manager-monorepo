import { Loader2Icon, Trash2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { TaskListItemDeleteButtonViewProps } from './task-list-item-delete-button.types'

export function TaskListItemDeleteButtonView({
  model,
  ...props
}: TaskListItemDeleteButtonViewProps) {
  const { deleteTask, isDeleteTaskPending } = model

  return (
    <Button
      variant="ghost"
      onClick={deleteTask}
      disabled={isDeleteTaskPending}
      aria-label="delete task"
      aria-busy={isDeleteTaskPending}
      {...props}
    >
      {isDeleteTaskPending ? (
        <Loader2Icon className="h-5 w-5 animate-spin" />
      ) : (
        <Trash2Icon className="h-5 w-5" />
      )}
    </Button>
  )
}
