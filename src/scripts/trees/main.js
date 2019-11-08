import { javascript } from './javascript'
import { ruby } from './ruby'
import { elixir } from './elixir'
import { devops } from './devops'
import { database } from './database'

const roles = [
  {
    id: 'backend',
    title: 'Backend Dev',
    tooltip: {
      content: ''
    },
    children: [ruby, elixir, database]
  },
  {
    id: 'frontend',
    title: 'Frontend Dev',
    tooltip: {
      content: ''
    },
    children: [javascript]
  },
  devops
]

const data = [
  {
    id: 'mg-tree',
    title: 'Mashup Garage',
    tooltip: {
      content: 'Be employed at Mashup Garage'
    },
    children: roles,
    icon: './icons/mg.svg'
  }
]

export default data
