import React from "react";
import { connectIfTrusted, connectWallet } from "../utils/wallet";

function noop() {}

export function useWallet() {
  const [error, setError] = React.useState(null);

  async function tryConnect() {
    try {
      await connectIfTrusted();
      setError(null);
    } catch (e) {
      setError(e);
    }
  }

  React.useEffect(() => {
    window.addEventListener("load", tryConnect);
    return () => window.removeEventListener("load", tryConnect);
  }, []);

  if (error) {
    return { error, connectWallet: noop };
  }

  return { connectWallet };
}
