"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderI } from "@/sanity/schemas";

import { Typography } from "@/app/(client)/components/typography";

export const Header = ({ title, description, navItems }: HeaderI) => {
  const pathname = usePathname();
  const isActivePath = (slug: string) => pathname.startsWith(`/${slug}`);

  return (
    <header className="bg-gray-100">
      <div className="flex justify-between p-8">
        <div className="flex flex-col items-start">
          <Typography variant="h1" color="orange" className="font-montserrat">
            {title}
          </Typography>
          <Typography variant="subtitle2">{description}</Typography>
        </div>
        <nav>
          <div className="flex gap-4 items-start sm:flex-row flex-col sm:items-center sm:gap-8">
            {navItems?.map(({ slug, title }) => {
              return (
                <Link href={`/${slug}`} key={`${title}-${slug}`}>
                  <div className={`cursor-pointer`}>
                    <Typography
                      variant="custom"
                      color={isActivePath(slug) ? "primary" : "secondary"}
                      className={`font-arimo ${
                        isActivePath(slug) ? "font-bold" : ""
                      }`}
                    >
                      {title}
                    </Typography>
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
      <div className="mx-auto max-w-7xl p-8 lg:p-12">
        <Typography variant="custom" className="text-4xl sm:text-6xl">
          {pathname
            .split("/")
            .pop()
            ?.replace(/-/g, " ")
            ?.replace(/^\w/, (c) => c.toUpperCase())}
        </Typography>
      </div>
    </header>
  );
};
