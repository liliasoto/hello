import './App.css'

function Hello(props){
  console.log(props);

  return (
    <div>
      <p>Hello {props.name}, you were {props.age} years old.</p>
    </div>
  );
}

function App(){
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <p>Greetings</p>
      <Hello name="Claude Shannon" age="84"/>
      <Hello name="James Clerck Maxwell" age={48}/>
      <Hello name="Joseph Fourier" age={64}/>
    </div>
  );
}

export default App
