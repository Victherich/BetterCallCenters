// import React from "react";
// import styled from "styled-components";
// import { FaLanguage, FaHeadset, FaPhoneVolume, FaEnvelopeOpenText, FaUsers } from "react-icons/fa"; 

// // Styled Components
// const Container = styled.section`
//   width: 100%;
//   padding: 50px;
//   text-align: center;
// `;

// const Title = styled.h2`
//   font-size: 32px;
//   margin-bottom: 40px;
//   color: #333;
// `;

// const FeaturesWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 30px;
//   width: 100%;

//   @media (max-width: 900px) {
//     flex-direction: column;
//     gap: 20px;
//   }
// `;

// const FeatureBox = styled.div`
//   flex: 1;
//   padding: 20px;
//   text-align: center;
//   position: relative;

//   &:not(:last-child)::after {
//     content: "";
//     position: absolute;
//     top: 0;
//     right: -15px;
//     height: 100%;
//     width: 2px;
//     background-color: #ddd;

//     @media (max-width: 900px) {
//       width: 100%;
//       height: 2px;
//       top: auto;
//       bottom: -10px;
//       right: auto;
//     }
//   }
// `;

// const FeatureIcon = styled.div`
//   font-size: 40px;
//   color: #b81410;
//   margin-bottom: 10px;
// `;

// const FeatureTitle = styled.h3`
//   font-size: 20px;
//   margin-bottom: 10px;
//   color: #b81410;
// `;

// const FeatureText = styled.p`
//   font-size: 16px;
//   color: #555;
// `;

// const PremiereServices = () => {
//   return (
//     <Container>
//       <Title>Our Call Center Services</Title>
//       <FeaturesWrapper>
//         <FeatureBox>
//           <FeatureIcon><FaLanguage /></FeatureIcon>
//           <FeatureTitle>Bilingual Answering</FeatureTitle>
//           <FeatureText>Expand your reach with our multilingual support, catering to a diverse customer base.</FeatureText>
//         </FeatureBox>
//         <FeatureBox>
//           <FeatureIcon><FaHeadset /></FeatureIcon>
//           <FeatureTitle>Customer Service Excellence</FeatureTitle>
//           <FeatureText>At the core of our offerings is a dedication to outstanding customer service, tailored to embody the ethos of your business.</FeatureText>
//         </FeatureBox>
//         <FeatureBox>
//           <FeatureIcon><FaPhoneVolume /></FeatureIcon>
//           <FeatureTitle>Responsive Call Handling</FeatureTitle>
//           <FeatureText>Better Call Centers ensures every call is met with a friendly voice, any time of day, with the freedom of unlimited talk time.</FeatureText>
//         </FeatureBox>
//         <FeatureBox>
//           <FeatureIcon><FaEnvelopeOpenText /></FeatureIcon>
//           <FeatureTitle>Accurate Message Taking</FeatureTitle>
//           <FeatureText>Our team takes detailed messages and promptly sends them to you via email or voicemail, ensuring no information is missed.</FeatureText>
//         </FeatureBox>
//         <FeatureBox>
//           <FeatureIcon><FaUsers /></FeatureIcon>
//           <FeatureTitle>Multi-Conferencing</FeatureTitle>
//           <FeatureText>Initiate conference calls effortlessly with our team, allowing collaboration with numerous participants in one go.</FeatureText>
//         </FeatureBox>
//       </FeaturesWrapper>
//     </Container>
//   );
// };

// export default PremiereServices;



import React from "react";
import styled from "styled-components";
import { 
  FaLanguage, FaHeadset, FaPhoneVolume, FaEnvelopeOpenText, FaUsers, 
  FaMusic, FaPhoneSquareAlt, FaSignal, FaMobileAlt, FaClock 
} from "react-icons/fa"; 
// import bg from '../Images/3306.jpg'
import bg from '../Images/3679.jpg'

// Styled Components
const Container = styled.section`
  width: 100%;
  padding: 50px;
  text-align: center;
  background-image:url(${bg});
  background-size:cover;
  background-position:bottom;
  position:relative;

&::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.7);
    }

`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  color: white;
   position:relative;
`;

const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
   position:relative;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const FeatureBox = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
  position: relative;
  

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 0;
    right: -15px;
    height: 100%;
    width: 2px;
    background-color: #ddd;

    @media (max-width: 900px) {
      width: 100%;
      height: 2px;
      top: auto;
      bottom: -10px;
    
    }
  }
`;

const FeatureIcon = styled.div`
  font-size: 40px;
  color: #b81410;
  margin-bottom: 10px;
`;

const FeatureTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  color: white;
`;

const FeatureText = styled.p`
  font-size: 14px;
  color: white;
`;

const Separator = styled.hr`
  width: 80%;
  margin: 50px auto;
  border: 1px solid white;
   position:relative;
`;

const PremiereServices = () => {
  return (
    <Container>
      <Title>Our Call Center Services</Title>
      
      {/* First Set of Services */}
      <FeaturesWrapper>
        <FeatureBox>
          <FeatureIcon><FaLanguage /></FeatureIcon>
          <FeatureTitle>Bilingual Answering</FeatureTitle>
          <FeatureText>Expand your reach with our multilingual support, catering to a diverse customer base.</FeatureText>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon><FaHeadset /></FeatureIcon>
          <FeatureTitle>Customer Service Excellence</FeatureTitle>
          <FeatureText>At the core of our offerings is a dedication to outstanding customer service, tailored to embody the ethos of your business.</FeatureText>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon><FaPhoneVolume /></FeatureIcon>
          <FeatureTitle>Responsive Call Handling</FeatureTitle>
          <FeatureText>Better Call Centers ensures every call is met with a friendly voice, any time of day, with the freedom of unlimited talk time.</FeatureText>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon><FaEnvelopeOpenText /></FeatureIcon>
          <FeatureTitle>Accurate Message Taking</FeatureTitle>
          <FeatureText>Our team takes detailed messages and promptly sends them to you via email or voicemail, ensuring no information is missed.</FeatureText>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon><FaUsers /></FeatureIcon>
          <FeatureTitle>Multi-Conferencing</FeatureTitle>
          <FeatureText>Initiate conference calls effortlessly with our team, allowing collaboration with numerous participants in one go.</FeatureText>
        </FeatureBox>
      </FeaturesWrapper>

      {/* Horizontal Line */}
      <Separator />

      {/* Second Set of Services */}
      <FeaturesWrapper>
        <FeatureBox>
          <FeatureIcon><FaMusic /></FeatureIcon>
          <FeatureTitle>Custom Hold Music</FeatureTitle>
          <FeatureText>Expand your reach with our multilingual support, catering to a diverse customer base.</FeatureText>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon><FaPhoneSquareAlt /></FeatureIcon>
          <FeatureTitle>Outbound Calling</FeatureTitle>
          <FeatureText>We handle your return calls, both personal and business, maintaining your professional presence.</FeatureText>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon><FaSignal /></FeatureIcon>
          <FeatureTitle>Exceptional Call Clarity</FeatureTitle>
          <FeatureText>Better Call Centers employs T1 phone lines over traditional VoIP, guaranteeing the clearest voice quality.</FeatureText>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon><FaMobileAlt /></FeatureIcon>
          <FeatureTitle>Mobile-Friendly Service</FeatureTitle>
          <FeatureText>Never miss a lead, even on the go. Our services keep you connected worldwide.</FeatureText>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon><FaClock /></FeatureIcon>
          <FeatureTitle>Real-Time Status Updates</FeatureTitle>
          <FeatureText>Inform us about your availability, and we'll manage your calls with adaptive precision.</FeatureText>
        </FeatureBox>
      </FeaturesWrapper>
      
    </Container>
  );
};

export default PremiereServices;

