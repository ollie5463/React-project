import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import articleConent from './article-content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleConent.find(article => article.name === name);
    if (!article) return <h1>Article doesn't exist</h1>
    return(
        <ThemeProvider theme={theme}>
            <>
                <h1>{article.name}</h1>
                {article.content.map((content, key) => <p key={key}>{content}</p>)}
            </>
        </ThemeProvider>
    )
}

export default ArticlePage;