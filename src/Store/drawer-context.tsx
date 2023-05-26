import { createContext, useState } from "react";
const drawerWidth = 240;
type DrawerContextObj = {
  drawerWidth: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};
export const DrawerContext = createContext<DrawerContextObj>({
  drawerWidth: 0,
  isDrawerOpen: false,
  openDrawer: () => {},
  closeDrawer: () => {},
});

const DrawerContextProvider: React.FC = (props) => {
  const [width] = useState<number>(drawerWidth);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDrawer = () => {
    setIsOpen(true);
  };
  const closeDrawer = () => {
    setIsOpen(false);
  };

  const contextValue: DrawerContextObj = {
    drawerWidth: width,
    isDrawerOpen: isOpen,
    openDrawer,
    closeDrawer,
  };
  return (
    <DrawerContext.Provider value={contextValue}>
      {props.children}
    </DrawerContext.Provider>
  );
};

export default DrawerContextProvider;
