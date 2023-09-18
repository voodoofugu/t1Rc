import styled from "@emotion/styled";
import { css } from "@emotion/react";

const V2ScreenGoddessPictureStyles = css`
    .popup-layer .m-popup.goddess-picture {
        width: 706px;
        height: 640px;
        left: 247px;
        top: 0px;
        &:before {
            top: 10px;
            content: "";
            background: linear-gradient(
                136deg,
                #8e7453 0%,
                #e3c7a3 50%,
                #ae916a 85%,
                #8f7553 100%
            );
        }
        .btn-close-x {
            z-index: 1;
            right: 0;
            top: 0;
        }
        .img-goddess-picture {
            position: absolute;
            left: 15px;
            top: 15px;
            height: 610px;
            width: 676px;
        }

        &.narrow {
            width: 440px;
            left: 380px;
            .img-goddess-picture {
                width: 410px;
            }
        }
    }
`;

const V2ScreenGoddessPicture = styled.div`
    ${V2ScreenGoddessPictureStyles}
`;

export { V2ScreenGoddessPictureStyles, V2ScreenGoddessPicture };
