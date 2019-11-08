export const devops = {
  id: 'devops',
  title: 'Dev Ops',
  tooltip: {
    content: ''
  },
  children: [
    {
      id: 'git',
      title: 'Git',
      tooltip: {
        content: 'The most widely use code collaboration tool of the new age'
      },
      children: [],
      icon: './icons/git-original.svg'
    },
    {
      id: 'ci',
      title: 'Continuous Integration',
      tooltip: {
        content:
          'Safety latches, developer convenience, and automated deployments by utilizing safety checks'
      },
      children: [],
      icon: './icons/ci-original.png'
    },
    {
      id: 'docker',
      title: 'Docker',
      tooltip: {
        content:
          'Container based architecture for development, deployment, and servers'
      },
      children: [],
      icon: './icons/docker-original.svg'
    }
  ]
}
