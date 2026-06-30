export interface CompetitorRow {
  name: string
  guestAccess: boolean
  focusMajor: boolean
  uxFriendly: boolean
  dataCollected: boolean
}

export interface RecommenderRow {
  aspect: string
  contentBased: string
  collaborative: string
  hybrid: string
}

export interface RiasecRow {
  type: string
  description: string
  examples: string[]
}

export interface SubSection {
  anchor: string
  title: string
  paragraphs: string[]
}

export interface Chapter2Section {
  anchor: string
  title: string
  paragraphs?: string[]
  subsections?: SubSection[]
  riasecTable?: RiasecRow[]
  recommenderTable?: RecommenderRow[]
  competitorTable?: CompetitorRow[]
}

export interface Chapter2DataType {
  chapter: string
  title: string
  sections: Chapter2Section[]
}

export const chapter2Content: Chapter2DataType = {
  chapter: 'CHAPTER 2',
  title: 'REVIEW OF RELATED LITERATURE AND STUDIES',
  sections: [
    {
      anchor: '2.1',
      title: '2.1. Review of Related Literature',
      subsections: [
        {
          anchor: '2.1.1',
          title:
            '2.1.1. Student Career Indecision and Major Selection Challenges',
          paragraphs: [
            'Students in Cambodian universities are often faced with the dilemma of choosing their fields of study because of the absence of effective career guidance and the presence of external pressures, including parental and socio-cultural factors [10], [11]. This situation leads to a psychological burden on the students who are often faced with anxiety, frustration, and a lack of self-efficacy, especially when they are forced to choose a field of study based on job security rather than their interests [11], [12]. The effects of this misalignment in education are dire, with high dropout rates, job dissatisfaction, and work-life conflict in the work environment, where students are often underemployed or working outside their field of study [10], [12].',
            'Career guidance methods such as proactive career guidance, high school orientation programs, and increased relationships between universities and industries are therefore crucial in ensuring that students are more equipped with the right information and that their academic choices are aligned with their abilities and the job market [10]. Although these approaches are very effective, they may not be personalized or scalable, especially when implemented digitally. As a result, there is a great need for the development of personalized academic guidance systems that can offer data-driven recommendations based on the interests of students.',
          ],
        },
        {
          anchor: '2.1.2',
          title: '2.1.2. STEM Education Trends in Southeast Asia and Cambodia',
          paragraphs: [
            'Regional studies on STEM education in Southeast Asia show that Cambodia is working towards increasing STEM opportunities to achieve future workforce needs fulfillment [13]. Cambodia is currently shifting its economic development from a traditional dependence on agriculture, garments, and tourism toward a technology-oriented and industrial economy [14].',
            "To achieve the national goal of becoming a higher-middle income country by 2030 and a high-income country by 2050, the Royal Government of Cambodia has prioritized human resource development in STEM fields to meet the demands of the global 'Industrial Revolution 4.0'. However, there are still gaps in terms of guidance and access for rural students.",
          ],
        },
        {
          anchor: '2.1.3',
          title:
            '2.1.3. Student Awareness on STEM and their choice on High School Track',
          paragraphs: [
            'Grade 11, 12, and recent graduates are the main target for the academic guidance tool because they are within the critical period where post-secondary aspirations are developed and finalized [15]. The 2021 study reveals that although these students demonstrate a strong general awareness of the relevance of science and technology in society, they tend to be less informed about the available STEM career paths they can pursue [15]. This lack of information results in uninformed or blind choices, where the choice of high school science track is considered a flexible open choice for university admission rather than a commitment to a particular technical course of study. Thus, without the benefit of detailed guidance and information, about 48% of science track graduates change to non-STEM courses at the post-secondary level [15].',
            'There is a lack of providing structured and individualized support that links student interests with particular academic majors. This highlights the need for decision support systems that combine students’ interests and skills with available STEM majors. Even though previous methods such as STEM awareness campaigns and policy changes to encourage STEM enrollment have raised awareness generally, they do not provide structured and personalized support to match students’ interests with particular educational options. This highlights the need for decision support systems that are based on students’ interests with available STEM options.',
          ],
        },
        {
          anchor: '2.1.4',
          title: '2.1.4. Students Experience with Technology',
          paragraphs: [
            'This 2014 study by Richardson, Nash, and Flora examined how 1,137 Cambodian upper secondary students in three urban schools perceive and use computers and the Internet [16]. Based on Rogers’ Diffusion of Innovations theory, the study found that a lack of experience with technology leads to increased anxiety and fear of breaking the equipment. At the time, students were limited by a lack of school-provided Internet access and only one hour of computer training per week, which contributed to a reliance on skilled persons and a lack of self-efficacy. Ultimately, the study finds that regular, hands-on experience is necessary to turn anxious users into confident ones who are able to function in a digital society.',
            'While the 2024 EdTech Rapid Scan indicated that 91% of households currently possess mobile phones, this 2014 study illustrates the origins of the digital divide in Cambodia, where computer anxiety and the lack of school-provided Internet access originally influenced attitudes [16], [17]. This historical lack of hands-on experience is one reason why today’s university students may still experience the psychological burden or lack of self-efficacy when choosing technical or technology-related majors. Although previous studies have identified psychological and infrastructural barriers to technology use, these factors have not been connected to academic choice-making. This suggests a gap in technology that can both enhance students’ technical skills and advise them on suitable academic paths.',
          ],
        },
        {
          anchor: '2.1.5',
          title: '2.1.5. Major Recommendation Systems in Education',
          paragraphs: [
            'This research addresses the high failure and dropout rates in higher education; only 51.97% of students graduate on time in some regions because of major selection errors primarily [18]. To solve this, the study proposes a recommendation system using the Apriori algorithm (Association Rule mining) to identify connections between student background factors, school types, and academic success. The framework matches questionnaires about student interests and profiles with successful historical patterns to ensure that new students receive more valid suggestions that align with their personal characters and capabilities.',
            "Researchers at Fordham University introduced a College Major Recommendation System using nine years of data from over 18,000 students to mitigate the risk of choosing a poor major [19]. This model uses collaborative filtering to analyze actual student performance in core curriculum courses during the first two years of college. The results demonstrate that the system is 61% accurate in placing a student’s final major in its 'Top Five' list and students who follow the system’s advice are 15% more likely to perform above average than those who choose their major by themselves.",
            'This study proposes a Fuzzy-Based Recommendation System (FRS) to handle the high levels of uncertainty and overlapping criteria built in university admissions. Using Fuzzy Logic, the system converts grades and test scores into linguistic variables (Low, Medium, High) to determine which majors a student is academically applicable for [20]. Then, it applies a cluster-based preference technique to measure student interests through keywords. The final recommendation is the joining of the two sets: majors where the student is both qualified to enter and personally motivated to succeed.',
            'The researchers offer a variety of solutions ranging from interest-driven association rules to grade-driven collaborative filtering and fuzzy logic models that bridge the gap between academic qualification and personal aspiration. These frameworks provide a scientific foundation to replace subjective advice from relatives with data-driven decision support systems, ultimately fostering self-efficacy and increasing long-term educational productivity.',
          ],
        },
        {
          anchor: '2.1.6',
          title: "2.1.6. Holland's RIASEC Theory of Vocational Interests",
          paragraphs: [
            'John L. Holland’s Theory of Vocational Personalities and Work Environments, commonly known as the RIASEC framework, provides a structured explanation of vocational behavior that helps practitioners and researchers in understanding why people choose certain careers, why they change jobs, and what leads to vocational satisfaction and achievement [21]. The theory proposes that people can be described as six personality types, such as Realistic (R), Investigative (I), Artistic (A), Social (S), Enterprise (E) and Conventional (C). Work environments can be classified using the same six types. The author reviews over 400 studies to validate the theory, showing its effectiveness across different ages, genders, and cultures.',
            'Despite RIASEC-based assessments are widely used in career counseling and computer-based systems such as the O*NET Interest Profiler, their application in localized, automated academic advising systems is still limited. In particular, there is a lack of adaptive systems in the Cambodian environment that utilize RIASEC-based profiling to provide personalized recommendations based on local educational opportunities.',
          ],
        },
      ],
      riasecTable: [
        {
          type: 'R - Realistic',
          description:
            'People who enjoy working with hands, tools, machines, or technology. They prefer practical tasks over social ones.',
          examples: ['Fixing hardware', 'Building networks', 'Programming'],
        },
        {
          type: 'I - Investigative',
          description:
            'People who enjoy thinking deeply, analysing data, and solving complex problems. They prefer working alone with ideas.',
          examples: ['Research', 'Mathematics', 'AI', 'Data analysis'],
        },
        {
          type: 'A - Artistic',
          description:
            'People who enjoy creativity, design, and self-expression. They prefer open and unstructured tasks.',
          examples: ['Graphic design', 'UI/UX', 'Digital art', 'Media'],
        },
        {
          type: 'S - Social',
          description:
            'People who enjoy helping, teaching, or working with other people. They prefer teamwork and communication.',
          examples: ['Teaching', 'Counselling', 'Team leadership'],
        },
        {
          type: 'E - Enterprising',
          description:
            'People who enjoy leading, persuading, and managing. They prefer tasks that involve decision-making and business.',
          examples: ['Marketing', 'Business management', 'Entrepreneurship'],
        },
        {
          type: 'C - Conventional',
          description:
            'People who enjoy organised, structured tasks with clear rules. They prefer working with systems, data, and procedures.',
          examples: ['Accounting', 'Data entry', 'System administration'],
        },
      ],
    },
    {
      anchor: '2.1.7',
      title: '2.1.7. Application of RIASEC in Academic Guidance',
      paragraphs: [
        "In the context of academic guidance, the RIASEC framework is extremely useful because it enables students to have a better understanding of their own interests and abilities, which in turn allows educational institutions to allocate them to appropriate fields and training programs [22]. By choosing academic tracks that correspond to their 'Holland Code,' students can build a foundation for future success and are likely to experience stability and satisfaction in the long run. Additionally, the combination of Machine Learning methods with the RIASEC model can accurately predict students' future subject choices, which in turn enables advisors to provide proactive and personalized academic counseling based on a student's underlying personality and learning style [22].",
        'However, such systems tend to rely on large historical datasets, which are not common in developing countries. Moreover, the existing implementations of such systems tend to be geographically biased towards developed countries. In order to address these limitations, content-based recommendation systems are preferred, as they do not depend on large historical user data and enable exact matching of student profiles with major-specific features.',
      ],
    },
    {
      anchor: '2.1.8',
      title: '2.1.8. Content-Based Filtering in Recommender Systems',
      paragraphs: [
        "Lops et al. indicated that content-based recommender systems (CBRS) are systems designed to guide users through a lot of information by suggesting items similar to those they have liked in the past [23]. There are three main types of the recommender systems which are collaborative filtering, content-based filtering, and hybrid approaches. Content-based filtering recommends items based on the similarity between a user's feature profile and the essential features of each item, independently of what other users have done. Collaborative filtering, by contrast, generates recommendations based on the behaviour or preferences of similar users.",
        "The author breaks down the field into several key areas. First, content analyzers extract structured features (e.g, keywords, concepts) from unstructured information like text or web pages to create a 'Represented Item'. Second, collecting user feedback and generalizing this data using machine learning to create a user profile. Third, matching the user profile against the attributes of new items to predict the user’s level of interest, often resulting in a ranked list of suggestions.",
        'To address the blind or uninformed career choices of Cambodian Grade 11 and 12 students, who are highly aware of STEM fields in general but lack detailed information about them, a high-precision recommendation system incorporating Content-Based Filtering (CBF) and the Cosine Similarity algorithm is required [15], [24]. By using TF-IDF weighting and thorough text processing (stemming and tokenization) to link particular student interests with detailed information about technical fields of study and the demands of the job market, such a system can reach an average precision of 88%, which is a substantial improvement over previous approaches. This technological solution can be seen as an extension of the RIASEC model, as it provides data-driven, personalized career paths that can alleviate the psychological transition by ensuring that educational choices are both personally meaningful and scientifically valid with respect to actual professional needs [15], [22], [23].',
        'This system provides the technical basis for the Sakol Life website where the recommendation is based only on the student’s own RIASEC scores and the RIASEC profiles stored for each major. It is the best choice because the system is new and does not have historical user data and matching should be personal - based on who the student is. Isinkaye, Folajimi, and Ojokoh confirm that content-based filtering is suitable well to situations where items can be described as feature vectors, which is exactly how this system represents each major [25].',
      ],
      recommenderTable: [
        {
          aspect: 'Main Idea',
          contentBased: 'Recommends items similar to what the user likes',
          collaborative: 'Recommends items liked by similar users',
          hybrid: 'Combines both user similarity and item similarity',
        },
        {
          aspect: 'Data Used',
          contentBased: 'User profile features + item features',
          collaborative: 'User behavior (ratings, clicks, purchases)',
          hybrid: 'Both user behavior and item features',
        },
        {
          aspect: 'Does it depend on Other Users?',
          contentBased: 'No ✗',
          collaborative: 'Yes ✓',
          hybrid: '(Partially) ?',
        },
        {
          aspect: 'Cold Start Problem',
          contentBased: 'Weak for new items',
          collaborative: 'Weak for new users/items',
          hybrid: 'Reduced compared to single methods',
        },
        {
          aspect: 'Personalization Level',
          contentBased: 'Based on individual preferences',
          collaborative: 'Based on community trends',
          hybrid: 'More accurate and balanced',
        },
        {
          aspect: 'Example',
          contentBased: '“Because you liked action movies…”',
          collaborative: '“Users like you also watched…”',
          hybrid: 'Combines both types of suggestions',
        },
      ],
    },
    {
      anchor: '2.1.9',
      title:
        '2.1.9. Weighted Vector Scoring and Question Design in Interest Quizzes',
      paragraphs: [
        'One of the most important design considerations for any digital assessment tool based on RIASEC is how individual quiz responses are combined into a single interest profile. The common method, illustrated by tools such as the O*NET Interest Profiler [26], is to assign a score on one or more RIASEC scales to each answer choice, and then sum these scores across all items to create a six-component profile vector. The weighted summation approach is conceptually simple and has been shown to be reliable across many different tools [27].',
        "In more advanced implementations, differential weights are given to individual questions based on their discriminatory power, which refers to the ability of the question's answer to distinguish between the six types of RIASEC. In this model, questions that obtain career motivation and the area of preference (Q12 and Q14) are given more weight than demographic and confidence questions, which is based on the idea that behavioral intentions and interest specificity are stronger predictors of academic fit than self-assessed ability [28].",
        "As far as the format of individual items is concerned, the system uses a combination of single-choice and Likert-scale items. The use of Likert-scale items (scored 1-5) is especially suited to the measurement of intensity of interest, rather than just the direction of interest, and has been the standard format of interest inventories since the original formulation by Likert [29]. The multi-item Q4, which asks students to rate their interest in seven technology sub-areas independently, draws on the format of the SII's Basic Interest Scales, which group items thematically to provide higher distinctive resolution on a single broad GOT dimension [30].",
      ],
    },
    {
      anchor: '2.1.10',
      title: '2.1.10. Synthesis',
      paragraphs: [
        'The important gaps that exist in the reviewed literature are: the lack of digital and personalized academic guidance systems in Cambodia, many existing systems depend greatly on large historical datasets that are not available in developing countries, the lack of integration of RIASEC profiling with content-based recommendation algorithms and there are few systems directly address the psychological burden related with uninformed major selection.',
        'To address these gaps, the proposed solution by developing a web-based decision support system that integrates a RIASEC-based, a psychological theory, and content-driven academic recommendation system, a computational technique, using cosine similarity, and these will offer personalized major and localized university information to students in Cambodia while aligning with the country’s STEM development objectives to help Cambodian students including in rural areas to make informed academic decisions with confidence and satisfaction.',
      ],
    },
    {
      anchor: '2.2',
      title: '2.2. Review of Related Systems',
      paragraphs: [
        'In conclusion, the existing systems can be classified into three categories: (1) Career assessment tools which lack university major matching, (2) AI admission advisors which lack a proper labor market context, and (3) Informational listings which lack personalization algorithms. The major drawback is that the existing systems are not able to provide verified Cambodian university information and suggest majors to students with the help of a recommendation system.',
      ],
      subsections: [
        {
          anchor: '2.2.1',
          title: 'TreyVisay',
          paragraphs: [
            'TreyVisay [31] offers career assessments and institutional listings for Cambodian students. Although it is backed by the government and is reliable, it is limited to career discovery rather than university major matching with the help of algorithms and lacks the sophistication of personalization.',
          ],
        },
        {
          anchor: '2.2.2',
          title: 'Kollegio.ai',
          paragraphs: [
            'Kollegio.ai [32] is an AI-based college recommendation and admission advisor. The only drawback is that it is designed for international students and lacks localization for Cambodia, as well as a recommendation system.',
          ],
        },
        {
          anchor: '2.2.3',
          title: 'SALA',
          paragraphs: [
            'SALA [33] is another university information provider that also offers services to students. The only advantage is that it is accessible to students and has formed partnerships with various universities. The drawback is that it lacks the sophistication of recommendation systems and is limited to providing information only.',
          ],
        },
      ],
      competitorTable: [
        {
          name: 'Sala',
          guestAccess: false,
          focusMajor: false,
          uxFriendly: true,
          dataCollected: false,
        },
        {
          name: 'TreyVisay',
          guestAccess: false,
          focusMajor: false,
          uxFriendly: false,
          dataCollected: true,
        },
        {
          name: 'Kollegio.ai',
          guestAccess: false,
          focusMajor: false,
          uxFriendly: true,
          dataCollected: false,
        },
        {
          name: 'Sakol Life',
          guestAccess: true,
          focusMajor: true,
          uxFriendly: true,
          dataCollected: true,
        },
      ],
    },
    {
      anchor: '2.3',
      title: '2.3. Tools and Technologies',
      paragraphs: [
        "This section describes the software tools and technologies to be used in building the Sakol Life platform. The tools were selected based on its suitability for a web-based application, support for Typescript to ensure type safety, availability of strong community documentation and support, and the compatibility with the developer's skills.",
        'TypeScript ensures type safety across the full stack, which is especially important for the structured numerical data involved in RIASEC vector calculations.',
        'Next.js powers the frontend, handling the Quiz Administration, Result Display, and Profile Dashboard through its Client/Presentation Layer architecture.',
        'Shadcn and Tailwind CSS provide customizable pre-built components and consistent, responsive styling across desktop and mobile. NestJS and Prisma ORM form the backend core.',
        'NestJS structures services like the Quiz Engine, Vector Calculator, and Recommendation Engine, while Prisma provides type-safe database queries for quiz attempts and user history.',
        'PostgreSQL and Supabase handle data persistence for user accounts, quiz attempts, RIASEC vectors, and recommendations. Supabase also manages authentication state and session handling.',
        'Google OAuth and Supabase Auth secure user registration and login, gating access to the Profile Dashboard.',
      ],
    },
    {
      anchor: '2.4',
      title: '2.4. Conceptual Framework of the Project',
      paragraphs: [
        'The diagram of the Conceptual Framework Diagram shows the iterative processes of the Agile Development Life Cycle, which is used in the development of the Sakol Life web platform. As depicted, the Agile Development Life Cycle is a continuous improvement process, which consists of several iterations of the development, evaluation, and improvement of the system. Instead of a linear progression, the Agile Development Life Cycle is depicted as a loop, which shows that the development of the system is a progressive improvement until the desired end product is obtained.',
        'The Agile Development Life Cycle starts with the Planning phase. In this phase, the development team obtains the requirements of the system based on the problems encountered by Cambodian high school students in choosing technology-related majors.',
        'The following step in the planning process is the Design phase. During this phase, the system architecture, database design, user interface layouts, and workflow for the algorithms are structured. This includes the design of the 12-question quiz, the mapping of the results to the six RIASEC dimensions, the design of the major vectors, and the design of the process for calculating the cosine similarity computation. Also designed during this phase are wireframes to ensure that the system is user-friendly and accessible in both Khmer and English.',
        'The following step in the process is the Implementation phase. This is where the actual implementation of the platform occurs. For this purpose, we use different technologies such as TypeScript, Next.js, Nest.js, PostgreSQL, and Prisma ORM to develop the user interface layer, business logic layer, quiz system, vector computation system, and recommendation system. These components are then integrated to ensure that there is smooth communication between the user interface and business logic layers.',
        'Then the system moves on to the next phase, which is the Testing phase. This is where the testing of the quiz scoring mechanism, the weighted vectors, and the cosine similarity algorithm is done. Bugs and logical issues are then identified and corrected accordingly so that the results are reliable and generated within the expected performance time.',
        'Once the testing is done, the system then moves on to the Evaluation phase. In this phase, the results are evaluated and analyzed accordingly. Feedback is also taken from the users, which includes the Grade 12 students and the recent graduates. This is done to evaluate the overall effectiveness of the system and ensure whether the objectives are met or not. It is also done to ensure whether the uncertainty factor is removed or not with the help of the developed system.',
        'The final phase is the Improvement phase. In this phase, the issues identified are corrected accordingly, and the overall system is improved. Once the improvements are done, the overall loop starts again with the planning phase.',
        'Overall, the conceptual model illustrates that the Sakol Life platform is developed through a continuous process of implementation, testing, evaluation, and refinement in accordance with the Agile model. This process continues to improve the system in terms of accuracy, usability, and reliability until the final outcome is realized in the form of a fully functional academic guidance web platform for Cambodian students.',
      ],
    },
  ],
}
