export const checkIfWalletIsConnected = async () => {
  try {
    const { solana } = window;

    if (!solana) {
      alert("Solana object not found! Get a Phantom Wallet 👻");
      return;
    }
    if (solana.isPhantom) {
      console.log("Phantom wallet found!");

      const response = await solana.connect({ onlyIfTrusted: true });
      console.log("Connected with Public Key:", response.publicKey.toString());
    }
  } catch (error) {
    console.error(error);
  }
};

export const connectWallet = async () => {};
