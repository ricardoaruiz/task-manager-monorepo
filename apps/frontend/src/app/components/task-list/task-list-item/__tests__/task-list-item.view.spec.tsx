import { describe, expect, it } from 'vitest'
import { render, screen } from '@/lib/test-utils'
import { TaskListItemView } from '../task-list-item.view'

describe('TaskListItemView', () => {
  it('should render standard mode', () => {
    render(
      <TaskListItemView data-testid="task-list-item">
        <div data-testid="child">Content</div>
      </TaskListItemView>,
    )
    const rootElement = screen.getByTestId('task-list-item')
    expect(rootElement).toBeVisible()
    expect(rootElement).toHaveClass(
      'border border-zinc-500 rounded-lg p-4 flex justify-between gap-2 flex-wrap',
    )
    expect(rootElement).toHaveTextContent('Content')
  })

  it('should render custtom classes mode', () => {
    render(
      <TaskListItemView
        data-testid="task-list-item"
        className="border-zinc-800"
      >
        <div data-testid="child">Content</div>
      </TaskListItemView>,
    )
    const rootElement = screen.getByTestId('task-list-item')
    expect(rootElement).toBeVisible()
    expect(rootElement).toHaveClass(
      'border border-zinc-800 rounded-lg p-4 flex justify-between gap-2 flex-wrap',
    )
    expect(rootElement).toHaveTextContent('Content')
  })
})
