import styled from 'styled-components'

export const ParentContainer = styled.div`
display: flex;
flex-direction:row;
flex: 1;
`

export const CollageContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto
  background-color: grey;
  padding: 1px;
  width: 50%;
  height: 100%;
  flex: 1;
`;

export const SoloContainer = styled.div`
display: grid;
grid-template-columns: gird-row-start
background-color: grey;
padding: 1px;
width: 50%;
height: 100%;
margin: auto;
flex: 1;
`

export const CollageImage = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.8);
`
export const SoloResize = styled.img`
height: 740px;
width: 960px;
`
export const CollageResize = styled.img`
height: 370px;
width: 480px;
`
