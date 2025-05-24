export default defineNuxtPlugin(async nuxtApp => {
  let appName = 'Chum Pay';
  let theme = {
    primary: 'orange',
    secondary: '[#024040]',
    brand: 'orange',
    button: 'orange',
    tprimary: 'white',
    card: 'rgb(211, 208, 208)',
    cardbutton: 'black'
  };

  let faq = [
    // { question: `How do i fund my wallet on ${appName} ?`, answer: 'You can fund your wallet by using any of the two payment methods.Paystack Payment method Bank Transfer' },
    // { question: 'Can i have a similar platfrom or intergrate my website using API on the platform?', answer: `No, ${appName}  Data doesn’t have any API integration.` },
    // { question: 'How do i reset my pas  sword?', answer: 'To reset your password you’re to follow this step by step process; Click on settings Go to “change password” Enter your email Enter a new password of your choice' },
    // { question: `Does Data have a Whatsapp group for the retailer?', answer: 'No, ${appName} Data doesn’t have any Whatsapp groups.` },
    // { question: `Can i transfer money from my wallet to my bank account?', answer: 'No! You can’t transfer funds from Data wallet to a bank account..` },
    // { question: 'What is the minimum amount i can fund into my wallet?', answer: 'Minimum amount of funding is N100. Transaction charges will be deducted for every funding as stipulated on the App.' }
  ];

  nuxtApp.vueApp.provide('UseTheme', theme);
  nuxtApp.provide('UseTheme', theme);

  nuxtApp.vueApp.provide('AppName', appName);
  nuxtApp.provide('AppName', appName);

  nuxtApp.vueApp.provide('UseFaq', faq);
  nuxtApp.provide('UseFaq', faq);
});
