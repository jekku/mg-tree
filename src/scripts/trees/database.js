const databaseSkills = [
  {
    id: 'sql',
    title: 'SQL',
    tooltip: {
      content:
        'Mastery of Standard Query Language from queries, alterations, indeces, etc'
    },
    children: [],
    icon: './icons/postgresql-original.svg'
  },
  {
    id: 'nosql',
    title: 'NoSQL',
    tooltip: {
      content:
        'Mastery of situational document based storage for niche purposes'
    },
    children: [],
    icon: './icons/mongodb-original.svg'
  },
  {
    id: 'cache',
    title: 'Cache Storages',
    tooltip: {
      content:
        'Mastery of situational memory-based cache storage for fast-access, time-critical, and quick expiry data'
    },
    children: [],
    icon: './icons/redis-original.svg'
  }
]

export const database = {
  id: 'data',
  title: 'Data Bases and Stores',
  tooltip: {
    content:
      'Mastery of how data is stored and manipulated for various purposes'
  },
  children: databaseSkills,
  icon: './icons/db-original.png'
}
