import React from 'react';

export default function Header({ title }: { title: string }) {
  return (
    <h1 className="heading-1 text-center">
      {title}
    </h1>
  );
}
