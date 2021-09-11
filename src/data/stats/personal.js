import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1994-01-12T10:59:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 9,
    link:
      'https://www.google.com/maps/d/u/0/edit?mid=1Fov_WT_lSlJ-nhFYDrjhHKyiCLLyqIsR&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current Location',
    value: 'Cape Town, South Africa',
  },
];

export default data;
