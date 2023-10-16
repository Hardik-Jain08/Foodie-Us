import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import { mockData } from "../Mock/mockData";
import { IMG_CDN_URL } from "../utils/constants";
const FoodCarousel = () => {
    const carouselCards = mockData?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <h2 className='font-bold text-2xl my-4'>Best offers for you</h2>
            <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true}
                infinite={true}            
            >
                {
                    carouselCards.map((card) => {
                        return (
                            <div key={card.id} className="px-2 cursor-pointer">
                                <img src={IMG_CDN_URL + card?.imageId} className="object-cover rounded-3xl" alt={`offer ${card.id}`} />
                            </div>
                        );
                    })
                }
            </Carousel>
        </>
    )
}

export default FoodCarousel