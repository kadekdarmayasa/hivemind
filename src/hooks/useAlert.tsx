import { useState } from 'react';
import { AlertProps } from 'types/AlertProps';
import { IconContext } from 'react-icons';
import { IoCheckmarkCircleOutline, IoAlertCircleOutline } from 'react-icons/io5';

export function useAlert() {
  const alertIconProps: IconContext = { size: '25px' };

  const [alert, setAlert] = useState<AlertProps>({
    show: false,
    icon: null,
    message: '',
    type: 'success',
  });

  const setAlertState = (state: AlertProps['type']) => {
    const message =
      state === 'success'
        ? 'Your message has been sent successfully.'
        : 'Oops! something went wrong. Try again later.';

    const icon = state === 'success' ? <IoCheckmarkCircleOutline /> : <IoAlertCircleOutline />;

    setAlert((prevState) => ({
      ...prevState,
      show: true,
      icon,
      message,
      type: state,
    }));
  };

  return { alert, setAlert, setAlertState, alertIconProps };
}
