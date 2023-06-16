// eslint-disable-next-line no-unused-vars
import Hero from "./components/Hero";
// eslint-disable-next-line no-unused-vars
import Demo from "./components/Demo";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
       <Hero/>
       <Demo />

      </div>
    </main>
  );
};

export default App;
