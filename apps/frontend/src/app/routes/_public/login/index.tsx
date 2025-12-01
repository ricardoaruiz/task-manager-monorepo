import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '@/components/login-form'

function LoginPage() {
  const navigate = Route.useNavigate()

  return <LoginForm onSuccess={() => navigate({ to: '/tasks' })} />
}

export const Route = createFileRoute('/_public/login/')({
  component: LoginPage,
})
