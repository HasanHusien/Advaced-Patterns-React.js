import Counter from "./patterns/CompoundComponentPattern.jsx";
export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      <Counter>
        <Counter.label>create by Compound Component Pattern</Counter.label>
        <Counter.increase icon="+" />
        <Counter.counter />
        <Counter.decrease icon="-" />
      </Counter>
    </div>
  );
}
