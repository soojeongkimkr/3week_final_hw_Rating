import React from 'react';
import styled from "styled-components"
import { useHistory } from 'react-router-dom';


const Rating = (props) => {
  const backToMain = useHistory();
  
  const [count, setCount] = React.useState();
  
  return (
    <RatingWrap>
      <Title><span>월요일</span> 평점 남기기</Title>
      <div></div>
      <CircleWrap>
      {Array.from({length: 5}, (n,i) => {
          return <Circle key={i} onClick={()=>{setCount(i)}} style={{backgroundColor: i <= count ? 'red' : '#ddd'}}></Circle>
        })}
      </CircleWrap>
      <Button onClick={() => {
        backToMain.push("/")
      }}>저장</Button>
    </RatingWrap>
  )

}

const RatingWrap = styled.div`
  margin: 10vh auto;
`;

const Title = styled.p`
  margin-bottom:2em;
  span{
    background-color: darkblue;
    color:#fff;
    font-weight:bold;
    padding: 0.2em 0.5em;
    border-radius:100px;
  }
`;
const CircleWrap = styled.div`
    display:flex;
    margin-bottom:1em;
    span{
      margin-right:1em;
    }
  `;
  const Circle = styled.div`
    width:2em;
    height:2em;
    border-radius:100px;
    background-color:#ddd;
    margin-right:0.5em;
  `;
  const Button = styled.button`
    width: 10em;
    height: 2.5em;
    border-radius:100px;
    border-color:transparent;
    margin-top:1em;
    background-color:skyblue;
    font-size:1em;
    cursor:pointer;
  `;
export default Rating;