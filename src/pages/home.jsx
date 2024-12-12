import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';
import { Bars } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/assets/Velpack_Logo.png" alt="Velpack Logo" className="h-8" />
          <span className="ml-2 font-bold text-xl">Velpack</span>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Bars className="h-6 w-6 text-gray-600" />
        </button>
        <div
          className={`md:flex md:items-center md:space-x-6 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Capabilities
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="relative h-[calc(100vh-5rem)] md:h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-500 opacity-70"></div>
      <div className="absolute inset-0 flex flex-col justify-end items-center pb-24 md:pb-32">
        <motion.h1
          variants={fadeIn('left', 1.2)}
          initial="hidden"
          whileInView="show"
          className="text-4xl mb-8 text-white text-center tracking-[0.14em] font-hmed leading-[38px] -webkit-font-smoothing: antialiased font-kerning-normal md:text-5xl"
        >
          PAPER-BASED PACKAGING SOLUTIONS SINCE 1956
        </motion.h1>
        <motion.button
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          className="px-6 py-2 border-2 border-[#e81d2d] text-white bg-white-600 rounded-md hover:bg-[#b7162a] hover:text-white transition duration-300 font-hbold leading-[38px] -webkit-font-smoothing: antialiased font-kerning-normal"
        >
          GET IN TOUCH
        </motion.button>
      </div>
      <img
        src="/assets/HP_Banner_1.jpg"
        alt="Team in packaging facility 1"
        className="absolute w-full h-full object-cover"
      />
    </div>
  );
};

const AboutUs = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView="show"
      className="my-20 bg-[#b7162a] text-white md:my-32"
    >
      <div className="w-full mx-auto flex relative md:px-8 lg:px-12">
        <div className="absolute right-[4rem] top-[-3rem] w-[45vw] h-[400px] bg-gray-300 flex items-center justify-center shadow-lg md:right-[6rem] md:top-[-4rem] md:w-[40vw] md:h-[450px]">
          <img src="/assets/about-us-image.jpg" alt="About Us" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 p-12 flex flex-col justify-center z-10 md:w-3/5 md:p-16">
          <h2 className="text-4xl mb-2 font-hbold md:text-5xl">WHO ARE WE?</h2>
          <div className="w-16 h-1 bg-white mb-6 ml-2 "></div>
          <p className="mb-8 text-lg font-hmed md:text-xl">
            Velpack has been a pioneer in the paper-based packaging industry since
            1956. We specialize in providing high-quality folded cartons for the
            pharmaceutical, FMCG and industrial sectors.
          </p>
          <button className="font-hbold bg-transparent border-2 border-white text-white py-2 px-6 rounded-md hover:bg-white hover:text-[#b7162a] transition duration-300 self-start">
            KNOW MORE
          </button>
        </div>
      </div>
    </motion.section>
  );
};

const ServicesSection = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <motion.h2
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
        className="text-3xl font-hbold text-center text-[#b7162a] mb-10 md:text-4xl"
      >
        We offer specialized paper-based packaging solutions for various
        industries, ensuring each product meets stringent quality standards.
      </motion.h2>
      <div className="flex justify-center space-x-8 md:space-x-12 lg:space-x-16">
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView="show"
          className="w-1/3 relative md:w-1/4 lg:w-1/5"
        >
          <img
            src="/assets/Pharmaceutical.jpg"
            alt="Pharmaceutical Packaging"
            className="w-full h-64 object-cover rounded-lg md:h-72 lg:h-80"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView="show"
          className="w-1/3 relative md:w-1/4 lg:w-1/5"
        >
          <img
            src="/assets/FMCG.jpg"
            alt="FMCG Packaging"
            className="w-full h-64 object-cover rounded-lg md:h-72 lg:h-80"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const CapabilitiesSection = () => (
  <motion.section
    variants={fadeIn('up', 0.3)}
    initial="hidden"
    whileInView="show"
    className="bg-[#b7162a] text-white py-12 md:py-16"
  >
    <motion.div
      variants={fadeIn('down', 0.3)}
      initial="hidden"
      whileInView="show"
      className="container mx-auto px-4 md:px-8 lg:px-12"
    >
      <motion.h2
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
        className="text-4xl font-hbold text-center md:text-5xl"
      >
        OUR CAPABILITIES
        <div className="w-16 h-1 bg-white mb-6 mx-auto mt-3"></div>
      </motion.h2>

      <motion.p
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
        className="text-xl text-center mb-8 md:text-2xl"
      >
        With state-of-the-art machinery and advanced manufacturing processes,
        Velpack delivers precision and quality in every product.
      </motion.p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView="show"
          className="bg-[#e81d2d] p-4 rounded-lg mx-1 text-center"
        >
          <motion.h3
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-xl font-hmed mb-1"
          >
            Our facility spans
          </motion.h3>
          <motion.p
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-4xl font-bold mb-1"
          >
            42,000 sq. ft.
          </motion.p>
          <motion.p
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
          >
            in Navi Mumbai, India
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          className="bg-[#e81d2d] p-4 rounded-lg mx-1 text-center"
        >
          <motion.h3
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-xl font-hmed mb-1"
          >
            We produce
          </motion.h3>
          <motion.p
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-4xl font-bold mb-1"
          >
            3 million
          </motion.p>
          <motion.p
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
          >
            cartons per day
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView="show"
          className="bg-[#e81d2d] p-4 rounded-lg mx-1 text-center"
        >
          <motion.h3
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-xl font-hmed mb-1"
          >
            We print
          </motion.h3>
          <motion.p
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-4xl font-bold mb-1"
          >
            1 million
          </motion.p>
          <motion.p
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
          >
            inserts per day
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn('up', 0.7)}
        initial="hidden"
        whileInView="show"
        className="bg-white text-black p-6 rounded-lg mb-8 md:px-8 lg:px-12"
      >
        <motion.h3
          variants={fadeIn('up', 0.7)}
          initial="hidden"
          whileInView="show"
          className="text-2xl font-hbold text-center mb-4 text-[#e81d2d] md:text-3xl"
        >
          WE ARE CERTIFIED BY
        </motion.h3>
        <div className="flex justify-around items-center pb-4 md:justify-between">
          <img src="/assets/ISO_9001.png" alt="ISO" className="h-14 md:h-16" />
          <img src="/assets/PS_9000.png" alt="PS" className="h-14 md:h-16" />
          <img src="/assets/BRC_Global_Standard.png" alt="BRC" className="h-14 md:h-16" />
          <img src="/assets/sedex.png" alt="Sedex" className="h-14 md:h-16" />
          <img src="/assets/PSCI.png" alt="PSCI" className="h-14 md:h-16" />
          <img src="/assets/GMI.png" alt="gmi" className="h-14 md:h-16" />
        </div>
      </motion.div>

      <Footprint />
    </motion.div>
  </motion.section>
);

const TrustedBrandsSection = () => {
  return (
    <section className="bg-[#e81d2d] py-10 overflow-hidden md:py-12 lg:py-16">
      <h2 className="text-4xl font-hbold text-center mb-8 text-white md:text-5xl">
        TRUSTED BY LEADING BRANDS
      </h2>
      <div className="relative">
        <div className="flex animate-scroll bg-white py-6 h-xl md:py-8 lg:py-10">
          <div className="flex shrink-0">
            <img src="/assets/Marksans.png" alt="Logo 1" className="h-14 mx-10 md:h-16 lg:h-20" />
            <img src="/assets/Lupin.png" alt="Logo 2" className="h-14 mx-10 md:h-16 lg:h-20" />
            <img src="/assets/Piramal.png" alt="Logo 3" className="h-14 mx-10 md:h-16 lg:h-20" />
            <img src="/assets/Ipca.png" alt="Logo 4" className="h-14 mx-10 md:h-16 lg:h-20" />
            <img src="/assets/Indoco.png" alt="Logo 5" className="h-14 mx-10 md:h-16 lg:h-20" />
          </div>
          <div className="flex shrink-0">
            <img src="/assets/Marksans.png" alt="Logo 1" className="h-14 mx-10 md:h-16 lg:h-20" />
            <img src="/assets/Lupin.png" alt="Logo 2" className="h-14 mx-10 md:h-16 lg:h-20" />
            <img src="/assets/Piramal.png" alt="Logo 3" className="h-14 mx-10 md:h-16 lg:h-20" />
            <img src="/assets/Ipca.png" alt="Logo 4" className="h-14 mx-10 md:h-16 lg:h-20" />
            <img src="/assets/Indoco.png" alt="Logo 5" className="h-14 mx-10 md:h-16 lg:h-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => (
  <motion.section
    variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView="show"
    className="bg-white py-16 md:py-24"
  >
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <motion.h2
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className="text-4xl font-hbold text-center mb-2 text-[#e81d2d] md:text-5xl"
      >
        OUR FEATURES
      </motion.h2>
      <div className="w-20 h-1 bg-[#e81d2d] mx-auto mb-12"></div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12 lg:gap-16"
      >
        {[
          { name: "EMBOSSING", image: "/assets/Embossing.jpg" },
          { name: "ACCUBRAILLE", image: "/assets/Accubraille.jpg" },
          { name: "SPOT GLOSS", image: "/assets/Spot_Gloss.jpg" },
          { name: "FOIL STAMPING", image: "/assets/Foil_Stamping.jpg" },
          { name: "TEXTURE UV", image: "/assets/Textured_UV.jpg" },
        ].map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:w-full lg:w-4/5 mx-auto"
          >
            <div className="w-full aspect-square bg-gray-200 mb-4 rounded-lg overflow-hidden">
              <img
                src={feature.image}
                alt={feature.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center font-bold md:text-lg">{feature.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

const SecurityFeaturesSection = () => (
  <motion.section
    variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView="show"
    className="bg-black text-white py-6 md:py-8 lg:py-10"
  >
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <div className="flex justify-center items-center">
        <motion.h3
          variants={fadeIn(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-2xl text-center font-hbold whitespace-nowrap px-2 md:text-3xl"
        >
          SECURITY FEATURES:
        </motion.h3>
        <p className="text-xl md:text-2xl">
          Micro Printing | Invisible Ink Printing | Hologram Foil | Coin-Reactive
          Ink | Tamper-Evident Cartons
        </p>
      </div>
    </div>
  </motion.section>
);

const ReviewCard = ({ review, isCenter }) => (
  <div
    className={`bg-red-500 rounded-lg p-6 text-white ${
      isCenter
        ? "bg-red-800 shadow-lg transform scale-105 z-10"
        : "z-0"
    } w-96 h-74 flex flex-col justify-between md:w-full md:h-auto`}
  >
    <div>
      <h3 className="text-xl font-bold mb-2 text-center md:text-2xl">
        {review.name}
      </h3>
      <p className="text-sm mb-2 text-center md:text-base">
        {review.company}
      </p>
    </div>
    <p className="text-sm text-center mb-16 md:text-base md:mb-8">
      {review.content}
    </p>
  </div>
);

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Name 1",
      company: "Company 1",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    },
    {
      name: "Name 2",
      company: "Company 2",
      content:
        "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Name 3",
      company: "Company 3",
      content:
        "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros.",
    },
    {
      name: "Name 4",
      company: "Company 4",
      content:
        "Et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-3 text-[#e81d2d] md:text-5xl">
          WHAT OUR CLIENTS SAY
        </h2>
        <div className="w-16 h-1 bg-[#e81d2d] mb-12 mx-auto "></div>

        <div className="relative">
          <div className="flex justify-center items-center">
            <button
              onClick={prevReview}
              className="absolute left-0 z-20 text-4xl text-[#000000] md:left-4 lg:left-8"
            >
              &lt;
            </button>
            <div className="flex justify-center items-center space-x-4 relative md:space-x-8 lg:space-x-12">
              <div className="w-96 absolute -left-80 transform scale-90 md:w-full md:static md:transform-none">
                <ReviewCard
                  review={
                    reviews[
                      (currentIndex - 1 + reviews.length) % reviews.length
                    ]
                  }
                  isCenter={false}
                />
              </div>
              <div className="w-96 z-10 md:w-full">
                <ReviewCard review={reviews[currentIndex]} isCenter={true} />
              </div>
              <div className="w-96 absolute -right-80 transform scale-90 md:w-full md:static md:transform-none">
                <ReviewCard
                  review={reviews[(currentIndex + 1) % reviews.length]}
                  isCenter={false}
                />
              </div>
            </div>
            <button
              onClick={nextReview}
              className="absolute right-0 z-20 text-4xl text-[#000000] md:right-4 lg:right-8"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footprint = () => (
  <motion.div
    variants={fadeIn("up", 0.7)}
    initial="hidden"
    whileInView="show"
    className="flex justify-center items-center mt-12"
  >
    <img src="/assets/Velpack_Footprint.png" alt="Velpack Footprint" className="h-20 md:h-24" />
    <p className="text-lg font-hbold text-center ml-4 md:text-xl">
      Our Global Footprint
    </p>
  </motion.div>
);

return (
  <>
    <Navbar />
    <HeroSection />
    <AboutUs />
    <ServicesSection />
    <CapabilitiesSection />
    <TrustedBrandsSection />
    <FeaturesSection />
    <SecurityFeaturesSection />
    <ReviewsSection />
    <Footer />
  </>
);

export default Home;
