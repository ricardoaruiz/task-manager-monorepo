import { describe, expect, it } from 'vitest'
import { render, screen } from '@/lib/test-utils'
import { TaskListItemDescriptionView } from '../task-list-item-description.view'

describe('TaskListItemDescriptionView', () => {
  it('should able to render default mode', () => {
    render(
      <TaskListItemDescriptionView>
        Task description
      </TaskListItemDescriptionView>,
    )

    const element = screen.getByRole('paragraph')
    expect(element).toHaveTextContent(/task description/i)
    expect(element).toHaveClass('text-zinc-700')
  })

  it('should able to render with custom class', () => {
    render(
      <TaskListItemDescriptionView className="font-semibold">
        Task description
      </TaskListItemDescriptionView>,
    )

    const element = screen.getByRole('paragraph')
    expect(element).toHaveTextContent(/task description/i)
    expect(element).toHaveClass('text-zinc-700 font-semibold')
  })
})
