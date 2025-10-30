import React from 'react'

export default function Fibonacii() {

    const limit = 15;
    var series = [0,1];
    
    for (let i = 0; i < limit; i++) {        
        console.log(series[series.length - 1] +" + "+ series[series.length - 2] +" =" + parseInt(series[series.length - 1] + series[series.length - 2]))
        series.push(parseInt(series[series.length - 1] + series[series.length - 2]))        
    }

  return (
    <div>Fibonacii</div>
  )
}
