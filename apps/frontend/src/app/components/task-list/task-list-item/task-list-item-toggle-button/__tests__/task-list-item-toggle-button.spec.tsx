import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@/lib/test-utils'
import type { useTaskListItemToggleButtonModel } from '../task-list-item-toggle-button.model'
import { TaskListItemToggleButtonView } from '../task-list-item-toggle-button.view'

describe('TaskListItemToggleButton', () => {
  let model: ReturnType<typeof useTaskListItemToggleButtonModel>

  beforeEach(() => {
    model = {
      isCompleted: false,
      isPending: false,
      toggleTaskStatus: vi.fn(),
    }
  })

  it('should able to render "complete task" state', () => {
    render(<TaskListItemToggleButtonView model={model} />)

    const button = screen.getByText(/complete task/i)
    expect(button).toBeVisible()
    expect(button).not.toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'false')
  })

  it('should able to render processing state', () => {
    model.isPending = true
    render(<TaskListItemToggleButtonView model={model} />)

    const button = screen.getByText(/processing.../i)
    expect(button).toBeVisible()
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'true')
  })

  it('should able to render "uncomplete task" state', () => {
    model.isCompleted = true
    render(<TaskListItemToggleButtonView model={model} />)

    const button = screen.getByText(/uncomplete task/i)
    expect(button).toBeVisible()
    expect(button).not.toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'false')
  })
})
