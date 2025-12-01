import { describe, expect, it } from 'vitest'
import { render, screen } from '@/lib/test-utils'
import { TaskListItemGroupView } from '../task-list-item-group.view'

describe('TaskListItemGroupView', () => {
  it('should render standard mode', () => {
    render(
      <TaskListItemGroupView data-testid="task-list-item-group">
        <div data-testid="child">Content</div>
      </TaskListItemGroupView>,
    )
    const rootElement = screen.getByTestId('task-list-item-group')
    expect(rootElement).toBeVisible()
    expect(rootElement).toHaveClass('flex flex-col gap-4')
    expect(rootElement).toHaveTextContent('Content')
  })

  it('should render custtom classes mode', () => {
    render(
      <TaskListItemGroupView
        data-testid="task-list-item-group"
        className="flex-row gap-5"
      >
        <div data-testid="child">Content</div>
      </TaskListItemGroupView>,
    )
    const rootElement = screen.getByTestId('task-list-item-group')
    expect(rootElement).toBeVisible()
    expect(rootElement).toHaveClass('flex flex-row gap-5')
    expect(rootElement).toHaveTextContent('Content')
  })
})
