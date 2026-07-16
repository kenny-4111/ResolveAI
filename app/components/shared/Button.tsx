import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition";

  const styles =
    variant === "primary" ?
      "bg-orange-500 text-white hover:bg-orange-600"
    : "border border-slate-700 text-slate-300 hover:border-orange-500 hover:text-white";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
