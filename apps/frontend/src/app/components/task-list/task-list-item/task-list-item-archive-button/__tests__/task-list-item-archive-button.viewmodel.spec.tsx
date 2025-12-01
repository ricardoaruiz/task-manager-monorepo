import { describe, expect, it } from 'vitest'
import { renderWithProviders, screen } from '@/lib/test-utils'
import { TaskListItemArchiveButtonViewModel } from '../task-list-item-archive-button.viewmodel'

describe('TaskListItemDeleteButtonViewModel', () => {
  it('should not render when isVisible is false', () => {
    const { container } = renderWithProviders(
      <TaskListItemArchiveButtonViewModel taskId="1" isVisible={false} />,
    )
    expect(container).toBeEmptyDOMElement()
  })

  it('should not render when isVisible is true', () => {
    const { container } = renderWithProviders(
      <TaskListItemArchiveButtonViewModel taskId="1" isVisible={true} />,
    )
    expect(container).not.toBeEmptyDOMElement()
    const button = screen.getByLabelText('archive task')
    expect(button).toBeVisible()
  })
})
