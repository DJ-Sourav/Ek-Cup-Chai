import { ethers } from "ethers";
import "./Buy.css";
import chaiImage from "../assets/chai.png";

const Buy = ({state}) => {
  const buyChai = async(event) => {
    event.preventDefault();
    const {contract} = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    const amount = {value: ethers.utils.parseEther("0.01")};
    
    try {
      const transaction = await contract.buyChai(name, message, amount);
      await transaction.wait();
      document.querySelector("#name").value = '';
      document.querySelector("#message").value = '';
      alert("Transaction is successful");
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed. Please try again.");
    }
  }

  return (
    <div className="center">
      <div className="header-container">
        <img 
          src={chaiImage}
          alt="Chai Cup"
          className="chai-image"
        />
        <h1>Ek Cup Chai <span className="price">₹5/-</span></h1>
      </div>
      <form onSubmit={buyChai}>
        <div className="inputbox">
          <input type="text" required="required" id="name" />
          <span>Chai Name</span>
        </div>
        <div className="inputbox">
          <input type="text" required="required" id="message" />
          <span>Message</span>
        </div>
        <div className="inputbox">
          <input 
            type="submit" 
            value="Pay for Chai" 
            disabled={!state.contract}
          />
        </div>
      </form>
    </div>
  );
}

export default Buy;