import type { ComponentProps } from 'react'
import type { useTaskListFilterFormModel } from './task-list-filter-form.model'

export type TaskListFormHiddenFields = Array<'title' | 'description' | 'status'>

export type TaskListFilterFormModelViewProps = ComponentProps<'form'> & {
  formTitle?: string
  hidedFields?: TaskListFormHiddenFields
}

export type TaskListFilterFormViewProps = TaskListFilterFormModelViewProps & {
  model: ReturnType<typeof useTaskListFilterFormModel>
  formTitle?: string
  hidedFields?: TaskListFormHiddenFields
}
