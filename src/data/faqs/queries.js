export const Page_Intro_Query = `
   	 pageIntro: pageIntroComponent {
        title
        content
    }
`;

export const Faqs_QA_Query = `
   	 faqsQA: faqsComponent {
        sections {
          sectionTitle
          questions {
            question
            answer
          }
        }
      }
`;
