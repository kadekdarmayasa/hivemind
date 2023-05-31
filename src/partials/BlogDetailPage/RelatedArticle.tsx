import React from 'react';
import type { BlogItemProps } from 'types/BlogItem';
import Blog from '@components/Blog';

export default function RelatedArticle({
  relatedArticles,
}: {
  relatedArticles: BlogItemProps[];
}) {
  return (
    <section className="mt-16">
      <h3 className="heading-3 lg:-mb-10 -mb-20">Related Articles</h3>
      <Blog blogs={relatedArticles} arrowPos="right" />
    </section>
  );
}
