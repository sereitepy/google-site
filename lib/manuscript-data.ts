// lib/manuscript-data.ts

export type ManuscriptSubItem = {
  title: string
  page: number
  anchor: string
  children?: ManuscriptSubItem[]
}

export type ManuscriptItem = {
  title: string
  page: number
  href: string
  children?: ManuscriptSubItem[]
}

export const frontMatter: ManuscriptItem[] = [
  {
    title: 'Approval Sheet',
    page: 2,
    href: '/manuscript/front-matter#approval-sheet',
  },
  { title: 'Disclaimer', page: 3, href: '/manuscript/front-matter#disclaimer' },
  { title: 'Dedication', page: 4, href: '/manuscript/front-matter#dedication' },
  {
    title: 'Acknowledgment',
    page: 5,
    href: '/manuscript/front-matter#acknowledgment',
  },
  { title: 'Abstract', page: 6, href: '/manuscript/front-matter#abstract' },
  {
    title: 'Table of Contents',
    page: 7,
    href: '/manuscript/front-matter#table-of-contents',
  },
  {
    title: 'List of Tables',
    page: 9,
    href: '/manuscript/front-matter#list-of-tables',
  },
  {
    title: 'List of Figures',
    page: 10,
    href: '/manuscript/front-matter#list-of-figures',
  },
]

export const chapters: {
  slug: string
  title: string
  page: number
  sections: ManuscriptSubItem[]
}[] = [
  {
    slug: 'chapter-1',
    title: 'CHAPTER 1: INTRODUCTION',
    page: 1,
    sections: [
      { title: '1.1. Introduction', page: 1, anchor: '1-1' },
      { title: '1.2. Project Context', page: 4, anchor: '1-2' },
      { title: '1.3. Project Description', page: 14, anchor: '1-3' },
      { title: '1.4. Objectives of the Project', page: 15, anchor: '1-4' },
      {
        title: '1.5. Scope and Limitations of the Project',
        page: 16,
        anchor: '1-5',
        children: [
          { title: '1.5.1. Scope', page: 16, anchor: '1-5-1' },
          { title: '1.5.2. Limitations', page: 16, anchor: '1-5-2' },
        ],
      },
      { title: '1.6. Significance of the Project', page: 17, anchor: '1-6' },
      { title: '1.7. Definition of Terms', page: 18, anchor: '1-7' },
    ],
  },
  {
    slug: 'chapter-2',
    title: 'CHAPTER 2: REVIEW OF RELATED LITERATURE AND STUDIES',
    page: 20,
    sections: [
      {
        title: '2.1. Review of Related Literature',
        page: 20,
        anchor: '2-1',
        children: [
          {
            title:
              '2.1.1. Student Career Indecision and Major Selection Challenges',
            page: 20,
            anchor: '2-1-1',
          },
          {
            title:
              '2.1.2. STEM Education Trends in Southeast Asia and Cambodia',
            page: 20,
            anchor: '2-1-2',
          },
          {
            title:
              '2.1.3. Student Awareness on STEM and their choice on High School Track',
            page: 21,
            anchor: '2-1-3',
          },
          {
            title: '2.1.4. Students Experience with Technology',
            page: 21,
            anchor: '2-1-4',
          },
          {
            title: '2.1.5. Major Recommendation Systems in Education',
            page: 22,
            anchor: '2-1-5',
          },
          {
            title: "2.1.6. Holland's RIASEC Theory of Vocational Interests",
            page: 23,
            anchor: '2-1-6',
          },
          {
            title: '2.1.7. Application of RIASEC in Academic Guidance',
            page: 24,
            anchor: '2-1-7',
          },
          {
            title: '2.1.8. Content-Based Filtering in Recommender Systems',
            page: 25,
            anchor: '2-1-8',
          },
          {
            title:
              '2.1.9. Weighted Vector Scoring and Question Design in Interest Quizzes',
            page: 26,
            anchor: '2-1-9',
          },
          { title: '2.1.10. Synthesis', page: 27, anchor: '2-1-10' },
        ],
      },
      { title: '2.3. Tools and Technologies', page: 29, anchor: '2-3' },
      {
        title: '2.4. Conceptual Framework of the Project',
        page: 30,
        anchor: '2-4',
      },
    ],
  },
  {
    slug: 'chapter-3',
    title: 'CHAPTER 3: METHODOLOGY',
    page: 33,
    sections: [
      {
        title: '3.1. Requirement Specifications',
        page: 33,
        anchor: '3-1',
        children: [
          {
            title: '3.1.1. Functional Decomposition Diagram',
            page: 33,
            anchor: '3-1-1',
          },
          {
            title: '3.1.2. Relevance of the Technologies',
            page: 35,
            anchor: '3-1-2',
          },
        ],
      },
      {
        title: '3.2. Design',
        page: 38,
        anchor: '3-2',
        children: [
          {
            title:
              '3.2.1. Quiz Question Design and Answer Mapping to RIASEC Dimension',
            page: 38,
            anchor: '3-2-1',
          },
          {
            title: '3.2.2. Majors Selected to be Recommended',
            page: 50,
            anchor: '3-2-2',
          },
          {
            title:
              '3.2.3. Content-Based Filtering and Cosine Similarity Application',
            page: 56,
            anchor: '3-2-3',
          },
          { title: '3.2.4. User-Interface Design', page: 61, anchor: '3-2-4' },
          { title: '3.2.5. Data Design', page: 68, anchor: '3-2-5' },
        ],
      },
      { title: '3.3. Data Collection', page: 71, anchor: '3-3' },
      {
        title: '3.4. Development',
        page: 75,
        anchor: '3-4',
        children: [
          {
            title: '3.4.1. Software Specifications',
            page: 75,
            anchor: '3-4-1',
          },
          { title: '3.4.2. Hardware Specification', page: 78, anchor: '3-4-2' },
          { title: '3.4.3. Program Specification', page: 78, anchor: '3-4-3' },
          { title: '3.4.4. Programing Environment', page: 79, anchor: '3-4-4' },
          { title: '3.4.5. Deployment Diagram', page: 80, anchor: '3-4-5' },
        ],
      },
      {
        title: '3.5. Test Plan',
        page: 81,
        anchor: '3-5',
        children: [
          { title: '3.5.1. Unit Testing', page: 83, anchor: '3-5-1' },
          { title: '3.5.2. Integration Testing', page: 83, anchor: '3-5-2' },
          { title: '3.5.3. System Testing', page: 84, anchor: '3-5-3' },
          {
            title: '3.5.4. User Acceptance Testing (UTAUT)',
            page: 85,
            anchor: '3-5-4',
            children: [
              {
                title: '3.5.4.1. Performance Expectancy (PE)',
                page: 86,
                anchor: '3-5-4-1',
              },
              {
                title: '3.5.4.2. Effort Expectancy (EE)',
                page: 90,
                anchor: '3-5-4-2',
              },
              {
                title: '3.5.4.3. Social Influence (SI)',
                page: 91,
                anchor: '3-5-4-3',
              },
              {
                title: '3.5.4.4. Facilitating Conditions (FC)',
                page: 93,
                anchor: '3-5-4-4',
              },
            ],
          },
        ],
      },
      {
        title: '3.6. Implementation Plan',
        page: 93,
        anchor: '3-6',
        children: [
          { title: '3.6.1. Organization of study', page: 94, anchor: '3-6-1' },
          { title: '3.6.2. Timeline', page: 96, anchor: '3-6-2' },
          {
            title: '3.6.3. Implementation Issues and Challenges',
            page: 98,
            anchor: '3-6-3',
          },
        ],
      },
    ],
  },
]

export const backMatter: ManuscriptItem[] = [
  { title: 'References', page: 99, href: '/manuscript/back-matter#references' },
  {
    title: 'Appendices',
    page: 106,
    href: '/manuscript/back-matter#appendices',
  },
]

export const appendixItems: ManuscriptSubItem[] = [
  { title: "Researcher's Curriculum Vitae", page: 106, anchor: 'cv' },
  { title: 'Appendix A: Survey Design', page: 110, anchor: 'appendix-a' },
  {
    title: 'Appendix B: Additional Preliminary Survey Responses',
    page: 129,
    anchor: 'appendix-b',
  },
  { title: 'Appendix C: Endorsement Letters', page: 131, anchor: 'appendix-c' },
  {
    title: 'Appendix D: Quiz Questions Validated by Ms. Solynet Sao',
    page: 134,
    anchor: 'appendix-d',
  },
]
//lib/manuscript-data.ts