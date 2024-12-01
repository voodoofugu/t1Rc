type PopupStateT = {
  mpopClass?: string;
  popStyle?: Record<string, any>;
  popTit?: string;
  popCont?: string;
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

const popupState: PopupStateT | null = null;

export default popupState;
