//React 를 import해야 리액트가 JSX를 이해함
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import BarLine from './BarLine.js';
//컴포넌트 명은 반드시 대문자로 시작
class App extends React.Component {
  moveToLink(link) {
    this.props.history.replace(link);
  }
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
        <h1>Q10</h1>
      </div>
      <div className={'Q'}>
        <h2>화상 상처의 크기는<br/>
        어느정도인가요?</h2>
        <h3>(엄지와 검지 손가락으로 ok 모양을 만들어<br/>
        생기는 원의 지름이 3cm입니다.)</h3>
      </div>
      <div className={'A'}>
        <button className={'A1'} style={{ border: this.state.border}} onClick={this.changeColor}>3cm 미만</button>
        <button className={'A2'} style={{ border: this.state.border}} onClick={this.changeColor}>3cm 이상 ~ 손바닥 미만</button>
        <button className={'A3'} style={{ border: this.state.border}} onClick={this.changeColor}>손바닥 이상</button>
      </div>
    <div className={'prenext'}>
      <button className={'pre'} onClick={() => this.moveToLink('/')}>이전</button>
      <button className={'next'} onClick={() => this.moveToLink('three')}>다음</button>
    </div>
    </div>
      </Wrapper>
    );
  }
}

export default withRouter(App)
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
  margin: 10px 95px 5.5px 1px;
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
.Q h3{
  margin: 5.5px 10px 10.5px 1px;
  font-family: AppleSDGothicNeoR00;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #2a2a2a;
}
.A1 {
  width: 313px;
  height: 48px;
  margin: 22px 5px 0px 0;
  // padding: 14px 80px 15px 81px;
  border-style: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  font-family: AppleSDGothicNeoM00;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #2a2a2a;
}
.A2 {
  width: 313px;
  height: 48px;
  margin: 22px 5px 0px 0;
  // padding: 14px 80px 15px 81px;
  border-style: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  font-family: AppleSDGothicNeoM00;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #2a2a2a;
}
.A3 {
  width: 313px;
  height: 48px;
  margin: 22px 5px 0px 0;
  // padding: 14px 80px 15px 81px;
  border-style: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  font-family: AppleSDGothicNeoM00;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #2a2a2a;
}
.pre{
  width: 148px;
  height: 48px;
  margin: 104px 16px 0 1px;
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
margin: 104px 16px 0 1px;
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
