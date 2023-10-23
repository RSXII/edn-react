import { useLocation } from "react-router-dom";
import { Navigation } from "./types";
export default function Navigation({ items }: { items: Navigation[] }) {
  const location = useLocation();
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {items.map((item: Navigation) => (
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
      ))}
    </div>
  );
}
