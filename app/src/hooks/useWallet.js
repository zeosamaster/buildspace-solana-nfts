import React from "react";
import { connectWallet } from "../utils/wallet";

export function useWallet() {
  const [loading, setLoading] = React.useState(true);
  const [walletAddress, setWalletAddress] = React.useState(null);

  const tryConnect = React.useCallback(async (options) => {
    try {
      const { publicKey } = await connectWallet(options);
      setWalletAddress(publicKey.toString());
    } catch (e) {
      setWalletAddress(null);
    }
  }, []);

  React.useEffect(() => {
    const onLoad = async () => {
      await tryConnect({ onlyIfTrusted: true });
      setLoading(false);
    };

    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, [tryConnect]);

  const connect = async () => {
    if (loading || walletAddress) {
      return;
    }

    await tryConnect();
  };

  return { loading, walletAddress, connect };
}
