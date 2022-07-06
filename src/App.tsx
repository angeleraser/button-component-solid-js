import type { Component } from "solid-js";
import { Button } from "./components/Button/Button";

const App: Component = () => {
  return (
    <div class="App">
      <Button color="default" />
      <Button color="primary" />
    </div>
  );
};

export default App;
