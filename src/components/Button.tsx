/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'link';
  isExternal?: boolean;
  isPrimary?: boolean;
  href?: string;
  children?: React.ReactNode;
};

export default function Button(props: ButtonProps) {
  const className = props.className ? [...props.className.split(' ')] : [];

  className.push('flex', 'justify-center', 'items-center');

  if (props.isPrimary) {
    className.push('bg-palatinate-blue shadow-purple-sm text-white');
  } else {
    if (props.type === 'button') {
      className.push('text-coarse-wool');
    }

    if (props.type === 'link') {
      className.push('bg-transparent text-palatinate-blue');
    }
  }

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noreferrer"
          className={className.join(' ')}
        >
          {props.children}
        </a>
      );
    }

    return (
      <Link tabIndex={0} href={props.href} className={className.join(' ')}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={() => props.onClick?.()}
      className={className.join(' ')}
    >
      {props.children}
    </button>
  );
}
