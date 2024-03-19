import React from "react";

export const Chip = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center justify-center px-2 py-1 rounded-md text-black text-xs bg-gray-200">
      <span className="">{label}</span>
    </div>
  );
};
