import { useEffect, useState } from "react";

const ConnectWalletButton = () => {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getWalletAddress();
  }, []);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* Metamask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (e) {
        console.log(e.message);
      }
    } else {
      console.log("Please install metamask");
    }
  };

  const getWalletAddress = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* Metamask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          connectWallet();
        }
      } catch (e) {
        console.log(e.message);
      }
    } else {
      console.log("Please install metamask");
    }
  };

  return (
    <button
      onClick={connectWallet}
      className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500
       hover:to-blue-600 rounded-full px-8 py-3 text-white shadow-md hover:shadow-lg transition duration-300 ease-in-out"
    >
      {walletAddress.length > 0
        ? `${walletAddress.substring(0, 8)}...${walletAddress.substring(38)}`
        : "Connect Wallet"}
    </button>
  );
};

export default ConnectWalletButton;
