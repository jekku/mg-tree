import React from 'react'
import { SkillTreeGroup, SkillTree, SkillProvider } from 'beautiful-skill-tree'
import javascriptTree from './../trees/javascript'


export const MGTree = () => {
  return <SkillProvider>
    <SkillTreeGroup>
    {() => {
      return <SkillTree treeId="first-tree" title="Skill Tree" data={javascriptTree} />
    }}
    </SkillTreeGroup>
  </SkillProvider>
}
