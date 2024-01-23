import PropTypes from "prop-types";
import img1 from "./female-hand-holding-tomato-organic-farm.jpg";
import img2 from "./organic-food-farm.jpg";
import img3 from "./tractor-agricultural-machine-cultivating-field.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
const AgriculturalProduct = ({ Products }) => {
  console.log(Products);
  return (
    <div className="aggriculutral-main noheight mb-10 ">
      <div className="text-box p-5 ">
        <h1 className="text-left  font-semibold text-3xl">
          Aggricultural Products
          <hr className="w-1/5 my-2  border-t-4 border-green-500" />
        </h1>
      </div>
      <div className="w-full p-5 flex colum item-center  ">
        <div className="w-1/4 h-full hunder wfulls sliderAggricultural ">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper "
          >
            <SwiperSlide>
              <img src={img1} alt="logo" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={img2} alt="logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="logo" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-3/4  grids h-full p-4">
          {Products &&
            Products.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 m-2 borders glass2 rounded-lg hover:shadow-lg transition duration-300"
              >
                <Link
                  to={`/product/${item._id}`}
                  className="text-black font-bold anchorHeight hover:text-gray-700"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="imgprop object-cover mb-4 rounded-md"
                  />
                </Link>
                <div>
                  <h2 className="text-xl">{item.title}</h2>
                  <Link to={"/Call-back"} className="back text-white px-4 py-2 hover:bg-green-700 inline-flex justify-center gap-2 items-center mt-2">
                    <span>Send Query</span>
                    <ion-icon
                      className="ml-4 rotate-3 "
                      name="send-outline"
                    ></ion-icon>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

AgriculturalProduct.propTypes = {
  Products: PropTypes.array.isRequired,
};

export default AgriculturalProduct;
