import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Router";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PhotoProvider } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PhotoProvider>
        <AuthProvider>
          <div className="bg-[#f2f2f2]">
            <RouterProvider router={router} />
          </div>
        </AuthProvider>
      </PhotoProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
