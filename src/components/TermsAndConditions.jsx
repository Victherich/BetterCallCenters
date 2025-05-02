import React from "react";
import styled from "styled-components";

// Styled Components
const TermsContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
`;

const Title = styled.h1`
  text-align: center;
  color: #444;
`;

const Subtitle = styled.h2`
  margin-top: 20px;
  color: #444;
`;

const Paragraph = styled.p`
  margin: 10px 0;
`;

const List = styled.ul`
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-left: 5px solid #007bff;
`;

const EmailLink = styled.a`
  color: #007bff;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// React Component
const TermsAndConditions = () => {
  return (
    <TermsContainer>
      <Title>Terms and Conditions</Title>
      <Paragraph><strong>Effective Date:</strong> January 29, 2025</Paragraph>
      <Paragraph><strong>Contact Email:</strong> <EmailLink href="mailto:sales@bettercallcenters.com">sales@bettercallcenters.com</EmailLink></Paragraph>

      <Subtitle>1. Introduction</Subtitle>
      <Paragraph>
      Welcome to Better Call Centers (“Company,” “we,” “our,” “us”). By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions (“Terms”). If you do not agree with these Terms, please do not use our services.</Paragraph>

      <Subtitle>2. Services</Subtitle>
      <Paragraph>Better Call Centers provides professional answering services, including but not limited to:</Paragraph>
      <List>
        <ListItem>Order-taking for restaurants</ListItem>
        <ListItem>Call handling and customer service</ListItem>
        <ListItem>Business phone management solutions</ListItem>
      </List>
      <Paragraph>We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.</Paragraph>

      <Subtitle>3. Account Registration & Responsibilities</Subtitle>
      <List>
        <ListItem>You may be required to register for an account to access some of our services.</ListItem>
        <ListItem>You agree to provide accurate and complete information and to keep your login credentials confidential.</ListItem>
        <ListItem>You are responsible for all activity under your account.</ListItem>
      </List>

      <Subtitle>4. Payments & Billing</Subtitle>
      <List>
        <ListItem>Our services are billed based on the agreed pricing model.</ListItem>
        <ListItem>Payment must be made as per the terms outlined in the service agreement.</ListItem>
        <ListItem>Failure to make payments may result in service suspension or termination.</ListItem>
      </List>

      <Subtitle>5. Service Limitations & Availability</Subtitle>
      <List>
        <ListItem>We strive to provide uninterrupted services but do not guarantee 100% uptime.</ListItem>
        <ListItem>We are not responsible for disruptions due to unforeseen circumstances, such as power outages, system failures, or third-party interruptions.</ListItem>
      </List>

      <Subtitle>6. Cancellation & Refund Policy</Subtitle>
      <List>
        <ListItem>Clients may cancel their services with prior written notice as per the service agreement.</ListItem>
        <ListItem>Refunds (if applicable) will be processed based on the terms agreed upon in the contract.</ListItem>
      </List>

      <Subtitle>7. User Conduct</Subtitle>
      <List>
      You agree not to:
        <ListItem>Use our services for any illegal activities.</ListItem>
        <ListItem>Interfere with the operation of our platform.</ListItem>
        <ListItem>Submit false or misleading information.</ListItem>
      </List>

      <Subtitle>8. Intellectual Property</Subtitle>
      <Paragraph>All content, trademarks, and intellectual property on our website belong to Better Call Centers. Unauthorized use, reproduction, or distribution is prohibited.

      </Paragraph>

      <Subtitle>9. Limitation of Liability</Subtitle>
      <Paragraph>
      Better Call Centers is not liable for any indirect, incidental, special, or consequential damages resulting from the use of our services.</Paragraph>

      <Subtitle>10. Governing Law</Subtitle>
      <Paragraph>These Terms are governed by and interpreted according to the laws of the State of Texas, USA. Any disputes shall be resolved in the courts of El Paso, Texas.</Paragraph>

      <Subtitle>11. Changes to Terms</Subtitle>
      <Paragraph>We may update these Terms at any time. Continued use of our services constitutes acceptance of the revised Terms.</Paragraph>

      <Subtitle>12. Contact Information</Subtitle>
      <ContactInfo>
        <Paragraph>For any questions regarding these Terms, contact us at:</Paragraph>
        <Paragraph>📧 <EmailLink href="mailto:sales@bettercallcenters.com">sales@bettercallcenters.com</EmailLink></Paragraph>
      </ContactInfo>
    </TermsContainer>
  );
};

export default TermsAndConditions;
