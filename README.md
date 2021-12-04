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

## Start

To run this project, clone this repo and follow these commands:

1. cd into the `app` folder
2. Run `npm install` at the root of your directory
3. Run `npm run start` to start the project
4. Start coding!

## What is the .vscode Folder?

If you use VSCode to build your app, we included a list of suggested extensions that will help you build this project! Once you open this project in VSCode, you will see a popup asking if you want to download the recommended extensions :).
