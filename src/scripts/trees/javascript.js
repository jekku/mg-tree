const es6 = [
  {
    id: 'async-constructs',
    title: 'Async',
    tooltip: {
      content: 'The power to write out-branching javascript in different ways'
    },
    children: [
      {
        id: 'promises',
        title: 'Promises',
        tooltip: {
          content: 'Writing promises safely'
        },
        children: []
      },
      {
        id: 'generators',
        title: 'Generators',
        tooltip: {
          content: 'Understanding star funs and yield'
        },
        children: []
      },
      {
        id: 'async-await',
        title: 'Async-Await',
        tooltip: {
          content: 'Reduction of mental gymnastics when necessary'
        },
        children: []
      }
    ]
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    tooltip: {
      content: 'JS Dialect reinforced with types. ES6 derivative.'
    },
    children: []
  }
]

const constructs = [
  {
    id: 'dom-operations',
    title: 'DOM Operations',
    tooltip: {
      content: 'The ability to query and manipulate DOM elements'
    },
    children: []
  },
  {
    id: 'events',
    title: 'Events',
    tooltip: {
      content: 'Understanding how JS events work and how to use them'
    },
    children: []
  },
  {
    id: 'devtools',
    title: 'Devtools',
    tooltip: {
      content: 'The ability to leverage browser devtools for easier debugging and building'
    },
    children: []
  }
]

const js = [
  {
    id: 'constructs',
    title: 'The Browser',
    tooltip: {
      content: 'Understanding of vanilla JS browser constructs',
    },
    children: constructs
  },
  {
    id: 'es6',
    title: 'EcmaScript 6',
    tooltip: {
      content:  'The capability to write modern javascript with ease',
    },
    children: es6
  },
]

const data = [
  {
    id: 'javascript',
    title: 'Javascript',
    tooltip: {
      content: 'Mashup Garage\'s core frontend logic and build toolchain',
    },
    children: js
  }
]

export default data
