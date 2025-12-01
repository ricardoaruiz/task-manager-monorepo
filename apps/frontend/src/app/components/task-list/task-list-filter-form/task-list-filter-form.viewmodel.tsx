import { useTaskListFilterFormModel } from './task-list-filter-form.model'
import type { TaskListFilterFormModelViewProps } from './task-list-filter-form.types'
import { TaskListFilterFormView } from './task-list-filter-form.view'

export function TaskListFilterFormViewModel(
  props: TaskListFilterFormModelViewProps,
) {
  const model = useTaskListFilterFormModel()

  return <TaskListFilterFormView model={model} {...props} />
}
