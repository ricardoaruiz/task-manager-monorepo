import { ListIcon, Loader2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { TaskListFilterButtonViewProps } from './task-list-filter-button.types'

export function TaskListFilterButtonView({
  isLoading,
  className,
  ...props
}: TaskListFilterButtonViewProps) {
  return (
    <Button size="lg" disabled={isLoading} className={className} {...props}>
      {isLoading ? (
        <>
          <Loader2Icon className="mr-2 h-4 w-4 animate-spin" /> Loading...
        </>
      ) : (
        <>
          <ListIcon className="mr-2 h-4 w-4" /> List Tasks
        </>
      )}
    </Button>
  )
}
