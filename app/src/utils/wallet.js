export function checkWallet() {
  if (!window.solana || !window.solana.isPhantom) {
    throw Error("Phantom wallet not available");
  }
}

export async function connectIfTrusted() {
  checkWallet();
  return await window.solana.connect({ onlyIfTrusted: true });
}

export async function connectWallet() {}
