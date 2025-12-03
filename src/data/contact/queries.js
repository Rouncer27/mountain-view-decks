export const Intro_Query = `
     intro: introComponent {
        title
        content
    }
`;

export const Contact_Info_Display_Query = `
     contactInfoDisplay: contactInfoComponent {
        displayContactInfo
    }
`;

export const Request_Quote_Query = `
     requestQuote: requestQuoteComponent {
        title
        content
        displayContactForm
    }
`;

export const Process_Query = `
   	 process: processComponent {
        title
        subTitle
         logo {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        processSteps {
            title
            content
        }
        buttonText
        buttonLink {
            edges {
                node {
                    uri
                }
            }
        }
    }
`;
