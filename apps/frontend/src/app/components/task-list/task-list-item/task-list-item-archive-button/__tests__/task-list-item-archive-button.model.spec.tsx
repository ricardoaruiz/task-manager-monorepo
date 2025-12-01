import { toast } from 'react-toastify'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { archiveTask } from '@/http/tasks/archive'
import { act, renderHookWithProviders } from '@/lib/test-utils'
import { useTaskListItemArchiveButtonModel } from '../task-list-item-archive-button.model'

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

vi.mock('@/http/tasks/archive')

describe('TaskListDeleteButtonModel', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should able to show toast error when archive task fails', async () => {
    const toastErrorSpy = vi.spyOn(toast, 'error').mockImplementation(() => {
      return 'mocked-toast-id'
    })

    vi.mocked(archiveTask).mockRejectedValueOnce(
      new Error('Failed to archive the task'),
    )

    const { result } = renderHookWithProviders(() =>
      useTaskListItemArchiveButtonModel({ taskId: 'test-task-id' }),
    )

    act(() => result.current.archiveTask())

    await vi.waitFor(() => {
      expect(toastErrorSpy).toHaveBeenCalledWith(
        'Failed to archive the task. Please try again.',
        { position: 'top-center' },
      )
    })
  })

  it('should able not show toast error when archiveTask succeeds', async () => {
    const toastSuccesSpy = vi.spyOn(toast, 'success').mockImplementation(() => {
      return 'mocked-toast-id'
    })

    vi.mocked(archiveTask).mockResolvedValueOnce(undefined)

    const { result } = renderHookWithProviders(() =>
      useTaskListItemArchiveButtonModel({ taskId: 'test-task-id' }),
    )

    act(() => result.current.archiveTask())

    await vi.waitFor(() => {
      expect(toastSuccesSpy).toHaveBeenCalledWith(
        'Task archived successfully!',
        { position: 'top-center' },
      )
    })
  })
})
