import React, { useEffect, useState } from "react";
import "./home.scss";
import AnimatedCounter from "./AnimatedCounter";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { MdRecycling } from "react-icons/md";
import book from "../../assests/images/book.png";
import clothing from "../../assests/images/clothing.png";
import gadgets from "../../assests/images/gadgets.png";
import salary from "../../assests/images/salary.png";
import shoppingbag from "../../assests/images/shopping-bag.png";
import sneakers from "../../assests/images/sneakers.png";
import ModalComponent from "../ModalComp";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [ewasteModal, setewasteModal] = useState(false);
  const [indWasteModal, setindWasteModal] = useState(false);
  const [domWasteModal, setdomWasteModal] = useState(false);
  const [textWasteModal, settextWasteModal] = useState(false);
  const [orgWasteModal, setorgWasteModal] = useState(false);
  const [medicalWasteModal, setmedicalWasteModal] = useState(false);
  const [activeName, setActiveName] = useState("home");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="homeContainer">
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="left">
          <ul>
            <li onClick={() => setActiveName("home")}>
              <a
                href="#"
                style={{
                  color: activeName == "home" ? "rgb(185, 40, 40)" : "white",
                }}
              >
                Home
              </a>
            </li>
            <li onClick={() => setActiveName("buy")}>
              <a
                href="#buyContainer"
                style={{
                  color: activeName == "buy" ? "rgb(185, 40, 40)" : "white",
                }}
              >
                Buy
              </a>
            </li>
            <li onClick={() => setActiveName("sell")}>
              <a
                href="#sellContainer"
                style={{
                  color: activeName == "sell" ? "rgb(185, 40, 40)" : "white",
                }}
              >
                Sell
              </a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div>
            <FaFacebookF color="white" />
          </div>
          <div>
            <BsTwitter color="white" />
          </div>
          <div>
            <BiLogoInstagramAlt color="white" />
          </div>
        </div>
      </div>
      <div id="bodyContainer">
        <div id="brandName_container">
          <div className="left">
            <div>
              <p>Hey there,</p>
              <p className="brandTitle">
                We're
                <span>
                  WasteSwap
                  <MdRecycling color="green" />
                </span>
              </p>
              <p className="brandCap">-Recycled waste traders</p>
            </div>
            <p className="ourMission">
              our mission - "Empowering sustainable communities by providing
              innovative waste
              <br />
              management solutions for a cleaner environment and a brighter
              future."
            </p>
            <button>Get in Touch</button>
          </div>
          <div className="right">
            <div>
              <p>
                <AnimatedCounter endValue={100} duration={2000} />{" "}
                <span>+</span>
              </p>
              <span>varities</span>
            </div>
            <div>
              <p>
                <AnimatedCounter endValue={300} duration={2000} />{" "}
                <span>+</span>
              </p>
              <span>satisfied clients</span>
            </div>
          </div>
        </div>
        <div id="buyContainer">
          <div className="content">
            <h1>Buy</h1>
            <div className="buySection">
              <div onClick={() => setewasteModal(true)}>
                <img
                  src="https://images.unsplash.com/photo-1612965110667-4175024b0dcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  className="buyImages"
                />
                <p>E-waste</p>
              </div>
              <ModalComponent
                open={ewasteModal}
                onClose={() => setewasteModal(false)}
                title="E-Waste"
                img1="https://cdn.unenvironment.org/2022-11/GettyImages-1372577388_small.jpeg"
                img2="https://assets.ey.com/content/dam/ey-sites/ey-com/en_us/topics/climate-change/ey-waste-bin-full-of-e-waste.jpg"
                content="Upgrade responsibly and earn cash! We buy your old electronics and e-waste. Turn your clutter into cash by recycling your used phones, laptops, and more. Help the environment while getting paid for your unwanted gadgets."
              />
              <div onClick={() => setindWasteModal(true)}>
                <img
                  src="https://images.unsplash.com/photo-1605027538782-c1b60ffa6cef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kdXN0cmlhbCUyMHdhc3RlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="industrial waste"
                  className="buyImages"
                />
                <p>Industrial Waste</p>
              </div>
              <ModalComponent
                open={indWasteModal}
                onClose={() => setindWasteModal(false)}
                title="Industrial Waste"
                img1="https://www.sa-eng.net/cache/editor/rifiuto-industriali-ed-urbani_1200_630_crop_80.jpg"
                img2="https://www.micronicsinc.com/wp-content/uploads/2019/02/industrial-wastewater.jpg"
                content="Explore a sustainable solution for your industrial waste management needs. Our service offers efficient collection, processing, and disposal of various types of industrial waste. With a focus on environmental responsibility, we ensure that your waste is handled in compliance with regulations. Partner with us to streamline your waste management processes and contribute to a cleaner, greener future."
              />
              <div onClick={() => setdomWasteModal(true)}>
                <img
                  src="https://images.unsplash.com/photo-1562077981-4d7eafd44932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="domestic waste"
                  className="buyImages"
                />
                <p>Domestic Waste</p>
              </div>
              <ModalComponent
                open={domWasteModal}
                onClose={() => setdomWasteModal(false)}
                title="Domestic Waste"
                img1="https://miro.medium.com/v2/resize:fit:800/1*GjCvXLzpKcMtmXrWm1Ojtg.jpeg"
                img2="https://images.homequestionsanswered.com/garbage-on-street.jpg"
                content="Transform your domestic waste into an opportunity for a cleaner environment! Our innovative solution ensures convenient waste disposal, minimizing your ecological footprint. With our user-friendly system, sorting and managing waste becomes a breeze, paving the way for a greener tomorrow. Say goodbye to clutter and hello to sustainable living!"
              />
              <div onClick={() => settextWasteModal(true)}>
                <img
                  src="https://images.unsplash.com/photo-1606901302392-ca613ab6abb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFRleHRpbGUlMjBXYXN0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="textile waste"
                  className="buyImages"
                />
                <p>Textile Waste</p>
              </div>
              <ModalComponent
                open={textWasteModal}
                onClose={() => settextWasteModal(false)}
                title="Textile Waste"
                img1="https://pirg.org/california/wp-content/uploads/2021/03/waste_is_out_of_fashion_shutterstock.jpg"
                img2="https://img3.exportersindia.com/product_images/bc-full/2021/11/9479958/textile-waste-1635935774-6064746.jpeg"
                content="Discover the beauty of sustainable creativity with our collection of textile waste. Perfect for eco-conscious artists, crafters, and designers, our textile waste offers a palette of colors, textures, and materials to inspire your next upcycling project. From fabric scraps to remnants, each piece tells a story of resourcefulness and environmental responsibility. Join the movement to reduce waste and bring your artistic visions to life with our thoughtfully curated textile waste selection."
              />
              <div onClick={() => setorgWasteModal(true)}>
                <img
                  src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3JnYW5pYyUyMFdhc3RlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="organic waste"
                  className="buyImages"
                />
                <p>Organic Waste</p>
              </div>
              <ModalComponent
                open={orgWasteModal}
                onClose={() => setorgWasteModal(false)}
                title="Organic Waste"
                img1="https://img3.exportersindia.com/product_images/bc-full/2021/11/9479958/textile-waste-1635935774-6064746.jpeg"
                img2="https://www.ccacoalition.org/sites/default/files/resources//food-waste_1024x512.jpg"
                content="Transform your organic waste into valuable resources! Our innovative solution helps you responsibly dispose of kitchen scraps and yard trimmings while producing nutrient-rich compost for your garden. By harnessing the power of nature, you can reduce your carbon footprint and contribute to a greener planet. Say goodbye to traditional waste disposal methods and embrace a sustainable future with our organic waste solution."
              />
              <div onClick={() => setmedicalWasteModal(true)}>
                <img
                  src="https://media.istockphoto.com/id/1211033974/photo/safe-disposal-of-medical-sharps.jpg?s=612x612&w=0&k=20&c=OFh7RIMtVPDJV9fehQs3zuQ4MxIaKfNqKUtJqbhr2y4="
                  alt="medical waste"
                  className="buyImages"
                />
                <p>Medical Waste</p>
              </div>
              <ModalComponent
                open={medicalWasteModal}
                onClose={() => setmedicalWasteModal(false)}
                title="Medical Waste"
                img1="https://cdn.pixabay.com/photo/2014/04/26/21/45/syringes-332713_640.jpg"
                img2="https://www.thelancet.com/cms/attachment/58eb322c-c37c-4466-a71e-df0c1e232dba/fx1_lrg.jpg"
                content="Highly effective medical waste disposal solution for healthcare facilities. Our service ensures safe and compliant disposal of all medical waste types, adhering to rigorous industry standards. Protect your staff, patients, and the environment with our reliable and cost-effective waste management. Contact us to streamline your waste handling process today!"
              />
            </div>
          </div>
        </div>
        <div id="sellContainer">
          <div className="content">
            <h1>Sell With Us</h1>
            <div className="buySection">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1612965110667-4175024b0dcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  className="buyImages"
                />
                <p>E-waste</p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1605027538782-c1b60ffa6cef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kdXN0cmlhbCUyMHdhc3RlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="industrial waste"
                  className="buyImages"
                />
                <p>Industrial Waste</p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1562077981-4d7eafd44932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="domestic waste"
                  className="buyImages"
                />
                <p>Domestic Waste</p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1606901302392-ca613ab6abb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFRleHRpbGUlMjBXYXN0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="textile waste"
                  className="buyImages"
                />
                <p>Textile Waste</p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3JnYW5pYyUyMFdhc3RlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="organic waste"
                  className="buyImages"
                />
                <p>Organic Waste</p>
              </div>
              <div>
                <img
                  src="https://media.istockphoto.com/id/1211033974/photo/safe-disposal-of-medical-sharps.jpg?s=612x612&w=0&k=20&c=OFh7RIMtVPDJV9fehQs3zuQ4MxIaKfNqKUtJqbhr2y4="
                  alt="medical waste"
                  className="buyImages"
                />
                <p>Medical Waste</p>
              </div>
            </div>
          </div>
        </div>
        <div id="donate-container">
          <h1>We manage Wastage and Donation like...</h1>
          <div className="don-section">
            <div class="don-box">
              <img src={clothing} alt="img" />
              <h3>Clothes</h3>
              <a href="#contact" class="btn1">
                Donate Now
              </a>
            </div>
            <div class="don-box">
              <img src={sneakers} alt="img" />
              <h3>Footware</h3>
              <a href="#contact" class="btn1">
                Donate Now
              </a>
            </div>
            <div class="don-box">
              <img src={salary} alt="img" />
              <h3>Fund</h3>
              <a href="#contact" class="btn1">
                Donate Now
              </a>
            </div>
            <div class="don-box">
              <img src={gadgets} alt="img" />
              <h3>Gadgets</h3>
              <a href="#contact" class="btn1">
                Donate Now
              </a>
            </div>
            <div class="don-box">
              <img src={book} alt="img" />
              <h3>Stationary</h3>
              <a href="#contact" class="btn1">
                Donate Now
              </a>
            </div>
            <div class="don-box">
              <img src={shoppingbag} alt="img" />
              <h3>Food</h3>
              <a href="#contact" class="btn1">
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footbar">
        <h1>
          WasteSwap
          <MdRecycling color="green" />
        </h1>
        <p>&copy; 2023 WasteSwap. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
