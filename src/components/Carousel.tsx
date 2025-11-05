'use client'
import {
  Carousel,
  Slider,
  SliderContainer,
  SliderDotButton,
  ThumbsSlider,
} from '@/components2/uilayouts/carousel'
import { type EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import DetailsBlock from './ImageBoxCrls'

function CarouselBox() {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    axis: 'y',
  }
  return (
    <>
      <div className="w-full">
        <Carousel
          options={OPTIONS}
          plugins={[
            Autoplay({
              playOnInit: true,
              delay: 2000,
              stopOnMouseEnter: true,
              stopOnInteraction: true,
            }),
          ]}
          dir="ltr"
          className="relative h-full"
        >
          <SliderContainer className="h-[300px] md:h-[400px] lg:h-[700px]">
            <Slider
              className="relative h-full w-full"
              thumbnailSrc="https://images.unsplash.com/photo-1759395073808-17782f3d8d66?q=80&w=1471&auto=format&fit=crop"
            >
              <DetailsBlock
                imageUrl="https://images.unsplash.com/photo-1759395073808-17782f3d8d66?q=80&w=1471&auto=format&fit=crop"
                description="Page layouts look better with something in each section. Web
              page designers, content writers, and layout artists use
              lorem ipsum, also known as placeholder copy, to distinguish
              which areas on a page will hold advertisements, editorials,
              and filler before the final written content and website
              designs receive client approval."
                title="Hello Title"
                buttonText="Read More"
                key={'titleYo1'}
                href="/"
              ></DetailsBlock>
            </Slider>

            <Slider
              className="h-full w-full"
              thumbnailSrc="https://images.unsplash.com/photo-1759434192768-fe3facebd5f6?q=80&w=1471&auto=format&fit=crop"
            >
              <DetailsBlock
                imageUrl="https://images.unsplash.com/photo-1759434192768-fe3facebd5f6?q=80&w=1471&auto=format&fit=crop"
                description="Page layouts look better with something in each section. Web
              page designers, content writers, and layout artists use
              lorem ipsum, also known as placeholder copy, to distinguish
              which areas on a page will hold advertisements, editorials,
              and filler before the final written content and website
              designs receive client approval."
                title="Hello Title"
                buttonText="Read More"
                key={'titleYo1'}
                href="/"
              ></DetailsBlock>
            </Slider>

            <Slider
              className="h-full w-full"
              thumbnailSrc="https://images.unsplash.com/photo-1758641008040-28cdd59ca8fb?q=80&w=687&auto=format&fit=crop"
            >
              <DetailsBlock
                imageUrl="https://images.unsplash.com/photo-1758641008040-28cdd59ca8fb?q=80&w=687&auto=format&fit=crop"
                description="Page layouts look better with something in each section. Web
              page designers, content writers, and layout artists use
              lorem ipsum, also known as placeholder copy, to distinguish
              which areas on a page will hold advertisements, editorials,
              and filler before the final written content and website
              designs receive client approval."
                title="Hello Title"
                buttonText="Read More"
                key={'titleYo1'}
                href="/"
              ></DetailsBlock>
            </Slider>

            <Slider
              className="h-full w-full"
              thumbnailSrc="https://images.unsplash.com/photo-1618220649687-ba860f3176e7?q=80&w=1474&auto=format&fit=crop"
            >
              <DetailsBlock
                imageUrl="https://images.unsplash.com/photo-1618220649687-ba860f3176e7?q=80&w=1474&auto=format&fit=crop"
                description="Page layouts look better with something in each section. Web
              page designers, content writers, and layout artists use
              lorem ipsum, also known as placeholder copy, to distinguish
              which areas on a page will hold advertisements, editorials,
              and filler before the final written content and website
              designs receive client approval."
                title="Hello Title"
                buttonText="Read More"
                key={'titleYo1'}
                href="/"
              ></DetailsBlock>
            </Slider>

            <Slider
              className="h-full w-full"
              thumbnailSrc="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=765&auto=format&fit=crop"
            >
              <DetailsBlock
                imageUrl="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=765&auto=format&fit=crop"
                description="Page layouts look better with something in each section. Web
              page designers, content writers, and layout artists use
              lorem ipsum, also known as placeholder copy, to distinguish
              which areas on a page will hold advertisements, editorials,
              and filler before the final written content and website
              designs receive client approval."
                title="Hello Title"
                buttonText="Read More"
                key={'titleYo1'}
                href="/"
              ></DetailsBlock>
            </Slider>
            <Slider
              className="h-full w-full"
              thumbnailSrc="https://images.unsplash.com/photo-1761872936220-1531e97a158a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"
            >
              <DetailsBlock
                imageUrl="https://images.unsplash.com/photo-1761872936220-1531e97a158a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"
                description="Page layouts look better with something in each section. Web
              page designers, content writers, and layout artists use
              lorem ipsum, also known as placeholder copy, to distinguish
              which areas on a page will hold advertisements, editorials,
              and filler before the final written content and website
              designs receive client approval."
                title="Hello Title"
                buttonText="Read More"
                key={'titleYo1'}
                href="/"
              ></DetailsBlock>
            </Slider>
          </SliderContainer>

          <ThumbsSlider
            className="absolute top-1/2 right-4 hidden w-20 -translate-y-1/2 md:block"
            thumbsSliderClassName="border-black"
          />
          <div className="absolute top-1/2 right-4 -translate-y-1/2">
            <SliderDotButton className="flex-col gap-2 md:hidden" />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default CarouselBox
