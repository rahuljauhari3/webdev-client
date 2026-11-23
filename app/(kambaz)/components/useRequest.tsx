"use client";
import { useCallback, useState } from "react";
import { errorMessage } from "@/lib/http";
export default function useRequest() {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const run = useCallback(async (action: () => Promise<unknown>) => {
    setError("");
    setPending(true);
    try {
      await action();
    } catch (e) {
      setError(errorMessage(e));
    } finally {
      setPending(false);
    }
  }, []);
  return {
    run,
    pending,
    feedback: error ? (
      <p role="alert" className="rounded bg-red-100 p-3 text-red-800">
        {error}
      </p>
    ) : null,
  };
}
