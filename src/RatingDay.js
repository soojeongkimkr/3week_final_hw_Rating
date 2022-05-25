import React from 'react';
import styled from "styled-components"
import { Link, useParams } from 'react-router-dom';


const RatingDay = (props) => {
  
  const param = useParams().day;
  // console.log(param) //mon
  // console.log(props.week_en) // ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  // console.log(Object.keys(props.week_en)) //['0', '1', '2', '3', '4', '5', '6']
  const idx = Object.keys(props.week_en).filter(
    (v,i) => props.week_en[i] === param
    
  );
  // console.log(idx)//요일마다 [0,1,2,3,4,5,6]

  const [count, setCount] = React.useState();

  return (
    <RatingWrap>
      <Title><span>{props.week[idx]}요일</span> 평점 남기기</Title>
      <div></div>
      <CircleWrap>
      {Array.from({length: 5}, (n,i) => {
          return <Circle key={i} onClick={()=>{setCount(i)}} style={{backgroundColor: i <= count ? 'red' : '#ddd'}}></Circle>
        })}
      </CircleWrap>
      <Link to ="/"><Button>저장</Button></Link>
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
export default RatingDay;