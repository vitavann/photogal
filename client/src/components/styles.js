import styled from 'styled-components'

export const ParentContainer = styled.div`
  display: flex;
  flex-direction:row;
  flex: 1;
  cursor: pointer;
`

export const CollageContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  background-color: black;
  width: 100%;
  flex: 1;
`;

export const SoloContainer = styled.div`
  display: grid;
  grid-template-columns: gird-row-start;
  background-color: black;
  width: 50%;
  flex: 1;
`

export const CollageImage = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.8);
  top: 0px;
  opacity: 1;
  &:hover {
    -ms-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    transition-timing-function: ease-in-out;
    transition: 0.5s;
    opacity: 0.7;
  }
`
export const SoloResize = styled.img`
height: 100%;
width: 100%;
`
export const CollageResize = styled.img`
height: 370px;
width: 480px;
`
