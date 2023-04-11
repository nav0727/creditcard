import {useState} from 'react'
import {
  BgContainer,
  MainContainer,
  CardContainer,
  HrLine,
  PaymentContainer,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [accountNumber, acNum] = useState('')
  const [accountName, acName] = useState('')

  const actNbr = event => acNum(event.target.value)
  const actName = event => acName(event.target.value)
  return (
    <MainContainer>
      <CardContainer>
        <h1>CREDIT CARD</h1>
        <HrLine />

        <BgContainer data-testid="creditCard">
          <p>{accountNumber}</p>
          <p>CARDHOLDER NAME</p>

          <p>{accountName.toUpperCase()}</p>
        </BgContainer>
      </CardContainer>
      <PaymentContainer>
        <h1>Payment Method</h1>
        <Input
          type="text"
          value={accountNumber}
          placeholder="Card Number"
          onChange={actNbr}
        />

        <Input
          type="text"
          value={accountName}
          onChange={actName}
          placeholder="Cardholder Name"
        />
      </PaymentContainer>
    </MainContainer>
  )
}

export default CreditCard
