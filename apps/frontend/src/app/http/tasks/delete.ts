import { api } from '@/lib/axios'

export async function deleteTask(taskId: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate network delay
  await api.delete(`/tasks/${taskId}`)
}
