import { toast } from 'react-toastify'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { deleteTask } from '@/http/tasks/delete'
import { act, renderHookWithProviders } from '@/lib/test-utils'
import { useTaskListItemDeleteButtonModel } from '../task-list-item-delete-button.model'

// Mock do react-query deve estar no topo
vi.mock('@tanstack/react-query', async () => {
  const originalModule = await vi.importActual('@tanstack/react-query')

  return {
    ...originalModule,
    useQueryClient: () => ({
      getQueriesData: () => [],
      setQueryData: vi.fn(),
    }),
  }
})

vi.mock('@/http/tasks/delete')

describe('TaskListDeleteButtonModel', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should able to show toast error when deleteTask fails', async () => {
    const toastErrorSpy = vi.spyOn(toast, 'error').mockImplementation(() => {
      return 'mocked-toast-id'
    })

    vi.mocked(deleteTask).mockRejectedValueOnce(
      new Error('Failed to delete the task'),
    )

    const { result } = renderHookWithProviders(() =>
      useTaskListItemDeleteButtonModel({ taskId: 'test-task-id' }),
    )

    act(() => result.current.deleteTask())

    await vi.waitFor(() => {
      expect(toastErrorSpy).toHaveBeenCalledWith(
        'Failed to delete the task. Please try again.',
        { position: 'top-center' },
      )
    })
  })

  it('should able not show toast error when deleteTask succeeds', async () => {
    const toastSuccesSpy = vi.spyOn(toast, 'success').mockImplementation(() => {
      return 'mocked-toast-id'
    })

    vi.mocked(deleteTask).mockResolvedValueOnce(undefined)

    const { result } = renderHookWithProviders(() =>
      useTaskListItemDeleteButtonModel({ taskId: 'test-task-id' }),
    )

    act(() => result.current.deleteTask())

    await vi.waitFor(() => {
      expect(toastSuccesSpy).toHaveBeenCalledWith(
        'Task deleted successfully.',
        { position: 'top-center' },
      )
    })
  })
})
