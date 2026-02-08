import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})

  // roll between 0 and last index of anecdotes
  const rollRandom = () => Math.floor(Math.random() * (anecdotes.length));
  // get most votes
  const mostVotes = Object.keys(votes)
          .reduce((highest, current) => (votes[highest] || 0) > votes[current] ? highest : current, 
          Object.keys(votes)[0]) || 0;

  const handleVotes = (key) => {
    if (key in votes) {
      setVotes({
          ...votes,
          [key]: votes[key] + 1
      })
    } else {
        setVotes({
          ...votes,
          [key]: 1
        }
      )
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>

      <div>
        has {votes[selected] || 0} votes
      </div>
      
      <div>
        <button onClick={() => handleVotes(selected)}>vote</button>
        <button onClick={() => setSelected(rollRandom())}>next anecdote</button>
      </div>

      <h1>Anecdote with most votes</h1>
      <div>
        {anecdotes[mostVotes]}
      </div>
      <div>
        has {votes[selected] || 0} votes
      </div>
    </div>
  )
}

export default App