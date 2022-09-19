import { AppProps } from "next/app"
import { globalStyle } from "../styles/global"
import {Container, Header } from '../styles/pages/app'

import logo from '../assets/logo.svg'


import Image  from 'next/image'

// fora do MyApp
globalStyle();


export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <Container>
      <Header>
        <Image src={logo} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}


