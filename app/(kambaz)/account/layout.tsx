import type { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div
      id="wd-kambaz-account"
      className="flex flex-col gap-6 pt-4 md:flex-row"
    >
      <aside className="w-full shrink-0 md:w-[140px]">
        <AccountNavigation />
      </aside>

      <main className="min-w-0 flex-1">
        {children}
      </main>
    </div>
  );
}