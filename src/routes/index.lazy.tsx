import { FC } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

/**
 * index
 */
const IndexPage: FC = () => {
  return <div>IndexPage</div>;
};

export const Route = createLazyFileRoute('/')({
  component: IndexPage,
});
