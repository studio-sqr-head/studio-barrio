import { Typography } from "@/app/(client)/components/typography";

export const Chip = ({ label }: { label: string }) => {
  return (
    <Typography variant="subtitle1" className="text-tertiary">
      {label}
    </Typography>
  );
};
