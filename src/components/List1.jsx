import React from "react";
import styled from "styled-components";
import { FiPhoneCall, FiUserCheck, FiCalendar, FiUsers, FiStar } from "react-icons/fi";

// Styled Components
const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
  width:100%;

  padding: 5px;


  background-color: #F3F6F8;
`;

const Heading = styled.h1`
  text-align: left;
  color: #2c3e50;
  margin-bottom: 20px;
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
  padding:15px;
  background-color:white;
  border-radius:50%;
`;

// Data
const services = [
  { icon: <FiPhoneCall />, text: "24/7 Answering Service: Uninterrupted, always-on support, keeping your business connected to your clients at all times." },
  { icon: <FiUserCheck />, text: "Live Answering Service: Personalized and professional handling of each call, reflecting the high standards of your brand." },
  { icon: <FiUsers />, text: "Virtual Receptionist: Seamlessly manage your call traffic with our expert virtual receptionists, providing a warm and efficient first point of contact." },
  { icon: <FiCalendar />, text: "Appointment Scheduling: Our team schedules appointments efficiently using any web-based calendar, keeping you organized and punctual." },
  { icon: <FiStar />, text: "Lead Qualification: Skillfully identifying and nurturing potential leads to effectively boost your sales efforts." },
];

const List1 = () => {
  return (
    <Container>
      <Heading>Our Premier Services:</Heading>
      <List>
        {services.map((service, index) => (
          <ListItem key={index}>
            <IconWrapper>{service.icon}</IconWrapper>
            {service.text}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default List1;
