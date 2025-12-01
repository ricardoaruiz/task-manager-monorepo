import { describe, expect, it } from 'vitest'
import { renderWithProviders, screen } from '@/lib/test-utils'
import { TaskListItemDeleteButtonViewModel } from '../task-list-item-delete-button.viewmodel'

describe('TaskListItemDeleteButtonViewModel', () => {
  it('should not render when isVisible is false', () => {
    const { container } = renderWithProviders(
      <TaskListItemDeleteButtonViewModel taskId="1" isVisible={false} />,
    )
    expect(container).toBeEmptyDOMElement()
  })

  it('should not render when isVisible is true', () => {
    const { container } = renderWithProviders(
      <TaskListItemDeleteButtonViewModel taskId="1" isVisible={true} />,
    )
    expect(container).not.toBeEmptyDOMElement()
    const button = screen.getByLabelText('delete task')
    expect(button).toBeVisible()
  })
})
