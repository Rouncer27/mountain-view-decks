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
