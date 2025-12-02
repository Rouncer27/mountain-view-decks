export const Callouts_Query = `
   	 callouts: calloutsComponent {
        callouts {
            callout
        }
    }
`;

export const Image_Content_Query = `
   	 imageContent: imageContentComponent {
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

export const Types_Query = `
   	 types: typesComponent {
        title 
        types {
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
        }                
    }
`;
