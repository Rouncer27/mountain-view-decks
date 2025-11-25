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
