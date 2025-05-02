
import React, { useRef } from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";
import logo from "../Images/texastrashcanlogo.jpeg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const TexasTrashCanFlyer1 = ({ variant = "clean" }) => {
  const qrLink = "https://texastrashcanvalet.com/sign-up-8981";
  const flyerRef = useRef(null); // Ref to capture the flyer element

  // Function to capture and download the flyer as an image
const downloadFlyer = () => {
  const flyer = flyerRef.current;

  html2canvas(flyer, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    // Calculate dimensions to fit A4
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Texas_Trash_Can_Flyer.pdf");
  });
};

  return (
    <FlyerWrapper ref={flyerRef} variant={variant}>
      <Logo src={logo} alt="Texas Trash Can Valet Logo" />
      <Headline>Never Miss Trash Day Again</Headline>
      <Subheadline>Texas Trash Can Valet — Reliable • Local • Effortless</Subheadline>

      <WhyMatters>
        <p>We roll your bins to the curb and back — no more hauling, no more forgetting.</p>
        <p>Perfect for busy households, elderly residents, and HOAs.</p>
      </WhyMatters>

      <Points>
        <li>✔ Weekly curbside valet service</li>
        <li>✔ Hassle-free & consistent</li>
        <li>✔ Locally owned & operated</li>
      </Points>

      <PricingPlans>
  <PlanCard>
    <h3>Standard</h3>
    <Price>$39/mo</Price>
    <ul>
      <li>1 Time weekly curbside service</li>
      <li>2 Trash cans</li>
      <li>1 week Free trial</li>
      <li>Bin Cleaning available at extra price per bin.</li>
      <li>Cancel anytime</li>
    </ul>
  </PlanCard>

  <PlanCard>
    <h3>Premium</h3>
    <Price>$49/mo</Price>
    <ul>
      <li>Up to 2 times weekly curbside service</li>
      <li>Up to 4 Trash cans</li>
      <li>1 week Free trial</li>
      <li>Quarterly free bin cleaning.</li>
      <li>Cancel anytime</li>
    </ul>
  </PlanCard>

 
</PricingPlans>

<PlanCard style={{width:"100%", marginTop:"20px",}}>
    <h3 style={{textAlign:"center"}}>Custom</h3>
  
    <p  style={{textAlign:"center", fontSize:"0.8rem"}}>
    Managing waste for multiple homes? We've got you covered! For neighborhoods or property managers signing up 10+ homes, we offer custom pricing tailored to your needs.
    <br/>Just contact Us.
    </p>
    
  </PlanCard>


      <QRCodeWrapper>
        <QRCode value={qrLink} size={128} />
        <ScanText>Scan to sign up in seconds with 1 week free Trial!</ScanText>
      </QRCodeWrapper>

      <CTA>
        Or visit: <a href={qrLink}>{qrLink}</a>
      </CTA>

      <Contact>
        📞 Call or text: <strong>+1 (915) 856-2134</strong>
      </Contact>

      <DownloadButton onClick={downloadFlyer}>Download Flyer</DownloadButton>
    </FlyerWrapper>
  );
};

export default TexasTrashCanFlyer1;

// ---------------- Styled Components ----------------

const FlyerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 700px;
  padding: 2.5rem;
  margin: 2rem auto;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  font-family: "Segoe UI", sans-serif;
  text-align: center;
  background: linear-gradient(135deg, #e0f7fa, #fce4ec);

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    opacity: 0.2;
    z-index: 0;
  }

  &::before {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, #81d4fa 0%, transparent 70%);
    top: -100px;
    left: -100px;
  }

  &::after {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, #f8bbd0 0%, transparent 70%);
    bottom: -150px;
    right: -150px;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 30px;
`;

const Headline = styled.h1`
  font-size: 2rem;
  color: black;
  margin-bottom: 0.3rem;
`;

const Subheadline = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  color: #111;
  margin-bottom: 1.2rem;
`;

const WhyMatters = styled.div`
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 10px;
  font-size: 0.95rem;
  color: #111;
  margin-bottom: 1.5rem;
`;

const Points = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #111;
`;

const PricingPlans = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const PlanCard = styled.div`
  background: #eef2f5;
  padding: 1rem;
  border-radius: 12px;
  width: 45%;
  text-align: left;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
    color: #003366;
  }

  ul {
    padding-left: 1.1rem;
    font-size: 0.8rem;
  }
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0077cc;
  margin: 0.3rem 0;
`;

const QRCodeWrapper = styled.div`
  margin: 2rem auto 0;
`;

const ScanText = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #111;
  font-weight: bold;
`;

const CTA = styled.div`
  margin-top: 1.5rem;
  font-size: 1rem;
  font-weight: 500;

  a {
    color: #0077cc;
    text-decoration: none;
  }
`;

const Contact = styled.div`
  margin-top: 1.2rem;
  font-size: 0.95rem;
  color: #111;
`;

const DownloadButton = styled.button`
  margin-top: 2rem;
 border:none;
  color: rgba(255,255,255,0.0);
  padding: 0.8rem 1.3rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position:absolute;
  bottom:0;
  right:0;
  background:none;
`;

