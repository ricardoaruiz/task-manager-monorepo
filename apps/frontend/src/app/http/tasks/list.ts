import { api } from '../../lib/axios'

export type Task = {
  id: string
  title: string
  description: string
  completed_at: string | null
  archived_at: string | null
}

export type ListAllTasksResponse = {
  tasks: Task[]
}

export type ListAllTasksParams = {
  title?: string
  description?: string
  completedStatus?: string
  pendingStatus?: string
  isArchived?: boolean
}

export async function listTasks(
  params: ListAllTasksParams,
): Promise<ListAllTasksResponse> {
  const completed = Boolean(params.completedStatus)
  const pending = Boolean(params.pendingStatus)

  const url = new URL('/tasks', api.defaults.baseURL)
  if (params.title) {
    url.searchParams.append('title', params.title)
  }
  if (params.description) {
    url.searchParams.append('description', params.description)
  }
  if (completed && !pending) {
    url.searchParams.append('status', 'completed')
  }
  if (!completed && pending) {
    url.searchParams.append('status', 'pending')
  }
  if (params.isArchived) {
    url.searchParams.append('isArchived', 'true')
  }

  const response = await api.get<ListAllTasksResponse>(url.toString())

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return response.data
}
