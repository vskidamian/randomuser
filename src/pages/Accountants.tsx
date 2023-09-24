import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import AccountantCard from "../components/AccountantCard";
import Button from "../components/Button";
import { Accountant } from "../types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Accountants = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const [accountants, setAccountants] = useState<Accountant[]>([]);
  const [page, setPage] = useState<number>(1);

  const url: string = `https://randomuser.me/api/?seed=abc&gender=female&page=${page}&results=4`;

  const { data } = useSWR<AccountantResponse>(url, fetcher);

  useEffect(() => {
    if (data?.results) {
      setAccountants((prev) => [...prev, ...data?.results]);
    }
  }, [data?.results]);

  useEffect(() => {
    if (!accountants.length || !bottomRef.current) return;

    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [accountants]);

  return (
    <Container>
      <AccountantsContainer>
        {accountants ? accountants.map((accountant) => <AccountantCard key={accountant.login.uuid} accountant={accountant} />) : null}
        <div ref={bottomRef} />
      </AccountantsContainer>
      <FabButtons>
        <Button onClick={() => setPage((prev) => prev + 1)}>Załaduj więcej</Button>
      </FabButtons>
    </Container>
  );
};

export type AccountantResponse = {
  results: Accountant[];
  info: {
    page: number;
  };
};

const Container = styled.div`
  width: 100%;
  padding-bottom: 86px;
`;

const FabButtons = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(228, 230, 232, 1);
  z-index: 2;
  background: #fff;
  height: 70px;
`;

const AccountantsContainer = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;
  margin-top: -24px;
  width: calc(100% + 24px);
  margin-left: -24px;
  max-width: 1440px;
`;

export default Accountants;
