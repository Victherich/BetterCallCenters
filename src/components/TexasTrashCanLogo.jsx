// import React from "react";
// import styled, { keyframes } from "styled-components";
// import { FaTrashAlt } from "react-icons/fa";
// import { SiReact } from "react-icons/si";
// import { GiTexas } from "react-icons/gi";

// // Animation for the spinning React icon
// const spin = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// // Styled components
// const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content:center;
//   padding: 10px;
//   position:relative;
//   flex-direction:column;
//   width:800px;
//   height:650px;
//   background:lightgray;
//   border-radius:50%;
//   margin:0 auto;
//   margin-top:50px;
// `;

// const Circle = styled.div`
//     display: flex;
//   align-items: center;
//   justify-content:center;
//   padding: 10px;
//   position:relative;
//   flex-direction:column;
// `

// const ReactIcon = styled(SiReact)`
//   font-size: 60px;
//   color: #00d8ff;
//   animation: ${spin} 6s linear infinite;
// `;

// const TrashIcon = styled(FaTrashAlt)`
//   font-size: 40px;
//   color: #444;
// `;

// const LogoText = styled.h1`
//   font-size: 35px;
//   font-weight: bold;
//   color: #222;
//   transform:translateY(-65%);
// `;

// const Icon = styled.div`
   
// `

// const Icon2 = styled.div`
//  position:absolute;
//  left:45%;

// `

// const LogoTextContainer = styled.svg`
//   width: 250px;
//   height: 150px;
//   position: absolute;
//   bottom: 0;
// `;



// const TexasTrashCanLogo = () => {
//   return (
//     <LogoContainer>
//       {/* <ReactIcon /> */}
//       <Icon>
//       <GiTexas size={500}/>
//       </Icon>
//       <Icon2>
//       <TrashIcon size={300}/>
//       </Icon2>
      
//       <LogoText>TEXAS TRASH CAN VALET</LogoText>
//     </LogoContainer>
//   );
// };

// export default TexasTrashCanLogo;
// 3333333333333333333333333333333333333333333333333333333333333333333333333333333







// import React from "react";
// import styled, { keyframes } from "styled-components";
// import { FaTrashAlt } from "react-icons/fa";
// import { SiReact } from "react-icons/si";
// import { GiTexas } from "react-icons/gi";

// // Animation for the spinning React icon
// const spin = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// // Styled components
// const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 10px;
//   position: relative;
//   flex-direction: column;
//   width: 800px;
//   height: 650px;
//   background: #4CAF50; /* Eco-friendly green */
//   border-radius: 50%;
//   margin: 0 auto;
//   margin-top: 50px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
// `;

// const Circle = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 10px;
//   position: relative;
//   flex-direction: column;
// `;

// const ReactIcon = styled(SiReact)`
//   font-size: 60px;
//   color: #FFD700; /* Bright yellow */
//   animation: ${spin} 6s linear infinite;
// `;

// const TrashIcon = styled(FaTrashAlt)`
//   font-size: 60px;
//   color: #333333; /* Dark gray */
// `;

// const LogoText = styled.h1`
//   font-size: 35px;
//   font-weight: bold;
//   color: white; /* White for contrast */
//   transform: translateY(-65%);
// `;

// const Icon = styled.div``;

// const Icon2 = styled.div`
//   position: absolute;
//   left: 45%;
// `;

// const LogoTextContainer = styled.svg`
//   width: 250px;
//   height: 150px;
//   position: absolute;
//   bottom: 0;
// `;

// const TexasTrashCanLogo = () => {
//   return (
//     <LogoContainer>
//       <Icon>
//         <GiTexas size={500} color="white" /> {/* White Texas Icon */}
//       </Icon>
//       <Icon2>
//         <TrashIcon size={300} />
//       </Icon2>
//       <LogoText>TEXAS TRASH CAN VALET</LogoText>
//     </LogoContainer>
//   );
// };

// export default TexasTrashCanLogo;







import React from "react";
import styled, { keyframes } from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { GiTexas } from "react-icons/gi";

// Animation for the spinning React icon
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled components
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: relative;
  flex-direction: column;
  width: 800px;
  height: 650px;
  background: #2E7D32; /* Dark Green */
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 50px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: relative;
  flex-direction: column;
`;

const ReactIcon = styled(SiReact)`
  font-size: 60px;
  color: #FFD54F; /* Yellow-Gold */
  animation: ${spin} 6s linear infinite;
`;

const TrashIcon = styled(FaTrashAlt)`
  font-size: 60px;
  color: #333333; /* Charcoal Black */
`;

const LogoText = styled.h1`
  font-size: 35px;
  font-weight: bold;
  color: white; /* White for contrast */
  transform: translateY(-65%);
`;

const Icon = styled.div``;

const Icon2 = styled.div`
  position: absolute;
  left: 45%;
`;

const LogoTextContainer = styled.svg`
  width: 250px;
  height: 150px;
  position: absolute;
  bottom: 0;
`;

const TexasTrashCanLogo = () => {
  return (
    <LogoContainer>
      <Icon>
        <GiTexas size={500} color="white" /> {/* White Texas Icon */}
      </Icon>
      <Icon2>
        <TrashIcon size={300} />
      </Icon2>
      <LogoText>TEXAS TRASH CAN VALET</LogoText>
    </LogoContainer>
  );
};

export default TexasTrashCanLogo;
