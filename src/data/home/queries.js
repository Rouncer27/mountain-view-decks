export const About_Intro_Query = `
   	 aboutIntro: aboutIntroComponent {
        title
        subTitle
        content
        stats {
            number
            stat
        }
        buttonText
        buttonLink {
            edges {
                node {
                    uri
                }
            }
        }
        quote
        imageOne {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        imageTwo {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }

        imageTall {
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

export const Collaborate_Query = `
   	 collaborate: collaborateComponent {
        title
        content
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
        backgroundImage {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
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
