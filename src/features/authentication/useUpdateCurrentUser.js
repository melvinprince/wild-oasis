import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser as udateCurrentUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateCurrentUser() {
  const queryClient = useQueryClient();
  const { mutate: udateCurrentUser, isPending: isUpdating } = useMutation({
    mutationFn: udateCurrentUserApi,
    onSuccess: ({ user }) => {
      toast.success("User successfully Updated");
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => {
      console.error(err);
      toast.error("Failed to update");
    },
  });
  return { isUpdating, udateCurrentUser };
}
