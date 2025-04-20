// import axios from 'axios';

// const APP_ID = import.meta.env.VITE_WHATSAPP_APP_ID;
// const WHATSAPP_API_URL = `https://graph.facebook.com/v17.0/${APP_ID}`;
// const WHATSAPP_TOKEN = import.meta.env.VITE_WHATSAPP_TOKEN;
// const PHONE_NUMBER = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER;
// interface WhatsAppMessage {
//   messaging_product: string;
//   to: string;
//   type: string;
//   template: {
//     name: string;
//     language: {
//       code: string;
//     };
//     components: Array<{
//       type: string;
//       parameters: Array<{
//         type: string;
//         text: string;
//       }>;
//     }>;
//   };
// }

// // Add rate limiting handling
// let requestCount = 0;
// const MAX_REQUESTS_PER_HOUR = 200;
// const RATE_LIMIT_RESET = 3600000; // 1 hour in milliseconds

// setInterval(() => {
//   requestCount = 0;
// }, RATE_LIMIT_RESET);

// export const sendWhatsAppMessage = async (
//   phoneNumber: string,
//   templateName: string,
//   parameters: string[]
// ) => {
//   try {
//     if (requestCount >= MAX_REQUESTS_PER_HOUR) {
//       throw new Error('Rate limit exceeded. Please try again later.');
//     }

//     requestCount++;

//     const message: WhatsAppMessage = {
//       messaging_product: "whatsapp",
//       to: phoneNumber,
//       type: "template",
//       template: {
//         name: templateName,
//         language: {
//           code: "en"
//         },
//         components: [
//           {
//             type: "body",
//             parameters: parameters.map(param => ({
//               type: "text",
//               text: param
//             }))
//           }
//         ]
//       }
//     };

//     const response = await axios.post(`${WHATSAPP_API_URL}/messages`, message, {
//       headers: {
//         'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
//         'Content-Type': 'application/json'
//       }
//     });

//     return response.data;
//   } catch (error: any) {
//     if (error.response?.status === 404) {
//       throw new Error('WhatsApp Business API endpoint not found. Please check your configuration.');
//     } else if (error.response?.status === 429) {
//       throw new Error('Rate limit exceeded. Please try again later.');
//     }
//     console.error('WhatsApp API Error:', error);
//     throw error;
//   }
// };