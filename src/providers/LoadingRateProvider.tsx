import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from 'react';

type Props = {
  children: ReactNode;
};

type LoadingRateContextType = [state: number, setState: Dispatch<SetStateAction<number>>];
export const LoadingRateContext = createContext<LoadingRateContextType>([0, () => {}]);

/**
 * Loadingされている割合を管理するProvider
 */
export const LoadingRateProvider: FC<Props> = ({ children }) => {
  const [loadingRate, setLoadingRate] = useState(0);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LoadingRateContext.Provider value={[loadingRate, setLoadingRate]}>
      {children}
    </LoadingRateContext.Provider>
  );
};
