/*
 the entire recipe for use this pattern (most reuseable pattern)
 1. Create context
 2. Create parent component
 3. Create child components
 4. Add child component to the parent 
 
 */
import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

function Counter({ children }) {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter((i) => i + 1);
  const decrease = () => setCounter((d) => d - 1);

  return (
    <CounterContext.Provider
      value={{
        counter,
        setCounter,
        increase,
        decrease,
      }}
    >
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

function Count() {
  const { counter } = useContext(CounterContext);
  return <span>{counter}</span>;
}

function Label({ children }) {
  return <label htmlFor="">{children}</label>;
}

function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}

function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
}

Counter.counter = Count;
Counter.label = Label;
Counter.increase = Increase;
Counter.decrease = Decrease;

export default Counter;
