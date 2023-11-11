import dice1 from "../public/images/dice1.png";
import dice2 from "@/public/images/dice2.png";
import dice3 from "@/public/images/dice3.png";
import dice4 from "@/public/images/dice4.png";
import dice5 from "@/public/images/dice5.png";
import dice6 from "@/public/images/dice6.png";

export const TALENTDICE = [
  { talent: dice1, type: "Human", value: 5 },
  { talent: dice2, type: "Human", value: 7 },
  { talent: dice3, type: "Gifted Human", value: 12 },
  { talent: dice4, type: "Excellent Human", value: 16 },
  { talent: dice5, type: "Descendant of a Demigod", value: 22 },
  { talent: dice6, type: "Demigod", value: 30 },
];

export const GradeExpValue = {
  Trainee: {
    expValue: 10,
    expMultiplier: 5,
    basicLevelUpStat: 10,
    vitalLevelUpStat: 100,
    basicBreakthroughStat: 50,
    vitalBreakthroughStat: 200,
  },
  Squire: {
    expValue: 50,
    expMultiplier: 20,
    basicLevelUpStat: 50,
    vitalLevelUpStat: 200,
    basicBreakthroughStat: 100,
    vitalBreakthroughStat: 450,
  },
  Knight: {
    expValue: 150,
    expMultiplier: 100,
    basicLevelUpStat: 100,
    vitalLevelUpStat: 450,
    basicBreakthroughStat: 200,
    vitalBreakthroughStat: 700,
  },
  Master: {
    expValue: 300,
    expMultiplier: 250,
    basicLevelUpStat: 200,
    vitalLevelUpStat: 700,
    basicBreakthroughStat: 300,
    vitalBreakthroughStat: 1000,
  },
  GrandMaster: {
    expValue: 600,
    expMultiplier: 500,
    basicLevelUpStat: 300,
    vitalLevelUpStat: 1000,
    basicBreakthroughStat: 450,
    vitalBreakthroughStat: 1500,
  },
  Sage: {
    expValue: 1000,
    expMultiplier: 900,
    basicLevelUpStat: 450,
    vitalLevelUpStat: 1500,
    basicBreakthroughStat: 700,
    vitalBreakthroughStat: 3000,
  },
};

export const grades = [
  "Trainee",
  "Squire",
  "Knight",
  "Master",
  "GrandMaster",
  "Sage",
];
