import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import z from 'zod/v4'
import { TaskList } from '@/components/task-list'

function TaskListPage() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="space-y-5 flex flex-col">
      <TaskList.Form id="task-list-form" formTitle="Tasks" />
      <TaskList.Button isLoading={isLoading} form="task-list-form" />
      <TaskList.List updateIsLoading={(loading) => setIsLoading(loading)} />
    </div>
  )
}

const searchSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  completedStatus: z.string().optional(),
  pendingStatus: z.string().optional(),
})

export const Route = createFileRoute('/_private/tasks/')({
  component: TaskListPage,
  validateSearch: searchSchema.parse,
})
