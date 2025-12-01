import { createFileRoute, Outlet } from '@tanstack/react-router'

const PublicLayout = () => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
      <Outlet />
    </div>
  )
}

export const Route = createFileRoute('/_public')({
  component: PublicLayout,
})
