import lemonImage from "../../assets/images/lemon.jpg";
import sushiImage from "../../assets/images/sushi.jpg";
import meatImage from "../../assets/images/meat.jpg";
import CountUp from "react-countup";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function MainPage() {
  return (
    <div className="container mx-auto px-0 pb-0">
      <div className="flex flex-col md:flex-row-reverse items-stretch bg-[#a4be92] overflow-hidden ">
        <div className="w-full md:w-2/3 p-2 flex flex-col items-center  bg-[#a4be92] justify-center">
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

          <div className="w-full text-center py-2 bg-[#f5f5dc] px-4 mb-2 rounded-2xl">
            <h4 className="text-[#5f8b5a] text-3xl font-script">
              Food & drink
            </h4>
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

        <div className="w-full md:w-1/3 p-4 flex flex-col justify-start text-[#466343]">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Explore flavors: pick a recipe, prepare with joy.
          </h1>
          <h4 className="text-base sm:text-lg text-[#f5f5dc] mb-2 bullet-h4">
            Easy recipes for any occasion.
          </h4>
          <h4 className="text-base sm:text-lg text-[#f5f5dc] mb-2 bullet-h4">
            Delicious meals to fuel your day.
          </h4>
          <h4 className="text-base sm:text-lg text-[#f5f5dc] mb-4 bullet-h4">
            find out the amount of nutrients
          </h4>

          <button className="explore-button mt-6 px-8 py-3 font-semibold rounded-full shadow-md bg-[#5f8b5a] text-[#f5f5dc] hover:bg-[#4a6b4a] transition-colors">
            Explore now
          </button>

          <div className="hidden md:block mt-8 p-4 bg-[#5f8b5a]  text-center text-[#f5f5dc] rounded-2xl ">
            <h5 className="text-xl font-bold mb-2">Active Users Right Now</h5>
            <div className="text-4xl font-extrabold">
              <CountUp start={0} end={12345} duration={2.75} separator=" " />
            </div>
            <p className="text-sm opacity-80">and counting!</p>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
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
          </div>
        </div>
      </div>
    </div>
  );
}
