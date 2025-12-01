import { cn } from '@/lib/utils'
import type { TaskListItemTitleProps } from './task-list-item-title.types'

export function TaskListItemTitleView({
  className,
  ...props
}: TaskListItemTitleProps) {
  return <h2 className={cn('text-2xl font-bold', className)} {...props} />
}
