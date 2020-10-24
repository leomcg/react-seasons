import React from 'react'

const seasonConfig = {
  summer: {
    text: "YOO LET'S HIT THE BEACH!!",
    iconClassName: 'sun'
  },
  winter: {
    text: "Brrr... it's chilly!",
    iconClassName: 'snowflake'
  } 
}


const getSeason = (lat, month) => {
  if(month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, 11);

  const { text, iconClassName } = seasonConfig[season]

  return (
    <div>
      <i className={`icon ${iconClassName}`}></i>
      <h1>{text}</h1>
      <i className={`icon ${iconClassName}`}></i>
    </div>
    
  )
}

export default SeasonDisplay;