import { useQuery } from '@tanstack/react-query'
import { listTasks } from '../http/tasks/list'

export const TASKS_QUERY_KEY = 'tasks'

type UseListTasksFilter = {
  title?: string
  description?: string
  completedStatus?: string
  pendingStatus?: string
  isArchived?: boolean
}

export function useListTasks({
  title,
  description,
  completedStatus,
  pendingStatus,
  isArchived,
}: UseListTasksFilter = {}) {
  const { data, isLoading, refetch } = useQuery<
    Awaited<ReturnType<typeof listTasks>>
  >({
    queryKey: [
      TASKS_QUERY_KEY,
      { title, description, completedStatus, pendingStatus, isArchived },
    ],
    queryFn: () =>
      listTasks({
        title,
        description,
        completedStatus,
        pendingStatus,
        isArchived,
      }),
  })

  return {
    tasksData: data?.tasks ?? [],
    isTasksLoading: isLoading,
    refetchTasks: refetch,
  }
}
