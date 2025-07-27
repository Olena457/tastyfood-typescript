import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";

export default function FooterMarquee() {
  const contactInfo = [
    {
      text: "Email: info@fictive-recipes.com",
      icon: <FaEnvelope color="#5f8b5a" />,
    },
    {
      text: "Phone: +380 (50) 123-4567",
      icon: <BsPhoneVibrateFill color="#5f8b5a" />,
    },
    {
      text: "Address: 123 Fictive Culinary St, Kyiv, Ukraine",
      icon: <FaMapMarkerAlt color="#5f8b5a" />,
    },
    {
      text: "Working Hours: Mon-Fri 9 AM - 6 PM",
      icon: <IoMdTime color="#5f8b5a" />,
    },
  ];

  const marqueeContent = (
    <>
      {contactInfo.map((item, index) => (
        <span
          key={index}
          className="flex items-center mx-10 whitespace-nowrap "
        >
          {item.icon && <span className="mr-2 text-2xl">{item.icon}</span>}
          <span className="text-[#5f8b5a]">{item.text}</span>
        </span>
      ))}
    </>
  );

  return (
    <footer
      className="footer-marquee overflow-hidden font-bold font-['Arial'] text-xl 
                  bg-gradient-to-r from-[#5f8b5a] via-[#dff5a0] to-[#5f8b5a] 
                  py-3 text-[var(--white-color)] leading-tight tracking-tight 
                  uppercase bg-transparent text-shadow-[1px_1px_3px_var(--shadow-text)]
                  md:text-2xl lg:text-2xl xl:text-4xl rounded-xl
                 "
    >
      <div className="flex animate-[marqueeLine_60s_linear_infinite]">
        {marqueeContent}
        {marqueeContent}
        {marqueeContent}
      </div>
    </footer>
  );
}
