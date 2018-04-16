import React from 'react';
import  {Switch, Route, Link} from 'react-router-dom';

const PlayerAPI = {
    players: [
      { number: 1, name: "Ben Blocker", position: "G" },
      { number: 2, name: "Dave Defender", position: "D" },
      { number: 3, name: "Sam Sweeper", position: "D" },
      { number: 4, name: "Matt Midfielder", position: "M" },
      { number: 5, name: "William Winger", position: "M" },
      { number: 6, name: "Fillipe Forward", position: "F" }
    ],
    all: function() { return this.players},
    get: function(id) {
      const isPlayer = p => p.number === id
      return this.players.find(isPlayer)
    }
  }

   // The FullRoster iterates over all of the players and creates
  // a link to their profile page.
  const FullRoster = () => (
    <div>
        <h2>About</h2>
      <ul>
        {
          PlayerAPI.all().map(p => (
            <li key={p.number}>
              <Link to={`/about/${p.number}`}>{p.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
  
  // The Player looks up the player using the number parsed from
  // the URL's pathname. If no player is found with the given
  // number, then a "player not found" message is displayed.
  const Player = (props) => {
    const player = PlayerAPI.get(
      parseInt(props.match.params.number, 10)
    )
    if (!player) {
      return <div>Sorry, but the player was not found</div>
    }
    return (
      <div>
        <h1>{player.name} (#{player.number})</h1>
        <h2>Position: {player.position}</h2>
        <Link to='/about'>Back</Link>
      </div>
    )
  }
  
  // The Roster component matches one of two different routes
  // depending on the full pathname
  const About = () => (
    <Switch>
      <Route exact path='/about' component={FullRoster}/>
      <Route path='/about/:number' component={Player}/>
    </Switch>
  )

export default About