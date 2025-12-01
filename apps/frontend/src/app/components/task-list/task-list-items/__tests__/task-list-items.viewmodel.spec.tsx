import { beforeEach, describe, expect, it, vi } from 'vitest'
import { renderWithProviders, screen } from '@/lib/test-utils'
import { useTaskListItemsModel } from '../task-list.model'
import { TaskListItemsViewModel } from '../task-list-items.viewmodel'

vi.mock('../task-list.model')

const mockedUpdateIsLoading = vi.fn()

vi.mock('@tanstack/react-router', () => {
  const originalModule = vi.importActual('@tanstack/react-router')
  return {
    ...originalModule,
    useSearch: vi.fn().mockReturnValue({}),
  }
})
describe('TaskListItemsViewModel', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.resetAllMocks()
  })

  it('should able to show empty task message when no data found', async () => {
    vi.mocked(useTaskListItemsModel).mockReturnValue({
      tasksData: [],
      isTasksLoading: false,
    })

    renderWithProviders(
      <TaskListItemsViewModel updateIsLoading={mockedUpdateIsLoading} />,
    )

    const element = await vi.waitFor(() => screen.getByText('No tasks listed.'))
    expect(element).toBeVisible()
  })

  it('should able to show empty task message when no data found', async () => {
    vi.mocked(useTaskListItemsModel).mockReturnValue({
      tasksData: [
        {
          id: '1',
          title: 'Test Task',
          description: 'This is a test task',
          completed_at: null,
        },
        {
          id: '2',
          title: 'Another Task',
          description: 'This is another test task',
          completed_at: '2024-01-01T00:00:00Z',
        },
      ],
      isTasksLoading: false,
    })

    renderWithProviders(
      <TaskListItemsViewModel updateIsLoading={mockedUpdateIsLoading} />,
    )

    const tasks = await vi.waitFor(() => screen.getAllByRole('listitem'))
    expect(tasks).toHaveLength(2)
  })
})
