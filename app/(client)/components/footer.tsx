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

        <div className="flex text-sm sm:justify-end flex-wrap sm:items-end sm:flex-row flex-col items-start sm:items-center">
          <FooterRow
            icon={<PersonSvg />}
            text={name}
            className="sm:mr-4 mb-2 sm:mb-0"
          />
          <FooterRow
            icon={<EmailSvg />}
            href={`mailto:${email}`}
            text={email}
            className="sm:mr-4 underline cursor-pointer mb-2 sm:mb-0"
          />
          <FooterRow
            icon={<PhoneSvg />}
            text={phone}
            className="sm:mr-4 underline cursor-pointer mb-2 sm:mb-0"
          />

          <FooterRow
            icon={<KVKSvg />}
            text={kvk}
            className="underline cursor-pointer"
            href="https://www.kvk.nl/orderstraat/product-kiezen/?kvknummer=902089510000&origq=studio+barrio"
          />
        </div>
      </div>
    </footer>
  );
};

const PhoneSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 text-tertiary"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
    />
  </svg>
);
const EmailSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 text-tertiary"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
    />
  </svg>
);

const KVKSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 text-tertiary"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
    />
  </svg>
);

const PersonSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 text-tertiary"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

const FooterRow = ({
  icon,
  text,
  className,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  className?: string;
  href?: string;
}) => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      {icon}

      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer"
        >
          <Typography variant="caption" className="underline">
            {text}
          </Typography>
        </a>
      ) : (
        <Typography variant="caption">{text}</Typography>
      )}
    </div>
  );
};
