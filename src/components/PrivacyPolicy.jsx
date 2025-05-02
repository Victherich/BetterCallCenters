import React from "react";
import styled from "styled-components";

// Styled Components
const PrivacyContainer = styled.div`
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
const PrivacyPolicy = () => {
  return (
    <PrivacyContainer>
      <Title>Privacy Policy</Title>
      <Paragraph><strong>Effective Date:</strong> January 29, 2025</Paragraph>
      <Paragraph><strong>Contact Email:</strong> <EmailLink href="mailto:sales@bettercallcenters.com">sales@bettercallcenters.com</EmailLink></Paragraph>

      <Subtitle>1. Introduction</Subtitle>
      <Paragraph>Better Call Centers (“Company,” “we,” “our,” “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data.</Paragraph>

      <Subtitle>2. Information We Collect</Subtitle>
      <Paragraph>We collect the following types of information:</Paragraph>

      <Paragraph><strong>A. Personal Information:</strong></Paragraph>
      <List>
        <ListItem>Name, phone number, email address, and business details when you sign up.</ListItem>
        <ListItem>Billing information (processed securely via third-party payment providers).</ListItem>
      </List>

      <Paragraph><strong>B. Non-Personal Information:</strong></Paragraph>
      <List>
        <ListItem>Website usage data, IP address, browser type, and cookies.</ListItem>
      </List>

      <Subtitle>3. How We Use Your Information</Subtitle>
      <List>
        <ListItem>Provide and manage our services.</ListItem>
        <ListItem>Process payments and invoices.</ListItem>
        <ListItem>Communicate with you regarding service updates, promotions, or support.</ListItem>
        <ListItem>Improve our website and services.</ListItem>
      </List>

      <Subtitle>4. Data Sharing & Third-Party Services</Subtitle>
      <List>
        <ListItem>We do not sell your personal data.</ListItem>
        <ListItem>We may share data with service providers for payment processing, analytics, or legal compliance.</ListItem>
      </List>

      <Subtitle>5. Cookies & Tracking Technologies</Subtitle>
      <Paragraph>We use cookies to enhance user experience and track website activity. You can disable cookies in your browser settings.</Paragraph>

      <Subtitle>6. Data Security</Subtitle>
      <Paragraph>We implement security measures to protect your data. However, we cannot guarantee absolute security due to inherent risks in internet data transmission.</Paragraph>

      <Subtitle>7. Your Rights</Subtitle>
      <List>
        <ListItem>Access, update, or delete your personal information.</ListItem>
        <ListItem>Opt out of marketing emails.</ListItem>
        <ListItem>Request data deletion (subject to legal retention requirements).</ListItem>
      </List>

      <Subtitle>8. Data Retention</Subtitle>
      <Paragraph>We retain personal data as long as necessary to provide services or comply with legal obligations.</Paragraph>

      <Subtitle>9. Third-Party Links</Subtitle>
      <Paragraph>Our website may contain links to third-party sites. We are not responsible for their privacy practices.</Paragraph>

      <Subtitle>10. Updates to Privacy Policy</Subtitle>
      <Paragraph>We may update this policy periodically. Continued use of our services after updates constitutes acceptance of the revised policy.</Paragraph>

      <Subtitle>11. Contact Information</Subtitle>
      <ContactInfo>
        <Paragraph>For any privacy-related inquiries, contact us at:</Paragraph>
        <Paragraph>📧 <EmailLink href="mailto:sales@bettercallcenters.com">sales@bettercallcenters.com</EmailLink></Paragraph>
      </ContactInfo>
    </PrivacyContainer>
  );
};

export default PrivacyPolicy;
