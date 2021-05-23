import React from 'react';
import styled from 'styled-components';
import BarLine from './BarLine.js';
import XbuttonOrange from './assets/x.svg';
import { Redirect, withRouter } from 'react-router-dom';
//컴포넌트 명은 반드시 대문자로 시작
class ThreePage extends React.Component {
  componentDidMount(){
    console.log(this.props.history.length);
  }
  moveToLink(link) {
    this.props.history.replace(link);
  }
  goBack = () => {
    this.props.history.goBack();
  };
  constructor(props) {
    super(props);
    this.state = { border: 'none'};
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor = () => {
    this.setState({
      border: 'solid 2px #ff7f1f'
    });
  }

  render() {
    
   
    return (
      <Wrapper>
        <BarLine/>
        <div className={'text'}>
      <div className={'Q10'}>
        <h1>Q11</h1>
      </div>
      <div className={'Q'}>
        <h2>병원에서 치료를 받으셨나요?</h2>
      </div>
      <div className={'A'}>
        <button style={{ border: this.state.border}} onClick={this.changeColor}><div className={'O'}></div>네</button>
        <button style={{ border: this.state.border}} onClick={this.changeColor}><img src={XbuttonOrange}/>아니요</button>
      </div>
      <div className={'prenext'}>
        <button className={'pre'} onClick={() => this.moveToLink('app')}>이전</button>
        <button className={'next'} onClick={() => this.moveToLink('/')}>다음</button>
      </div>
      </div>
      </Wrapper>
    );
  }
}

export default withRouter(ThreePage);

const Wrapper = styled.div`
// border: 1px solid #000;
width: 360px;
margin: 0 auto;
height: 640px;
position: relative;

.text{
  margin-left: 24px;
}
.Q10 h1{
  margin: 41px 21.6px 10px 1px;
  font-family: AppleSDGothicNeoSB00;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #2a2a2a;
}
.Q h2{
  height: 29px;
  margin: 10px 2px 59px 0;
  font-family: AppleSDGothicNeoB00;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #2a2a2a;
}
.A{
  display: flex;
}
.A button{
  width: 146px;
  height: 146px;
  margin: 0px 18px 204px 0;
  padding: 36px 46px 24px 47px;
  border-style: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}
.A img{
  width: 76px;
  height: 76px;
  margin: -10px 0px 0px -10px;
  object-fit: contain;
}
.O{
  width: 50px;
  height: 49px;
  margin: 0 auto;
  margin-bottom: 17px;
  border-radius: 50%;
  border: solid 4px #444b56;
  text-align:center;
}
.pre{
  width: 148px;
  height: 48px;
  margin: 0px 16px 0 1px;
  border-style: none;
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.85;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  border-radius: 6px;
  background-color: #eeeeee;
}
.next{
  width: 148px;
  height: 48px;
  margin: 0px 16px 0 1px;
  border-style: none;
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.85;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  border-radius: 6px;
  background-color: #ff7f1f;
}
`
