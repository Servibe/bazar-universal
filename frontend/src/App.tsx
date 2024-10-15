import { useState } from "react";
import "./App.css";
import { Search } from "./components/Search";
import { Data } from "./types";

function App() {
  const [data, setData] = useState<Data>([]);

  return (
    <>
      <Search initialData={data} />
    </>
  );
}

export default App;
