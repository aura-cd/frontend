import { FC } from 'react';
// import { RouterProvider, createRouter } from '@tanstack/react-router';
import { ProviderRoot } from './providers/ProviderRoot';
import './global.css';
// import { routeTree } from './routeTree.gen';

// const router = createRouter({ routeTree });
// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router;
//   }
// }

export const App: FC = () => {
  return (
    <ProviderRoot>
      <div>Aura-CD</div>
      {/* <RouterProvider router={router} /> */}
    </ProviderRoot>
  );
};
