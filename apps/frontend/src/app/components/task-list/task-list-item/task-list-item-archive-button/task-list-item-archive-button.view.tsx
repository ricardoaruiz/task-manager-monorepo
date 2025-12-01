import { ArchiveIcon, Loader2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { TaskListItemArchiveButtonViewProps } from './task-list-item-archive-button.types'

export function TaskListItemArchiveButtonView({
  model,
  ...props
}: TaskListItemArchiveButtonViewProps) {
  const { archiveTask, isArchiveTaskPending } = model

  return (
    <Button
      variant="ghost"
      onClick={archiveTask}
      disabled={isArchiveTaskPending}
      aria-label="archive task"
      aria-busy={isArchiveTaskPending}
      {...props}
    >
      {isArchiveTaskPending ? (
        <Loader2Icon className="h-5 w-5 animate-spin" />
      ) : (
        <ArchiveIcon className="h-5 w-5" />
      )}
    </Button>
  )
}
