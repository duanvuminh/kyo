import { wordExists } from "@/app/actions/check.actions";
import { useEffect, useState } from "react";

export function useCanEdit(command: string): boolean {
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    if (!command) {
      return;
    }
    let cancelled = false;
    wordExists(command).then((exists) => {
      if (!cancelled) {
        setCanEdit(exists);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [command]);

  return canEdit;
}
