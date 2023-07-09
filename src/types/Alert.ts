type Alert = {
  show: boolean;
  icon: JSX.Element;
  message: string;
  type: 'success' | 'failed';
};

export default Alert;
