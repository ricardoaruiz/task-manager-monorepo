import type { ComponentProps } from 'react'

export type TaskListItemStatusProps = ComponentProps<'div'> & {
  completed: boolean
}
