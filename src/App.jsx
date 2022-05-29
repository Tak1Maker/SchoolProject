import './App.css';
import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Components/theme";
import Accueil from './Components/Accueil';
import BuyPage from './Components/BuyPage';
import BackgroundVideo from './Video/video.mp4'


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {

    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyledApp>
                <div className='FirstPart'>
                    <div className="toggleWrapper">
                        <input onClick={() => themeToggler()} type="checkbox" class="dn" id="dn" />
                        <label for="dn" class="toggle">
                            <span class="toggle__handler">
                                <span className="crater crater--1"></span>
                                <span className="crater crater--2"></span>
                                <span className="crater crater--3"></span>
                            </span>
                            <span className="star star--1"></span>
                            <span className="star star--2"></span>
                            <span className="star star--3"></span>
                            <span className="star star--4"></span>
                            <span className="star star--5"></span>
                            <span className="star star--6"></span>
                        </label>
                    </div>
                    <Accueil/>
                </div>
                <div className='Test'>
                    <BuyPage/>
                </div>
            </StyledApp>

        </ThemeProvider>
    );
}

export default App;