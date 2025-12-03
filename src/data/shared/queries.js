export const Hero_Intro_Query = `
   	 heroIntro: heroIntroComponent {
        title
        content
        buttonRequired
        buttonOneText
        buttonOneLink {
            edges {
                node {
                    uri
                }
            }
        }
        buttonTwoRequired
        buttonTwoText
        buttonTwoLink {
            edges {
                node {
                    uri
                }
            }
        }
        image {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
    }
`;

export const Hero_Small_Query = `
   	 heroSmall: heroSmallComponent {
        image {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
    }
`;

export const Servcies_List_Query = `
   	 servicesList: servicesListComponent {
        title
        titleStyleTwo
        subTitle
        buttonText
        buttonLink {
            edges {
                node {
                    uri
                }
            }
        }
        services {
            title
            content
            buttonLink {
                edges {
                    node {
                        uri
                    }
                }
            }

            image {
                node {
                    sourceUrl
                    altText
                    mediaDetails {
                        width
                        height
                    }
                }
            }
        }  
    }
`;

export const Contact_Information_Query = `
     contactInformation: siteWideSettings {
        contactOptions {
            phoneNumber
            hours
            mainOfficeAddress
        }
    }
`;
