import { cn } from '@/lib/utils'
import type { TaskListItemDescriptionProps } from './task-list-item-description.types'

export function TaskListItemDescriptionView({
  className,
  ...props
}: TaskListItemDescriptionProps) {
  return <p className={cn('text-zinc-700', className)} {...props} />
}
