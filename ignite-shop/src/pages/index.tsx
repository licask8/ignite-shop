import { useKeenSlider } from 'keen-slider/react'


import Image from "next/image"
import {  HomeContainer, Product} from "../styles/pages/home"

import image1 from '../assets/camisetas/1.png'
import image2 from '../assets/camisetas/2.png'
import image3 from '../assets/camisetas/3.png'

import 'keen-slider/keen-slider.min.css';


export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })


  return (
     <HomeContainer ref={sliderRef} className='keen-slider'>

        <Product className="keen-slider__slide">
          <Image src={image1} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>

        </Product >

        <Product className="keen-slider__slide">
          <Image src={image2} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta Z</strong>
            <span>R$ 79,90</span>
          </footer>
          
        </Product>

        <Product className="keen-slider__slide">
          <Image src={image3} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta Z</strong>
            <span>R$ 79,90</span>
          </footer>
          
        </Product>

        <Product className="keen-slider__slide">
          <Image src={image3} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta Z</strong>
            <span>R$ 79,90</span>
          </footer>
          
        </Product>

      

     </HomeContainer>
  )
}