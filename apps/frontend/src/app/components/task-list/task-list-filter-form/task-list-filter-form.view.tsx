import { Label } from '@radix-ui/react-label'
import { Checkbox } from '@/components/ui/checkbox'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import type {
  TaskListFilterFormViewProps,
  TaskListFormHiddenFields,
} from './task-list-filter-form.types'

export function TaskListFilterFormView({
  model,
  formTitle,
  hidedFields,
  ...props
}: TaskListFilterFormViewProps) {
  const {
    title,
    description,
    completedStatus,
    pendingStatus,
    handleFormSubmit,
  } = model

  const isHiddenField = (fields: TaskListFormHiddenFields) => {
    if (!hidedFields) return false
    return fields.some((field) => hidedFields.includes(field))
  }

  return (
    <div>
      <h1 className="text-3xl text-center">{formTitle}</h1>

      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-5"
        {...props}
      >
        <Field className={isHiddenField(['title']) ? 'hidden' : ''}>
          <FieldLabel htmlFor="title">Title</FieldLabel>
          <Input
            type="title"
            id="title"
            name="title"
            autoComplete="off"
            defaultValue={title}
          />
        </Field>
        <Field className={isHiddenField(['description']) ? 'hidden' : ''}>
          <FieldLabel htmlFor="description">Description</FieldLabel>
          <Input
            type="description"
            id="description"
            name="description"
            autoComplete="off"
            defaultValue={description}
          />
        </Field>

        <div
          className={cn(
            'flex flex-col gap-4',
            isHiddenField(['status']) ? 'hidden' : '',
          )}
        >
          <FieldLabel>Status</FieldLabel>

          <div className="flex gap-4 items-center">
            <div className="flex gap-4 items-center">
              <Label htmlFor="completedStatus">Completed</Label>
              <Checkbox
                id="completedStatus"
                name="completedStatus"
                defaultChecked={!!completedStatus}
              />
            </div>
            <div className="flex gap-4 items-center">
              <Label htmlFor="pendingStatus">Pending</Label>
              <Checkbox
                id="pendingStatus"
                name="pendingStatus"
                defaultChecked={!!pendingStatus}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
