import React, { Component } from 'react'

class Contents extends Component{
    render() {
      let Heros = this.props.content.map(function(hero){
        return(
          <li key={hero.name}>{hero.name}</li>
        )
      })
      return (
        <ul>
          {Heros}
        </ul>
      );
    }
  }

export default Contents

// constructor(props){
//   super(props)
//     this.state = {
//       Contents: [
//         {name: 'Superman'},
//         {name: 'Batman'}
//       ]
//     }
//   }
