import { useLocation } from "react-router-dom";
import { Navigation } from "./types";
import { SignInButton, SignOutButton, useAuth } from "@clerk/clerk-react";

function LogIn() {
  return (
    <SignInButton>
      <a
        href="#"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-emerald-300"
      >
        Log in
      </a>
    </SignInButton>
  );
}
function LogOut() {
  return (
    <SignOutButton>
      <a
        href="#"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-emerald-300"
      >
        Log Out
      </a>
    </SignOutButton>
  );
}

export default function MobileMenu({ items }: { items: Navigation[] }) {
  const location = useLocation();
  const { isLoaded, userId } = useAuth();
  if (!isLoaded) return null;
  return (
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-white">
        <div className="space-y-2 py-6">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                location.pathname === item.href
                  ? "text-teal-800 font-extrabold"
                  : "text-gray-900"
              } hover:bg-emerald-300`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="py-6">{userId ? <LogOut /> : <LogIn />}</div>
      </div>
    </div>
  );
}
