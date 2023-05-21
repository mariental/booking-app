import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import Layout from '../components/layout/layout';
import { responsiveFontSizes, ThemeOptions } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import{ store, persistor } from '../store';
import { SessionProvider } from 'next-auth/react';
import { PersistGate } from 'redux-persist/integration/react';

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
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            <SessionProvider session={pageProps.session}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <ThemeProvider theme={theme}>
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </ThemeProvider>
                    </PersistGate>

                </Provider>
            </SessionProvider>
        </>
    );
}

export default CustomApp;