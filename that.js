// import {
//     ThirdwebProvider,
//     ConnectWallet,
//     embeddedWallet,
//   } from "@thirdweb-dev/react";

//   function App() {
//     return (
//       <ThirdwebProvider
//         activeChain="goerli"
//         clientId="C70hrtNwLpxvFGy0kztk5BPEl4QhMSBjmBseTfo9amYQu7jNvNVkNwivEigllsrQsB763kzLQ1tUuclmQRGXMw"
//         supportedWallets={[embeddedWallet()]}
//       >
//         <ConnectWallet />
//       </ThirdwebProvider>
//     );
//   }

function Test() {
  const word = "this word bro"
  return (
    <div>
      <h1>Try this</h1>
      <h2>{word}</h2>
      <p>"this should work"</p>
    </div>
  )
}

  ReactDOM.render(<Test />, document.querySelector("#home"))
