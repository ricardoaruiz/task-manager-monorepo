import { cn } from '@/lib/utils'
import { TaskListItem } from '../task-list-item'
import type { TaskListItemsViewProps } from './task-list-items.types'
import { TaskListSkeletonView } from './task-list-skeleton.view'

export function TaskListItemsView({
  model,
  className,
  ...props
}: TaskListItemsViewProps) {
  const { tasksData, isTasksLoading } = model
  const noDataFound = !isTasksLoading && !tasksData.length

  if (isTasksLoading) {
    return <TaskListSkeletonView count={3} />
  }

  if (noDataFound) {
    return (
      <p className="text-2xl font-semibold text-center">No tasks listed.</p>
    )
  }

  return (
    <ul className={cn('flex flex-col gap-4', className)} {...props}>
      {tasksData.map((task) => {
        const isArchived = !!task.archived_at
        const isCompleted = !!task.completed_at

        return (
          <TaskListItem.Root
            key={task.id}
            className="justify-start md:justify-between"
          >
            <TaskListItem.Group
              className={cn('flex-1/2', {
                'flex-1': isArchived,
              })}
            >
              <TaskListItem.Title>
                {task.title}
                <span className="text-sm ml-5 text-zinc-700">
                  {task.completed_at
                    ? `Completed at ${new Date(task.completed_at).toLocaleDateString('pt-BR')}`
                    : null}
                </span>
              </TaskListItem.Title>
              <TaskListItem.Description>
                {task.description}
              </TaskListItem.Description>
            </TaskListItem.Group>

            <TaskListItem.Group
              className={cn('flex-1/3', {
                hidden: isArchived,
              })}
            >
              <div className="flex items-center justify-center gap-2">
                <TaskListItem.Status completed={isCompleted} />
                <TaskListItem.DeleteButton
                  taskId={task.id}
                  isVisible={!isCompleted && !isArchived}
                />
                <TaskListItem.ArchiveButton
                  taskId={task.id}
                  isVisible={isCompleted && !isArchived}
                />
              </div>
              <TaskListItem.ToggleButton
                taskId={task.id}
                completed={isCompleted}
                isVisible={!isArchived}
              />
            </TaskListItem.Group>
          </TaskListItem.Root>
        )
      })}
    </ul>
  )
}
