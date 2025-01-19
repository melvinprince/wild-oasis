import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deletCabin as deletCabinAPI } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deletCabinAPI,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      console.error(err);
      toast.error("Failed to delete");
    },
  });
  return { isDeleting, deleteCabin };
}
