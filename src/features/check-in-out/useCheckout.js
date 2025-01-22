import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryCleint = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} succefully checked out`);
      queryCleint.invalidateQueries({ active: true });
    },
    onError: () => toast.error("There was an error while checkingout booking"),
  });

  return { checkout, isCheckingout };
}
