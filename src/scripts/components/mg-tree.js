import React from 'react'
import { SkillTreeGroup, SkillTree, SkillProvider } from 'beautiful-skill-tree'
import tree from './../trees/main'

const theme = {
  treeBackgroundColor: '#302365',
  nodeOverlayColor: '#CB649D',
  nodeHoverBorder: '2px solid',
  nodeHoverBorderColor: 'red',
  edgeBorder: '1px solid #937ADE',
  nodeActiveBackgroundColor: '#4A156B',
  nodeBorderColor: '#CB649D'
}

export const MGTree = () => {
  return (
    <SkillProvider>
      <SkillTreeGroup theme={theme}>
        {() => {
          return (
            <SkillTree treeId='first-tree' title='Skill Tree' data={tree} />
          )
        }}
      </SkillTreeGroup>
    </SkillProvider>
  )
}
