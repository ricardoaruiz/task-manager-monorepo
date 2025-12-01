import type { ComponentProps } from 'react'

export type TaskListFilterButtonViewProps = ComponentProps<'button'> & {
  isLoading: boolean
}
