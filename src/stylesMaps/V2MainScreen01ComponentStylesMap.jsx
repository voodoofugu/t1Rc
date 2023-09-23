import { ScreenBankStyles } from "../styleComponents/ScreenBank";
import { ScreenBank1Styles } from "../styleComponents/ScreenBank1";
import { AngelTabStyles } from "../styleComponents/AngelTab";
import { V2ScreenTowerStyles } from "../styleComponents/V2ScreenTower";
import { V2ScreenTowerRelicsStyles } from "../styleComponents/V2ScreenTowerRelics";
import { V2ScreenMainRelicsPopStyles } from "../styleComponents/V2ScreenMainRelicsPop";
import { ScreenSuperheroStyles } from "../styleComponents/ScreenSuperhero";

const V2MainScreen01ComponentStylesMap = styled.div`
  ${ScreenBankStyles}
  ${ScreenBank1Styles}
    ${AngelTabStyles}
    ${V2ScreenTowerStyles}
    ${V2ScreenTowerRelicsStyles}
    ${V2ScreenMainRelicsPopStyles}
    ${ScreenSuperheroStyles}
    pointer-events: none;
`;

export default V2MainScreen01ComponentStylesMap;
