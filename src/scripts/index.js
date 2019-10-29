import React from 'react'
import ReactDOM from 'react-dom'
import { SkillTreeGroup, SkillTree, SkillProvider } from 'beautiful-skill-tree'
import javascriptTree from './trees/javascript'


const Test = () => {
  return <SkillProvider>
    <SkillTreeGroup>
    {() => {
      return <SkillTree treeId="first-tree" title="Skill Tree" data={javascriptTree} />
    }}
    </SkillTreeGroup>
  </SkillProvider>
}

ReactDOM.render(<Test />, document.getElementById('app'))
