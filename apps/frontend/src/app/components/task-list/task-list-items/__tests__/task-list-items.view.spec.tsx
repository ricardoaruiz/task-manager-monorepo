import { describe, expect, it, vi } from 'vitest'
import { render, renderWithProviders, screen } from '@/lib/test-utils'
import { TaskListItemsView } from '../task-list-items.view'

describe('TaskListItemsView', () => {
  it('should able to show skeleton when loading', () => {
    render(
      <TaskListItemsView
        model={{
          tasksData: [],
          isTasksLoading: true,
        }}
      />,
    )

    const skeletonItems = screen.getAllByTestId('skeleton-item')
    expect(skeletonItems).toHaveLength(3)
  })

  it('should able to show no data found message when no tasks', () => {
    render(
      <TaskListItemsView
        model={{
          tasksData: [],
          isTasksLoading: false,
        }}
      />,
    )

    const noDataMessage = screen.getByText(/No tasks listed./i)
    expect(noDataMessage).toBeVisible()
  })

  it('should able to show tasks when tasks found', async () => {
    renderWithProviders(
      <TaskListItemsView
        model={{
          tasksData: [
            {
              id: '1',
              title: 'Test Task',
              description: 'This is a test task',
              completed_at: null,
            },
          ],
          isTasksLoading: false,
        }}
      />,
    )

    await vi.waitFor(() =>
      expect(screen.queryAllByTestId('skeleton-item')).toHaveLength(0),
    )
    const tasks = screen.getAllByRole('listitem')
    expect(tasks).toHaveLength(1)
  })
})
