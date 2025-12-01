import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
  useNavigate,
} from '@tanstack/react-router'
import { LogOutIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useMe } from '../hooks/useMe'
import { useSignOut } from '../hooks/useSignOut'
import { me } from '../http/profile/me'

const PrivateLayout = () => {
  const navigate = useNavigate()
  const { me } = useMe()

  const { signout } = useSignOut({
    onSuccess: () => {
      navigate({ to: '/login' })
    },
  })

  return (
    <div className="min-h-[calc(100vh-100px)]">
      {/* Extrair esse conteúdo para outros componentes */}
      <div className="bg-zinc-900 flex flex-col px-10 py-5 gap-5 text-white mb-5">
        <div className="flex gap-5 w-full justify-between">
          <div className="flex gap-5 items-center">
            <Link to="/tasks" className="[&.active]:font-bold">
              Tasks
            </Link>
            <Link to="/tasks/archived" className="[&.active]:font-bold">
              Archived
            </Link>
          </div>

          <div className="flex gap-5 items-center">
            <p className="flex items-center justify-center ">
              Welcome <span>{me?.name ? `, ${me.name}` : ''}</span>
            </p>
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="cursor-pointer"
              onClick={() => signout()}
            >
              <LogOutIcon />
            </Button>
          </div>
        </div>
      </div>

      <div className="container max-w-[700px] mx-auto px-4">
        <Outlet />
      </div>
    </div>
  )
}

export const Route = createFileRoute('/_private')({
  beforeLoad: async () => {
    try {
      const userData = await me()

      if (!userData) {
        console.log('Logged!!! is loading current page.')
      }
    } catch (_error) {
      throw redirect({
        to: '/login',
      })
    }
  },
  component: PrivateLayout,
})
