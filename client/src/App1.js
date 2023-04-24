import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";

import Search from "./pages/Search";


const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App1() {
  const [darkMode, setDarkMode] = useState(true);
 

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
            <Routes>
                
                  <Route path="/*" element={<Home type="random" />} />
                  {/* <Route path="/:title" element={<Video />} /> */}
                  {/* <Route path="trends" element={<Home type="trend" />} />
                  <Route path="subscriptions" element={<Home type="sub" />} />
                  <Route path="search" element={<Search />} />
                    <Route path="videos/:title" element={<Video />} /> */}
              </Routes>
            </Wrapper>
          </Main>
        </>
      </Container>
    </ThemeProvider>
  );
}

export default App1;