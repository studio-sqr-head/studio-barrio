"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderI } from "@/sanity/schemas";

import { Typography } from "@/app/(client)/components/typography";

export const Header = ({ title, description, navItems }: HeaderI) => {
  const pathname = usePathname();
  const isActivePath = (slug: string) => pathname.startsWith(`/${slug}`);
  const activePath = navItems?.find(({ slug }) => isActivePath(slug));

  return (
    <header className="bg-gray-100">
      <div className="flex justify-between p-8">
        <div className="flex flex-col items-start">
          <Typography variant="h1" color="orange" className="font-montserrat">
            {title}
          </Typography>
          <Typography variant="subtitle1" className="font-arimo">
            {description}
          </Typography>
        </div>
        <nav>
          <ul className="flex gap-8 items-center">
            {navItems?.map(({ slug, title }) => {
              console.log(slug);
              return (
                <Link href={`/${slug}`} key={`${title}-${slug}`}>
                  <div className={`cursor-pointer`}>
                    <Typography
                      variant="body1"
                      color={isActivePath(slug) ? "orange" : "gray"}
                    >
                      {title}
                    </Typography>
                  </div>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="mx-auto max-w-7xl p-6 sm:p-8 lg:p-12">
        <Typography variant="custom" className="text-6xl">
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
