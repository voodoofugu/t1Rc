export const heroClassesImg = [
  "img/cur2-sword.png",
  "img/cur2-quitar.png",
  "img/cur2-cleric.png",
  "img/cur2-druid.png",
  "img/cur2-barbarian.png",
  "img/cur2-ranger.png",
  "img/cur2-wizard.png",
  "img/cur2-gun.png",
];

export const heroClasses = heroClassesImg.map(
  (iconPath) => iconPath.match(/img\/cur2-(.+)\.png/)[1]
);
