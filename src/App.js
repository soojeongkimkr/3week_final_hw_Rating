import './App.css';
import React from 'react';
import { Route } from "react-router-dom"
import styled from "styled-components"
import Main from "./Main"
import RatingDay from "./RatingDay"

function App() {
  const week = ['월','화','수','목','금','토','일'];
  const week_en = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

  return (
    <div className="App">
      <AppWrap>
        <Wrap>
          <Route path="/" exact >
            <Main week={week} week_en={week_en}/>
          </Route>
          <Route path="/day/:day" >
            <RatingDay week={week} week_en={week_en} />
          </Route>
      </Wrap>
      </AppWrap>

    </div>
  );
}

  const AppWrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:#eee;
    display:flex;
    justify-content:center;
    align-items:center;
  `;
  const Wrap = styled.div`
    width: 35vw;
    height: 55vh;
    min-width: 300px;
    min-height: 450px;
    background-color:#fff;
    border:1px solid #ccc;
    display:flex;
    flex-direction:column;
    align-items:center;
  `;
export default App;
