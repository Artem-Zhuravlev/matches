import React from "react";
import Featured from "./featured";
import Mathces from "./matches";
import MeetPlayers from "./meetPlayers";
import Promotion from "./promotion";

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <Mathces />
      <MeetPlayers />
      <Promotion />
    </div>
  );
};

export default Home;
