import React, { Fragment, useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import { DrawerContext } from "../../Store/drawer-context";
import { useNavigate } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const DrawerMenu: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const ctx = useContext(DrawerContext);

  const handleDrawerClose = () => {
    ctx.closeDrawer();
  };

  type MenuItem = {
    name: string;
    route: string;
    icon: any;
  };
  const menuItems: MenuItem[] = [
    {
      name: "Home",
      route: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Users",
      route: "/main/users",
      icon: <GroupIcon />,
    },
  ];

  return (
    <Fragment>
      <Drawer
        sx={{
          width: ctx.drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: ctx.drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={ctx.isDrawerOpen}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((menuItem, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {
                navigate(menuItem.route);
              }}
            >
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Fragment>
  );
};
export default DrawerMenu;
