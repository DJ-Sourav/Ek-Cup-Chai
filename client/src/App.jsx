import { useState, useEffect } from "react";
import abi from "./contractJson/chai.json";
import { ethers } from "ethers";
import Memos from "./components/Memos";
import Buy from "./components/Buy";
import './App.css';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });
  const [account, setAccount] = useState("Not Connected");

  useEffect(() => {
    const template = async () => {
      const contractAddress = "0x88bDAa5A8bC47845211ac10d443e4E2703766184";
      const contractABI = abi.abi;
      try {
        if (!window.ethereum) {
          alert("Metamask not detected. Please install Metamask.");
          return;
        }
        
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts"
        });
        
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        
        setAccount(account[0]);
        
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        
        console.log(contract);
        setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    }
    
    template();
  }, []);

  return (
    <div className="App">
      <div className="account-container">
        <span className="account-label">Connection Status:</span>
        <span className="account-address">{account}</span>
      </div>
      
      <Buy state={state} />
      <Memos state={state} />
    </div>
  );
}

export default App;