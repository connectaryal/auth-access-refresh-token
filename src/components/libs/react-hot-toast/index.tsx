import toast, { Toaster } from 'react-hot-toast';

const ReactHotToast = () => {
  return <Toaster position="bottom-right" reverseOrder={false} />;
}

const successToast = (message?: string) => {
  toast.success(message || 'Success');
}

const errorToast = (message?: string) => {
  toast.error(message || 'Error');
}

export { ReactHotToast, successToast, errorToast };
