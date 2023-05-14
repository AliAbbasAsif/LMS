import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonIcon from "@mui/icons-material/Person";
import Statics from "../Screens/StdDashBoardScreens/Statics";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import Home from "../Screens/StdDashBoardScreens/Home";
import SearchIcon from "@mui/icons-material/Search";
import CSTextField from "./CSTextField";
function ResponsiveDrawer() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(0);
  const handleColor = (row) => {
    setSelected(row.id);
  };

  // let ids;
  const DashBoardActions = [
    {
      id: 1,
      title: "Home",
    },
    { id: 2, title: "Statics" },
    { id: 3, title: "Schedule" },
  ];

  // const handleClick = () => {
  //   setActive(!active);
  // };
  return (
    <div style={{ display: "flex" }}>
    

      <Grid container spacing={1}>
        <Grid item md={1}>
        <Box>
        <Box  position='fixed'
        sx={{ height: "88vh", padding: 2, zIndex: 99999,top:50}}
        >
          <List
            disablePadding
            sx={{
              flexGrow: 1,
              height: "100%",
              borderRadius: 5,
              padding: 0,
              margin: 0,
              backgroundColor: "#1e1e1e",
            }}
          >
            {DashBoardActions.map((list) => (
              <>
                <Tooltip title={list.title}>
                  <ListItem
                    className="sideBtns"
                    key={list.id}
                    onClick={() => {
                      handleColor(list);
                      navigate("Home");
                    }}
                    disablePadding
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: "center",
                        // px: 1.7,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          // minWidth: 0,
                          mx: "auto",
                          justifyContent: "center",
                        }}
                      >
                        {/* {list.Icon} */}
                        <HomeOutlinedIcon
                          style={{
                            color: list.id === selected ? "#f6f6f6" : "grey",
                            fontWeight: "lighter",
                          }}
                        />
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                </Tooltip>
              </>
            ))}
            <Divider sx={{ backgroundColor: "#f6f6f6" }} />
          </List>
        </Box>
      </Box>
        </Grid>
        <Grid item md>
          <Box sx={{ paddingTop: 2 }}>
            <Routes>
              <Route path="/statics" element={<Statics />} />
              <Route path="/Home" element={<Home />} />
            </Routes>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default ResponsiveDrawer;
