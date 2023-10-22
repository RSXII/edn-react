import { Navigation } from "./types";

export default function MobileMenu({ items }: { items: Navigation[] }) {
  return (
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-white">
        <div className="space-y-2 py-6">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-emerald-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="py-6">
          <a
            href="#"
            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-emerald-300"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
