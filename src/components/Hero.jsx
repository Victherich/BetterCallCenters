// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import {FaArrowRight} from 'react-icons/fa'
// import call1 from '../Images/call1.mp4'
// import call2 from '../Images/call2.mp4'
// import call3 from '../Images/call3.mp4'

// // Styled Components
// const HeroContainer = styled.section`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 100px;
// //   max-width: 1200px;
//   margin: auto;
//   min-height: 80vh;
//   width:100%;
//   gap:100px;
  
//   @media (max-width: 768px) {
//     flex-direction: column;
//     text-align: center;
//   }
// `;

// const LeftSection = styled.div`
//   display:flex;
//   flex-direction:column;
//   padding-right: 20px;
//   width:60%;
//   align-items:flex-start;
  
//   @media (max-width: 768px) {
//     padding-right: 0;
//   }
// `;

// const Title = styled.h1`
//   font-size: 36px;
//   margin-bottom: 15px;
//   color: #333;
// `;

// const Text = styled.p`
//   font-size: 18px;
//   margin-bottom: 20px;
//   color: #555;
// `;

// const Button = styled.button`
//   background: #B81410;
//   color: white;
//   padding: 12px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;
// //   font-weight: bold;
//   transition: background 0.3s;

//   &:hover {
//     // background: #0056b3;
//   }
// `;

// const RightSection = styled.div`
//   display:flex;
//   height:500px;
//   width:40%;
//   width

// `;

// const Video = styled.video`
//   width: 100%;
//   height: auto;
//   border-radius: 10px;
//   object-fit: cover;
// `;

// // React Component
// const HeroSection = () => {
//   const openUrl = () => {
//     window.location.href = "https://app.gohighlevel.com/v2/preview/JuiaKmoEHnGKDDIM5O2x"; // Replace with your desired URL
//   };

//   const [state , setState]= useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setState((prevState) => (prevState + 1) % 3); // Toggle between 0 and 1
//     }, 5000);

//     return () => clearInterval(id); // Cleanup function
//   }, [setState]); // Best practice to include setState in dependencies




//   return (
//     <HeroContainer>
//       <LeftSection>
//         <Title>Transforming Customer Interactions
//         with</Title>
//         <Title>
//         {typingtext}
//         </Title>
//         <Text>
//         At Better Call Centers, we understand the heartbeat of your business - communication.
//         Our dedicated team, with years of expertise in customer interactions, offers a spectrum of call center services tailored to meet your unique needs.
//         </Text>
//         <Button onClick={openUrl}><FaArrowRight/> Book a Demo</Button>
//       </LeftSection>
//       <RightSection>
//         {state===0&&<Video autoPlay loop muted playsInline>
//           <source src={call1} type="video/mp4" />
//           Your browser does not support the video tag.
//         </Video>}
//         {state===1&&<Video autoPlay loop muted playsInline>
//           <source src={call2} type="video/mp4" />
//           Your browser does not support the video tag.
//         </Video>}
//        {state===2&& <Video autoPlay loop muted playsInline>
//           <source src={call3} type="video/mp4" />
//           Your browser does not support the video tag.
//         </Video>}
//       </RightSection>
//     </HeroContainer>
//   );
// };

// export default HeroSection;








// 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { FaArrowRight } from "react-icons/fa";
// import call1 from "../Images/call1.mp4";
// import call2 from "../Images/call2.mp4";
// import call3 from "../Images/call3.mp4";

// // Styled Components
// const HeroContainer = styled.section`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 100px;
//   margin: auto;
//   min-height: 80vh;
//   width: 100%;
//   gap: 100px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     text-align: center;
//   }
// `;

// const LeftSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-right: 20px;
//   width: 60%;
//   align-items: flex-start;

//   @media (max-width: 768px) {
//     padding-right: 0;
//   }
// `;

// const Title = styled.h1`
//   font-size: 36px;
// //   margin-bottom: 15px;
//   color: #333;
// `;

// const TypingText = styled.h1`
//   font-size: 36px;
//   color: #b81410;
//   min-height: 50px; /* Prevents layout shift */
//   border-right: 3px solid #b81410; /* Cursor effect */
//   white-space: nowrap;
//   overflow: hidden;
// `;

// const Text = styled.p`
//   font-size: 18px;
//   margin-bottom: 20px;
//   color: #555;
// `;

// const Button = styled.button`
//   background: #b81410;
//   color: white;
//   padding: 12px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;
//   transition: background 0.3s;

//   &:hover {
//     background: #900e0b;
//   }
// `;

// const RightSection = styled.div`
//   display: flex;
//   height: 500px;
//   width: 40%;
// `;

// const Video = styled.video`
//   width: 100%;
//   height: 100%;
//   border-radius: 10px;
//   object-fit: cover;
// `;

// const HeroSection = () => {
//   const openUrl = () => {
//     window.location.href = "https://app.gohighlevel.com/v2/preview/JuiaKmoEHnGKDDIM5O2x";
//   };

//   // Sentences to cycle through
//   const sentences = [
//     "24/7 Call Support",
//     "Professional Answering Service",
//     "Seamless Customer Engagement"
//   ];

//   const [text, setText] = useState(""); // Current typing text
//   const [sentenceIndex, setSentenceIndex] = useState(0); // Current sentence index
//   const [charIndex, setCharIndex] = useState(0); // Current letter index
//   const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting

//   useEffect(() => {
//     const currentSentence = sentences[sentenceIndex];

//     if (!isDeleting && charIndex < currentSentence.length) {
//       // Typing effect
//       setTimeout(() => {
//         setText((prev) => prev + currentSentence[charIndex]);
//         setCharIndex((prev) => prev + 1);
//       }, 100);
//     } else if (isDeleting && charIndex > 0) {
//       // Deleting effect
//       setTimeout(() => {
//         setText((prev) => prev.slice(0, -1));
//         setCharIndex((prev) => prev - 1);
//       }, 50);
//     } else if (!isDeleting && charIndex === currentSentence.length) {
//       // Pause before deleting
//       setTimeout(() => setIsDeleting(true), 1000);
//     } else if (isDeleting && charIndex === 0) {
//       // Move to next sentence
//       setIsDeleting(false);
//       setSentenceIndex((prev) => (prev + 1) % sentences.length);
//     }
//   }, [charIndex, isDeleting, sentenceIndex, sentences]);

//   // Video Loop State
//   const [videoState, setVideoState] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setVideoState((prevState) => (prevState + 1) % 3);
//     }, 5000);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <HeroContainer>
//       <LeftSection>
//         <Title>Transforming Customer Interactions with</Title>
//         <TypingText>{text}</TypingText>
//         <Text>
//           At Better Call Centers, we understand the heartbeat of your business - communication.
//           Our dedicated team, with years of expertise in customer interactions, offers a spectrum of call center services tailored to meet your unique needs.
//         </Text>
//         <Button onClick={openUrl}>
//           <FaArrowRight /> Book a Demo
//         </Button>
//       </LeftSection>
//       <RightSection>
//         {videoState === 0 && (
//           <Video autoPlay loop muted playsInline>
//             <source src={call1} type="video/mp4" />
//             Your browser does not support the video tag.
//           </Video>
//         )}
//         {videoState === 1 && (
//           <Video autoPlay loop muted playsInline>
//             <source src={call2} type="video/mp4" />
//             Your browser does not support the video tag.
//           </Video>
//         )}
//         {videoState === 2 && (
//           <Video autoPlay loop muted playsInline>
//             <source src={call3} type="video/mp4" />
//             Your browser does not support the video tag.
//           </Video>
//         )}
//       </RightSection>
//     </HeroContainer>
//   );
// };

// export default HeroSection;





















import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import call1 from "../Images/call1.mp4";
import call2 from "../Images/call4.mp4";
import call3 from "../Images/call3.mp4";

// Styled Components
const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px;
  margin: auto;
  min-height: 80vh;
  width: 100%;
  gap: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding:100px 10px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  width: 60%;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding-right: 0;
    width:100%;
  }
`;

const Title = styled.h1`
  font-size: 36px;
//   margin-bottom: 15px;
  color: #333;
`;

const TypingText = styled.h1`
  font-size: 36px;
  color: #b81410;
  min-height: 50px;
  border-right: 3px solid #b81410; /* Simulated blinking cursor */
  overflow: hidden;
  word-wrap: break-word; /* Ensure words wrap properly */
  white-space: normal; /* Allow text to wrap */
  display: inline-block; /* Keeps styling inline but allows wrapping */
  max-width: 100%; /* Ensures it doesn't overflow its container */
`;


const Text = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #555;
`;

const Button = styled.button`
  background: #b81410;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background: #900e0b;
  }
`;

const RightSection = styled.div`
  display: flex;
  height: 500px;
  width: 40%;
  @media(max-width:768px){
    width:100%;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const HeroSection = () => {
  const openUrl = () => {
    window.location.href = "https://app.gohighlevel.com/v2/preview/JuiaKmoEHnGKDDIM5O2x";
  };

  // Sentences to cycle through
  const sentences = [
    "24/7 Call Support",    
    "Professional Answering Service",
    "Seamless Customer Engagement"
  ];

  const [text, setText] = useState(""); // Current typing text
  const [sentenceIndex, setSentenceIndex] = useState(0); // Current sentence index
  const [charIndex, setCharIndex] = useState(0); // Current letter index
  const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex];

    if (charIndex === 0 && isDeleting) {
      // If fully deleted, switch to next sentence
      setIsDeleting(false);
      setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
      return;
    }

    const typingSpeed = isDeleting ? 50 : 100; // Typing speed vs Deleting speed
    const timeout = setTimeout(() => {
      setText(currentSentence.substring(0, charIndex));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    if (!isDeleting && charIndex === currentSentence.length) {
      // If sentence is fully typed, wait before deleting
      setTimeout(() => setIsDeleting(true), 1000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, sentenceIndex, sentences]);

  // Video Rotation State
  const [videoState, setVideoState] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setVideoState((prevState) => (prevState + 1) % 3);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <HeroContainer>
      <LeftSection>
        <Title>Transforming Customer Interactions with</Title>
        <TypingText>{text}</TypingText>
        <Text>
          At Better Call Centers, we understand the heartbeat of your business - communication.
          Our dedicated team, with years of expertise in customer interactions, offers a spectrum of call center services tailored to meet your unique needs.
        </Text>
        {/* <Button onClick={openUrl}>
          <FaArrowRight /> Book a Demo
        </Button> */}
      </LeftSection>
      <RightSection>
        {videoState === 0 && (
          <Video autoPlay loop muted playsInline>
            <source src={call1} type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        )}
        {videoState === 1 && (
          <Video autoPlay loop muted playsInline>
            <source src={call2} type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        )}
        {videoState === 2 && (
          <Video autoPlay loop muted playsInline>
            <source src={call3} type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        )}
      </RightSection>
    </HeroContainer>
  );
};

export default HeroSection;
