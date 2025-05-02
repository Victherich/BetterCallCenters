

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { FaArrowRight } from "react-icons/fa";
// import txh1 from '../Images/txh1.webp'

// // Styled Components
// const HeroContainer = styled.section`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 100px;
//   margin: auto;
//   min-height: 100vh;
//   width: 100%;
//   gap: 100px;
//   background-image:url(${txh1});
//   background-size:cover;


//   @media (max-width: 768px) {
//     flex-direction: column;
//     // text-align: center;
//     padding:100px 10px;
//     background-position:center;
//   }
// `;

// const LeftSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   width: 50%;
//   align-items: flex-start;
//   background-color:rgba(0,0,0,0.5);
//   border-radius:20px;

//   p{
//     color:white;
//     font-size:1.2rem;
//     margin-top:10px;
//   }

//   @media (max-width: 768px) {
//     padding:20px 10px;
//     width:100%;

    
//   }
// `;

// const Title = styled.h1`
//   font-size: 4rem;
//   color: white;

//   @media(max-width:768px){
//     font-size:3rem;
    
//   }
// `;


// const Button = styled.a`
//   margin-top: 20px;
//   background: #015FC9;
//   color: white;
//   padding: 12px 20px;
//   border: none;
//   border-radius: 100px;
//   cursor: pointer;
//   font-size: 16px;
//   text-decoration: none; /* Ensures it looks like a button */
//   display: inline-block; /* Ensures proper spacing */
//   transition: background 0.3s;

//   &:hover {
//     background: rgba(0, 95, 201, 0.8);
//   }
// `;





// const TexasTrashCanHero = () => {
 
//   return (
//     <HeroContainer>
//       <LeftSection>
//         <Title>NEVER MISS TRASH DAY IN <span style={{fontStyle:"italic", color:"yellow"}}>TEXAS</span></Title>
//      <p>We roll your garbage and recycling cans to the curb on pickup day – and back again – so you never lift a finger or face a missed collection.”</p>
//      <Button href="https://texastrashcanvalet.com/sign-up">
//       Sign Up Now - 1 Week Free Trial
//     </Button> <p>Plans start at $39/month</p>
//       </LeftSection>

     
//     </HeroContainer>
//   );
// };

// export default TexasTrashCanHero;



import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import txh1 from '../Images/txh1.webp';

// Styled Components
const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px;
  margin: auto;
  min-height: 100vh;
  width: 100%;
  gap: 100px;
  background-image: url(${txh1});
  background-size: cover;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 100px 10px;
    background-position: center;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 50%;
  align-items: flex-start;
  background-color: rgba(0,0,0,0.5);
  border-radius: 20px;

  p {
    color: white;
    font-size: 1.2rem;
    margin-top: 10px;
  }

  @media (max-width: 884px) {
    padding: 20px 10px;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Button = styled.a`
  margin-top: 20px;
  background: #015FC9;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 95, 201, 0.8);
  }
`;

const TexasTrashCanHero = () => {
//   const [userState, setUserState] = useState("your state");

//   import { useState, useEffect } from "react";

  
    const [userState, setUserState] = useState("Fetching location...");
  
    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            console.log("✅ Detected Coordinates:", latitude, longitude);
  
            try {
              const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAgRebnRdLcsX0a74dz_GWVv30funQ7OlU`
              );
  
              const data = await response.json();
              console.log("📍 Google API Response:", data);
  
              if (data.results.length > 0) {
                const addressComponents = data.results[0].address_components;
                const state = addressComponents.find((comp) =>
                  comp.types.includes("administrative_area_level_1")
                );
  
                if (state) {
                  setUserState(state.long_name); // Update state name
                  console.log("✅ Detected State:", state.long_name);
                } else {
                  setUserState("State Not Found");
                  console.warn("⚠️ State data missing in API response");
                }
              } else {
                setUserState("No Location Data");
                console.warn("⚠️ No results from Google API");
              }
            } catch (error) {
              console.error("❌ Error fetching Google Maps API:", error);
              setUserState("Error Fetching Location");
            }
          },
          (error) => {
            console.warn("❌ Geolocation failed:", error.message);
            setUserState("Location Not Available");
          },
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
      } else {
        console.warn("❌ Geolocation not supported");
        setUserState("Location Not Supported");
      }
    }, []);
  
    // return <h1>You're in: {userState}</h1>;
  
  
 
  
  
  
  

  return (
    <HeroContainer>
      <LeftSection>
        <Title>
          NEVER MISS TRASH DAY IN{" "}
          <span style={{ fontStyle: "italic", color: "yellow" }}>
            {/* {userState.toUpperCase()} */}
            TEXAS
          </span>
        </Title>
        <p>
          We roll your garbage and recycling cans to the curb on pickup day – and
          back again – so you never lift a finger or face a missed collection.
        </p>
        <Button 
  href="https://texastrashcanvalet.com/sign-up-8981" 
  target="_blank" 
  rel="noopener noreferrer"
> 
  Sign Up Now - 1 Week Free Trial
</Button>

        <p>Plans start at $39/month</p>
      </LeftSection>
    </HeroContainer>
  );
};

export default TexasTrashCanHero;

