import { useQuery } from "@tanstack/react-query"
import { getUser } from "./auth"

export function useMe(accessToken: string) {
  const query = useQuery({
    queryKey: ["me"],
    enabled: !!accessToken,
    queryFn: getUser,
  })
  return query
}
