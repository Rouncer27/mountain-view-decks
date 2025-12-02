export const Content_Block_Query = `
     contentBlock: contentBlockComponent {
        title
        content
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
    }
`;

export const Vision_Query = `
     vision: visionComponent {
        title
        content
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

export const Values_Query = `
     values: valuesComponent {
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
        title
        values {
            title
            content
        }
    }
`;

export const Graphic_Callout_Query = `
   	 graphicCallout: graphicCalloutComponent {
        title
        graphic  {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
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
    }
`;
