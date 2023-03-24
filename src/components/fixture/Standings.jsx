import React from 'react'

const Standings = () => {
  return (
    <>

<table class="table table-dark" style={{ maxWidth: "85.4rem"}}>
  <thead>
    <tr>
      <th scope="col">POSITION</th>
      <th scope="col">NAME</th>
      <th scope="col">LOGO</th>
      <th scope="col">POINTS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><a href='https://www.arsenal.com/'target="_blank">ARSENAL</a></td>
      <td>Otto</td>
      <td>45</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><a href='https://www.mancity.com/'target="_blank">MAN CITY</a></td>
      <td>Thornton</td>
      <td>39</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><a href='https://www.nufc.co.uk.com/'target="_blank">NEWCASTLE</a></td>
      <td>the Bird</td>
      <td></td>
    </tr>
  </tbody>
</table>
     <h3> <a href='https://www.premierleague.com/tables' target='_blank'>FULL TABLE</a></h3>
     </>
  )
}

export default Standings
