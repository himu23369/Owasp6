import React, { useEffect } from "react";
import "./navbar.css";

import { loadAccount, loadProvider } from "../../store/interactions";
import { useDispatch, useSelector } from "react-redux";
import Blockies from "react-blockies";

const Navbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const provider = loadProvider(dispatch);
    // Dispatch an action to set the provider in the Redux store
    dispatch({ type: "SET_PROVIDER", provider });
  }, [dispatch]);

  const provider = useSelector((state) => state.provider.connection);
  const account = useSelector((state) => state.provider.account);
  const balance = useSelector((state) => state.provider.balance);
  const chainId = useSelector((state) => state.provider.chainId);

  // Log the component render
  console.log("Navbar component rendered print");

  const connectHandler = async () => {
    await loadAccount(provider, dispatch);
  };

  const networkHandler = async (e) => {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId: `0x${e.target.value}`, // Prefix chainId with '0x'
        },
      ],
    });
  };

  const handleButtonClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    // Load account when provider changes
    if (provider) {
      loadAccount(provider, dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider]);

  return (
    <div className="Navbar">
      <div className="nav__name">
        
        <h2>Etherium based Patient Record </h2>
      </div>
      <div className="nav__networkSelector">
        <select
          name="network"
          id="network"
          onChange={networkHandler}
          value={chainId} 
        >
          <option value="" disabled>
            Select Network
          </option>
          <option value="31337">Localhost</option>
          <option value="5">Goerli</option>
          <option value="80001">Mumbai</option>
        </select>
      </div>
      <div className="nav__balance">
        {balance ? (
          <p className="nav__myBalance">
            <small>My Balance : </small>
            {Number(balance).toFixed(4)}
          </p>
        ) : (
          <p className="nav__myBalance">
            <small>My Balance : </small>
            0ETH
          </p>
        )}
        {account ? (
          <button className="nav__myAccount" onClick={handleButtonClick}>
            {account.slice(0, 5) + "...." + account.slice(38, 42)}
            <Blockies
              seed={account}
              size={10}
              scale={3}
              color="#2187D0"
              bgColor="#F1F2F9"
              spotColor="#767F92"
              className="identicon"
            />
          </button>
        ) : (
          <button className="nav__balance-box" onClick={connectHandler}>
            Connect
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
