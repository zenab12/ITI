import { useRouter } from 'next/router';
import React from 'react'

// catch all (put routing paths in array)
const Data = () => {

 const router = useRouter();
  const query= router.query;
  return (
    <div>Data</div>
  )
}

export default Data;

//
