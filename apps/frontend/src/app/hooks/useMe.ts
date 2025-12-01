import { useQuery } from '@tanstack/react-query'
import { me } from '../http/profile/me'

export const ME_QUERY_KEY = 'me'

export function useMe(enabled: boolean = true) {
  const { data, isFetching, isError, refetch } = useQuery<
    Awaited<ReturnType<typeof me>>
  >({
    queryKey: [ME_QUERY_KEY],
    queryFn: me,
    retry: false,
    staleTime: 6 * 60 * 1000, // 6 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    enabled,
  })

  return {
    me: data,
    refetchMe: refetch,
    isFetchingMe: isFetching,
    isErrorMe: isError,
  }
}
