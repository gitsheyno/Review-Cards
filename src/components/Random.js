import React from 'react'
import { StyledBtn } from './styles/StyledReview'
const Random = ({ handleRnd }) => {
  return (
    <StyledBtn
      onClick={() => handleRnd()}
    >Surprise me</StyledBtn>
  )
}

export default Random
