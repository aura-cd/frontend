"use client";
import {useEffect, useRef, useState} from "react";

const useLog = (organization: string, pod: string) => {
  const sseRef = useRef<EventSource>();
  const [log, setLog] = useState<string[]>([]);
  useEffect(() => {
    setLog([]);
    sseRef.current = new EventSource(`${process.env.NEXT_PUBLIC_API_URL}organizations/${organization}/pods/${pod}/log`);
    sseRef.current.onmessage = (event) => {
      setLog((prevLog) => [...prevLog, event.data]);
    };
    return () => {
      sseRef.current?.close();
    };
  }, [organization,pod]);
  return log;
}

export {useLog};
