import React from "react";
import "./Home.css";
import Layout from "../Layout";
import SideBar from "../SideBar";

function Home() {
  return (
    <Layout>
      <div className="ContentContainer">
        <div className="HomeMainContent">
          <SideBar />
          <div className="InfoSection ContentItem">
            <h1>Wallet</h1>
            <div className="BalanceInfo">
              <div className="Balance">Balance:</div>
              <div className="BalanceValue">5,000,000</div>
              <div className="BalanceCurrency">USD</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
