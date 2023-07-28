import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Title 1",
      description:
        "Random video description: In this video, we explore the fascinating world of underwater basket weaving. This unique art form combines creativity and dexterity as skilled artisans weave intricate baskets while submerged in water. Discover the secrets of this ancient tradition and the mesmerizing beauty of the underwater landscapes where these artists create their masterpieces.",
      icon: require("./Media/example1.svg"),
    },
    {
      title: "Title 2",
      description:
        "Random video description: Join us in this captivating video where we delve into the art of cloud sculpting. Watch as talented sculptors use fluffy clouds as their canvas, shaping them into stunning sculptures with precision and imagination. From mythical creatures to famous landmarks, these ephemeral creations are a sight to behold.",
      icon: require("./Media/example2.svg"),
    },
    {
      title: "Title 3",
      description:
        "Random Video Description: Welcome to the world of extreme knitting, where massive knitting needles and oversized yarns create unbelievably cozy and gigantic knitted items. In this video, we follow the journey of extreme knitters who craft giant blankets, sweaters, and scarves that can fit an entire family. Witness the artistry and effort that goes into these super-sized creations.",
      icon: require("./Media/example3.svg"),
    },
  ];
  
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <>
      <h1 style={{ fontSize: '3rem', color: 'white' }}>Eon Media Demo Application</h1>
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translate(-${activeIndex * 100}%)`
       }}
        >
          {items.map((item) => {
            return <CarouselItem item={item} width={"100%"} />;
          })}
        </div>

        <div className="carousel-buttons">
          <button
            className="button-arrow"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <ArrowBackIosIcon  />
          </button>
          <div className="indicators">
            {items.map((item, index) => {
              return (
                <button
                  className="indicator-buttons"
                  onClick={() => {
                    updateIndex(index);
                  }}
                >
                  <span
                    className={`material-symbols-outlined ${
                      index === activeIndex
                        ? "indicator-symbol-active"
                        : "indicator-symbol"
                    }`}
                  >
                    <RadioButtonCheckedIcon />
                  </span>
                </button>
              );
            })}
          </div>
          <button
            className="button-arrow"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </>
  );
};
