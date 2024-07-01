import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { Provider } from 'react-redux';
import { store } from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store = {store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
