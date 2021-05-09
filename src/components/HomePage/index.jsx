import React from "react";
import "./Home.css";
import Layout from "../Layout";

function Home() {
  return (
    <Layout>
      <div className="InfoSection">
        <h1>Wallet</h1>
        <div className="BalanceInfo">
          <div className="Balance">Balance:</div>
          <div className="BalanceValue">5,000,000</div>
          <div className="BalanceCurrency">USD</div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
