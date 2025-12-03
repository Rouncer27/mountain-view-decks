export const Gallery_Query = `
   	 gallery: galleryComponent {
        gallery {
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
            projectType
        }
    }
`;
