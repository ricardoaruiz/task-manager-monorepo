import { Skeleton } from '@/components/ui/skeleton'
import { TaskListItem } from '../task-list-item'
import type { TaskListItemsSkeletonProps } from './task-list-items.types'

export function TaskListSkeletonView({
  count = 5,
}: TaskListItemsSkeletonProps) {
  return (
    <ul className="flex flex-col gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <TaskListItem.Root key={index} data-testid="skeleton-item">
          <TaskListItem.Group className="flex-2">
            <Skeleton className="h-10 w-full bg-gray-300 rounded"></Skeleton>
            <Skeleton className="h-6 w-full bg-gray-300 rounded"></Skeleton>
          </TaskListItem.Group>

          <TaskListItem.Group className="items-end flex-1">
            <Skeleton className="h-10 w-full bg-gray-300 rounded"></Skeleton>
            <Skeleton className="h-6 w-full bg-gray-300 rounded"></Skeleton>
          </TaskListItem.Group>
        </TaskListItem.Root>
      ))}
    </ul>
  )
}
