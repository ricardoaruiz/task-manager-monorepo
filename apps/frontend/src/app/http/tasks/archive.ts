import { api } from '@/lib/axios'

export async function archiveTask(taskId: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate network delay
  await api.patch(`/tasks/${taskId}/archive`)
}
