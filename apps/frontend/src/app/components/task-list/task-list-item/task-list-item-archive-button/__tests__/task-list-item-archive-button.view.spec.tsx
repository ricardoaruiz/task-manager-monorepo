import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@/lib/test-utils'
import type { useTaskListItemArchiveButtonModel } from '../task-list-item-archive-button.model'
import { TaskListItemArchiveButtonView } from '../task-list-item-archive-button.view'

describe('TaskListItemArchiveButtonView', () => {
  const archiveTask = vi.fn(() => Promise.resolve())

  let model: ReturnType<typeof useTaskListItemArchiveButtonModel> = {
    archiveTask,
    isArchiveTaskPending: false,
  }

  beforeEach(() => {
    model = {
      archiveTask,
      isArchiveTaskPending: false,
    }
  })

  it('should able to render with initial state', () => {
    render(<TaskListItemArchiveButtonView model={model} />)

    const button = screen.getByLabelText('archive task')
    expect(button).toBeVisible()
    expect(button).toBeEnabled()
    expect(button).toHaveAttribute('aria-busy', 'false')
  })

  it('should able to render with loading state', () => {
    model.isArchiveTaskPending = true
    render(<TaskListItemArchiveButtonView model={model} />)

    const button = screen.getByLabelText('archive task')
    expect(button).toBeVisible()
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'true')
  })

  it('should able to call archiveTask function when button is clicked', async () => {
    render(<TaskListItemArchiveButtonView model={model} />)

    const button = screen.getByLabelText('archive task')
    expect(button).toBeVisible()
    expect(button).toBeEnabled()
    expect(button).toHaveAttribute('aria-busy', 'false')

    await userEvent.click(button)
    expect(model.archiveTask).toHaveBeenCalledTimes(1)
  })
})
