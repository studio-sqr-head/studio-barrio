import { HeaderI, FooterI } from "@/sanity/schemas";

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
          <h3 className="text-2xl font-bold text-orange">{title}</h3>
          <h5 className="text-md font-light font-weight-light">
            {description}
          </h5>
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
