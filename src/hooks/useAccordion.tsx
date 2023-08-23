import { useState } from 'react';

export function useAccordion() {
  const [openStates, setOpenStates] = useState<boolean[]>([]);

  const handleOpenStates = (index: number): void => {
    const updatedOpenStates = [...openStates];
    updatedOpenStates[index] = !updatedOpenStates[index];
    setOpenStates(updatedOpenStates);
  };

  return { openStates, handleOpenStates, setOpenStates };
}
