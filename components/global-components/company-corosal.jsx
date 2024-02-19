import React from "react";
import { Carousel } from "react-responsive-carousel";

const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
};

const indicatorStyles = {
    background: '#fff',
    width: 8,
    height: 8,
    display: 'inline-block',
    margin: '0 8px',
};
export default () => (
  <Carousel 
    autoPlay 
    showArrows={true}
    renderArrowPrev={(onClickHandler, hasPrev, label) =>
    hasPrev && (
        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
            -
        </button>
    )
}
renderArrowNext={(onClickHandler, hasNext, label) =>
    hasNext && (
        <Image style={{ ...arrowRight ,right: 15 }} alt="Right Arrow Icon - India Index" src="https://res.cloudinary.com/dankrz15s/image/upload/v1708285497/india-index/Carousel-arrow-right_ar3drj.svg" onClick={onClickHandler}></Image>
    )
}
renderIndicator={(onClickHandler, isSelected, index, label) => {
    if (isSelected) {
        return (
            <li
                style={{ ...indicatorStyles, background: '#000' }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
            />
        );
    }
    return (
        <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
        />
    );
}}
  >
    <div>
      <img className="rounded-2xl" alt="India Index Banner 1" src="https://res.cloudinary.com/dankrz15s/image/upload/v1708201185/india-index/main-banner-image_i2rzsn.jpg" />
    </div>
    <div>
      <img className="rounded-2xl" alt="India Index Banner 2" src="https://res.cloudinary.com/dankrz15s/image/upload/v1708201185/india-index/main-banner-image_i2rzsn.jpg" />
    </div>
    <div>
      <img className="rounded-2xl" alt="India Index Banner 3" src="https://res.cloudinary.com/dankrz15s/image/upload/v1708201185/india-index/main-banner-image_i2rzsn.jpg" />
    </div>

  </Carousel>
);
