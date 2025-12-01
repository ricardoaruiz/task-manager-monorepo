import { useLocation, useNavigate, useSearch } from '@tanstack/react-router'

export function useTaskListFilterFormModel() {
  const navigate = useNavigate()
  const location = useLocation()

  const { title, description, completedStatus, pendingStatus } = useSearch({
    strict: false,
  })

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const completedStatus = formData.get('completedStatus') as string
    const pendingStatus = formData.get('pendingStatus') as string

    navigate({
      to: location.pathname,
      search: {
        title: title || undefined,
        description: description || undefined,
        completedStatus: completedStatus ? 'true' : undefined,
        pendingStatus: pendingStatus ? 'true' : undefined,
      },
    })
  }

  return {
    title,
    description,
    completedStatus,
    pendingStatus,
    handleFormSubmit,
  }
}
