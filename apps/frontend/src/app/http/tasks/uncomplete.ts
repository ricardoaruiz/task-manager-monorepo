import { api } from '@/lib/axios'

export async function uncompleteTask(taskId: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate network delay
  await api.patch(`/tasks/${taskId}/uncomplete`)
}
