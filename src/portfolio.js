const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
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
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Canvas Final Grade Calculator',
    description:
      'Google Chrome Web extension that automatically fetches Canvas class grade and calculates the required score on your final exam to receive your desired grade.',
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
      'Provides the ability to estimate the requirements for charging infrastructure and the related electrical demands.',
    stack: ['Javascript', 'Express', 'React', 'Node', 'MaterialUI', 'Python', 'NumPy', 'Pandas'],
    sourceCode: 'https://github.com/shuklabhay/velocity-draft',
    livePreview: 'https://devpost.com/software/velocitydraft',
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
  // email is optional - if left empty Contact section won't show up
  email: 'mtleong@usc.edu',
}

export { header, about, projects, skills, contact }
