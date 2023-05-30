import React from 'react';

export type AlertProps = {
  show: boolean;
  icon: React.ReactNode;
  message: string;
  type: 'success' | 'failed';
};
