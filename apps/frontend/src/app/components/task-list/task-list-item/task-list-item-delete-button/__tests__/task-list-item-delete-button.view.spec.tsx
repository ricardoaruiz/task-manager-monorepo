import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@/lib/test-utils'
import { TaskListItemDeleteButtonView } from '../task-list-item-delete-button.view'

describe('TaskListItemDeleteButtonView', () => {
  const deleteTask = vi.fn(() => Promise.resolve())
  let model = {
    deleteTask,
    isDeleteTaskPending: false,
  }

  beforeEach(() => {
    model = {
      deleteTask,
      isDeleteTaskPending: false,
    }
  })

  it('should able to render with initial state', () => {
    render(<TaskListItemDeleteButtonView model={model} />)

    const button = screen.getByLabelText('delete task')
    expect(button).toBeVisible()
    expect(button).toBeEnabled()
    expect(button).toHaveAttribute('aria-busy', 'false')
  })

  it('should able to render with loading state', () => {
    model.isDeleteTaskPending = true
    render(<TaskListItemDeleteButtonView model={model} />)

    const button = screen.getByLabelText('delete task')
    expect(button).toBeVisible()
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'true')
  })

  it('should able to call deleteTask function when button is clicked', async () => {
    render(<TaskListItemDeleteButtonView model={model} />)

    const button = screen.getByLabelText('delete task')
    expect(button).toBeVisible()
    expect(button).toBeEnabled()
    expect(button).toHaveAttribute('aria-busy', 'false')

    await userEvent.click(button)
    expect(model.deleteTask).toHaveBeenCalledTimes(1)
  })
})
