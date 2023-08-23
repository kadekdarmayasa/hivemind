export default interface Alert {
  show: boolean;
  icon: JSX.Element;
  message: string;
  type: 'success' | 'failed';
}
