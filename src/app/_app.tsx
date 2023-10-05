import './global.css';
import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light'
    }
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

function getActivateTheme(themeMode: 'light' | 'dark'){
    return themeMode === 'light' ? lightTheme : darkTheme;
}

function MyApp({ Component, pageProps }: AppProps) {
    const [activeTheme, setActiveTheme] = useState(lightTheme);
    const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('light');
    
    const toggleTheme = () => {
        const desireTheme = selectedTheme === 'light' ? 'dark' : 'light';
        setSelectedTheme(desireTheme);
    }

    useEffect(() => {
        setActiveTheme(getActivateTheme(selectedTheme));
    },[selectedTheme]);

    return (
        <ThemeProvider theme={activeTheme}>
            <Component {...pageProps} toggleTheme={toggleTheme}/>
        </ThemeProvider>
    )
}

export default MyApp;