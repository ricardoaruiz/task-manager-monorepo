import { cn } from '@/lib/utils'
import type { TaskListItemProps } from './task-list-item.types'

export function TaskListItemView({ className, ...props }: TaskListItemProps) {
  return (
    <li
      className={cn(
        'border border-zinc-500 rounded-lg p-4 flex justify-between gap-2 flex-wrap',
        className,
      )}
      {...props}
    />
  )
}
