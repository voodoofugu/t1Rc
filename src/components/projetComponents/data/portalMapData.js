import { visitEachChild } from "typescript";

// названия выдуманные
const mapsData = {
  1: [
    { name: "start tower", visited: true },
    { name: "old cathedral", visited: true },
    { name: "gorge of death I", visited: true },
    { name: "gorge of death II", visited: true },
    { name: "mysterious ziggurat", visited: true },
    { name: "royal court", visited: false },
    { name: "house on the cliff", visited: false },
    { name: "path to the bridge", visited: false },
    { name: "fighting arena", visited: false },
    { name: "entry to the dungeon", visited: false },
  ],
  2: [
    { name: "exit to the tower", visited: true },
    { name: "cursed castle", visited: true },
    { name: "watch tower", visited: true },
    { name: "suspicious steppe", visited: true },
    { name: "great tree", visited: true },
    { name: "sleeping dragon", visited: false },
    { name: "waterfall of truth", visited: false },
    { name: "lake of the lost", visited: false },
    { name: "troll cave", visited: false },
    { name: "outpost of change", visited: false },
  ],
  3: [
    { name: "exit to the tower", visited: true },
    { name: "cursed castle", visited: true },
    { name: "watch tower", visited: true },
    { name: "suspicious steppe", visited: true },
    { name: "great tree", visited: true },
    { name: "sleeping dragon", visited: false },
    { name: "waterfall of truth", visited: false },
    { name: "lake of the lost", visited: false },
    { name: "troll cave", visited: false },
    { name: "outpost of change", visited: false },
  ],
};

const clipPathMap = [
  "M 0 320 L 129.29 320 L 215.03 0 L 0 0 L 0 320", // 1
  "M 0 0 L 0 320 L 215.03 320 L 300.78 0 L 0 0", // 2
  "M 344 0 L 258.25 320 L 0 320 L 85.74 0 L 344 0", // 3-8
  "M 301.78 0 L 85.74 0 L 0 320 L 301.78 320 L 301.78 0", // 9
  "M 216.03 0 L 216.03 320 L 0 320 L 85.74 0 L 216.03 0", // 10
];

const maxLocNum = Object.keys(mapsData).length;

export { mapsData, clipPathMap, maxLocNum };
