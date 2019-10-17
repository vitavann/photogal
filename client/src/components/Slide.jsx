import React from 'react';
import { SlideWrapper } from './styles';

const Slide = (props) => {

  return <SlideWrapper src={`${props.image}`} />
}

export default Slide