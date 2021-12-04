export const checkIfWalletIsConnected = async () => {
  try {
    const { solana } = window;

    if (!solana) {
      alert("Solana object not found! Get a Phantom Wallet 👻");
      return;
    }
    if (solana.isPhantom) {
      console.log("Phantom wallet found!");
    }
  } catch (error) {
    console.error(error);
  }
};
