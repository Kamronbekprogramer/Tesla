// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import img1 from "../../assets/image1.png";
// import img2 from "../../assets/image2.png";
// import img3 from "../../assets/image3.png";
// import img4 from "../../assets/image4.png";
// import Slider from "react-slick";
// const cars = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];

// const Carousel = ({ selectedModel }) => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <>
//         <Slider {...settings}>
//       {cars.map((item, index) => (
//           <img src={item.img} alt="" />
//           ))}
//           </Slider>
//     </>
//   );
// };

// export default Carousel;


// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import img1 from "../../assets/image1.png";
// import img2 from "../../assets/image2.png";
// import img3 from "../../assets/image3.png";
// import img4 from "../../assets/image4.png";
// import Slider from "react-slick";

// const cars = {
//   'Model S': [img1],
//   'Model 3': [img2],
//   'Model X': [img3],
//   'Model Y': [img4]
// };

// const Carousel = ({ selectedModel }) => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   if (!selectedModel || !cars[selectedModel]) {
//     return <div>No images found for the selected model</div>;
//   }

//   return (
//     <Slider {...settings}>
//       {cars[selectedModel].map((img, index) => (
//         <img key={index} src={img} alt={selectedModel} />
//       ))}
//     </Slider>
//   );
// };

// export default Carousel;

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import Slider from "react-slick";

const cars = {
  'Model S': [img1],
  'Model 3': [img2],
  'Model X': [img3],
  'Model Y': [img4]
};

const Carousel = ({ selectedModel }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!selectedModel || !cars[selectedModel]) {
    return <div>No images found for the selected model</div>;
  }

  return (
    <Slider {...settings}>
      {cars[selectedModel].map((img, index) => (
        <img key={index} src={img} alt={selectedModel} />
      ))}
    </Slider>
  );
};

export default Carousel;
