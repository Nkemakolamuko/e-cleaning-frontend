import Swal from "sweetalert2";

// Handle Logout
export const handleLogout = (setAuth) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You will have to login again!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "green",
    cancelButtonColor: "#EC4899",
    confirmButtonText: "Yes, logout!",
  }).then((result) => {
    if (result.isConfirmed) {
      setAuth({});
      window.location.href = "/login";
    }
  });
};
