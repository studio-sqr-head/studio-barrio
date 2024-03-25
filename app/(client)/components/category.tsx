import { Typography } from "@/app/(client)/components/typography";

export const Category = ({ label }: { label: string }) => {
  return (
    <Typography variant="subtitle1" className="text-tertiary">
      {label}
    </Typography>
  );
};
