import React from 'react'


const getSeason = (lat, month) => {
  if(month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, 9);

  const text = season === 'winter' ? 'BRR... IT\'S CHILLY!' : 'YO! LET\'S HIT THE BEACH!'

  return (
    <div>
      <h1>{text}</h1>
    </div>
    
  )
}

export default SeasonDisplay;