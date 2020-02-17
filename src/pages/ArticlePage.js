import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

const ArticlePage    = () => (
    <ThemeProvider theme={theme}>
    <>
    <h1>Article Page</h1>
    </>
    </ThemeProvider>
)

export default ArticlePage;