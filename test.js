// help
// const word = "HTML"

// const changeWord = () => {
//     document.getElementById("wordToChange").innerHTML = "REACT"
// }

// changeWord()


import {
    ThirdwebProvider,
    ConnectWallet,
    embeddedWallet,
  } from "@thirdweb-dev/react";

  export default function App() {
    return (
      <ThirdwebProvider
        activeChain="goerli"
        clientId="YOUR_CLIENT_ID"
        supportedWallets={[embeddedWallet()]}
      >
        <ConnectWallet />
      </ThirdwebProvider>
    );
  }
