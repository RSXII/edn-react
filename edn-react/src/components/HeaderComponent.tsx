import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import LogoComponent from "./LogoComponent";
import NavigationComponent from "./navigation/NavigationComponent";
import MobileMenuComponent from "./navigation/MobileMenuComponent";
import { Navigation } from "./navigation/types";
import { SignInButton, SignOutButton, useAuth } from "@clerk/clerk-react";

const navigation: Navigation[] = [
  { name: "Home", href: "/", protected: false },
  { name: "About Us", href: "/about", protected: false },
  { name: "Plans", href: "/plans", protected: false },
  { name: "Company", href: "/company", protected: false },
  { name: "Chat", href: "/chat", protected: true },
  { name: "Profile", href: "/profile", protected: true },
];

function LogIn() {
  return (
    <SignInButton>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
        Log in <span aria-hidden="true">&rarr;</span>
      </a>
    </SignInButton>
  );
}
function LogOut() {
  return (
    <SignOutButton>
      <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
        Log out <span aria-hidden="true">&rarr;</span>
      </a>
    </SignOutButton>
  );
}

export default function HeaderComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoaded, userId } = useAuth();
  if (!isLoaded) return null;

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <LogoComponent />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <NavigationComponent items={navigation} />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {userId ? <LogOut /> : <LogIn />}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto  backdrop-blur-3xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <LogoComponent />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <MobileMenuComponent items={navigation} />
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
