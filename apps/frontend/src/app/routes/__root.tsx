import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <div className="min-h-screen">
    <div className="bg-zinc-950 flex items-center justify-center py-5">
      <h1 className="text-3xl text-center">Task Manager App</h1>
    </div>

    <Outlet />
    <TanStackRouterDevtools />
  </div>
)

export const Route = createRootRoute({ component: RootLayout })
