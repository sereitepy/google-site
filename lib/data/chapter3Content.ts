// @/lib/data/chapter3Content.ts

export interface TechnologyRow {
  category: string
  tools: string
  justification: string
}

export interface QuizSummaryRow {
  qNum: string
  description: string
  format: string
  riasecDimension: string
  weight: number
}

export interface QuizOption {
  option: string
  text: string
  score: number
  dimension: string
}

export interface DetailedQuizQuestion {
  qNum: string
  text: string
  format: string
  weight: number
  dimensions: string
  options?: QuizOption[]
  justification: string
}

export interface Chapter3SubSection {
  anchor: string
  title: string
  paragraphs: string[]
}

export interface MajorVectorRow {
  id: number
  major: string
  code: string
  focus: string
  riasecCode: string
  vector: string
}

export interface ApiEndpointRow {
  method: string
  path: string
  auth: string
  who: string
  description: string
}

export interface TestingPlanRow {
  id: string
  target: string
  input: string
  outcome: string
  method?: string
  params?: string
}

export interface SystemTestingRow {
  id: string
  scenario: string
  steps: string
  criteria: string
}

export interface OrganizationRow {
  task: string
  assignee: string
  isHeader?: boolean
}

export interface Chapter3Section {
  anchor: string
  title: string
  paragraphs: string[]
  subsections?: Chapter3SubSection[]
  techTable?: TechnologyRow[]
  quizSummaryTable?: QuizSummaryRow[]
  quizQuestions?: DetailedQuizQuestion[]
}

export interface Chapter3DataType {
  chapter: string
  title: string
  sections: Chapter3Section[]
}

// Global Static Visual Asset Tables Map
export const majorVectorsTable: MajorVectorRow[] = [
  {
    id: 1,
    major: 'Computer Science / IT',
    code: 'CS',
    focus: 'Algorithms, software engineering, systems programming',
    riasecCode: 'IRC',
    vector: 'I=1.0, R=1.0, C=1.0',
  },
  {
    id: 2,
    major: 'Artificial Intelligence',
    code: 'AI',
    focus: 'Machine learning, neural networks, intelligent systems',
    riasecCode: 'IRA',
    vector: 'I=1.0, R=0.8, A=0.5',
  },
  {
    id: 3,
    major: 'Data Science',
    code: 'DS',
    focus: 'Statistics, data analysis, data visualisation',
    riasecCode: 'ICE',
    vector: 'I=1.0, C=0.8, E=0.5',
  },
  {
    id: 4,
    major: 'Software Development',
    code: 'SD',
    focus: 'Frontend/backend development, mobile apps, UX',
    riasecCode: 'RAI',
    vector: 'R=1.0, A=1.0, I=0.5',
  },
  {
    id: 5,
    major: 'Cybersecurity',
    code: 'CYB',
    focus: 'Network defence, ethical hacking, digital forensics',
    riasecCode: 'RIC',
    vector: 'R=1.0, I=1.0, C=0.9',
  },
  {
    id: 6,
    major: 'Network Engineering',
    code: 'NET',
    focus: 'Network infrastructure, routing, server administration',
    riasecCode: 'RIC',
    vector: 'R=1.0, I=0.7, C=0.8',
  },
  {
    id: 7,
    major: 'Digital Design',
    code: 'DD',
    focus: 'UI/UX design, graphic design, multimedia production',
    riasecCode: 'AES',
    vector: 'A=1.0, E=0.5, S=0.4',
  },
  {
    id: 8,
    major: 'Digital Business',
    code: 'DB',
    focus: 'E-commerce, digital marketing, entrepreneurship',
    riasecCode: 'ESC',
    vector: 'E=1.0, S=0.7, C=0.5',
  },
  {
    id: 9,
    major: 'Management Information Systems',
    code: 'MIS',
    focus: 'Business IT, enterprise systems, project management',
    riasecCode: 'ECS',
    vector: 'E=0.9, C=0.8, S=0.6',
  },
]

export const apiEndpointsTable: ApiEndpointRow[] = [
  {
    method: 'GET',
    path: '/api/quiz/questions',
    auth: 'None',
    who: 'Guest / User',
    description:
      'Fetch all 12 active questions with answer options, ordered by display_order.',
  },
  {
    method: 'POST',
    path: '/api/quiz/submit',
    auth: 'None',
    who: 'Guest / User',
    description:
      'Submit answers as flat map. Computes student vector, runs cosine similarity, stores attempt and results.',
  },
  {
    method: 'POST',
    path: '/api/quiz/merge-guest-attempt',
    auth: 'JWT',
    who: 'User',
    description:
      'Links historical guest session quiz entries into a newly registered account.',
  },
  {
    method: 'GET',
    path: '/api/quiz/history',
    auth: 'JWT',
    who: 'User',
    description:
      'Returns total quiz attempt history count displayed on Profile Dashboard.',
  },
  {
    method: 'GET',
    path: '/api/majors',
    auth: 'None',
    who: 'Guest / User',
    description:
      'Returns all 9 technology majors with complete structural meta details.',
  },
  {
    method: 'GET',
    path: '/api/majors/{id}',
    auth: 'None',
    who: 'Guest / User',
    description:
      'Returns individual major profile, underlying baseline vector coordinates, and focus areas.',
  },
  {
    method: 'GET',
    path: '/api/majors/results/{attemptId}',
    auth: 'None',
    who: 'Guest / User',
    description:
      'Returns ranked selection array data matches above the absolute 50% entry bar filter.',
  },
  {
    method: 'POST',
    path: '/api/majors/{majorId}/select',
    auth: 'None',
    who: 'Guest / User',
    description:
      'Saves selected major option. Guest state attaches using persistent session hashes.',
  },
  {
    method: 'GET',
    path: '/api/universities/by-major/{majorId}',
    auth: 'None',
    who: 'Guest / User',
    description:
      'Returns Cambodian university directory components matching target major queries.',
  },
  {
    method: 'POST',
    path: '/api/auth/register',
    auth: 'None',
    who: 'Guest',
    description:
      'Validates credentials and constructs profile objects. Transmits signed JWT.',
  },
]

export const unitTestingData: TestingPlanRow[] = [
  {
    id: 'UT-01',
    target: 'RIASEC Vector Calculator',
    input: '12 responses with all maximum scores assigned to Realistic (R)',
    outcome: 'R dimension weight = 1.0, all other dimensions = 0.0.',
  },
  {
    id: 'UT-02',
    target: 'RIASEC Vector Calculator',
    input: '12 responses evenly distributed across all six Holland types',
    outcome:
      'Computes balanced equal matrix vectors across R, I, A, S, E, C profiles.',
  },
  {
    id: 'UT-03',
    target: 'Cosine Similarity Function',
    input:
      'Student interest [1,0,0,0,0,0] vs Major criteria vector [1,0,0,0,0,0]',
    outcome:
      'Similarity score outputs 1.00 exactly (100% directional alignment).',
  },
  {
    id: 'UT-04',
    target: 'Cosine Similarity Function',
    input:
      'Student interest [1,0,0,0,0,0] vs Major criteria vector [0,1,0,0,0,0]',
    outcome:
      'Similarity score outputs 0.00 exactly (0% match index pattern alignment).',
  },
  {
    id: 'UT-05',
    target: 'Cosine Similarity Function',
    input:
      'Student vector [0.6, 0.8, 0, 0, 0, 0] vs Major profile [0.8, 0.6, 0, 0, 0, 0]',
    outcome: 'Similarity score evaluates to 0.96 (Displayed natively as 96%).',
  },
]

export const integrationTestingData: TestingPlanRow[] = [
  {
    id: 'IT-01',
    target: 'POST /api/auth/register',
    input: 'Valid unique email and password in JSON body structure',
    outcome:
      '201 Created: DB row safely instantiated, user identity assigned, token generated.',
  },
  {
    id: 'IT-02',
    target: 'POST /api/auth/register',
    input: 'Duplicate email target conflict input parameter tracking',
    outcome:
      '409 Conflict: API strategy terminates sequence, reporting error string back to view.',
  },
  {
    id: 'IT-03',
    target: 'POST /api/auth/login',
    input: 'Matching active login profile parameters',
    outcome:
      '200 OK: Explicit valid JWT payload returned, authorization headers populated.',
  },
  {
    id: 'IT-04',
    target: 'POST /api/quiz/submit',
    input:
      '12 integer score array alongside a valid Authorization token header',
    outcome:
      '200 OK: Instantly executes 6D matrix conversion, returns ranked array list results.',
  },
]

export const systemTestingData: SystemTestingRow[] = [
  {
    id: 'ST-01',
    scenario: 'Registered user workflow test run',
    steps: 'User Session Logged -> /quiz Path -> Fill 12 items -> Click Submit',
    criteria:
      'Results panel loads natively. Ranks top items cleanly using matching percentages.',
  },
  {
    id: 'ST-02',
    scenario: 'Descending sequence check on calculation grids',
    steps:
      'Inject predetermined metrics variables -> Track resulting order indices',
    criteria:
      'Rank 1 shows maximum alignment matrix. Downstream nodes follow standard descending pattern.',
  },
  {
    id: 'ST-03',
    scenario: 'Quiz view viewport reload preservation',
    steps:
      'Populate answers up to step 7 -> Fire browser hardware refresh trigger',
    criteria:
      'State hydration layers catch index markers, returning client to step 7.',
  },
]

export const organizationData: OrganizationRow[] = [
  {
    task: 'CHAPTER 1: INTRODUCTION',
    assignee: 'Reaksmey Meas',
    isHeader: true,
  },
  {
    task: '1.1 Project Introduction through 1.7 Definition Terms',
    assignee: 'Reaksmey Meas',
  },
  {
    task: 'CHAPTER 2: FRAMEWORK LITERATURE REVIEWS',
    assignee: 'Ratanakvisal Chhouk / Sereitepy Or',
    isHeader: true,
  },
  {
    task: '2.1.1 Indecision Trends through 2.1.10 Synthesis Summary',
    assignee: 'Ratanakvisal Chhouk',
  },
  {
    task: '2.2 Evaluation Related Alternatives & 2.3 Stack Matrix',
    assignee: 'Sereitepy Or',
  },
  {
    task: 'CHAPTER 3: ARCHITECTURAL SYSTEM METHODOLOGY',
    assignee: 'Everyone',
    isHeader: true,
  },
  {
    task: '3.1 Functional Requirements & Technology Relevance Schemes',
    assignee: 'Sereitepy Or',
  },
  {
    task: '3.2 Quiz Layout Configurations & Vector Models Processing',
    assignee: 'Sereitepy Or / Reaksmey Meas / Visal Chhouk',
  },
  {
    task: '3.3 Field Data Tracking Collections & Two-Phase Cycles',
    assignee: 'Reaksmey Meas / Ratanakvisal Chhouk',
  },
  {
    task: '3.4 Deployment Infrastructure Topology & 3.5 Verification Matrix',
    assignee: 'Sereitepy Or / Ratanakvisal Chhouk',
  },
]

export const chapter3Content: Chapter3DataType = {
  chapter: 'CHAPTER 3',
  title: 'METHODOLOGY AND SYSTEM DESIGN',
  sections: [
    {
      anchor: '3.2.3',
      title: '3.2.3. Content-Based Filtering and Cosine Similarity Application',
      paragraphs: [
        'This section outlines the way quiz responses are processed by the recommendation system to produce major suggestions for users. The platform uses content-based filtering, avoiding cold-start limitations by evaluating individual Student Vectors = [R, I, A, S, E, C] directly against the intrinsic characteristics of each academic program.',
        'To decide to what extent each major fits the interest profile of the student, the recommendation engine calculates the proximity angle between multidimensional vectors using Formula 3 (Cosine Similarity):',
        'Formula 3: cosine_similarity(A, B) = (A · B) / (|A| × |B|)',
        'The resulting values range between 0.0 and 1.0. Recommendations equal to or exceeding a 50% match (≥ 0.50) are ranked and displayed to high school students in descending order.',
      ],
    },
    {
      anchor: '3.2.4',
      title: '3.2.4. User-Interface Design Framework',
      paragraphs: [
        'The user interface minimizes cognitive load for high school graduates using clean layout views. This section coordinates the presentation logic maps for the system:',
        'Fig. 16: Landing Page Root View Dashboard Hub; Fig. 17: Interactive Staggered Multi-Step Quiz Window; Fig. 18: Recommended Major Ranking List Grid Panel; Fig. 19: Localized Course Matrix Information Panel; Fig. 20: Cambodian University Catalog Directory Map; Fig. 21: Tuition, Fees, and Scholarship Opportunity Tracker.',
      ],
    },
    {
      anchor: '3.2.5',
      title: '3.2.5. Data Design & RESTful Structural Planning',
      paragraphs: [
        'The database framework relies on a unified core Entity Relationship Diagram (Fig. 22), linking data objects across Users, Quiz Attempts, Majors, and Localized Universities.',
        'The backend layer exposes a stateless RESTful API structured by resource. Public directory paths load over open endpoints, while sensitive operations require JSON Web Tokens passed inside security verification request headers.',
      ],
    },
    {
      anchor: '3.3',
      title: '3.3. Longitudinal Field Data Collection Cycles',
      paragraphs: [
        'Data collection is divided into a structured two-phase improvement loop to combine qualitative research with empirical tracking metrics.',
        'Phase 1 (Preliminary Research and Problem Identification) analyzed competitor services (TreyVisay, Sala, Kollegio.ai) and collected initial survey data from 52 high school students to establish target problems.',
        'Phase 2 (Enrolled Student Survey, Document Review and System Evaluation) implements refinement tuning. Surveys collected from 135 university students currently tracking major lines across Cambodia (15 profiles per major) build the average dataset mean profiles.',
        'Formula 4 calculates the updated profile weight, balancing expert assignments with real-world student datasets: New Profile Weight = (0.3 × Expert Weight) + (0.7 × Enrolled Student Mean Weight).',
      ],
    },
    {
      anchor: '3.4',
      title: '3.4. Development Environment Specifications',
      paragraphs: [
        'This section logs the system specifications, tooling stacks, and hardware runtime matrix configurations making up the pipeline architecture environments.',
      ],
      subsections: [
        {
          anchor: '3.4.1',
          title: '3.4.1. Software Specifications',
          paragraphs: [
            'Frontend Environment: Next.js 16.1 (React 19 Core Engine), Typescript architecture, Tailwind CSS utilities layer, Shadcn/ui system primitives, and next-intl for English and Khmer translation views. Previews deploy on Vercel hooks, and production servers use DigitalOcean App Platform micro-instances (1vCPU, 512MB RAM standard nodes).',
            'Backend Environment: NestJS core engine using Prisma ORM 7.4 wrappers. Local development executes inside Docker Desktop containers running isolated PostgreSQL 17 images, while live staging routes into serverless Supabase managed platforms.',
          ],
        },
        {
          anchor: '3.4.5',
          title: '3.4.5. Deployment Diagram Topology Map',
          paragraphs: [
            'The platform architecture decouples view actions from data analysis operations. Local changes push through Git code trees directly to remote repositories. The testing infrastructure routes separate preview branches instantly before final validation sets are deployed to production clusters.',
          ],
        },
      ],
    },
  ],
}
