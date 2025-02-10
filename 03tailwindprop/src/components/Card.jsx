import React from 'react'

function Card(props) {
    //you can write like this function Card(channel)
    //for giving default value you will write like function Card(channel="default value will be set if no value is given")
    //console.log("props",props)
    console.log(props.channel)
  return (
    <div> 
    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id beatae praesentium cum perferendis cumque consequatur, obcaecati aliquam, facere molestiae unde alias tempore nihil, eligendi similique. Unde non natus commodi delectus esse fuga laborum in. Omnis.{props.channel}</p>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCQTG8lIoh2A3EZ3xZ1hQU7mAfov8_Szz1g&s'/>
    </div>
  )
}

export default Card
