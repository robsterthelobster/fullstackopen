
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {

  const {
    part1,
    part2,
    part3
  } = props;

  return (
    <div>
      {props.parts.map(part => <Part part={part.name} exercise={part.exercises}/>)}
    </div>
  )
}

const Part = (props) => {
  const {part, exercise} = props;
  return (<p>
        {part} {exercise}
      </p>)
}

const Total = (props) => {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (<p>Number of exercises {total}</p>)
}

export default App