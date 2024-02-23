"use client";

import { Progress } from "@/components/ui/progress";

const ProgressComponent = ({ value }: { value: number }) => {
  return (
    <div className="w-full">
      <Progress value={value} className={`w-[${value - 100}%]`} />
    </div>
  );
};

export default ProgressComponent;
