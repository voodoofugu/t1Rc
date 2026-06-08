type PopupStateT = {
  mpopClass?: string;
  popStyle?: Record<string, any>;
  popTit?: string;
  popCont?: string | [string, Record<string, any>?];
  btnXClass?: string;
  infBtn?: boolean;
  timer?: boolean;
  count?: {
    value?: string | number;
    icon?: string;
    add?: boolean;
  };
  popupVisible?: boolean;
  dialogEmersion?: string;
  popOpen?: () => void;
  popClose?: () => void;
  props?: Record<string, any>;
};

const popupState: PopupStateT | null = null;

export default popupState;
