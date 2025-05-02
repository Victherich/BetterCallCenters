import React, { useRef } from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";
import logo from "../Images/texastrashcanlogo.jpeg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import bg from '../Images/bg.png'

const TexasTrashCanFlyer3 = () => {
  const flyerRef = useRef(null);
  const qrLink = "https://texastrashcanvalet.com/sign-up-8981";

  const downloadFlyer = () => {
    html2canvas(flyerRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("TexasTrashCanFlyer4.pdf");
    });
  };

  return (
    <Flyer ref={flyerRef}>
      <HeroSection>
        <Logo src={logo} />
        <HeroText>
          <h1>Reliable Trash Can Valet</h1>
          <p>Never haul bins again — we do it for you. Weekly. On time. Every time.</p>
        </HeroText>
      </HeroSection>

      <FeatureSection>
        <Feature>
          <Icon>🚀</Icon>
          <strong>Quick & Effortless</strong>
          <p>We roll your bins out and return them like clockwork.</p>
        </Feature>
        <Feature>
          <Icon>🏡</Icon>
          <strong>Perfect for HOAs & seniors</strong>
          <p>Keep communities tidy and stress-free.</p>
        </Feature>
        <Feature>
          <Icon>🛠️</Icon>
          <strong>Flexible Plans</strong>
          <p>Choose a plan that fits your schedule and bin count.</p>
        </Feature>
      </FeatureSection>

      <PricingArea>
        <PricingCard>
          <h3 >Standard</h3>
          <Price>$39/mo</Price>
          <ul>
            <li>1x/week bin valet</li>
            <li>2 trash bins</li>
            <li>1 week free trial</li>
            <li>Cancel anytime</li>
          </ul>
        </PricingCard>
        <PricingCard>
          <h3>Premium</h3>
          <Price>$49/mo</Price>
          <ul>
            <li>2x/week bin valet</li>
            <li>Up to 4 trash bins</li>
            <li>Free bin cleaning (quarterly)</li>
            <li>1 week free trial</li>
          </ul>
        </PricingCard>
      </PricingArea>

      <CustomMsg>
        🧩 Managing multiple homes? Ask about our <strong>custom HOA pricing</strong>.
      </CustomMsg>

      <QRBlock>
        <QRCode value={qrLink} size={120} />
        <p>📲 Scan to sign up in seconds. 1 week free!</p>
      </QRBlock>

      <ContactArea>
        📞 <strong>+1 (915) 856-2134</strong> | <a href={qrLink}>{qrLink}</a>
      </ContactArea>

      <DownloadBtn onClick={downloadFlyer}>Download Flyer</DownloadBtn>
    </Flyer>
  );
};

export default TexasTrashCanFlyer3;

// ---------------- Styled Components ----------------

const Flyer = styled.div`
  max-width: 760px;
  margin: 2rem auto;
  padding: 2rem;
//   background: linear-gradient(145deg, #0f172a, #1e293b);
  box-shadow: 0 12px 30px rgba(0,0,0,0.4);
  color: #ffffff;
  font-family: 'Segoe UI', sans-serif;
  background-image:url(${bg});

`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 1rem;
`;

const Logo = styled.img`
  width: 90px;
  border-radius: 12px;
`;

const HeroText = styled.div`
  h1 {
    font-size: 1.8rem;
    color: #0ef;
    margin: 0;
  }

  p {
    color: #cbd5e1;
    font-size: 1rem;
    margin-top: 0.3rem;
  }
`;

const FeatureSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
`;

const Feature = styled.div`
  flex: 1;
  padding: 1rem;
  background: rgba(255,255,255,0.05);
  border-radius: 10px;
  margin: 0 0.5rem;

  strong {
    display: block;
    margin-top: 0.5rem;
    color: #86efac;
    font-size: 1rem;
  }

  p {
    font-size: 0.85rem;
    color: #cbd5e1;
    margin-top: 0.3rem;
  }
`;

const Icon = styled.div`
  font-size: 1.5rem;
`;

const PricingArea = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const PricingCard = styled.div`
  background: rgba(255,255,255,0.05);
  padding: 1.5rem;
  border-radius: 10px;
  width: 45%;
  text-align: left;

  h3 {
    color: #7dd3fc;
    font-size: 1.2rem;
  }

  ul {
    font-size: 0.85rem;
    margin-top: 0.5rem;
    color: #e0f2fe;
    padding-left: 1rem;
  }
`;

const Price = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: #0ef;
  margin: 0.4rem 0;
`;

const CustomMsg = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #bef264;
`;

const QRBlock = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  p {
    margin-top: 0.5rem;
    color: #fef9c3;
  }
`;

const ContactArea = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: #bae6fd;

  a {
    color: #7dd3fc;
    text-decoration: underline;
  }
`;

const DownloadBtn = styled.button`
  display: block;
  margin: 2rem auto 0;
  background:rgba(255,255,255,0.0);
  color: rgba(255,255,255,0.0);
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;


`;
