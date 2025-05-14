
import React, { useState } from 'react';
import styled from 'styled-components';
import PricingTable from './PricingTable'
import PricingTable2 from './PricingTable2'

// Styled Components
const Section = styled.section`
//   padding: 2rem;
padding-top:50px;
padding-bottom:50px;
  background-color: #f8f9fa;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color:#000080;    
`;

const SubText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color:#000080; 
`;

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SwitchLabel = styled.label`
  margin: 0 0.5rem;
  font-weight: bold;
`;

const ToggleSwitch = styled.input`
  position: relative;
  width: 60px;
  height: 30px;
  -webkit-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 50px;
  transition: 0.4s;
  cursor: pointer;
  
  &:checked {
    background: #4cd137;
  }

  &::before {
    content: '';
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    background: white;
    transition: 0.4s;
  }

  &:checked::before {
    transform: translateX(30px);
  }
`;

// Main Component
const PricingSection = () => {
  const [isQuarterly, setIsQuarterly] = useState(true);

  return (
    <Section>
      <Heading>Pricing Plan</Heading>
      <SubText>
        Choose a plan that empowers your growth! Whether you're just getting started or scaling fast, we have the perfect solution waiting for you.
      </SubText>

      <SwitchWrapper>
        <SwitchLabel>Monthly</SwitchLabel>
        <ToggleSwitch
          type="checkbox"
          checked={isQuarterly}
          onChange={() => setIsQuarterly(!isQuarterly)}
        />
        <SwitchLabel>Quarterly Discount
        </SwitchLabel>
      </SwitchWrapper>

      {isQuarterly ? <PricingTable /> : <PricingTable2 />}
    </Section>
  );
};

export default PricingSection;
