"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
const queryCLient = new QueryClient();
const TanStackProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryCLient}>{children}</QueryClientProvider>
  );
};
export default TanStackProvider;
