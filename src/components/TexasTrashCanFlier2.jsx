



// import React, { useRef } from "react";
// import styled from "styled-components";
// import QRCode from "react-qr-code";
// import logo from "../Images/texastrashcanlogo.jpeg";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// const TexasTrashCanFlyer2 = () => {
//   const qrLink = "https://texastrashcanvalet.com/sign-up-8981";
//   const flyerRef = useRef(null);

//   const downloadFlyer = () => {
//     html2canvas(flyerRef.current, { scale: 2 }).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");
//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//       pdf.save("TexasTrashCanFlyer2.pdf");
//     });
//   };

//   return (
//     <FlyerContainer ref={flyerRef}>
//       <SidePanel>
//         <Logo src={logo} />
//         <QRCode value={qrLink} size={100} />
//         <SideText>Scan to sign up in seconds with 1 week free trial.</SideText>
//         <SideCTA href={qrLink}>https://texastrashcanvalet.com/sign-up-8981</SideCTA>
//         <Phone>📞 +1 (915) 856-2134</Phone>
//       </SidePanel>

//       <MainContent>
//         <MainHeadline>Trash Day? Never Miss It Again.</MainHeadline>
//         <SubText>Your bins, our responsibility — let us do the hauling.</SubText>

//         <Benefits>
//           <li>✔ Weekly reliable valet service</li>
//           <li>✔ Elderly- & HOA-friendly</li>
//           <li>✔ 100% locally owned</li>
//         </Benefits>

//   <Div>
//     <h5>-- Monthly Plans. Billed Monthly --</h5>
//   <Plans>
//   <Plan>
//     <h3>Starter - $49/mo</h3>
//     <span>
//       <p> Up to 2 cans</p>
//       <p> 1 collection per week</p>
//       <p> Success manager & support</p>
//     </span>
    
//   </Plan>

//   <Plan>
//     <h3>Premium - $65/mo</h3>
//     <span>
//       <p> Up to 4 cans</p>   
//       <p> Up to 2 collections per week</p>
//       <p>Success manager & support</p>
//     </span>
//   </Plan>

//   <Plan>
//     <h3>Business - $75/mo</h3>
//     <span>
//       <p> Up to 6 cans</p>
//       <p> Up to 2 collections per week</p>
//       <p> Success manager & support</p>
//     </span>

//   </Plan>

//   <Plan>
//     <h3>Enterprise - Custom</h3>
//     <span>
//       <p> For 10+ properties</p>
//       <p> Custom billing</p>
     
//       <p>Dedicated success manager</p>
//     </span>
//     <span style={{fontWeight:"bold"
//     }}>Contact Us!</span>
//   </Plan>
// </Plans>
//   </Div>    



// <Div>
//     <h5>-- Quaterly Plans. Billed Quarterly --</h5>
// <Plans>
    
//     <Plan>
//       <h3>Starter - $39/mo</h3>
//       <span>
//         <p>Up to 2 cans</p>
//         <p>1 collection per week</p>
 
//         <p>Success manager & support</p>
//       </span>
//       <span>* Billed quarterly</span>
//     </Plan>
  
//     <Plan>
//       <h3>Premium - $54/mo</h3>
//       <span>
//         <p>Up to 4 cans</p>
//         <p>Up to 2 collections per week</p>
//         <p>Success manager & support</p>
//       </span>
//       <span>* Billed quarterly</span>
//     </Plan>
  
//     <Plan>
//       <h3>Business - $65/mo</h3>
//       <span>
//         <p>Up to 6 cans</p>
//         <p>Up to 2 collections per week</p>
//         <p>Success manager & support</p>
//       </span>
//       <span>* Billed quarterly</span>
//     </Plan>
  
//     <Plan>
//       <h3>Enterprise - Custom</h3>
//       <span>
//         <p>For 10+ properties</p>
//         <p>Custom billing</p>
//         <p>Dedicated success manager</p>
//       </span>   
//       <span style={{fontWeight:"bold"}}>Contact Us!</span>
//     </Plan>
//   </Plans>
// </Div>





//         {/* <CustomNote>
//           🏘 Managing 10+ homes? We offer flexible pricing for neighborhoods & HOAs.
//         </CustomNote> */}

//         <Download onClick={downloadFlyer}>Download</Download>
//       </MainContent>
//     </FlyerContainer>
//   );
// };

// export default TexasTrashCanFlyer2;

// // ---------------- Styled Components ----------------

// const FlyerContainer = styled.div`
//   display: flex;
//   height: auto;
//   max-width: 900px;
//   margin: 2rem auto;
//   box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
//   font-family: "Segoe UI", sans-serif;
//   overflow: hidden; 
//   background: #ffffff;
// `;

// const SidePanel = styled.div`
//   background: #002f4b;
//   color: #fff;
//   width: 240px;
//   padding: 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
// `;

// const Logo = styled.img`
//   width: 80px;
//   border-radius: 20px;
//   margin-bottom: 1rem;
// `;

// const SideText = styled.div`
//   margin-top: 1rem;
//   font-size: 0.9rem;
//   text-align: center;
// `;

// const SideCTA = styled.a`
//   margin-top: 1.2rem;
//   font-size: 0.8rem;
//   color: #90ee90;
//   text-align: center;
//   text-decoration: underline;
// `;

// const Phone = styled.div`
//   font-size: 0.85rem;
//   margin-top: 1rem;
// `;

// const MainContent = styled.div`
//   flex: 1;
//   padding: 2rem 0.5rem;
//   position: relative;
//   background: linear-gradient(120deg, #e6ffe6, #f0fff0);
// `;

// const MainHeadline = styled.h1`
//   font-size: 1.8rem;
//   color: #003b3b;
//   margin-bottom: 0.5rem;
//   padding-left:20px;
// `;

// const SubText = styled.div`
//   font-size: 1rem;
//   color: #111;
//   margin-bottom: 1.5rem;
//   padding-left:20px;
// `;

// const Benefits = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin-bottom: 1.8rem;
//   font-size: 0.95rem;
//   padding-left:20px;

//   li {
//     margin-bottom: 0.5rem;
//   }
// `;


// const Div = styled.div`
//       display:flex;
//       flex-direction:column;
//       justify-content:center;
//       align-items:center;
//       gap:10px;
//       font-style:italic;  
//       color:#111;     
// `

// const Plans = styled.div`
//   display: flex;
//   gap: 10px;
//   margin-bottom: 1.2rem;
// `;

// const Plan = styled.div`
//   background: #fff;
//   padding: 5px;
//   border-left: 5px solid #66bb6a;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
//   border-radius: 8px;
//   width: 50%;
//   display:flex;
//   flex-direction:column;
//   justify-content:flex-start;
//   align-items:flex-start;

//   h3 {
//     font-size: 0.9rem;
//     margin-bottom: 0.5rem;
//     color: #004d40;
//   }

//   span {
     
//     font-size: 0.85rem;
//     color: #111;
//   }
// `;

// const CustomNote = styled.div`
//   font-size: 0.85rem;
//   margin-top: 1rem;
//   font-style: italic;
//   color: #111;
//   font-weight:bold;
//   padding-left:20px;
// `;

// const Download = styled.button`
//    margin-top: 2rem;
// border: none;
//   color: rgba(255,255,255,0.0);
//   padding: 0.8rem 1.3rem;
//   border-radius: 8px;
//   font-weight: 600;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   position:absolute;
//   bottom:0;
//   right:0;
//   background:none;

  

 
// `;



// import React, { useRef } from "react";
// import styled from "styled-components";
// import QRCode from "react-qr-code";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// // Import your images here
// import logo from "../Images/texastrashcanlogo.jpeg";
// import CurbServiceImg from "../Images/curb.png";
// import ElderlySupportImg from "../Images/eldersupport.png";
// import CleanBinsImg from "../Images/canwash2.png";
// import FastSupportImg from "../Images/support.png";

// const TexasTrashCanFlyer2 = () => {
//   const qrLink = "https://texastrashcanvalet.com/sign-up-8981";
//   const flyerRef = useRef(null);

//   const downloadFlyer = () => {
//     html2canvas(flyerRef.current, { scale: 2 }).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");
//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//       pdf.save("TexasTrashCanFlyer2.pdf");
//     });
//   };

//   return (
//     <FlyerContainer ref={flyerRef}>
//       <SidePanel>
//         <Logo src={logo} />
//         <QRCode value={qrLink} size={100} />
//         <SideText>Scan to sign up in seconds with a 1-week free trial.</SideText>
//         <SideCTA href={qrLink}>https://texastrashcanvalet.com/sign-up-8981</SideCTA>
//         <SideCTA>info@texastrashcanvalet.com</SideCTA>
//         <Phone>📞 +1 (915) 856-2134</Phone>
//       </SidePanel>

//       <MainContent>
//         <MainHeadline>Trash Day? Never Miss It Again.</MainHeadline>
//         <SubText>Your bins, our responsibility — let us do the hauling for you!</SubText>

//         <Services>
//           <ServiceCard>
//             <ServiceImage src={CurbServiceImg} alt="Curbside Trash Service" style={{height:"300px"}}/>
//             <ServiceTitle>Curb-to-Curb Service</ServiceTitle>
//             <ServiceText>We move your trash bins to the curb and return them — even when you’re away!</ServiceText>
//           </ServiceCard>

//           <ServiceCard>
//             <ServiceImage src={ElderlySupportImg} alt="Elderly Assistance" style={{height:"300px"}}/>
//             <ServiceTitle>Support for the Elderly</ServiceTitle>
//             <ServiceText>Helping seniors maintain independence with reliable curb service.</ServiceText>
//           </ServiceCard>

//           <ServiceCard>
//             <ServiceImage src={CleanBinsImg} alt="Can Cleaning Service" />
//             <ServiceTitle>Can Cleaning Available</ServiceTitle>
//             <ServiceText>Optional add-on for a fresh, odor-free trash can experience.</ServiceText>
//           </ServiceCard>

//           <ServiceCard>
//             <ServiceImage src={FastSupportImg} alt="Fast Support" />
//             <ServiceTitle>Fast Customer Support</ServiceTitle>
//             <ServiceText>Dedicated Success Manager and responsive team to support you anytime.</ServiceText>
//           </ServiceCard>
//         </Services>

//         {/* <Download onClick={downloadFlyer}>Download</Download> */}
//       </MainContent>
//     </FlyerContainer>
//   );
// };

// export default TexasTrashCanFlyer2;

// // -------------------- Styled Components --------------------

// const FlyerContainer = styled.div`
//   display: flex;
//   height: auto;
//   max-width: 1000px;
//   margin: 2rem auto;
//   box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
//   font-family: "Segoe UI", sans-serif;
//   overflow: hidden; 
//   background: #ffffff;
// `;

// const SidePanel = styled.div`
//   background: #002f4b;
//   color: #fff;
//   width: 250px;
//   padding: 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
// `;

// const Logo = styled.img`
//   width: 90px;
//   border-radius: 20px;
//   margin-bottom: 1rem;
// `;

// const SideText = styled.div`
//   margin-top: 1rem;
//   font-size: 0.9rem;
//   text-align: center;
// `;

// const SideCTA = styled.a`
//   margin-top: 1.2rem;
//   font-size: 0.9rem;
//   color: #90ee90;
//   text-align: center;
//   text-decoration: underline;
// `;

// const Phone = styled.div`
//   font-size: 0.85rem;
//   margin-top: 1rem;
// `;

// const MainContent = styled.div`
//   flex: 1;
//   padding: 2rem 1rem;
//   position: relative;
//   background: linear-gradient(120deg, #e6ffe6, #f0fff0);
// `;

// const MainHeadline = styled.h1`
//   font-size: 2rem;
//   color: #003b3b;
//   margin-bottom: 0.5rem;
//   padding-left: 20px;
// `;

// const SubText = styled.div`
//   font-size: 1rem;
//   color: #111;
//   margin-bottom: 1.5rem;
//   padding-left: 20px;
// `;

// const Services = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 20px;
//   padding: 20px;
// `;

// const ServiceCard = styled.div`
//   background: #ffffff;
//   border-radius: 10px;
//   // box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
//   overflow: hidden;
//   transition: transform 0.3s;
//   cursor: pointer;

//   &:hover {
//     // transform: translateY(-5px);
//   }
// `;

// const ServiceImage = styled.img`
//   width: 100%;
//   height: 300px;
//   // object-fit: cover;
// `;

// const ServiceTitle = styled.h3`
//   font-size: 1.1rem;
//   margin: 0.8rem;
//   color: #004d40;
// `;

// const ServiceText = styled.p`
//   font-size: 0.9rem;
//   margin: 0 0.8rem 1rem;
//   color: #333;
//   font-weight:bold;
// `;

// const Download = styled.button`
//   margin-top: 2rem;
//   border: none;
//   padding: 0.8rem 1.3rem;
//   background: #004d40;
//   color: white;
//   font-weight: bold;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: background 0.3s;
//   position: absolute;
//   bottom: 20px;
//   right: 20px;

//   &:hover {
//     background: #00695c;
//   }
// `;





import React from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";

// Images (replace with your imports)
import logo from "../Images/texastrashcanlogo.jpeg";
import CurbServiceImg from "../Images/curb.png";
import ElderlySupportImg from "../Images/eldersupport.png";
import CleanBinsImg from "../Images/canwash2.png";
import FastSupportImg from "../Images/support.png";

const TexasTrashCanFlyerRebuild = () => {
  return (
    <Wrapper>
      <SideBar>
        <Logo src={logo} />
        <QRCodeWrapper>
          <QRCode value="https://texastrashcanvalet.com/sign-up-8981" size={100} />
          <FreeTrialTag>1-Week Free Trial</FreeTrialTag>
        </QRCodeWrapper>
        <ContactInfo>
          <TextLine>📧 info@texastrashcanvalet.com</TextLine>
          <TextLine>📞 +1 (915) 856-2134</TextLine>
          <LinkLine href="https://texastrashcanvalet.com/sign-up-8981">Sign Up Now</LinkLine>
        </ContactInfo>
      </SideBar>

      <MainArea>
        <HeroSection>
          <h1>🗑️ Trash Day? Never Miss It Again.</h1>
          <p>Your bins, our responsibility — let us do the hauling for you!</p>
        </HeroSection>

        <ServiceGrid>
          <ServiceCard>
            <img src={CurbServiceImg} alt="Curb Service" />
            <h3>Curb-to-Curb Service</h3>
            <p>We move your trash bins to the curb and return them — even when you’re away!</p>
          </ServiceCard>

          <ServiceCard>
            <img src={ElderlySupportImg} alt="Elderly Support" />
            <h3>Support for the Elderly</h3>
            <p>Helping seniors maintain independence with reliable curb service.</p>
          </ServiceCard>

          <ServiceCard>
            <img src={CleanBinsImg} alt="Can Cleaning" />
            <h3>Can Cleaning Available</h3>
            <p>Optional add-on for a fresh, odor-free trash can experience.</p>
          </ServiceCard>

          <ServiceCard>
            <img src={FastSupportImg} alt="Fast Support" />
            <h3>Fast Customer Support</h3>
            <p>Dedicated Success Manager and responsive team to support you anytime.</p>
          </ServiceCard>
        </ServiceGrid>

        <BottomCTA>
          <strong>Let’s take the trash out of your schedule.</strong>
          <a href="https://texastrashcanvalet.com/sign-up-8981">Get Started Now →</a>
        </BottomCTA>
      </MainArea>
    </Wrapper>
  );
};

export default TexasTrashCanFlyerRebuild;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1100px;
  margin: 2rem auto;
  font-family: "Segoe UI", sans-serif;
  background: #fff;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
`;

const SideBar = styled.div`
  background: #004d40;
  color: #fff;
  width: 260px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 80px;
  border-radius: 12px;
  margin-bottom: 1.5rem;
`;

const QRCodeWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const FreeTrialTag = styled.div`
  position: absolute;
  top: -10px;
  right: -12px;
  background: #ffcc00;
  color: #000;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 4px 6px;
  border-radius: 5px;
`;

const ContactInfo = styled.div`
  margin-top: auto;
  text-align: center;
  font-size: 0.9rem;
`;

const TextLine = styled.p`
  margin: 0.3rem 0;
`;

const LinkLine = styled.a`
  color: #90ee90;
  text-decoration: underline;
  font-weight: bold;
  margin-top: 1rem;
  display: block;
`;

const MainArea = styled.div`
  flex: 1;
  background: linear-gradient(140deg, #e8fff4, #f3fcf7);
  padding: 2rem;
`;

const HeroSection = styled.div`
  text-align: left;
  padding: 0 1rem;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    color: #003b3b;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #333;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  padding-bottom: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    font-size: 1.2rem;
    color: #004d40;
    margin: 0.8rem 1rem 0.4rem;
  }

  p {
    font-size: 0.9rem;
    color: #444;
    padding: 0 1rem;
  }
`;

const BottomCTA = styled.div`
  background: linear-gradient(to right, #00c853, #b2ff59);
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 2rem;
  text-align: center;
  color: #004d40;

  strong {
    display: block;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  a {
    color: #004d40;
    font-weight: bold;
    text-decoration: underline;
    font-size: 1rem;
  }
`;

