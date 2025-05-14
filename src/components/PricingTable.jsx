
// import React from 'react';
// import styled from 'styled-components';

// const TableWrapper = styled.div`
//   overflow-x: auto;
// //   margin: 2rem;
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   min-width: 800px;

//   @media (max-width: 768px) {
//     display: block;
//     white-space: nowrap;
//   }
// `;

// const TableHead = styled.thead`
//   background-color: #f5f5f5;
// `;

// const Th = styled.th`
//   padding: 1rem;
//   text-align: center;
//   font-weight: bold;
//   border-bottom: 2px solid #ddd;
//   background-color: ${({ mostPopular }) => (mostPopular ? '#ffe9b3' : '#f5f5f5')};
//   position: ${({ sticky }) => (sticky ? 'sticky' : 'static')};
//   left: ${({ sticky }) => (sticky ? '0' : 'auto')};
//   z-index: ${({ sticky }) => (sticky ? '2' : '1')};
// `;

// const Tr = styled.tr`
//   background-color: ${({ index }) => (index % 2 === 0 ? '#ffffff' : '#f9f9f9')};
// `;

// const Td = styled.td`
//   padding: 1rem;
//   text-align: center;
//   border-bottom: 1px solid #eee;
//   position: ${({ sticky }) => (sticky ? 'sticky' : 'static')};
//   left: ${({ sticky }) => (sticky ? '0' : 'auto')};
//   background: ${({ sticky }) => (sticky ? '#ffffff' : 'inherit')};
//   z-index: ${({ sticky }) => (sticky ? '1' : '0')};
//   min-width: 150px;
// `;

// const PricingTable = () => {
//   const plans = [
//     {
//       name: 'Starter',
//       price: '$39',
//       note: 'Per property / Month, billed quarterly*',
//       cta: 'Go Starter',
//       details: [
//         'Up to 2', '1 per Week', 'One week wait', 'Standard Rate', 'Optional',
//         '', '', '', '', 'Optional', '', '', 'Standard Support', ''
//       ],
//     },
//     {
//       name: 'Premium',
//       price: '$54',
//       note: 'Per property / Month, billed quarterly*',
//       cta: 'Go Premium',
//       mostPopular: true,
//       details: [
//         'Up to 4', 'Up to 2 per Week', 'All access', '3 days', 'Discounted',
//         'Optional', '', '', '', 'Optional', '', '', 'Priority Support', ''
//       ],
//     },
//     {
//       name: 'Business',
//       price: '$65',
//       note: 'Per property / Month, billed quarterly*',
//       cta: 'Go Business',
//       details: [
//         'Up to 6', 'Up to 2 per Week', 'All access', 'Next day', 'Discounted',
//         'Optional', '✔️', '✔️', '✔️', 'Optional', '✔️', '✔️', 'Priority Support', '✔️','✔️'
//       ],
//     },
//     {
//       name: 'Enterprise',
//       price: 'Custom',
//       note: 'For 10+ properties / Custom billing *',
//       cta: "Let's Talk",
//       details: [
//         'Custom', 'Custom', 'Client Billing', 'Next day', 'Custom',
//         'Custom', '✔️', '✔️', '✔️', 'Custom', '✔️', '✔️', 'Dedicated Manager', '✔️','✔️'
//       ],
//     }
//   ];

//   const features = [
//     'Quarterly Discount', 'Cans Included', 'Can-To-Curb®', 'Collection Days¹',
//     'Security Codes', 'Client Dashboard', 'Notifications', 'Photo History',
//     'Route Addition', 'OnDemand', 'Can Cleaning', 'Multi-User Access',
//     'Long Driveway (50ft+)²', 'Customer Service', 'Success Manager'
//   ];

//   return (
//     <TableWrapper>
//       <Table>
//         <TableHead>
//           <tr>
//             <Th sticky>Features</Th>
//             {plans.map((plan, idx) => (
//               <Th key={idx} mostPopular={plan.mostPopular}>
//                 <div>{plan.price}</div>
//                 <div>{plan.name}</div>
//                 <small>{plan.note}</small><br />
//                 <button style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', backgroundColor: plan.mostPopular ? '#ffb300' : '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//                   {plan.cta}
//                 </button>
//               </Th>
//             ))}
//           </tr>
//         </TableHead>
//         <tbody>
//           {features.map((feature, featureIdx) => (
//             <Tr key={featureIdx} index={featureIdx}>
//               <Td sticky>{feature}</Td>
//               {plans.map((plan, planIdx) => (
//                 <Td key={planIdx}>
//                   {plan.details[featureIdx] || '-'}
//                 </Td>
//               ))}
//             </Tr>
//           ))}
//         </tbody>
//       </Table>
//     </TableWrapper>
//   );
// };

// export default PricingTable;




import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  overflow-x: auto;
//   margin: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;

  @media (max-width: 768px) {
    display: block;
    white-space: nowrap;
  }
`;

const TableHead = styled.thead`
  background-color: #f5f5f5;
`;

const Th = styled.th`
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  border-bottom: 2px solid #ddd;
  background-color: ${({ mostPopular }) => (mostPopular ? '#ffe9b3' : '#f5f5f5')};
  position: ${({ sticky }) => (sticky ? 'sticky' : 'static')};
  left: ${({ sticky }) => (sticky ? '0' : 'auto')};
  z-index: ${({ sticky }) => (sticky ? '2' : '1')};
`;

const Tr = styled.tr`
  background-color: ${({ index }) => (index % 2 === 0 ? '#ffffff' : '#f9f9f9')};
`;

const Td = styled.td`
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid #eee;
  position: ${({ sticky }) => (sticky ? 'sticky' : 'static')};
  left: ${({ sticky }) => (sticky ? '0' : 'auto')};
  background: ${({ sticky }) => (sticky ? '#ffffff' : 'inherit')};
  z-index: ${({ sticky }) => (sticky ? '1' : '0')};
  min-width: 150px;
`;

const PricingTable = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$39',
      note: 'Per property / Month, billed quarterly*',
      cta: 'Go Starter',
      details: [
        'Up to 2', '1 per Week', 'One week wait', 'Standard Rate', 
      ],
    },
    {
      name: 'Premium',
      price: '$54',
      note: 'Per property / Month, billed quarterly*',
      cta: 'Go Premium',
      mostPopular: true,
      details: [
        'Up to 4', 'Up to 2 per Week', 'All access', '3 days', 
      ],
    },
    {
      name: 'Business',
      price: '$65',
      note: 'Per property / Month, billed quarterly*',
      cta: 'Go Business',
      details: [
        'Up to 6', 'Up to 2 per Week', 'All access', 'Next day', 
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      note: 'For 10+ properties / Custom billing *',
      cta: "Let's Talk",
      details: [
        'Custom', 'Custom', 'Client Billing', 'Next day',
      ],
    }
  ];

  const features = [
    'Quarterly Discount', 'Cans Included', 'Can-To-Curb®', 'Collection Days¹',
   
  ];

  return (
    <TableWrapper>
      <Table>
        <TableHead>
          <tr>
            <Th sticky>Features</Th>
            {plans.map((plan, idx) => (
              <Th key={idx} mostPopular={plan.mostPopular}>
                <div>{plan.price}</div>
                <div>{plan.name}</div>
                <small>{plan.note}</small><br />
                <button style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', backgroundColor: plan.mostPopular ? '#ffb300' : '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                  {plan.cta}
                </button>
              </Th>
            ))}
          </tr>
        </TableHead>
        <tbody>
          {features.map((feature, featureIdx) => (
            <Tr key={featureIdx} index={featureIdx}>
              <Td sticky>{feature}</Td>
              {plans.map((plan, planIdx) => (
                <Td key={planIdx}>
                  {plan.details[featureIdx] || '-'}
                </Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default PricingTable;
