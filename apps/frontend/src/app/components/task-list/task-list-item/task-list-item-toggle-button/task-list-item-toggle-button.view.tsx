import { CheckIcon, Loader2Icon, Undo2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { TaskListItemToggleButtonViewProps } from './task-list-item-toggle-button.types'

export function TaskListItemToggleButtonView({
  model,
  ...props
}: TaskListItemToggleButtonViewProps) {
  const { isCompleted, toggleTaskStatus, isPending } = model

  const pendingState = (
    <>
      <Loader2Icon className="h-5 w-5 animate-spin" />
      Processing...
    </>
  )

  const initislState = !isCompleted ? (
    <>
      <CheckIcon className="h-5 w-5" />
      Complete Task
    </>
  ) : (
    <>
      <Undo2Icon className="h-5 w-5" />
      Uncomplete Task
    </>
  )

  return (
    <Button
      variant="outline"
      onClick={toggleTaskStatus}
      disabled={isPending}
      aria-busy={isPending}
      {...props}
    >
      {isPending ? pendingState : initislState}
    </Button>
  )
}
