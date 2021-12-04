# buildspace Solana NFT Drop Project

## Setup

### Dev tools needed to run this project:

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [node](https://nodejs.org/en/download/)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
- [ts-node](https://www.npmjs.com/package/ts-node#installation)

### Solana CLI

- [Install instructions](https://docs.solana.com/cli/install-solana-cli-tools#use-solanas-install-tool)
- update PATH env var if needed
- check installation with
  - `solana --version`
- config solana to run on devnet
  - `solana config set --url https://api.devnet.solana.com`
- confirm configs
  - `solana config get`

### Metaplex CLI

- clone the Metaplex repo
  - `git clone --branch v1.0.0 https://github.com/metaplex-foundation/metaplex.git ~/metaplex`
- install dependencies
  - `yarn install --cwd ~/metaplex/js/`
- check installation
  - `ts-node ~/metaplex/js/packages/cli/src/candy-machine-cli.ts --version`

### Local Solana wallet

- Create a keypair
  - `solana-keygen new --outfile ~/.config/solana/devnet.json`
- Config the keypair to be used locally
  - `solana config set --keypair ~/.config/solana/devnet.json`
- Confirm the wallet is configured correctly
  - `solana balance`
- Fund the wallet with some fake SOL (since it's run on devnet)
  - `solana airdrop 5`

### Upload NFTs to Metaplex

- Get your public address
  - `solana address`
- Update NFT creator in all NFT JSON files (`assets/*.json`)
  - Paste the public wallet address on `properties.creators.address`
- Upload NFTs
  - `ts-node ~/metaplex/js/packages/cli/src/candy-machine-cli.ts upload ./assets --env devnet --keypair ~/.config/solana/devnet.json`
- Verify NFTs
  - `ts-node ~/metaplex/js/packages/cli/src/candy-machine-cli.ts verify --keypair ~/.config/solana/devnet.json`

### Deploy candy machine

- Deploy on devnet
  - Note: `-p {number}` sets the desired NFT price
  - `ts-node ~/metaplex/js/packages/cli/src/candy-machine-cli.ts create_candy_machine --env devnet --keypair ~/.config/solana/devnet.json -p 1`

### Set a drop date (optional)

- Set drop date
  - `--date "dd mmm yyyy hh:MM:ss GMT"` sets the date
  - `mmm` = Jan/Feb/.../Dec
  - `ts-node ~/metaplex/js/packages/cli/src/candy-machine-cli.ts update_candy_machine --date "1 Dec 2021 00:12:00 GMT" --env devnet --keypair ~/.config/solana/devnet.json`

### Setup env vars

| Name                           | Description                  | How to find / value                                                   |
| ------------------------------ | ---------------------------- | --------------------------------------------------------------------- |
| REACT_APP_CANDY_MACHINE_CONFIG | Candy machine config ID      | `program.config` key inside `.cache/devnet-temp`                      |
| REACT_APP_CANDY_MACHINE_ID     | Candy machine deploy address | `candyMachineAddress` key inside `.cache/devnet-temp`                 |
| REACT_APP_TREASURY_ADDRESS     | Local wallet address         | `authority` key inside `.cache/devnet-temp` (or run `solana address`) |
| REACT_APP_SOLANA_NETWORK       | Network to connect to        | `devnet`                                                              |
| REACT_APP_SOLANA_RPC_HOST      | RPC to connect to            | `https://explorer-api.devnet.solana.com`                              |

### Fund your devnet wallet

To mint NFTs you're going to need SOL on your Solana devnet wallet
Run `solana airdrop 5 YOUR_WALLET_ADDRESS` (max 5 tokens per airdrop)

## Start

To run this project, clone this repo and follow these commands:

1. cd into the `app` folder
2. Run `npm install` at the root of your directory
3. Run `npm run start` to start the project
4. Start coding!

## What is the .vscode Folder?

If you use VSCode to build your app, we included a list of suggested extensions that will help you build this project! Once you open this project in VSCode, you will see a popup asking if you want to download the recommended extensions :).

## When changing NFTs

If you have already uploaded your NFT assets and you want to change something, here are the steps you need to take:

1. Delete the `.cache` folder
2. Update the NFT asset files
3. [Upload NFTs to Metaplex](#upload-nfts-to-metaplex)
4. [Deploy candy machine](#deploy-candy-machine)
5. [Set a drop date (optional)](#set-a-drop-date-optional)
6. [Setup env vars](#setup-env-vars)
