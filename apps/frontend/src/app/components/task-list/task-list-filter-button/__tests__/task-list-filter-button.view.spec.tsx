import { describe, expect, it } from 'vitest'
import { render, screen } from '@/lib/test-utils'
import { TaskListFilterButtonView } from '../task-list-filter-button.view'

describe('TaskListFilterButtonView', () => {
  it('should able to render initial state', () => {
    render(<TaskListFilterButtonView isLoading={false} />)

    const button = screen.getByRole('button', { name: /list tasks/i })
    expect(button).toBeVisible()
    expect(button).toBeEnabled()
  })

  it('should able to render loading state', () => {
    render(<TaskListFilterButtonView isLoading={true} />)

    const button = screen.getByRole('button', { name: /loading.../i })
    expect(button).toBeVisible()
    expect(button).toBeDisabled()
  })
})
