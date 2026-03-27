import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { login } from "./auth"

export function useLogin() {
  const mutation = useMutation({
    mutationFn: login,
    onError: (err) => {
      console.error(err)
      toast.error(err.message)
    },
  })
  return mutation
}
