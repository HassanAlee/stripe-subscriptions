"use client";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { chechAuthStatus } from "./actions";

export default function page() {
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ["checkAuthStatus"],
    queryFn: async () => await chechAuthStatus(),
  });
  console.log("DATA", data);

  if (data?.success) router.push("/");
  return (
    <div className="mt-20 w-full flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader className="w-10 h-10 animate-spin text-primary" />
        <h3 className="text-xl font-bold">Redirecting...</h3>
        <p>Please wait...</p>
      </div>
    </div>
  );
}
