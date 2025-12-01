import { describe, expect, it } from 'vitest'
import { render, screen } from '@/lib/test-utils'
import { TaskListSkeletonView } from '../task-list-skeleton.view'

describe('TaskListSkeletonView', () => {
  it('should render skeleton with default count', () => {
    render(<TaskListSkeletonView />)

    expect(screen.getAllByRole('listitem')).toHaveLength(5)
  })

  it('should render skeleton with diferente count', () => {
    render(<TaskListSkeletonView count={3} />)

    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })
})
