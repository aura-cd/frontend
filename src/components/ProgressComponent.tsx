"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

const ProgressComponent = (props: { value: number }) => {
  const [progress, setProgress] = useState(props.value);

  useEffect(() => {
    async function fetchData() {
      await setProgress(props.value);
    }
    fetchData();
  }, [props.value]);

  return <Progress value={progress} className={`w-[${progress - 100}%]`} />;
};

export default ProgressComponent;
