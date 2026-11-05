"use client";

import { useEffect, useRef, useState } from "react";

function Confirmation({
  message,
  finish,
}: {
  message: string;
  finish: (accepted: boolean) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);
  return (
    <dialog
      ref={ref}
      className="a4-dialog"
      aria-labelledby="a4-confirm-title"
      aria-describedby="a4-confirm-message"
      onCancel={() => finish(false)}
    >
      <h2 id="a4-confirm-title">Confirm deletion</h2>
      <p id="a4-confirm-message">{message}</p>
      <div className="flex justify-end gap-2">
        <button autoFocus onClick={() => finish(false)}>
          Cancel
        </button>
        <button className="a4-danger" onClick={() => finish(true)}>
          Delete
        </button>
      </div>
    </dialog>
  );
}

export default function useConfirmation() {
  const [pending, setPending] = useState<{
    message: string;
    accept: () => void;
  } | null>(null);
  return {
    confirm: (message: string, accept: () => void) =>
      setPending({ message, accept }),
    confirmation: pending ? (
      <Confirmation
        message={pending.message}
        finish={(accepted) => {
          if (accepted) pending.accept();
          setPending(null);
        }}
      />
    ) : null,
  };
}
