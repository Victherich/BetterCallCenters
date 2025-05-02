// import React from "react";
// import styled from "styled-components";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaQuoteLeft } from "react-icons/fa";

// const testimonials = [
//   {
//     text: "This is an amazing service! Highly recommend.",
//     image: "https://via.placeholder.com/60",
//     name: "John Doe",
//     position: "CEO, Company",
//   },
//   {
//     text: "Absolutely wonderful experience!",
//     image: "https://via.placeholder.com/60",
//     name: "Jane Smith",
//     position: "Marketing Manager",
//   },
//   {
//     text: "Great customer support and fast delivery.",
//     image: "https://via.placeholder.com/60",
//     name: "Michael Lee",
//     position: "Product Designer",
//   },
//   {
//     text: "Great customer support and fast delivery.",
//     image: "https://via.placeholder.com/60",
//     name: "Michael Lee",
//     position: "Product Designer",
//   },
//   {
//     text: "Great customer support and fast delivery.",
//     image: "https://via.placeholder.com/60",
//     name: "Michael Lee",
//     position: "Product Designer",
//   },
//   {
//     text: "Great customer support and fast delivery.",
//     image: "https://via.placeholder.com/60",
//     name: "Michael Lee",
//     position: "Product Designer",
//   },
// ];

// const Testimonial = () => {
//   const settings = {
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <CarouselContainer>
//       <StyledSlider {...settings}>
//         {testimonials.map((testimonial, index) => (
//           <Card key={index}>
//             <QuoteIcon>
//               <FaQuoteLeft />
//             </QuoteIcon>
//             <TestimonialText>{testimonial.text}</TestimonialText>
//             <CustomerImage src={testimonial.image} alt={testimonial.name} />
//             <CustomerName>{testimonial.name}</CustomerName>
//             <CustomerPosition>{testimonial.position}</CustomerPosition>
//           </Card>
//         ))}
//       </StyledSlider>
//     </CarouselContainer>
//   );
// };

// export default Testimonial;

// const CarouselContainer = styled.div`
//   width: 90%;
//   margin: auto;
//   padding: 20px;

// `;

// const StyledSlider = styled(Slider)`
//   .slick-prev,
//   .slick-next {
//     z-index: 10;
//     color: #333;
//   }
//   .slick-prev:before,
//   .slick-next:before {
//     font-size: 24px;
//     color: black;
//   }
// `;

// const Card = styled.div`

//   background: #fff;
//   padding: 20px;
//   border-radius: 10px;
//   text-align: center;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
//   width:250px;

// `;

// const QuoteIcon = styled.div`
//   font-size: 40px;
//   color: #b81410;
//   margin-bottom: 10px;
// `;

// const TestimonialText = styled.p`
//   font-size: 16px;
//   color: #555;
//   margin-bottom: 15px;
// `;

// const CustomerImage = styled.img`
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   margin-bottom: 10px;
// `;

// const CustomerName = styled.h4`
//   font-size: 18px;
//   font-weight: bold;
//   margin: 5px 0;
// `;

// const CustomerPosition = styled.p`
//   font-size: 14px;
//   color: #777;
// `;


import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import t1 from '../Images/t1.png'
import t2 from '../Images/t2.png'
import t3 from "../Images/t3.png"
import t4 from '../Images/t4.png'
import t5 from '../Images/t5.png'
import t6 from "../Images/t6.png"

const testimonials = [
  {
    text: "At Better Call Cents deserve a solid 5 star rating for their exceptional service. One of the standout features of this call center is their impeccable call handling. Every time I reached out to them, whether it was during the day or in the middle of the night, their agents were always polite, professional, and attentive. They listened carefully to my queries and provided accurate and helpful information promptly. The efficiency and effectiveness of their call handling truly exceeded my expectations.",
    image: t5,
    name: "Brando Hernandez",
    position: "Santa Lucia Enterprises, CEO and Founder",
  },
  {
    text: "Something impressive about BETTER CALL CENTERS its their appointment scheduling. They seamlessly integrated with our systems and efficiently managed our appointment bookings. Their agents were knowledgeable and organized, ensuring that our customers' appointments were accurately scheduled and confirmed. This streamlined process significantly improved our overall efficiency and customer experience.",
    image: t6,
    name: "Aaron Gloria",
    position: "Glomart international associates, CEO Owner",
  },
  {
    text: "I highly recommend better call centers to answer your phone calls since we hired them our sales have gone high, we are really thankful for this new system that is implied to support companies like our to get lots of business going on! If you are looking to get more sales or more attention to customer service this is!. Hope you find it helpful!",
    image: t1,
    name: "Luis Alejandro Monarrez,",
    position: "Clearly Clean Window Washing, CEO and Founder",
  },
  {
    text: "We hire Better Call Center to manage our income calls for our Home Improvement Company, they provide us daily updates, call records, set and confirmed appointments, now we can focus in another areas because they are handling our customer service call center. Complety Satisfied.",
    image: t2,
    name: "Ezra Gomez",
    position: "OG Home Solutions LLC | CEO & Founder",
  },
  {
    text: "The solutions provided at BETTER CALL CENTERS were quick and efficient. It was paramount for me to get this solved and they delivered while at the same time exceding my expectations. I needed to solve an issue with merchandise I had ordered for my company. People depend on me for health and wellness in their households.I cannot recommend them enough!",
    image: t3,
    name: "Asael Enriquez",
    position: "ZenShielding LLC CEO",
  },
  {
    text: "One of the main strengths of BETTER CALL CENTERS is their exceptional bilingual answering service. As a company that caters to a diverse customer base, it was crucial for us to have agents who could effectively communicate in multiple languages. BETTER CALL CENTERS exceeded our expectations by providing highly skilled bilingual agents who effortlessly handled customer inquiries and resolved issues, making our customers feel valued and understood.",
    image: t4,
    name: "Francisco Javier Lozano",
    position: "Ameritek Industries - Sales Professional / Dealer",
  },
];

const Testimonial = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <CarouselContainer>
      <StyledSlider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
          <CardInner>
          <QuoteIcon>
              <FaQuoteLeft />
            </QuoteIcon>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <CustomerImage src={testimonial.image} alt={testimonial.name} />
            
          </CardInner>
          <CustomerName>{testimonial.name}</CustomerName>
            <CustomerPosition>{testimonial.position}</CustomerPosition>
          </Card>
        ))}
      </StyledSlider>
    </CarouselContainer>
  );
};

export default Testimonial;

const CarouselContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px;

`;

const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    z-index: 10;
    color: #333;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 32px;
    color: #b81410;
  }

  .slick-slide {
    padding: 0 10px; /* Adds spacing between slides */
  }
`;

const Card = styled.div`
  background: #fff;
//   padding: 10px;
  border-radius: 10px;
  text-align: center;
//   box-shadow:  4px 4px 10px rgba(0, 0, 0, 0.5);
//   width: 220px;
//   height:400px;
  margin: 0 auto; /* Centers the cards */
//   border:1px solid black;
`;

const CardInner = styled.div`
 background: #fff;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  box-shadow:  4px 4px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  height:300px;
  margin: 0 auto; /* Centers the cards */
//   border:1px solid black;
    position:relative;

@media(max-width:884px){
    height:350px;
}

@media(max-width:834px){
    height:400px;
}

@media(max-width:428px){
    height:300px;
}

@media(max-width:360px){
    height:350px;
}

`

const QuoteIcon = styled.div`
  font-size: 30px;
  color: #b81410;
  margin-bottom: 10px;
`;

const TestimonialText = styled.p`
  font-size: 0.8rem;
  color: #555;
  margin-bottom: 15px;
`;

const CustomerImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  border:1px solid gray;
`;


const CustomerName = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-top: 40px;
`;

const CustomerPosition = styled.p`
  font-size: 12px;
  color: #777;
`;

