import { RouterProvider } from "react-router-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import router from "./Root/Root";
import './index.css';

createRoot(document.getElementById('root')).render(
<StrictMode>
      <RouterProvider router={router} />
</StrictMode>
);