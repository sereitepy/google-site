export interface FigureData {
  id: string
  label: string
  title: string
}

export interface DefinitionTerm {
  term: string
  definition: string
}

export interface SectionContent {
  anchor: string
  paragraphs: string[]
  figures?: FigureData[]
  termsTable?: DefinitionTerm[]
  subsections?: {
    anchor: string
    title: string
    paragraphs: string[]
  }[]
}

export const chapter1Content: {
  slug: string
  sections: SectionContent[]
} = {
  slug: 'chapter-1',
  sections: [
    {
      anchor: '1-1',
      paragraphs: [
        'Cambodia is characterized by a unique education system that has undergone a lot of developments since the mid-1990s due to national reforms and expansion [1], [2]. The country has followed a 12-year general education framework since 1996, including six years of primary (Grade 1 to 6), three years of lower secondary (Grade 7 to 9), three years of upper secondary education (Grade 10 to 12) and then students move to higher education [1], [2]. This system is managed by the Ministry of Education, Youth and Sport (MoEYS), who is in charge of building the curriculum and examinations at the national level [1], [2].',
        'Since the year 2011, Grade 11 students will be asked to select either the Natural Science track or the Social Science track [1]. Students in the two tracks still study a variety of subjects, but the difference is in the subjects of their focus and the national exams [1]. Students in the Natural Science track focus more on mathematics and science subjects whereas students in the Social Science track focus more on Khmer Literature and Social Studies [1]. On completion of Grade 12, students are taken through Baccalaureate Examination (Bac II), a standard national exit examination that establishes whether a student graduates the upper secondary school and is eligible to join the university [1]. After passing the national Bac II examination, students are then able to continue to higher education, typically with a four-year bachelor degree [1].',
        'As students reach this stage of their academic venture, a significant number of Cambodian students have difficulties in selecting the appropriate major, especially in the technology field [3]. One of the primary causes is inaccessibility and localized guidance [4]. Students are not always in a good position to realize what various majors in technology entail, the skills they need, and the kinds of careers they will take [4]. The other problem is that the available tools that assist students to select majors are not Cambodian based education [5]. Most websites are dedicated to international universities and might not be representative of the Cambodian ones [5]. Additionally, most of the tools available only in the English language [6]. Even with all the information that is already available in Cambodia, access to higher education is very centralized in Phnom Penh, which is home to well-known universities and academic support facilities. Therefore, there is less access to career preparation services and higher education advice in the provincial areas, leaving students with limited resources to help them transition to university [7], [8]. Due to this gap, the Cambodian students, especially in the rural area, might not get relevant guidance to their situation.',
        'As students majoring in Management Information Systems, the project team has personally witnessed this problem on high school graduates and first year university students. There is a lot of unfamiliarity among students on what each majors are, like Web Development, MIS , or Digital Business.',
        'Figure 1 displays the survey outcomes indicating the majors that students know best associated with technology. Most students stated that they were aware of Information Technology (IT) and Computer Science, then Software Engineering and Data Science/AI. Less students knew about majors like Cybersecurity, Digital Business, Management Information Systems, and Digital Design/Multimedia.',
        'Figure 2 displays the leading sources that students use to access knowledge regarding university majors and institutions. The findings also suggest that the family and friends are the main resources relied upon by the majority of students, then there are also social media platforms like Facebook and Tik Tok. Often used sources were also teachers and school websites and the less frequently used are education fairs and personal research. These results indicate that students mostly rely on informal or social sources as opposed to formal academic instructions.',
        'These scenarios illustrate why a simple and localized guide platform is required. Thus, this project proposed a web platform called “Sakol Life”, which is a guidance for grade 12 and recent graduates in choosing technology-related majors.',
      ],
      figures: [
        {
          id: 'fig-1',
          label: 'Fig. 1',
          title: 'Technology Majors Students are Familiar with',
        },
        {
          id: 'fig-2',
          label: 'Fig. 2',
          title:
            'Sources of Information about Majors/Universities that Students get from',
        },
      ],
    },
    {
      anchor: '1-2',
      paragraphs: [
        'The project Sakol Life is specifically targeted at Cambodian students who are about to get higher education after high school, whether they are in grade 12, or just finished the national exam. The platform is aimed at assisting students in learning about the available technology majors in Cambodian universities. The project will give more relevant and easily understood information by addressing the local education system, which Cambodian students find easier to grasp.',
        'The document published by the Ministry of Industry, Science, Technology and Innovation (MISTI) of Cambodia was taken as the source of the list of technology majors used in the course of the given project [9]. The document gives details of STEM majors and Cambodian universities with information technology, engineering, and other technology majors [9]. This source was taken as a starting point to find out the majors, which are applicable in the Cambodian higher education system.',
        'Due to the small number of team members and the time constraints set by the capstone project, the team chose to undertake only the majors of technology rather than encompass all the STEM disciplines. This approach contributed to making the project realistic and easy to manage and at the same time serve an important need among students who are interested in technological careers.',
        'The team looked at the list of majors and utilising the Ministry document, realised that certain majors had varying names but highly similar course content. These majors were combined and brought together in order to make the system easier and simpler to use. Following this, nine ultimate technology majors were chosen to the platform: Computer Science / IT, Artificial Intelligence, Data Science, Software Development, Cybersecurity, Network Engineering, Digital Design, Digital Business, and Management Information Systems.',
        'In order to gain a better insight into the challenges students experience in selecting university majors, a preliminary survey was conducted concerning 52 Grade 12 students at Bak Touk High School. The survey was meant to determine how aware the students are about the majors associated with technology, what the students rely on to get information about universities and the challenges that students face when making their choices regarding their future major. The survey was conducted directly at the high school, through both online and paper-based to ensure all respondents can comfortably decide how they want to take the survey.',
        'The outcomes of this survey give preliminary data about the decision-making process of the students and reveal the absence of available guidance tools that would help them choose the most appropriate majors. These results emphasize the necessity of a platform like Sakol Life that will help students find out which technology majors suit their interests and future ambitions.',
        'From Figure 3, most respondents are from 14-17 years old or 18 years age group. This indicates that our main target users are in this age group which are most possibly from grade 11, 12 and recent graduates.',
        'In Figure 4, it shows that more than 25 students study science track while 3 students study social science track. This highlights that the majority of students tend to choose studying science track more than social science track.',
        'From Figure 5, 58.3% of respondents are sometimes worrying and 33.3% of them are always worrying about choosing the wrong path when thinking of the future. Only 8.3% of the respondents are never worried. This shows that most of the students are worrying about their academic path or major in the future.',
        "Figure 6 illustrates students’ most of the student's biggest challenges when choosing a major are that they do not understand what different majors lead to, worry about job opportunities after graduation, do not know which universities are good for each major and afraid of choosing something that is too difficult respectively. 13 students' issues are that their parents’ expectations conflict with their interest. This highlights the most common challenge is that students do not understand what different majors lead to, and have fear of choosing something too difficult.",
        'Figure 7 illustrates the majority of students worry most about choosing a major are that tuition fee is too expensive. Between 22 and 16% of students worry that they might regret it later, math and science are too hard, and they are not “smart enough”. Less than that, they have nothing to worry about, they do not know what the job is really and others besides the options we set for them to choose.',
        'Figure 8 shows that 12 students are moderately clear about what major they want to study. 7 respondents are not clear, 8 respondents are more clear. 4 students are very clear and 10 students are less clear. This highlights how confident students feel about their chosen path.',
        'Figure 9 illustrates that 56.7% of students are considering a major in technology. 36.7% of students are not sure and only 6.7% of them are not considering. This highlights what many students consider a major in the technology field that is our main field of study.',
        'Figure 10 demonstrates the least number of students which accounts for 6.7% of students are very interested in technology-related majors and 30% of them are less interested. 30% of students are moderately interested and 20% of them are less interested. 13.7% are not interested in technology-related majors. This highlights the majority of students are interested in technology-related majors.',
        'Figure 11 shows that most of the respondents that account for 90.9% are interested in choosing a technology major at the best university and are willing to put forth their future, and 9.1% of students are not interested and want an easier path. This highlights that most of the students are interested in studying at the best university for technology majors.',
      ],
      figures: [
        {
          id: 'fig-3',
          label: 'Fig. 3',
          title: 'Possible Target Ages Received from the Survey',
        },
        { id: 'fig-4', label: 'Fig. 4', title: 'Students High School Track' },
        {
          id: 'fig-5',
          label: 'Fig. 5',
          title: 'Students Worriness on Choosing Wrong Study Path',
        },
        {
          id: 'fig-6',
          label: 'Fig. 6',
          title: 'Biggest Challenge When Choosing a Major',
        },
        {
          id: 'fig-7',
          label: 'Fig. 7',
          title: 'What Worries Students Most About Choosing a Major',
        },
        {
          id: 'fig-8',
          label: 'Fig. 8',
          title: 'Students clarities on their Choice of Major',
        },
        {
          id: 'fig-9',
          label: 'Fig. 9',
          title: 'Students Considering a Major in Technology Field',
        },
        {
          id: 'fig-10',
          label: 'Fig. 10',
          title: 'Students Interests in Technology-related Major',
        },
        {
          id: 'fig-11',
          label: 'Fig. 11',
          title:
            'Students Interests in choosing a Technology major at the Best University',
        },
      ],
    },
    {
      anchor: '1-3',
      paragraphs: [
        'Sakol Life welcomes Cambodian students who desire to learn technology majors prior to joining university as well as individuals, who are interested or have little-to-no knowledge on the subject. The platform will be in both Khmer and English to ensure that the students are able to grasp the information and navigate the system with ease. The platform specialises in the technology-related majors in Cambodian universities.',
        'The primary characteristic of the platform is the feature known as the Personal Package. It is a 12-question quiz, which is designed to gain insight into the interests of a student for technologies. The questions will be structured to provide a general impression of what kind of technology major can be suitable to the student.',
        'Once the quiz is completed by the students the system calculates the answers, and all responses add various marks to the nine majors in technology that are contained in the system. The scores are computed and transformed into a percentage match of each major. This enables the platform to predict the fit of each of the majors towards the responses of the student.',
        'Only majors with a match of 50% or more are shown in the system in order to make the results clear and meaningful. These majors are shown by ranking, with the highest match major being on top. Students may explore these majors with filters e.g. Field of Study, Job Market Demand, and Program Duration. Every major includes detailed information and a list of universities in Cambodia that offer the program so that students do not have to waste time in learning about appropriate majors and where they can study.',
      ],
    },
    {
      anchor: '1-4',
      paragraphs: [
        'The primary objective for this project is to develop a web platform for high-schoolers and recent high school graduates, in terms of finding technology related majors, universities information, tuition fees, scholarships for the recommended major of study. The website will include the following key objectives to address the students needs that could provide them clear insights in choosing the right technology major:',
        '• Design and develop a bilingual (Khmer/English) web platform, guiding Cambodian students in choosing the right majors in the technology field.',
        '• Create a 12-question personal package quiz grounded in Holland’s Theory of Vocational Personalities and Work Environments to assess major fit.',
        '• Implement a “Weighted Vector Scoring” to rank technology major matches based on quiz answers.',
        '• Compile and present detailed, locally-sourced information on nine technology majors.',
        '• To provide information about Cambodian universities offering these technology majors.',
        '• Deploy this web platform to make it easily accessible to all students in Cambodia.',
      ],
    },
    {
      anchor: '1-5',
      paragraphs: [],
      subsections: [
        {
          anchor: '1-5-1',
          title: '1.5.1. Scope',
          paragraphs: [
            'This project aims at developing an online guidance system which will support Cambodian high-school students to investigate technology-related study opportunities. The system focuses on the delivery of organized information that enables the users to grasp the available academic opportunities in the technology area within a short time. The platform lists the technology majors that have been selected and links them to the Universities in Cambodia which offer these majors. Under each major, users have the option to look at important information including the focus of the study, future career path, tuition costs, and institutions. Students are given recommended majors by responding to a short interest-based questionnaire. The platform will also be easily accessible via web browser and readable by local students using both Khmer and English. Moreover, it has filtering capabilities where users can browse majors and compare them effortlessly.',
          ],
        },
        {
          anchor: '1-5-2',
          title: '1.5.2. Limitations',
          paragraphs: [
            'There several areas that are deliberately omitted from the scope of this project for future development to ensure a successful deployment of the project within the timeframe. The system focuses on majors related to technology. The current version does not include other academic disciplines like business, medicine, law, arts or broader STEM fields. The information available in the platform on the universities in Cambodia is include a few institutions in the country and is not a national database with all programs in the country. The recommendation feature will give recommendations according to responses given in questionnaires, but does not substitute academic advising by professionals or career assessment instruments that are psychological in nature. The platform is an informational guide, where application processing, admission services, and direct communication with universities are not involved. Moreover, the project excludes sophisticated user customization options like long-term user accounts, behavioural tracking, and machine-learning-specific recommendations. The system could be expanded in the following directions in the future.',
          ],
        },
      ],
    },
    {
      anchor: '1-6',
      paragraphs: [
        'The Sakol Life platform is created to offer a number of advantages to students and Cambodian education awareness. First, it provides the Cambodian students with a modern platform that can assist them to discover technology majors. Being offered both in Khmer and English and targeting Cambodian universities, students will be able to find the information that is easier to comprehend and closer to their circumstances.',
        'Second, the system assists in minimizing the probability of students selecting the major that is not related to his or her interests. The platform suggests personalized major recommendations depending on responses of the user through a scoring system and quiz. This will enable students to have a glimpse of the technology majors that can better suit them before they can make a choice concerning their studies.',
        'The platform also helps to make better decisions as it supplies information regarding actual universities in Cambodia where these majors are provided. Students will not have to go through numerous websites to look into the majors and will have a chance to learn about where they can study them. This simplifies and facilitates the process of researching higher education options.',
        'Besides, the project helps to raise awareness about technology and education on STEM in Cambodia. The platform allows students to be interested in other majors in technology by assisting them to learn about the various majors that are significant in the future labor force of the country as well as the digital growth of the country.',
        'Lastly, the project may act as a basis of improvement in the future. The system emphasizes technology majors in the meantime, though the same concept and design can be extended to other STEM professions like science and engineering, as well as mathematics. This implies that the platform can expand to include a wider range of guidance to Cambodian students.',
      ],
    },
    {
      anchor: '1-7',
      paragraphs: [
        'To ensure that there are no misunderstandings when it comes to conceptualizing this project, the following key terms are defined:',
      ],
      termsTable: [
        {
          term: 'Sakol Life',
          definition:
            'A Web based service designed within the project to assist the Cambodian high school students select appropriate technology related majors and universities.',
        },
        {
          term: 'Technology-Related Majors',
          definition:
            'Courses that have to do with computing and technology like Computer Science, Software engineering, Data science and Information Technology.',
        },
        {
          term: 'Recommendation System',
          definition:
            'A system that recommends appropriate majors and universities depending on the information the user provides, specifically their interests.',
        },
        {
          term: 'Weighted Vector Scoring',
          definition:
            'A method used to calculate recommendation results by assigning different importance levels (weights) to quiz responses and matching them with predefined major profiles to find the best fit.',
        },
        {
          term: 'RIASEC Framework',
          definition:
            'A career interest model that groups interests into six types: Realistic, Investigative, Artistic, Social, Enterprising, and Conventional.',
        },
        {
          term: 'Content-Based Filtering (CBF)',
          definition:
            'A recommendation method that suggests items by matching a user’s profile with item characteristics, without using other users’ data.',
        },
        {
          term: 'Cosine Similarity',
          definition:
            'A mathematical measure that calculates how similar two vectors are by measuring the angle between them.',
        },
        {
          term: 'Web-Based Platform',
          definition:
            'An application that is browser-based and does not need to be installed, and requires access to the internet.',
        },
        {
          term: 'Career Pathway',
          definition:
            'The potential employment or career prospects of a particular academic major.',
        },
        {
          term: 'EdTech',
          definition:
            'The use of software, platforms, and digital tools to assist in teaching, learning, and educational decision-making.',
        },
        {
          term: 'Personal Package',
          definition:
            "A personalized list of suggestions produced by the system according to a student's preferences, interests, and quiz results. It offers relevant information and appropriate technology majors.",
        },
        {
          term: 'STEM',
          definition:
            'An abbreviation for the academic disciplines of science, technology, engineering, and mathematics that emphasize technical and scientific domains.',
        },
        {
          term: 'Higher Education',
          definition:
            'Education that leads to academic degrees or professional certifications and is usually offered by universities, colleges, or other higher learning institutions after secondary school completion.',
        },
      ],
    },
  ],
}
