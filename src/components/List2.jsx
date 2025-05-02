import React from "react";
import styled from "styled-components";
import { FiPhoneCall, FiUserCheck, FiCalendar, FiUsers, FiStar, FiBriefcase, FiClock, FiSettings } from "react-icons/fi";

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: #F3F6F8;
`;

const Section = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;
`;

const Heading = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 15px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;
  color: #111;
`;

const IconWrapper = styled.span`
  color: #b81410;
  font-size: 20px;
  margin-right: 10px;
  padding: 15px;
  background-color: white;
  border-radius: 50%;
`;

// Data Arrays


const whyChooseUs = [
  { icon: <FiBriefcase />, text: "Versatile Expertise: We cater to various sectors, ensuring each call is handled with professionalism and industry-specific knowledge." },
  { icon: <FiClock />, text: "Round-the-Clock Support: Your customers are never alone. We offer 24/7 services, ensuring assistance is always available." },
  { icon: <FiSettings />, text: "Custom Solutions: Every business is distinct, and so are our solutions. Be it customer support, technical assistance, or lead generation, we customize our services to meet your specific goals." },
];

const List2 = () => {
  return (
    <Container>

      {/* Why Choose Us Section */}
      <Section>
        <Heading>Why Choose Better Call Centers?</Heading>
        <List>
          {whyChooseUs.map((item, index) => (
            <ListItem key={index}>
              <IconWrapper>{item.icon}</IconWrapper>
              {item.text}
            </ListItem>
          ))}
        </List>
      </Section>
    </Container>
  );
};

export default List2;
