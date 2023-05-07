import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Test() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onShowingClick = () => setShowing((prev) => !prev);

  // When the state changes, all components and all codes always rerender.
  // If you want to rerender only the changes, you should use 'useEffect'.
  console.log("I run all the time");
  const iRunOnlyOnce = () => {
    console.log("I run only once");
  }
  useEffect(() => {
    console.log("Call the API");
  }, []);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5) {
      console.log("Search for", keyword);
    }
  }, [keyword]) // When keyword changes, it run

  function Hello() {
    useEffect(() => {
      console.log("Hi");
      return () => console.log("Bye");
    }, []);
    return <h2>Hello</h2>;
  }

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onShowingClick}>{showing ? "Hide" : "Show"}</button>

      <input value={keyword} onChange={onChange} type="text" placeholder="Search Here" />

      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click Me!</button>
      <Button text={"Continue"}/>
    </div>
  );
}

export default Test;
