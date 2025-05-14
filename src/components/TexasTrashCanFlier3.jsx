// import React, { useRef } from "react";
// import styled from "styled-components";
// import QRCode from "react-qr-code";
// import logo from "../Images/texastrashcanlogo.jpeg";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import bg from '../Images/bg.png'

// const TexasTrashCanFlyer3 = () => {
//   const flyerRef = useRef(null);
//   const qrLink = "https://texastrashcanvalet.com/sign-up-8981";

//   const downloadFlyer = () => {
//     html2canvas(flyerRef.current, { scale: 2 }).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");
//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//       pdf.save("TexasTrashCanFlyer4.pdf");
//     });
//   };

//   return (
//     <Flyer ref={flyerRef}>
//       <HeroSection>
//         <Logo src={logo} />
//         <HeroText>
//           <h1>Reliable Trash Can Valet</h1>
//           <p>Never haul bins again — we do it for you. Weekly. On time. Every time.</p>
//         </HeroText>
//       </HeroSection>

//       <FeatureSection>
//         <Feature>
//           <Icon>🚀</Icon>
//           <strong>Quick & Effortless</strong>
//           <p>We roll your bins out and return them like clockwork.</p>
//         </Feature>
//         <Feature>
//           <Icon>🏡</Icon>
//           <strong>Perfect for HOAs & seniors</strong>
//           <p>Keep communities tidy and stress-free.</p>
//         </Feature>
//         <Feature>
//           <Icon>🛠️</Icon>
//           <strong>Flexible Plans</strong>
//           <p>Choose a plan that fits your schedule and bin count.</p>
//         </Feature>
//       </FeatureSection>

//       <PricingArea>
//         <PricingCard>
//           <h3 >Standard</h3>
//           <Price>$39/mo</Price>
//           <ul>
//             <li>1x/week bin valet</li>
//             <li>2 trash bins</li>
//             <li>1 week free trial</li>
//             <li>Cancel anytime</li>
//           </ul>
//         </PricingCard>
//         <PricingCard>
//           <h3>Premium</h3>
//           <Price>$49/mo</Price>
//           <ul>
//             <li>2x/week bin valet</li>
//             <li>Up to 4 trash bins</li>
//             <li>Free bin cleaning (quarterly)</li>
//             <li>1 week free trial</li>
//           </ul>
//         </PricingCard>
//       </PricingArea>

//       <CustomMsg>
//         🧩 Managing multiple homes? Ask about our <strong>custom HOA pricing</strong>.
//       </CustomMsg>

//       <QRBlock>
//         <QRCode value={qrLink} size={120} />
//         <p>📲 Scan to sign up in seconds. 1 week free!</p>
//       </QRBlock>

//       <ContactArea>
//         📞 <strong>+1 (915) 856-2134</strong> | <a href={qrLink}>{qrLink}</a>
//       </ContactArea>

//       <DownloadBtn onClick={downloadFlyer}>Download Flyer</DownloadBtn>
//     </Flyer>
//   );
// };

// export default TexasTrashCanFlyer3;

// // ---------------- Styled Components ----------------

// const Flyer = styled.div`
//   max-width: 760px;
//   margin: 2rem auto;
//   padding: 2rem;
// //   background: linear-gradient(145deg, #0f172a, #1e293b);
//   box-shadow: 0 12px 30px rgba(0,0,0,0.4);
//   color: #ffffff;
//   font-family: 'Segoe UI', sans-serif;
//   background-image:url(${bg});

// `;

// const HeroSection = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   margin-bottom: 2rem;
//   border-bottom: 1px solid rgba(255,255,255,0.1);
//   padding-bottom: 1rem;
// `;

// const Logo = styled.img`
//   width: 90px;
//   border-radius: 12px;
// `;

// const HeroText = styled.div`
//   h1 {
//     font-size: 1.8rem;
//     color: #0ef;
//     margin: 0;
//   }

//   p {
//     color: #cbd5e1;
//     font-size: 1rem;
//     margin-top: 0.3rem;
//   }
// `;

// const FeatureSection = styled.div`
//   display: flex;
//   justify-content: space-around;
//   margin: 2rem 0;
// `;

// const Feature = styled.div`
//   flex: 1;
//   padding: 1rem;
//   background: rgba(255,255,255,0.05);
//   border-radius: 10px;
//   margin: 0 0.5rem;

//   strong {
//     display: block;
//     margin-top: 0.5rem;
//     color: #86efac;
//     font-size: 1rem;
//   }

//   p {
//     font-size: 0.85rem;
//     color: #cbd5e1;
//     margin-top: 0.3rem;
//   }
// `;

// const Icon = styled.div`
//   font-size: 1.5rem;
// `;

// const PricingArea = styled.div`
//   display: flex;
//   gap: 2rem;
//   justify-content: center;
//   margin-bottom: 2rem;
// `;

// const PricingCard = styled.div`
//   background: rgba(255,255,255,0.05);
//   padding: 1.5rem;
//   border-radius: 10px;
//   width: 45%;
//   text-align: left;

//   h3 {
//     color: #7dd3fc;
//     font-size: 1.2rem;
//   }

//   ul {
//     font-size: 0.85rem;
//     margin-top: 0.5rem;
//     color: #e0f2fe;
//     padding-left: 1rem;
//   }
// `;

// const Price = styled.div`
//   font-size: 1.4rem;
//   font-weight: bold;
//   color: #0ef;
//   margin: 0.4rem 0;
// `;

// const CustomMsg = styled.div`
//   text-align: center;
//   margin-bottom: 2rem;
//   font-size: 0.9rem;
//   color: #bef264;
// `;

// const QRBlock = styled.div`
//   text-align: center;
//   margin-bottom: 2rem;

//   p {
//     margin-top: 0.5rem;
//     color: #fef9c3;
//   }
// `;

// const ContactArea = styled.div`
//   text-align: center;
//   font-size: 0.9rem;
//   color: #bae6fd;

//   a {
//     color: #7dd3fc;
//     text-decoration: underline;
//   }
// `;

// const DownloadBtn = styled.button`
//   display: block;
//   margin: 2rem auto 0;
//   background:rgba(255,255,255,0.0);
//   color: rgba(255,255,255,0.0);
//   font-weight: bold;
//   padding: 0.8rem 1.5rem;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;


// `;

import React from 'react';
import styled from 'styled-components';
import texastrashcanlogo from '../Images/texastrashcanlogo.jpeg'
import QRCode from "react-qr-code";
import canthrow from '../Images/canthrow2.png'


const Page = styled.div`
  background: #F8F0DD;
  font-family: 'Segoe UI', sans-serif;
  padding: 40px 20px;
  color: #1e1e1e;
  width:768px;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const TopImage = styled.img`
  width: 180px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  color: #1e1e1e;
`;

const SubTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: #042D43;
  color:#000050;

  margin-top:10px;
  font-weight:900;
`;

const Description = styled.p`
  font-size: 1.3rem;
  max-width: 600px;
  margin: 15px auto;
  color: #042D43;
font-weight:bold;

`;

const Plans = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;
  flex-wrap: wrap;
`;

const PlanCard = styled.div`
  background: ${props => props.highlight ? '#ffe34e' : '#1e3a8a'};
  color: ${props => props.highlight ? '#1e1e1e' : 'white'};
  padding: 15px;
  width: 220px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  font-weight:bold;

  h3 {
    margin-bottom: 10px;
    font-size: 1.4rem;
  }

  h4 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  ul {
    padding-left: 18px;
    // line-height: 1.6;
    font-size: 1.2rem;
  }

  ul li::marker {
    color: ${props => props.highlight ? '#000' : '#fff'};
  }
`;

const Promo = styled.div`
  background: #fef3c7;
  padding: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 30px;
  border-radius: 8px;
  color:#042D43;
`;

const Footer = styled.footer`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;

  img {
    width: 100px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 1.2rem;
    font-weight:500;

  }

  a {
    color: #1e3a8a;
    text-decoration: none;
  }
`;


const QRCodeWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const QRLogoWrapper = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 60px;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  padding: 4px;
`;


const FreeTrialTag = styled.div`
  position: absolute;
  top: -50px;
  right: 0px;
  background: #ffcc00;
  color: #000;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 4px 6px;
  border-radius: 5px;
`;

export default function TexasTrashCanFlier3() {
  return (
    <Page>
      <Hero>
{/* <img src={canthrow} alt='logo' style={{width:"300px",height:"300px",}}/> */}
        <img src={texastrashcanlogo} alt='logo' style={{width:"300px",height:"300px",}}/>
       
        <SubTitle>WE HANDLE THE DIRTY WORK—YOU RELAX INSIDE!</SubTitle>
        <Description>
          Rain or shine, we take your bins to the curb and bring them back so you don’t have to lift a finger.
        </Description>
      </Hero>

      <Plans>
        <PlanCard>
          <h3>Starter Plan</h3>
          <h4>$39</h4>
          <ul>
            <li>Weekly pickup support</li>
            <li>Curb placement & return</li>
            <li>Text reminders</li>
          </ul>
        </PlanCard>

        <PlanCard highlight>
          <h3>Premium Plan</h3>
          <h4>$54</h4>
          <ul>
            <li>Everything in Basic</li>
            <li>Bi-weekly cleaning</li>
            <li>Priority support</li>
          </ul>
        </PlanCard>

        <PlanCard>
          <h3>Business Plan</h3>
          <h4>$65</h4>
          <ul>
            <li>Everything in Premium</li>
            <li>On-demand extra pickups</li>
            <li>Free bin deodorizing</li>
          </ul>
        </PlanCard>
      </Plans>

      <Promo>First Week Free for New Customers!</Promo>

      <Footer>
     
      <QRCodeWrapper>
  <QRCode 
    value="https://texastrashcanvalet.com/sign-up-8981" 
    size={200} 
    bgColor="#F8F0DD" 
    fgColor="#000040" 
  />
  {/* <QRLogoWrapper src={texastrashcanlogo} alt="QR logo" /> */}
</QRCodeWrapper>

        <div className="info">
          <div><strong>🌐</strong> <a href="https://texastrashcanvalet.com/">https://texastrashcanvalet.com/</a></div>
          <div><strong>📞</strong> +1 810-819-3181</div>
          <div><strong>📧</strong> info@texastrashcanvalet.com</div>
        </div>
      </Footer>
    </Page>
  );
}

