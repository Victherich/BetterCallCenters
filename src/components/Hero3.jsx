


import React, { useState } from "react";
import styled from "styled-components";
import { FaPhoneAlt, FaHeadset, FaUserTie, FaCalendarCheck, FaFilter, FaGlobe, FaMoon, FaStar } from "react-icons/fa";
import heroImage from "../Images/hero3img.webp"; // Ensure correct image path

// Styled Components
const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px;
  margin: auto;
  min-height: 80vh;
  width: 100%;
  gap: 100px;
  background-color:#f1f1f1;
  

  @media (max-width: 884px) {
    flex-direction: column;
    // text-align: center;
    gap: 50px;
    padding:20px;
  }

   @media (max-width: 428px) {
    padding:10px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-start;
//   background-color:red;

  @media (max-width: 884px) {
    width: 100%;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 15px;
  color: #333;

  @media (max-width: 884px) {
    
    text-align: center;
  }

  @media (max-width: 428px) {
    font-size:1.8rem;
    text-align: center;
  }

  @media (max-width: 320px) {
    font-size:1.8rem;
    text-align: center;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 884px) {
    // flex-direction: column;
    // align-items: center;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  margin-bottom:10px;
  border: none;
  font-size: 0.9rem;
  padding: 12px;
  cursor: pointer;
  text-align: left;
  width: 100%;
  color: #b81410;
  transition: 0.3s;

  &:hover {
    background: #b81410;
    color:white;
  }

  &.active {
    color: white;
    background-color: #b81410;
    border-radius: 5px;

  }
`;

const ContentBox = styled.div`
  width: 60%;
  padding: 20px;
  border-radius: 5px;
    font-size:0.9rem;
  color: #333;
  min-height: 150px;
  display: flex;

`;

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
`;

// Menu Data
const menuItems = [
    { id: 1, text: "24/7 Answering Service", icon: <FaPhoneAlt />, content: "Our highly-trained professionals handle each call with a personal touch, reflecting the high standards and professionalism your business is known for. Make a lasting impression on every caller and build trust with expert live answering." },
    { id: 2, text: "Live Answering Service", icon: <FaHeadset />, content: "Our highly-trained professionals handle each call with a personal touch, reflecting the high standards and professionalism your business is known for. Make a lasting impression on every caller and build trust with expert live answering." },
    { id: 3, text: "Virtual Receptionist", icon: <FaUserTie />, content: "Experience seamless call management with our virtual receptionists. Acting as the first point of contact for your callers, our virtual receptionists ensure a warm and efficient interaction, guiding callers to the right departments or providing valuable information to enhance their experience." },
    { id: 4, text: "Appointment Scheduling", icon: <FaCalendarCheck />, content: "From booking and rescheduling to reminders, our efficient appointment scheduling streamlines your operations, reduces scheduling errors, and leaves your clients delighted with their hassle-free experience." },
    { id: 5, text: "Lead Qualification", icon: <FaFilter />, content: "Take your sales efforts to the next level with our lead qualification service. Our skilled team identifies and nurtures potential leads, ensuring that you prioritize high-intent prospects, boost conversion rates, and increase revenue effectively." },
    { id: 6, text: "Bilingual Answering", icon: <FaGlobe />, content: "Our multilingual team caters to a diverse customer base, ensuring that language is never a barrier. Attract a wider audience, enhance inclusivity, and provide exceptional support in multiple languages." },
    { id: 7, text: "After-Hours Answering", icon: <FaMoon />, content: "Extend your business’s availability beyond standard working hours with our after-hours answering service. Don’t miss any opportunity – our team is here to ensure your business remains responsive and customers are taken care of around the clock." },
    { id: 8, text: "Customer Service Excellence", icon: <FaStar />, content: "At the heart of our offerings lies a commitment to delivering outstanding customer service. We tailor our approach to embody the ethos of your business, providing exceptional support that builds lasting customer relationships and a stellar reputation." },
  ];

// React Component
const HeroSection3 = () => {
  const [selected, setSelected] = useState(menuItems[0]);

  return (
    <HeroContainer>
        <RightSection>
        <HeroImage src={heroImage} alt="Customer service team" />
      </RightSection>
      <LeftSection>
      <p style={{fontWeight:"bold", color:"#b81410"}}>Tailored Solutions</p>
        <Title>Our Premier Services:</Title>
        <MenuContainer>
          {/* Left Side: Menu */}
          <Menu>
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                className={selected.id === item.id ? "active" : ""}
                onClick={() => setSelected(item)}
              >
                {item.icon} {item.text}
              </MenuItem>
            ))}
          </Menu>

          {/* Right Side: Dynamic Content */}
          <ContentBox>
            {selected.content}
          </ContentBox>
        </MenuContainer>
      </LeftSection>

      
    </HeroContainer>
  );
};

export default HeroSection3;

