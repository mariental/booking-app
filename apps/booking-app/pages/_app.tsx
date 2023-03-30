import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import Layout from '../components/layout/layout';
import { responsiveFontSizes, ThemeOptions } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from '../store';

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#2f5785',
        },
        secondary: {
            main: '#f1c83e',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
    }
};

let theme = createTheme({
    ...themeOptions
});

theme = responsiveFontSizes(theme);

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Welcome to booking-app!</title>
            </Head>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </Provider>
        </>
    );
}

export default CustomApp;