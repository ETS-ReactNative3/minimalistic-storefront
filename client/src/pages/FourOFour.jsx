/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import NotFound from '../assets/img/404.png'

const Container = styled.div`
  padding: 150px 0px 200px 250px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  height: 25rem;
  width: 40rem;
  background-color: #9adfa6;
  border-radius: 15px;
  justify-content: center;
`;
const PaymentContainer = styled.div`
  font-family: "Urbanist";
  flex-flow: row;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  gap: 46px;
`;
const PaymentMode = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  margin-right: 32px;
  margin-left: -12px;
`;
const Title = styled.h1`
  margin-bottom: 5rem;
  color: white;
  justify-contet: center;
  align-items: center;
`;
const Button = styled.div.attrs(props => ({
  className: props.className,
}))`
  display: flex;
  margin-bottom: 2rem;
  color: white;
  justify-contet: center;
  align-items: center;
  margin-left: 8px;
  & .home{
            width: 238px;
            border-radius: 10px;
            height: 40px;
            padding: 12px 22px;
            font-size: 16px;
            font-family: "Urbanist";
            font-weight: 600;
            line-height: 14px;
            background-color: #5ece7b;
            border: 0px;
            color: white;
    &:hover{
            background: #3fa35a;
            cursor: pointer;
            border:1px solid #cdf0d2;
        }
    &:active{
            background: #3fa35a;
            color: #26282a;
        }
  }
`;
class FourOFour extends Component {
    render() {
    
        return (
            <Container>
            <Wrapper>
            <Title>The page you are looking for does not exist...yet</Title>
            
              <PaymentContainer>
                <PaymentMode>
                <img src={NotFound} alt="" />
                </PaymentMode>
              </PaymentContainer>

              <Button>
                <Link to ="/">
                  <button className="home">GO BACK HOME</button>
                </Link>
              </Button>
            </Wrapper>
            </Container>
          );
    }
}
  
export default FourOFour;


  
     
     
     
  