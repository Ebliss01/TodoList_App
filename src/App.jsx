import React from "react";
import moon from "./assets/icon-moon.svg";
import Form from "./component/Form";
import TodoItem from "./component/TodoItem";
import Filternav from "./component/FilterNav";

const App = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <div className="h-52 px-5 pt-10 bg-no-repeat bg-cover bg-[url('./assets/bg-mobile-light.jpg')]">
        <div className="flex justify-between items-center">
          <p className="text-3xl font-semibold text-white">TODO</p>
          <img src={moon} alt="logo" className="h-5 w-5" />
        </div>
        <Form />
      </div>

      <div className="relative -top-8 rounded-md bg-white h-56 w-[90%] mx-auto">
      <Filternav/>

        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>

        <div className="flex justify-between px-5 h-18">
          <p>4 Items</p>
          <button type="button">Clear Completed</button>
        </div>

      </div>
     
    </div>
  );
};

export default App;
