import React, { useState } from "react";

type SliderProps = {
  images: string[];
};

const ImageSlider: React.FC<SliderProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "20px auto",
        position: "relative",
        textAlign: "center",
      }}
    >
      <img
        src={images[index]}
        alt="slide"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
        }}
      />

      <button
        onClick={prev}
        style={{
          position: "absolute",
          top: "50%",
          left: "5px",
          padding: "5px 10px",
        }}
      >
        {"<"}
      </button>

      <button
        onClick={next}
        style={{
          position: "absolute",
          top: "50%",
          right: "5px",
          padding: "5px 10px",
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default ImageSlider;