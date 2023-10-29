import { useLocation } from "react-router-dom";
import { Navigation } from "./types";
import { useAuth } from "@clerk/clerk-react";

export default function Navigation({ items }: { items: Navigation[] }) {
  const location = useLocation();
  const { isSignedIn } = useAuth();
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {items.map((item: Navigation) => {
        const shouldRenderItem = !item.protected || isSignedIn;
        if (shouldRenderItem) {
          return (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 hover:text-teal-500 ${
                location.pathname === item.href
                  ? "text-teal-800 font-extrabold"
                  : "text-gray-900"
              } `}
            >
              {item.name}
            </a>
          );
        }
        return null;
      })}
    </div>
  );
}
