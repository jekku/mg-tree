import React from 'react'
import { SkillTreeGroup, SkillTree, SkillProvider } from 'beautiful-skill-tree'
import tree from './../trees/main'


export const MGTree = () => {
  return <SkillProvider>
    <SkillTreeGroup>
    {() => {
      return <SkillTree treeId="first-tree" title="Skill Tree" data={tree} />
    }}
    </SkillTreeGroup>
  </SkillProvider>
}
