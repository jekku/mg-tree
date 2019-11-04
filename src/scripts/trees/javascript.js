const react = [
  {
    id: 'state',
    title: 'State Management',
    tooltip: {
      content: 'Effective use of hooks and proper state shape. Knowledge of when and when not to use state'
    },
    children: [],
    icon: './icons/redux-original.svg'
  },
  {
    id: 'components',
    title: 'Component Organization',
    tooltip: {
      content: 'Effective organization of components by business context. Knowledge of HOC, dependency injectible components, and testable components'
    },
    children: [],
    icon: './icons/react-original.svg'
  }
]

const es6 = [
  {
    id: 'reactjs',
    title: 'React JS',
    tooltip: {
      content: 'Ability to build reusable components and make proper state management'
    },
    children: react,
    icon: './icons/react-original.svg'
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    tooltip: {
      content: 'JS Dialect reinforced with types. ES6 derivative.'
    },
    children: [],
    icon: './icons/typescript-original.svg'
  }
]

const constructs = [
  {
    id: 'dom-operations',
    title: 'DOM Operations',
    tooltip: {
      content: 'The ability to query and manipulate DOM elements'
    },
    children: [],
    icon: './icons/javascript-original.svg'
  },
  {
    id: 'events',
    title: 'Events',
    tooltip: {
      content: 'Understanding how JS events work and how to use them'
    },
    children: [],
    icon: './icons/javascript-original.svg'
  },
  {
    id: 'devtools',
    title: 'Devtools',
    tooltip: {
      content: 'The ability to leverage browser devtools for easier debugging and building'
    },
    children: [],
    icon: './icons/javascript-original.svg'
  }
]

const node = [
  {
    id: 'webpack',
    title: 'Webpack',
    tooltip: {
      content: 'Harness the ability to create fast asset and code pipelines with minimal configuration'
    },
    icon: './icons/webpack-original.svg',
    children: []
  }
]

export const js = [
  {
    id: 'constructs',
    title: 'The Browser',
    tooltip: {
      content: 'Understanding of vanilla JS browser constructs',
    },
    children: constructs,
    icon: './icons/chrome-original.svg'
  },
  {
    id: 'es6',
    title: 'EcmaScript 6',
    tooltip: {
      content:  'The capability to write modern javascript with ease',
    },
    children: es6,
    icon: './icons/javascript-original.svg'
  },
  {
    id: 'nodejs',
    title: 'Node JS basics',
    tooltip: {
      content: 'A basic understanding of Node JS runtime built-ins and usage'
    },
    children: node,
    icon: './icons/nodejs-original.svg'
  }
]
