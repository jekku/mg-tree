import { js } from './javascript'
import { ruby } from './ruby'
import { elixir } from './elixir'

const core = [
  {
    id: 'ruby',
    title: 'Ruby',
    tooltip: {
      content: "Mashup Garage's choice of OOP language"
    },
    children: ruby,
    icon: './icons/ruby-original.svg'
  },
  {
    id: 'javascript',
    title: 'Javascript',
    tooltip: {
      content: "Mashup Garage's core frontend logic and build toolchain"
    },
    children: js,
    icon: './icons/javascript-original.svg'
  },
  {
    id: 'elixir',
    title: 'Elixir',
    tooltip: {
      content: "Mashup Garage's choice of FP language"
    },
    children: elixir,
    icon: './icons/elixir-original.svg'
  },
  {
    id: 'git',
    title: 'Git',
    tooltip: {
      content:
        'The most widely adapted source collaboration tool in the new century'
    },
    children: [],
    icon: './icons/git-original.svg'
  }
]

const data = [
  {
    id: 'mg-tree',
    title: 'Mashup Garage',
    tooltip: {
      content: 'Be employed at Mashup Garage'
    },
    children: core,
    icon: './icons/mg.svg'
  }
]

export default data
