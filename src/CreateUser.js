import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CreateUser = ({ setUser }) => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleRoute = () => {
    console.log("saving...");
    // localStorage.setItem("username", userName);
    setUser(userName);
    navigate("/chart");
  };
  return (
    <Main>
      <input
        placeholder="enter username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleRoute}>Enter Chart</button>
    </Main>
  );
};

export default CreateUser;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;

  input {
    display: flex;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
    border: none;
  }
  button {
    border: none;
    padding: 30px;
    border-radius: 10px;
    margin-left: 20px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    background: #8fc5df;
  }
`;
