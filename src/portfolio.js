const header = {
  homepage: '',
  title: '',
}

const about = {
  name: 'Michael Leong',
  role: 'Studying Computer Engineering & Computer Science @ USC',
  description:
    '',
  resume: 'https://leongmichael.github.io/resume/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/m-leong/',
    github: 'https://github.com/leongmichael',
    orcid: 'https://orcid.org/0009-0000-9011-0120'
  },
}

const projects = [
  {
    name: 'LearnIt',
    description:
      'AI-powered video generator for math and physics based on user prompts.',
    stack: ['Javascript', 'Electron', 'React', 'MaterialUI', 'Python', 'Manim', 'Google Gemini 1.5', 'FastAPI', 'Deepgram'],
    sourceCode: 'https://github.com/leongmichael/learn-it',
    livePreview: 'https://github.com/leongmichael/learn-it',
  },
  {
    name: 'Canvas Final Grade Calculator',
    description:
      'Web extension that fetches your Canvas grade and calculates the final exam score needed for your desired grade.',
    stack: ['TypeScript', 'React', 'Node', 'MaterialUI'],
    sourceCode: 'https://github.com/leongmichael/canvas-final-grade-calculator',
    livePreview: 'https://chromewebstore.google.com/detail/canvas-final-grade-calcul/dmbbpohkjofcbbibpfjmhobfebgckihm',
  },
  {
    name: 'Velocity Draft',
    description:
      'Flexible application essay writing scheduler. Third place in Onehacks III Hackathon.',
    stack: ['TypeScript', 'React', 'Node', 'MaterialUI'],
    sourceCode: 'https://github.com/shuklabhay/velocity-draft',
    livePreview: 'https://shuklabhay.github.io/velocity-draft/',
  },
  {
    name: 'Demand Flexibility Assessment Tool',
    description:
      'Web tool for small and medium buildings to assess demand flexibility, estimate electricity usage, and identify ways to cut costs during peak prices. Developed at Berkeley Lab.',
    stack: ['Javascript', 'Express', 'React', 'Node', 'MaterialUI', 'Python', 'NumPy', 'Pandas'],
    sourceCode: 'https://github.com/rongxinyin/DF-Assessment-Tool',
    livePreview: '',
  },
  {
    name: 'Electrical Vehicle Charging Infrastructure Planning Tool',
    description:
      'Provides the ability to estimate the requirements for charging infrastructure and the related electrical demands. Developed at Berkeley Lab.',
    stack: ['Javascript', 'Express', 'React', 'Node', 'MaterialUI', 'Python', 'NumPy', 'Pandas'],
    sourceCode: 'https://github.com/rongxinyin/ev-infrastructure-tool',
    livePreview: '',
  },
]

const publications = [
  {
    title: 'DFAT: A Web-Based Toolkit for Estimating Demand Flexibility in Building-to-Grid Integration',
    description: 'Web tool for small and medium buildings to assess demand flexibility, estimate electricity usage, and identify ways to cut costs during peak prices.',
    citation: 'Leong, Michael and Mahanta, Medha and Yin, Clara and Garcia, TJ and Tan, Zach and Prakash, Anand K. and Black, Doug and Yin, Rongxin, DFAT: A Web-Based Toolkit for Estimating Demand Flexibility in Building-to-Grid Integration. Available at SSRN: https://ssrn.com/abstract=4968003 or http://dx.doi.org/10.2139/ssrn.4968003',
    link: 'https://ssrn.com/abstract=4968003'
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "C++",
  "Express",
  'Electron',
  "Firebase",
  "Flask",
  "Git",
  "GitHub Actions",
  "Java",
  "JavaScript",
  "Matplotlib",
  "MongoDB",
  "Node",
  "NumPy",
  "Onshape",
  "Pandas",
  "Python",
  "React",
  "SQL",
  "TensorFlow",
  "TypeScript",
]

const contact = {
  email: 'mtleong@usc.edu',
}

export { header, about, projects, skills, contact, publications }
