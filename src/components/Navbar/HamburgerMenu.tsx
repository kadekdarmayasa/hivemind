import React, { useMemo, Dispatch, SetStateAction } from 'react';
import { IconContext } from 'react-icons';
import { IoMenuOutline } from 'react-icons/io5';
import Button from '@components/Button';

export default function HamburgerMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const iconProps = useMemo(
    () => ({
      size: '2em',
      className: `text-coarse-wool group-hover:text-palatinate-blue transition-all ${
        isOpen ? 'rotate-180' : 'rotate-0'
      }`,
    }),
    [isOpen],
  );

  return (
    <Button
      type="button"
      className="border w-11 h-11 md:hidden group hover:border-palatinate-blue transition-all rounded-md"
      onClick={() => setIsOpen(true)}
    >
      <IconContext.Provider value={iconProps}>
        <IoMenuOutline />
      </IconContext.Provider>
    </Button>
  );
}
