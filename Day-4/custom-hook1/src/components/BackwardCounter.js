import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../Hook/useCounter';

const BackwardCounter = () => {
  let counter = useCounter(false);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
