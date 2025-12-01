import { cn } from '@/lib/utils'
import type { TaskListItemGroupProps } from './task-list-item-group.types'

export function TaskListItemGroupView({
  className,
  ...props
}: TaskListItemGroupProps) {
  return <div className={cn('flex flex-col gap-4', className)} {...props} />
}
