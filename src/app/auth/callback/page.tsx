"use client";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { chechAuthStatus } from "./actions";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function page() {
  const router = useRouter();
  const { user } = useKindeBrowserClient();
  const { data } = useQuery({
    queryKey: ["checkAuthStatus"],
    queryFn: async () => await chechAuthStatus(),
  });
  useEffect(() => {
    const striptPaymentLink = localStorage.getItem("StripePaymentLink");
    if (data?.success && striptPaymentLink && user.email) {
      localStorage.removeItem("StripePaymentLink");
      router.push(striptPaymentLink + `?prefilled_email=${user.email}`);
    } else if (data?.success == false) {
      router.push("/");
    }
  }, [router, data, user]);
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
