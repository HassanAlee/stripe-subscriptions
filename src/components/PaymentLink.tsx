"use client";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
type paymentLinkProps = {
  href: string;
  paymentLink?: string;
  text: string;
};
export default function PaymentLink({
  href,
  paymentLink,
  text,
}: paymentLinkProps) {
  return (
    <Link
      href={href}
      className={buttonVariants()}
      onClick={() => {
        if (paymentLink) {
          localStorage.setItem("StripePaymentLink", paymentLink);
        }
      }}
    >
      {text}
    </Link>
  );
}
