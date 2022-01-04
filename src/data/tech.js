import {
  SKILLS_DEI,
  SKILLS_PROFESSIONAL,
  SKILLS_TECH,
} from './enums';

const data = [
  {
    position: 'Senior Software Engineer',
    company: 'Newsela',
    timeline: ['2020', 'current'],
    skills: {
      tech: [
        SKILLS_TECH.REACT,
        SKILLS_TECH.PROSEMIRROR,
        SKILLS_TECH.GRAPHQL,
        SKILLS_TECH.NODE,
        SKILLS_TECH.APOLLO,
        SKILLS_TECH.DGRAPH,
        SKILLS_TECH.DJANGO,
      ],
      professional: [
        SKILLS_PROFESSIONAL.TECHNICAL_WRITING,
        SKILLS_PROFESSIONAL.AGILE_DEVELOPMENT,
        SKILLS_PROFESSIONAL.STAKEHOLDER_MANAGEMENT,
        SKILLS_PROFESSIONAL.DESIGN_SYSTEMS,
      ],
      dei: [
        SKILLS_DEI.MENTORSHIP,
        SKILLS_DEI.PEER_LEARNING
      ]
    },
    content: [
      'TK TK Lead verticals of work for the CMS team',
    ]
  },
  {
    position: 'Software Engineer',
    company: 'Newsela',
    timeline: ['2018', '2020'],
    skills: {
      tech: [
        SKILLS_TECH.REACT,
        SKILLS_TECH.PROSEMIRROR,
        SKILLS_TECH.GRAPHQL,
        SKILLS_TECH.NODE,
        SKILLS_TECH.APOLLO,
        SKILLS_TECH.DGRAPH,
        SKILLS_TECH.DJANGO,
      ],
      professional: [
        SKILLS_PROFESSIONAL.TECHNICAL_WRITING,
        SKILLS_PROFESSIONAL.AGILE_DEVELOPMENT,
        SKILLS_PROFESSIONAL.STAKEHOLDER_MANAGEMENT,
        SKILLS_PROFESSIONAL.DESIGN_SYSTEMS,
      ],
      dei: [
        SKILLS_DEI.MENTORSHIP,
        SKILLS_DEI.PEER_LEARNING
      ]
    },
    content: [
      'Maintain and build product at <a href="https://newsela.com/" target="_blank">Newsela</a>, an instructional content platform that helps students read by delivering articles and comprehension assessments tailored to their individual reading levels.',
      'As part of the CMS team, support editors and writers by developing a digital publishing suite that will better-support their workflows and allow for the addition of more-dynamic types of content.'
    ]
  },
  {
    position: 'Developer',
    company: 'Carbon Five',
    timeline: ['2018'],
    skills: {
      tech: [
        SKILLS_TECH.PYTHON2,
        SKILLS_TECH.PYTHON3,
        SKILLS_TECH.DJANGO,
        SKILLS_TECH.REACT
      ],
      professional: [
        SKILLS_PROFESSIONAL.CONSULTING,
        SKILLS_PROFESSIONAL.DESIGN_SYSTEMS,
        SKILLS_PROFESSIONAL.XP_DEVELOPMENT
      ]
    },
    // content: []
  },
  {
    position: 'Curriculum Consultant',
    company: 'Girls Who Code',
    timeline: ['2017', '2018'],
    skills: {
      tech: [
        SKILLS_TECH.JAVASCRIPT,

      ],
      professional: [
        SKILLS_PROFESSIONAL.CURRICULUM_DESIGN,
        SKILLS_PROFESSIONAL.TECHNICAL_WRITING
      ]
    },
    content: [
      'Set learning objectives and curriculum structure for Girls Who Code\'s Campus Web Development program, a national tuition-based summer course serving hundreds of US students. Determined best tools and practices for course curriculum and wrote hands-on tutorials for students on concepts such as HTML/CSS, Flexbox, JavaScript events, APIs, debugging, and project planning.'
    ]
  },
  {
    position: 'Developer',
    company: 'Big Wheel Brigade',
    timeline: ['2016', '2017'],
    skills: {
      tech: [
        SKILLS_TECH.RUBY_ON_RAILS,
        SKILLS_TECH.NODE,
        SKILLS_TECH.JAVASCRIPT,
        SKILLS_TECH.PHP,
        SKILLS_TECH.PYTHON2
      ],
      professional: [
        SKILLS_PROFESSIONAL.CONSULTING,
        SKILLS_PROFESSIONAL.CURRICULUM_DESIGN,
        SKILLS_PROFESSIONAL.TECHNICAL_WRITING
      ],
      dei: [
        SKILLS_DEI.CODES_OF_CONDUCT,
        SKILLS_DEI.MENTORSHIP,
        SKILLS_DEI.PEER_LEARNING
      ]
    },
    content: [
      'Developed and maintained a Rails application with more than 70k active users for a long-standing client, Catalog Choice.',
      'Mentored 46 new developers as part of the company\'s training program, Omaha Code School, reviewing and supervising their work in Ruby on Rails, PHP, Python, JavaScript, HTML, and CSS. Built internal scripts and applications in Node.js and Ruby to streamline school operations. Led course development of and instructed the school\'s part-time Web Development 101 program.',
      'Represented the company on issues of empathy, diversity, and inclusivity in tech.'
    ]
  }
];

export default data
