import React from "react";
import styled from "styled-components";
import { Logo } from "../assets/img";
import HomeIcon from "@mui/icons-material/Home";
// import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
// import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
// import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
// import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
// import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
// import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
// import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
// import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
// import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
// import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import Home from "../pages/Home"




import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  // const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="w-25">
    <Container>
      <Wrapper>

        {/* prettier-ignore */}
        <NavLink to={"/menu/home2"}><IoHome className="text-2xl text-textColor" />Home</NavLink>

        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>

        <Hr />
        <Item className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles }>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles }>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles }>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>



        <div className="my-4 w-full p-4">
        <Routes>
          <Route path="/home2/*" element={<Home />} />

        </Routes>
      </div>
      </Wrapper>
    </Container>
    </div>
  );
};

export default Menu;