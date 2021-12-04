import React from "react";
import "./App.css";
import twitterLogo from "./assets/twitter-logo.svg";
import CandyMachine from "./CandyMachine";
import { ConnectWalletButton } from "./components/ConnectWalletButton";
import { useWallet } from "./hooks/useWallet";

// Constants
const TWITTER_HANDLE = "zeox7_eth";
const BUILDSPACE_TWITTER_HANDLE = "_buildspace";

const App = () => {
  const { loading, walletAddress, connect } = useWallet();

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🍺 Beer Drop</p>
          <p className="sub-text">NFT beer dispenser</p>
          {!loading && !walletAddress && (
            <ConnectWalletButton connectWallet={connect} />
          )}
        </div>

        {!loading && walletAddress && (
          <CandyMachine walletAddress={window.solana} />
        )}

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <span>built on </span>
          <a
            className="footer-text"
            href={`https://twitter.com/${BUILDSPACE_TWITTER_HANDLE}`}
            target="_blank"
            rel="noreferrer"
          >{`@${BUILDSPACE_TWITTER_HANDLE}`}</a>{" "}
          <span>by </span>
          <a
            className="footer-text"
            href={`https://twitter.com/${TWITTER_HANDLE}`}
            target="_blank"
            rel="noreferrer"
          >{`@${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
