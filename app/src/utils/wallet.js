export function getWallet() {
  if (!window.solana || !window.solana.isPhantom) {
    throw Error("Phantom wallet not available");
  }
  return window.solana;
}

export async function connectWallet(options) {
  const solana = getWallet();
  return await solana.connect(options);
}
