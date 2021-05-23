//React 를 import해야 리액트가 JSX를 이해함
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import BarLine from './BarLine.js';
import IconOne from './assets/0.png';
import IconThree from './assets/3.png';
import IconFive from './assets/5.png';
import IconSeven from './assets/7.png';
import IconTen from './assets/10.png';
//컴포넌트 명은 반드시 대문자로 시작
class FirstPage extends React.Component {
    moveToLink(link) {
      this.props.history.replace(link);
    }
    constructor(props) {
      super(props);
      this.state = { background: '#eeeeee'};
      this.changeColor = this.changeColor.bind(this);
    }
    changeColor = () => {
      this.setState({
        background: '#ff7f1f'
      });
    }
  
    render() {
      
      return (
        <Wrapper>
             <BarLine/>
      <div className={'text'}>
      <div className={'Q10'}>
        <h1>Q9</h1>
      </div>
      <div className={'Q'}>
        <h2>다음 표를 보고<br/>
        통증의 정도를 선택해 주세요.
        </h2>
      </div>
      <div className={'icon'}>
        <div className={'iconbox'}>
            <img src={IconOne}/>
            <p>0</p>
            <h5>통증없음</h5>
        </div>
        <div className={'iconbox'}>
            <img src={IconThree}/>
            <p>3</p>
            <h5>약한통증</h5>
        </div>
        <div className={'iconbox'}>
            <img src={IconFive}/>
            <p>5</p>
            <h5>중증도통증</h5>
        </div>
        <div className={'iconbox'}>
            <img src={IconSeven}/>
            <p>7</p>
            <h5>심한 통증</h5>
        </div>
        <div className={'iconbox'}>
            <img src={IconTen}/>
            <p>10</p>
            <h5>최악의 통증</h5>
        </div>
      </div>
      <div className={'slide'}>
        <div className={'slide1'}></div>
        <div className={'slide2'}></div>
        <div className={'slidebutton'}>5</div>
      </div>
      

      <div className={'prenext'}>
        <button className={'pre'}>이전</button>
        <button className={'next'} onClick={() => this.moveToLink('app')}>다음</button>
      </div>
      </div>
        </Wrapper>
      );
    }
  }
  
  export default withRouter(FirstPage)
  
const Wrapper = styled.div`
// border: 1px solid #000;
    width: 360px;
    margin: 0 auto;
    height: 640px;
    position: relative;
.text{
    margin-left: 24px;
}
.slide{
  display: flex;
  position: relative;
}
.slide1{
  width: 156px;
  height: 5px;
  margin: 29.5px 0px 0px 0;
  // padding: 0 158px 0 0;
  background-color: #ff7f1f;
}
.slide2{
  width: 156px;
  height: 5px;
  opacity: 0.2;
  margin: 29.5px 5px 0px 0;
  // padding: 0 158px 0 0;
  background-color: #ff7f1f;
}
.slidebutton{
  width: 30px;
  height: 30px;
  margin: 17.5px 28px 205px 32px;
  background-color: #ff7f1f;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  position: absolute;
  top: 0;
  left: 110px;
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
    margin: 10px 0 31.1px;
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
.icon{
    display: flex;
    // text-align: center;
}
.icon img{
    width: 31.5px;
    height: 31.5px;
    margin: 31.1px 28.5px 0px 7px;
    text-align:center;
}
.iconbox p{
    width: 9px;
    height: 0px;
    margin: 0px 1px 0px 18px;
    font-family: AppleSDGothicNeoR00;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.43;
    letter-spacing: normal;
    text-align: left;
    color: #2a2a2a;
    background-color: red;
}
.iconbox h5{
    // width: 60px;
    height: 0px;
    // margin: 0px -10px 0px 0px;
    font-family: AppleSDGothicNeoR00;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.83;
    letter-spacing: normal;
    text-align: left;
    color: #2a2a2a;
}
.pre{
    width: 148px;
    height: 48px;
    margin: 204px 16px 0 1px;
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
  margin: 204px 16px 0 1px;
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
