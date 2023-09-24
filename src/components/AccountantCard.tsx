import { CSSProperties } from "react";
import styled, { css } from "styled-components";
import { Accountant } from "../types";
import Button from "./Button";

type AccountantCardProps = {
  accountant: Accountant;
};
export const AccountantCard = ({ accountant }: AccountantCardProps) => {
  return (
    <Card>
      <CardInner>
        <CardHeader>
          <CardImage src={accountant.picture.medium} alt={`${accountant.name.first} ${accountant.name.last}`} />
          <CardHeaderText>
            <CardTypography $type="secondary">Twoja księgowa</CardTypography>
            <CardTypography $fontWeight={700} $fontSize={"24px"} $lineHeight={"32px"}>{`${accountant.name.first} ${accountant.name.last}`}</CardTypography>
          </CardHeaderText>
        </CardHeader>
        <CardInfoText>
          <CardTypography $type="secondary" $fontSize={"0.875ren"} $lineHeight={"20px"}>
            E-mail
          </CardTypography>
          <CardTypography>{accountant.email}</CardTypography>
        </CardInfoText>
        <CardInfoText>
          <CardTypography $type="secondary" $fontSize={"0.875ren"} $lineHeight={"20px"}>
            Telefon
          </CardTypography>
          <CardTypography>{accountant.cell}</CardTypography>
        </CardInfoText>
        <CardInfoText>
          <CardTypography $type="secondary" $fontSize={"0.875ren"} $lineHeight={"20px"}>
            Średnia cena netto usługi / m-c
          </CardTypography>
          <CardTypography>
            350,00 <CardCurrency>PLN</CardCurrency>
          </CardTypography>
        </CardInfoText>
        <Button style={{ marginTop: "auto" }}>Dowiedz się więcej</Button>
      </CardInner>
    </Card>
  );
};

const Card = styled.div`
  padding-left: 24px;
  padding-top: 24px;
  min-width: 300px;
  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: 50%;
    max-width: 50%;
  }

  @media (min-width: 1024px) {
    flex-basis: 33.33%;
    max-width: 33.33%;
  }

  @media (min-width: 1345px) {
    flex-basis: 25%;
    max-width: 25%;
  }
`;

const CardInner = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 16px;
  border: 1px solid rgba(228, 230, 232, 1);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
  opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  height: 100%;
`;

const CardHeader = styled.div`
  display: flex;
  padding-bottom: 1.5rem;
`;

const CardHeaderText = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 0.5rem;
  margin-right: 1rem;
`;

const CardInfoText = styled.div`
  padding-bottom: 1.5rem;
`;

const CardTypography = styled.p<{
  $type?: "primary" | "secondary";
  $fontSize?: CSSProperties["fontSize"];
  $fontWeight?: CSSProperties["fontWeight"];
  $lineHeight?: CSSProperties["lineHeight"];
}>`
  font-size: ${(props) => props.$fontSize || "1rem"};
  font-family: "Roboto";
  font-style: normal;
  font-weight: ${(props) => props.$fontWeight || 400};
  line-height: ${(props) => props.$lineHeight || "24px"};

  ${(props) => {
    switch (props.$type) {
      case "secondary":
        return css`
          color: #54585c;
        `;
      default:
        return css`
          color: #000000;
        `;
    }
  }}
`;

const CardCurrency = styled.span`
  font-size: 12px;
  line-height: 16px;
`;

export default AccountantCard;
