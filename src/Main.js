import {React, useState} from 'react';
import styled from "styled-components"
import { Route, useHistory } from "react-router-dom"
import RatingMon from "./RatingMon"


const Main = (props) => {
  const mon = useHistory();
  
  // 7개의 랜덤한 숫자 배열 만들기
  let randomNumList = [];
  for(let i=0; i<7; i++){
    const randomNum = Math.floor(Math.random()*4 + 1);
    randomNumList.push(randomNum)
  } 
  // 7개의 랜덤 숫자의 합 구하기
  const sum = randomNumList.reduce((a,b) => a+(b+1) ,0);
  // 7개의 랜덤 숫자 평균 구하기
  const average = (sum / randomNumList.length).toFixed(1)

  // 숫자 평균을 기본값으로 넣고, reset을 누르면 값이 0 으로 변하게 하기
  const [zero, setZero] = useState(average);
  function toZero(){
     setZero(average - average)
  }

  return (
      <>
      <Title>내 일주일은?</Title>
      <DaysCircleWrap>
        <CircleWrap>
          <span>월</span>
          {Array.from({length:5}, (n,j) => {
              return <Circle key={j} 
              style={{backgroundColor: j <= randomNumList[0] ? 'red' : '#ddd'}}></Circle>
          })}
          <Tri onClick={()=>{
            mon.push("./mon")
          }}></Tri>
        </CircleWrap>
        <CircleWrap>
          <span>화</span>
          {Array.from({length:5}, (n,j) => {
              return <Circle key={j} 
              style={{backgroundColor: j <= randomNumList[1] ? 'red' : '#ddd'}}></Circle>
          })}
          <Tri onClick={()=>{
            mon.push("./mon")
          }}></Tri>
        </CircleWrap>
        <CircleWrap>
          <span>수</span>
          {Array.from({length:5}, (n,j) => {
              return <Circle key={j} 
              style={{backgroundColor: j <= randomNumList[2] ? 'red' : '#ddd'}}></Circle>
          })}
          <Tri onClick={()=>{
            mon.push("./mon")
          }}></Tri>
        </CircleWrap>
        <CircleWrap>
          <span>목</span>
          {Array.from({length:5}, (n,j) => {
              return <Circle key={j} 
              style={{backgroundColor: j <= randomNumList[3] ? 'red' : '#ddd'}}></Circle>
          })}
          <Tri onClick={()=>{
            mon.push("./mon")
          }}></Tri>
        </CircleWrap>
        <CircleWrap>
          <span>금</span>
          {Array.from({length:5}, (n,j) => {
              return <Circle key={j} 
              style={{backgroundColor: j <= randomNumList[4] ? 'red' : '#ddd'}}></Circle>
          })}
          <Tri onClick={()=>{
            mon.push("./mon")
          }}></Tri>
        </CircleWrap>
        <CircleWrap>
          <span>토</span>
          {Array.from({length:5}, (n,j) => {
              return <Circle key={j} 
              style={{backgroundColor: j <= randomNumList[5] ? 'red' : '#ddd'}}></Circle>
          })}
          <Tri onClick={()=>{
            mon.push("./mon")
          }}></Tri>
        </CircleWrap>
        <CircleWrap>
          <span>일</span>
          {Array.from({length:5}, (n,j) => {
              return <Circle key={j} 
              style={{backgroundColor: j <= randomNumList[6] ? 'red' : '#ddd'}}></Circle>
          })}
          <Tri onClick={()=>{
            mon.push("./mon")
          }}></Tri>
        </CircleWrap> 
      </DaysCircleWrap>

      <Rating>
        <p>평균 평점<br/>{zero}</p>
        <button onClick={toZero}>Reset</button>
      </Rating>
      </>
  )

}

  
  const Title = styled.p`
    margin-top:2em;
    margin-bottom:1.5em;
    font-size: 1.5em;
  `;

  const DaysCircleWrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  `;
  const CircleWrap = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:1.5em;
    margin-left:1.5em;
    span{
      margin-right:1em;
      font-size:1.2em;
    }
  `;
  const Circle = styled.div`
    width:2em;
    height:2em;
    border-radius:100px;
    background-color:#ddd;
    margin-right:0.5em;
  `;
  const Tri = styled.div`
    width: 0;
    height: 0;
    border-bottom: 1em solid transparent;
    border-top: 1em solid transparent;
    border-left: 1.5em solid skyblue;
    border-right: 1.5em solid transparent;
    margin-left: 0.5em;
    cursor:pointer;
  `;
  const Rating = styled.div`
    width:10vw;
    height: 20vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    p{
      font-size: 1.2em;
      min-width: 6em;
    }
    button{
      width: 15em;
      height: 3em;
      border-radius:100px;
      border-color:transparent;
      background-color:skyblue;
      
    }
`;

export default Main;