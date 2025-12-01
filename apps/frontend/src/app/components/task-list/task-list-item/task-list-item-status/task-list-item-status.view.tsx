import { cn } from '@/lib/utils'
import type { TaskListItemStatusProps } from './task-list-item-status.types'

export function TaskListItemStatusView({
  completed,
  className,
  ...props
}: TaskListItemStatusProps) {
  return (
    <div
      className={cn(
        'font-semibold',
        {
          'text-green-600': completed,
          'text-red-600': !completed,
        },
        className,
      )}
      {...props}
    >
      {completed ? 'Completed' : 'Pending'}
    </div>
  )
}
