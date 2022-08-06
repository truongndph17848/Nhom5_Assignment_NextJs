import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"

type Props = {};

const Slide = (props: Props) => {
  const images = [
    "https://sixdo.vn/images/banners/original/ngang-nho-1658296369.jpg",
    "//bizweb.sapocdn.net/100/438/408/themes/863105/assets/page_nam_slider_1.jpg?1659777315508",
    "https://theme.hstatic.net/1000026602/1000835746/14/img-banner-index.jpg?v=4674"
  ];
  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: (
      <div
        className="hover:bg-zinc-100 rounded-3xl"
        style={{ marginLeft: "10px", cursor: "pointer" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="arrow-circle-down"
          viewBox="0 0 24 24"
          width="40"
          height="40"
        >
          <path d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM2,12A10,10,0,1,1,12,22,10.011,10.011,0,0,1,2,12Z" />
          <path d="M8,12a2.993,2.993,0,0,1,.752-1.987c.291-.327.574-.637.777-.84L12.353,6.3a1,1,0,0,1,1.426,1.4L10.95,10.58c-.187.188-.441.468-.7.759a1,1,0,0,0,0,1.323c.258.29.512.57.693.752L13.779,16.3a1,1,0,0,1-1.426,1.4L9.524,14.822c-.2-.2-.48-.507-.769-.833A2.99,2.99,0,0,1,8,12Z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div
        className="hover:bg-zinc-100 rounded-3xl"
        style={{ marginRight: "10px", cursor: "pointer" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="arrow-circle-down"
          viewBox="0 0 24 24"
          width="40"
          height="40"
        >
          <path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm22,0A10,10,0,1,1,12,2,10.011,10.011,0,0,1,22,12Z" />
          <path d="M16,12a2.993,2.993,0,0,1-.752,1.987c-.291.327-.574.637-.777.84L11.647,17.7a1,1,0,1,1-1.426-1.4L13.05,13.42c.187-.188.441-.468.7-.759a1,1,0,0,0,0-1.323c-.258-.29-.512-.57-.693-.752L10.221,7.7a1,1,0,1,1,1.426-1.4l2.829,2.879c.2.2.48.507.769.833A2.99,2.99,0,0,1,16,12Z" />
        </svg>
      </div>
    ),
  };

  return (
    <div className="m-10 relative">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center w-full h-full">
            <img
              className="w-full mx-auto object-cover rounded-md shadow-xl"
              src={each}
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slide;