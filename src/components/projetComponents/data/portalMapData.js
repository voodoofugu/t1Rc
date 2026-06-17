const mapsData = {
  1: [
    "start tower",
    "old cathedral",
    "gorge of death I",
    "gorge of death II",
    "mysterious ziggurat",
    "royal court",
    "house on the cliff",
    "path to the bridge",
    "fighting arena",
    "entry to the dungeon",
  ],
  2: [
    "exit to the tower",
    "cursed castle",
    "watch tower",
    "suspicious steppe",
    "great tree",
    "sleeping dragon",
    "waterfall of truth",
    "lake of the lost",
    "troll cave",
    "outpost of change",
  ],
  3: [
    "exit to the tower",
    "cursed castle",
    "watch tower",
    "suspicious steppe",
    "great tree",
    "sleeping dragon",
    "waterfall of truth",
    "lake of the lost",
    "troll cave",
    "outpost of change",
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
