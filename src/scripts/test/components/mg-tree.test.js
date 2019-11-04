import React from 'react'
import { MGTree } from './../../components/mg-tree'
import { render } from '@testing-library/react'

test('Tree renders without failure', () => {
  render(<MGTree />)
})
