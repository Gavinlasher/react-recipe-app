import React, { useEffect } from 'react'

export default function Popular() {

useEffect(()=>{
getPopular();
},[])

const getPopular = async () => {
  const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
  const data = await res.json();
  console.log(data);
}

  return (
    <div>Popular</div>
  )
}
