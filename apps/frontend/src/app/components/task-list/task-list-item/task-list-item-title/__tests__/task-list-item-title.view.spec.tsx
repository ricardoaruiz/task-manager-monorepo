import { describe, expect, it } from 'vitest'
import { render, screen } from '@/lib/test-utils'
import { TaskListItemTitleView } from '../task-list-item-title.view'

describe('TaskListItemTitleView', () => {
  it('should able to render default', () => {
    render(<TaskListItemTitleView>Task Title</TaskListItemTitleView>)

    const element = screen.getByRole('heading', { name: /task title/i })
    expect(element).toBeVisible()
    expect(element).toHaveClass('text-2xl font-bold')
  })

  it('should able to render with custom class', () => {
    render(
      <TaskListItemTitleView className="text-3xl">
        Task Title
      </TaskListItemTitleView>,
    )

    const element = screen.getByRole('heading', { name: /task title/i })
    expect(element).toBeVisible()
    expect(element).toHaveClass('font-bold text-3xl')
  })
})
