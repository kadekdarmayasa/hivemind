import { useMemo, useState } from 'react';
import { IconContext } from 'react-icons';
import { AlertProps } from 'types/AlertProps';

export const useAlert = () => {
  const [alert, setAlert] = useState<AlertProps>({
    show: false,
    icon: null,
    message: '',
    type: 'success',
  });

  const alertIconProps: IconContext = useMemo(
    () => ({
      size: '25px',
      className: `${alert.type === 'failed' ? 'text-red-600' : 'text-rare-wind'}`,
    }),
    [alert.type],
  );

  return { alert, setAlert, alertIconProps };
};
