import React from "react";
import { connectWallet } from "../utils/wallet";

export function useWallet() {
  const [walletAddress, setWalletAddress] = React.useState(null);
  const [error, setError] = React.useState(null);

  const tryConnect = React.useCallback(async (options) => {
    try {
      const { publicKey } = await connectWallet(options);
      setWalletAddress(publicKey.toString());
      setError(null);
    } catch (e) {
      setWalletAddress(null);
      setError(e);
    }
  }, []);

  React.useEffect(() => {
    const onLoad = async () => {
      await tryConnect({ onlyIfTrusted: true });
    };

    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, [tryConnect]);

  const connect = async () => {
    if (error || walletAddress) {
      return;
    }

    await tryConnect();
  };

  return { error, walletAddress, connect };
}
