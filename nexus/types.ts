export type PopupState = {
  mpopClass?: string;
  popStyle?: Record<string, any>;
  popTit?: string;
  popCont?: any[];
  btnXClass?: string;
  infBtn?: boolean;
  timer?: boolean;
  count?: number;
  popupVisible?: boolean;
  dialogEmersion?: string;
  popOpen?: () => void;
  popClose?: () => void;
  props?: any[];
};

export type SAndLT = {
  activePlate: number;
  activeTime: number;
  animInProgress: boolean;
  animPortal: boolean;
};
