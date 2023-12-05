import Swal from "sweetalert2";

export const showAlert = (msg?: string)=> {
  Swal.fire({
    title: msg || "Tarjeta agregada!!!",
    text: "Agregue otra!!!",
    icon: "success"
  });
}

export const showConfirmationAlert = async (): Promise<boolean> => {

  const result = await Swal.fire({
    icon: 'warning',
    title: "Desea eliminar la tarjeta?",
    showDenyButton: true,
    confirmButtonText: "Eliminar",
  }).then((result) => {

    return result.isConfirmed;

  });

  return result;

}

