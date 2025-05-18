"use client";

import { useFormContext } from "react-hook-form";

export default function Submit() {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <button disabled={isSubmitting} type="submit" className="btn primary">
      {isSubmitting ? "Saving..." : "Save"}
    </button>
  );
}
