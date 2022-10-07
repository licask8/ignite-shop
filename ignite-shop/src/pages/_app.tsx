import { AppProps } from "next/app"
import { globalStyle } from "../styles/global"
import {Container } from '../styles/pages/app'


import { HeaderContainer } from "../components/Header/styles"
import { Header } from "../components/Header";
import { CartContextProvider } from "../context/CartContext";

// fora do MyApp
globalStyle();


export default function App({ Component, pageProps }: AppProps) {
  
  return (
   <CartContextProvider>
     <Container>
        <Header />
        <Component {...pageProps} />
    </Container>
   </CartContextProvider>
  );
}


