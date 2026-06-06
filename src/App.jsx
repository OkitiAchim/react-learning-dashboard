import Counter from "./components/Counter";
import StudentCard from "./components/StudentCard";
import Logger from "./components/Logger";
import LifecycleDemo from "./components/LifecycleDemo";

function App() {
  return (
    <>
      <h1>React Learning Dashboard</h1>

      {/* Props Example */}
      <StudentCard name="Vwegba" course="Frontend Development" />

      {/* State + Event Handling */}
      <Counter />

      {/* Event Handling */}
      <Logger />

      {/* Lifecycle (Class Component) */}
      <LifecycleDemo />

      <footer>
        <p>
          React uses Virtual DOM to efficiently update only changed parts of the
          UI.
        </p>
      </footer>
    </>
  );
}

export default App;
