import styled from 'styled-components'

export const Topbar = styled.header`
  width:100%;
  height:50px;
  
  top:0px;
  &> div{
    margin-left:auto;
    margin-right:auto;
    max-width:100rem;
    display:flex;
  
    & > div{
      margin-left:15px;
      margin-right:15px;
    }
  }
`

