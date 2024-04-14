import { FC, ReactNode } from 'react';
import { SuspenseProvider } from './SuspenseProvider';
import { TanStackQueryProvider } from './TanStackQueryProvider';
import { LoadingRateProvider } from './LoadingRateProvider';

type Props = {
  children: ReactNode;
};

/**
 * ProviderをまとめるRoot
 */
export const ProviderRoot: FC<Props> = ({ children }) => {
  return (
    <SuspenseProvider>
      <TanStackQueryProvider>
        <LoadingRateProvider>{children}</LoadingRateProvider>
      </TanStackQueryProvider>
    </SuspenseProvider>
  );
};
