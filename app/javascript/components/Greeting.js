import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMessages } from "../redux/Greeting";

const Greeting = () => {
  const data = useSelector((state) => state.greeting)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessages())
  }, [dispatch])
  return (
    <h1>{data.greetings}</h1>
  )
}

export default Greeting;