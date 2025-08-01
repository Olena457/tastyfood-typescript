import { Link } from "react-router-dom";
import lemonImage from "../../assets/images/lemon.jpg";
import sushiImage from "../../assets/images/sushi.jpg";
import meatImage from "../../assets/images/meat.jpg";
import CountUp from "react-countup";
import FooterMarquee from "../../components/FooterMarquee/FooterMarquee";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaUsers,
} from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";

export default function MainPage() {
  return (
    <div className="container mx-auto px-0 pb-0">
      <div className="flex flex-col md:flex-row-reverse items-stretch bg-[#a4be92] overflow-hidden ">
        <div className="w-full md:w-2/3 lg:w-7/12  p-2 flex flex-col items-center bg-[#a4be92] justify-center">
          <div
            className="grid grid-cols-2 gap-2 w-full mb-2"
            style={{ height: "240px" }}
          >
            <div className="col-span-1 overflow-hidden rounded-2xl">
              <img
                src={lemonImage}
                alt="Lemon dessert"
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="col-span-1 overflow-hidden rounded-2xl">
              <img
                src={sushiImage}
                alt="Sushi rolls"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>

          <div
            className="w-full h-auto overflow-hidden rounded-2xl"
            style={{ height: "350px" }}
          >
            <img
              src={meatImage}
              alt="Grilled meat and salad"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>

        <div className="w-full md:w-1/3 lg:w-5/12 p-4 flex flex-col justify-start text-[#466343]">
          <div className="w-full-logo text-center w-full-logo bg-gradient-to-r from-[#5f8b5a] via-[#dff5a0] to-[#5f8b5a] px-4 mb-4 2xl:mb-2 rounded-2xl">
            <GiChefToque color="#5f8b5a" className="w-6 h-6" />
            <h4 className="text-[#5f8b5a] lg:text-3xl  font-script py-2 p-x">
              Food & Drinks
            </h4>
          </div>
          <h1 className=" text-center text-3xl  sm:text-3xl md:text-xl lg:text-2xl lg:text-center lg:mb-4 xl:mb-2  2xl:mt-5 xl:text-3xl 2xl:text-3xl font-bold mb-4">
            Discover taste: choose a dish, cook with joy.
          </h1>
          <h4 className="text-base sm:ml-2 md:text-[16px] sm:text-lg lg:text-[18px] xl:text-[22px] 2xl:text-[20px] text-[#f5f5dc] mb-2 bullet-h4">
            Easy recipes for any occasion with simple ingredients.
          </h4>
          <h4 className="text-base sm:ml-2 md:text-[16px] sm:text-lg lg:text-[18px] xl:text-[22px] 2xl:text-[20px] text-[#f5f5dc] mb-2 bullet-h4">
            Delicious meals to fuel your day and boost your mood.
          </h4>
          <h4 className="text-base sm:ml-2 md:text-[16px] sm:text-lg lg:text-[18px] xl:text-[22px] 2xl:text-[20px] text-[#f5f5dc] mb-4 bullet-h4">
            Find out the amount of nutrients for balanced meals.
          </h4>

          <Link
            to="/home"
            className="explore-button text-center md:mt-2 lg:mt-6 xl:mt-0 2xl:mt-9 px-8 py-3 font-semibold rounded-full shadow-md bg-[#5f8b5a] text-[#f5f5dc] hover:bg-[#4a6b4a] transition-colors"
          >
            Explore now
          </Link>

          <div className="hidden md:block md:mt-3 mt-4  p-4 bg-[#5f8b5a] lg:p-4 lg:mt-9  xl:mt-1 2xl:mt-9 text-center text-[#f5f5dc] rounded-2xl ">
            <div className="flex items-center justify-center mb-2">
              <FaUsers className="mr-2 w-6 h-6" />
              <h5 className=" text-xl md:text-[14px] lg:text-2xl font-bold">
                Active Users Right Now
              </h5>
            </div>
            <div className="text-3xl md:text-4xl lg:mt-4 lg:text-4xl font-extrabold">
              <CountUp start={0} end={10999} duration={10.75} separator=" " />
              <div className="flex justify-center mt-2 lg:mt-4 space-x-4 md:space-x-6 lg:space-x-8">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f5dc] hover:text-gray-300 transition-colors"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f5dc] hover:text-gray-300 transition-colors"
                >
                  <FaFacebook size={30} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f5dc] hover:text-gray-300 transition-colors"
                >
                  <FaInstagram size={30} />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f5dc] hover:text-gray-300 transition-colors"
                >
                  <FaTwitter size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterMarquee />
    </div>
  );
}
