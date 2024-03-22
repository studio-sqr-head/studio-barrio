import { HeaderI, FooterI } from "@/sanity/schemas";
import { Typography } from "@/app/(client)/components/typography";

export const Footer = ({
  title,
  description,
  name,
  email,
  phone,
  kvk,
}: FooterI & Pick<HeaderI, "title" | "description">) => {
  return (
    <footer className="p-8 bg-gray-100">
      <div className="flex justify-between sm:flex-row flex-col">
        <div className="flex flex-col mb-4 sm:mb-0">
          <Typography
            variant="custom"
            color="orange"
            className="font-montserrat text-3xl font-bold"
          >
            {title}
          </Typography>
          <Typography variant="subtitle2">{description}</Typography>
        </div>

        <div className="flex text-sm sm:justify-end flex-wrap items-end">
          {name}
          <span className="text-orange mx-2">|</span>
          <a className="underline" href={`mailto:${email}`}>
            {email}
          </a>
          <span className="text-orange mx-2">|</span>
          {phone}
          <span className="text-orange mx-2">|</span>
          KVK {kvk}
        </div>
      </div>
    </footer>
  );
};
