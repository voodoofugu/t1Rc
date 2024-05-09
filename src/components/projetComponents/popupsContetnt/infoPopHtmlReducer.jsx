import ItemBox from "../UIComponents/ItemBox";

export default function infoPopHtmlReducer(action) {
  switch (action) {
    case "CHEST":
      return (
        <>
          <li>
            In Dark Superheroine Chests you can get PREMIUM Superheroines.
          </li>{" "}
          <br />
          <li>
            In Angel Chests, you can get Angel Pieces and Yellow Essence.
          </li>{" "}
          <br />
          <li>In Superheroine chests you can find superheroine pieces.</li>{" "}
          <br />
          <li>
            In Boss chests you can find Erotic arts and other Rewards: gold, red
            essence, stones.
          </li>{" "}
          <br />
        </>
      );

    case "TEXT1":
      return (
        <>
          <h1>
            <p>Here</p>
          </h1>
          <h2>Here</h2> <h3>Here</h3> you can
          <b> raise</b> your character's stats, <p>upgrade </p>{" "}
          <span>your</span> <del> abilities</del>,
          <i> and get an interesting look from</i> <u>events</u>
          .
          <hr />
          <li>Same here</li>
          <ol>
            <li>Same here</li>
          </ol>
          <br />
          <h3>Your Rewards</h3>
          <ItemBox itemPic="img/sAndL/earringsIcn.png" count="10" />
          <ItemBox itemPic="img/sAndL/braceletIcn.png" />
          <ItemBox itemPic="img/sAndL/jewelryBagIcn.png" />
        </>
      );

    case "TEXT2":
      return (
        <>
          Engage in advanced-level battle with formidable monsters and acquire
          <br />
          <ItemBox count="2" itemPic="img/hole/holeKay.png" />
          <br />
          <b>
            <p>spirit keys</p>
          </b>{" "}
          to open{" "}
          <b>
            <p>Gates</p>
          </b>
          <img src="img/hole/holeGate.png" loading="lazy" />
          <br />
          containing rewards in the{" "}
          <b>
            <p>Dangeon</p>
          </b>
          ! You will also get{" "}
          <b>
            <p>sacred chests</p>
          </b>{" "}
          13123 <img src="img/hole/holeChest.png" loading="lazy" /> every{" "}
          <b>
            <p>5 levels</p>
          </b>
          !
        </>
      );

    case "TEXT3":
      return (
        <>
          You can reset the difficulty level. After the reset, you will receive
          1
          <img src="img/hole/holeKay.png" loading="lazy" />
          spiriturial key for each level and one sacred chest
          <img src="img/hole/holeChest.png" loading="lazy" /> every 5 levels.
        </>
      );

    default:
      return `HTML_${action} not found`;
  }
}
