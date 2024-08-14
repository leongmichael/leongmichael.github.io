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
  },
}

const projects = [
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
    livePreview: 'https://devpost.com/software/velocitydraft',
  },
  {
    name: 'Electric Vehicle Infrastrucure Tool',
    description:
      'Provides the ability to estimate the requirements for charging infrastructure and the related electrical demands. Developed at Berkeley Lab.',
    stack: ['Javascript', 'Express', 'React', 'Node', 'MaterialUI', 'Python', 'NumPy', 'Pandas'],
    sourceCode: 'https://github.com/rongxinyin/ev-infrastructure-tool',
    livePreview: 'https://github.com/rongxinyin/ev-infrastructure-tool',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "C++",
  "Express",
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

export { header, about, projects, skills, contact }
