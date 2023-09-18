import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ScreenUnipopStarterpackNew2Styles = css`
    // starterpack-new2
    .popup-layer
        .m-popup.unipop-starterpack
        .unipop-box-content-all
        .unipop-box-right-box
        .right-box-f
        .kingpack-box
        .moregold-box {
        transform: scale(0.9);
        &.king {
            top: 220px;
        }
        &.king.two {
            top: 220px;
            left: 94px;
        }
    }

    .popup-layer
        .m-popup.unipop-starterpack
        .unipop-box-content-all
        .unipop-box-right-box
        .right-box-f
        .kingpack-box
        .moredps-box {
        transform: scale(0.9);
        left: 201px;
    }

    .popup-layer
        .m-popup.unipop-starterpack
        .unipop-box-content-all
        .unipop-box-right-box
        .right-box-f
        .kingpack-box
        .morediamond-box {
        transform: scale(0.9);
        left: 296px;
    }
`;

const ScreenUnipopStarterpackNew2 = styled.div`
    ${ScreenUnipopStarterpackNew2Styles}
`;

export { ScreenUnipopStarterpackNew2Styles, ScreenUnipopStarterpackNew2 };
