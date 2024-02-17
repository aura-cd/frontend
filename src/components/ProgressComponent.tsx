"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { set } from "react-hook-form";

const ProgressComponent = (props: { value: number }) => {
  const [progress, setProgress] = useState(props.value);

  useEffect(() => {
    async function fetchData() {
      await setProgress(props.value);
      await console.log(progress);
    }
    fetchData();
  }, [props.value]);

  return <Progress value={progress} className={`w-[${progress - 100}%]`} />;
};

export default ProgressComponent;
