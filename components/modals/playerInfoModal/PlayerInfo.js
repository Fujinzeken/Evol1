import usePlayerData from "@/store/playerData";
import React from "react";

const PlayerInfo = () => {
  const { playerData } = usePlayerData();
  return <div>PlayerData</div>;
};

export default PlayerInfo;
