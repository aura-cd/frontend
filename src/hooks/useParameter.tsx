"use client";
import { useRouter } from "next/navigation";
const useParameter = () => {
  const router = useRouter();
  const path = router.prefetch("path");
  console.log(path);
  return {
    path,
  };
};

export default useParameter;
