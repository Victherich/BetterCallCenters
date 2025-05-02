


import React, { useState } from "react";
import styled from "styled-components";
import { FaCog, FaHeadset, FaComments, FaBriefcase, FaTint, FaSolarPanel, FaHome, FaHospital } from "react-icons/fa";
import heroImage from "../Images/hero2img.webp"; // Ensure correct image path

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
  background-color: lightgray;
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
  { id: 1, text: "Customized Solutions", icon: <FaCog />, content: "Your business is unique, and our services reflect that. We work closely with you to customize our solutions, ensuring they align perfectly with your specific needs. Maximize efficiency, adaptability, and overall effectiveness with our tailored approach." },
  { id: 2, text: "Franchise Support", icon: <FaHeadset />, content: "Franchise businesses can rely on our specialized call answering services. We maintain consistency across your franchise network, ensuring brand cohesion and optimizing customer support for both corporate offices and individual franchise locations." },
  { id: 3, text: "Live Chat Support", icon: <FaComments />, content: "Engage with your online customers in real-time using our live chat support. Address inquiries promptly, provide instant assistance, and convert website visitors into leads, enhancing the online customer experience and boosting conversion rates." },
  { id: 4, text: "Industry Expertise", icon: <FaBriefcase />, content: "Benefit from our deep industry-specific knowledge and tailored solutions. We understand the unique challenges and opportunities in various sectors, allowing us to provide you with the most effective call answering services for your industry." },
  { id: 5, text: "Leads for Water Treatment", icon: <FaTint />, content: "Specialized in managing calls for water softener and treatment systems. Our team expertly handles inquiries, providing information and capturing high-intent leads. We ensure your water treatment solutions reach the right audience, with a focus on customer satisfaction and lead conversion." },
  { id: 6, text: "Solar Leads Calls", icon: <FaSolarPanel />, content: "Catering to the growing solar energy sector, our services include handling inquiries, scheduling installations, and generating leads. We provide expert support to ensure your solar solutions illuminate the market, capturing valuable leads and offering exceptional customer experiences." },
  { id: 7, text: "Real Estate & Roofing Support", icon: <FaHome />, content: "Utilize our extensive experience in real estate and construction, including roofing services. We manage inquiries, project discussions, and appointment scheduling, ensuring professionalism and industry-specific knowledge in every interaction." },
  { id: 8, text: "HealthCare & HealthTech Support", icon: <FaHospital />, content: "Merging healthcare with technology-focused customer service, we cater to both traditional healthcare providers and HealthTech companies. From patient inquiries to support for health apps and software, we provide empathetic, efficient, and informed support, propelling your services to the forefront of healthcare innovation." },
];

// React Component
const HeroSection2 = () => {
  const [selected, setSelected] = useState(menuItems[0]);

  return (
    <HeroContainer>
      <LeftSection>
        <p style={{fontWeight:"bold", color:"#b81410"}}>More Services We Offer</p>
        <Title>Transforming Customer Interactions with Excellence</Title>
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

      <RightSection>
        <HeroImage src={heroImage} alt="Customer service team" />
      </RightSection>
    </HeroContainer>
  );
};

export default HeroSection2;

