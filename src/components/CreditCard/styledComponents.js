import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #3b4b69;
  align-items: center;

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`

export const BgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 50vh;
  display: flex;
  flex-direction: column;
  width: 40vw;
  justify-content: end;
  padding-left: 20px;
  border-radius: 10px;
  margin: 10px;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #d3d9e0;
  align-items: center;
`

export const HrLine = styled.hr`
  width: 100px;
  background-color: #ffd773;
  border: solid;
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d3d9e0;
  height: 100vh;
  width: 50vw;
  justify-content: center;
`

export const Input = styled.input`
  width: 40vw;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
`
