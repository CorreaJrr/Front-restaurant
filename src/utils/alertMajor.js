import Swal from 'sweetalert2';

export const alertGeneric = (message, title, icon, action) => {
  Swal.fire({
    title,
    text: message,
    icon,
    confirmButtonColor: '#198754',
  }).then((result) => {
    if (result.isConfirmed) {
      if (typeof action === 'function') {
        action();
      }
    }
  });
};

export const alertGenericQuestion = (message, title, action) => {
  Swal.fire({
    title,
    text: message,
    icon: 'question',
    confirmButtonColor: '#198754',
    showCancelButton: true,
    cancelButtonColor: '#dc3545',
  }).then((result) => {
    if (result.isConfirmed) {
      if (typeof action === 'function') {
        action();
      }
    }
  });
};