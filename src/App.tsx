import React from 'react';
import './App.css';
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/action-creators/user";

function App() {
  const state = useTypedSelector(state => state.user);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchUsers());
  },[])
  console.log('state', state);

  return (
    <>
    </>
  );
}

export default App;
