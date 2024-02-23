"use client";
import { useEffect, useRef, useState } from "react";

const useLog = (organization: string, pod: string) => {
  const sseRef = useRef<EventSource>();
  const [log, setLog] = useState<string[]>([]);
  useEffect(() => {
    sseRef.current = new EventSource(
      `http://localhost:8888/organizations/${organization}/pods/${pod}/log`
    );
    sseRef.current.onmessage = (event) => {
      setLog((prevLog) => [...prevLog, event.data]);
    };
    return () => {
      sseRef.current?.close();
    };
  }, []);
  return log;
};

export { useLog };
