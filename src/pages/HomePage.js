import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../elements/Button';
import theme from '../theme';

const HomePage = () => (
    <ThemeProvider theme={theme}>
    <>
    <h1>Welcome to my blog</h1>
        <p>Welcome to my blog. I am an aspiring react developer</p>
        <Button>Click here to learn more</Button>
    </>
    </ThemeProvider>
)

export default HomePage;