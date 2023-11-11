import { create } from "zustand";

const usePlayerData = create((set) => ({
  playerData: {
    name: "",
    Age: 5,
    Grade: "Trainee",
    Lvl: 1,
    talentType: "",
    Strength: 10,
    Speed: 10,
    Health: 100,
    Mana: 100,
    Defence: 10,
    currentExp: 0,
    ExpNeeded: 100,
    firstLogin: true,
  },
  setPlayerData: (value) => set({ playerData: value }),
}));

export default usePlayerData;
