import { createFileRoute, redirect } from '@tanstack/react-router'
import { me } from '../http/profile/me'

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    try {
      await me()

      return redirect({
        to: '/tasks',
      })
    } catch (_error) {
      throw redirect({
        to: '/login',
      })
    }
  },
})
