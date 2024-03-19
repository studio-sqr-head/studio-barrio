"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const isActivePath = (href: string) => pathname.startsWith(href);

  return (
    <header>
      <div className="flex justify-between">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-bold text-orange-500">Studio Camilla</h1>
          <h3 className="text-lg font-light font-weight-light">
            Freelance UX design studio by Camilla van Wijk
          </h3>
        </div>
        <nav>
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map(({ href, name }) => (
              <li
                key={name}
                className={`text-md ${
                  isActivePath(href) ? "text-orange-500" : "font-light"
                } cursor-pointer`}
              >
                <Link href={href ?? "/"}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const NAV_ITEMS = [
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
