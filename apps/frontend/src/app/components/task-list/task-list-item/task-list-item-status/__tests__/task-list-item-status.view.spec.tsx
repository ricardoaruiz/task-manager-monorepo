import { describe, expect, it } from 'vitest'
import { render, screen } from '@/lib/test-utils'
import { TaskListItemStatusView } from '../task-list-item-status.view'

describe('TaskListItemStatusView', () => {
  it('should able to render a completed status', () => {
    render(<TaskListItemStatusView completed={true} />)

    const element = screen.getByText(/completed/i)
    expect(element).toBeVisible()
    expect(element).toHaveClass('text-green-600')
  })

  it('should able to render a pending status', () => {
    render(<TaskListItemStatusView completed={false} />)

    const element = screen.getByText(/pending/i)
    expect(element).toBeVisible()
    expect(element).toHaveClass('text-red-600')
  })
})
