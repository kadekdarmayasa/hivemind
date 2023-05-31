import React from 'react';
import parse from 'html-react-parser';

export default function MainContent({ content }: { content: string }) {
  return (
    <section className="blog-detail__main-content lg:px-20">
      {parse(content)}
    </section>
  );
}
