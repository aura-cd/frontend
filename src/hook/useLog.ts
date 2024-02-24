"use client";
import { useEffect, useRef, useState } from "react";
import {ApiEndpoint} from "@/env";

const useLog = (organization: string, pod: string) => {
  const sseRef = useRef<EventSource>();
  const [log, setLog] = useState<string[]>([]);
  useEffect(() => {
    setLog([]);
    sseRef.current = new EventSource(
      `${ApiEndpoint}/organizations/${organization}/pods/${pod}/log`,
    );
    sseRef.current.onmessage = (event) => {
      setLog((prevLog) => [...prevLog, event.data as string]);
    };
    return () => {
      sseRef.current?.close();
    };
  }, [organization, pod]);
  return log;
};

export { useLog };
