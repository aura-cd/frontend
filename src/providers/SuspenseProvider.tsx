import { FC, ReactNode, Suspense } from 'react';

type Props = {
  children: ReactNode;
};

/**
 * SuspenseのProvider
 */
export const SuspenseProvider: FC<Props> = ({ children }) => {
  return <Suspense fallback>{children}</Suspense>;
};
