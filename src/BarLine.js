import React from 'react';
import styled from 'styled-components';
import XbuttonImages from './assets/x.png';

function BarLine(){
  return(
    <Wrapper>
      <div className={'bar'}>
        <div className={'line1'}></div>
        <div className={'line2'}></div>
        <div className={'circle'}></div>
        <img src={XbuttonImages}/>
      </div>
    </Wrapper>
  );
}
export default BarLine;
const Wrapper = styled.div`
// border: 1px solid #000;
width: 360px;
margin: 0 auto;
// height: 640px;
position: relative;
.bar{
  display: flex;
}
.bar img{
  width: 28px;
  height: 28px;
  margin: 14px 19px 0 0; 
}
.line1{
  width: 50px;
  height: 8px;
  margin: 24px 0px 0px 52px;
  border-radius: 5px;
  background-image: linear-gradient(to right, #fdd67c, #f94343);
}
.line2{
  width: 207.2px;
  height: 0px;
  margin: 27px 0px 0px 0px;
  border: solid 2px #eeeeee;
}
.circle{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 24px 23px 0px 0px;
  background-color: #eeeeee;
}
`
