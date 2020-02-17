import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

const ArticlesList = () => (
    <ThemeProvider theme={theme}>
    <>
    <h1>Articles List</h1>
    </>
    </ThemeProvider>
)

export default ArticlesList;