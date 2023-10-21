import { Navigation } from "./types";
export default function Navigation({ items }: { items: Navigation[] }) {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {items.map((item: Navigation) => (
        <a
          key={item.name}
          href={item.href}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
