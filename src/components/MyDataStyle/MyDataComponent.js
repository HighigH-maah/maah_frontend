import styled from "styled-components";

export const MyDataBack = styled.div`
  width: auto;
  height: auto;
  position: relative;
  background-size: auto 100%;
  background: linear-gradient(
    176deg,
    #152592 0.08%,
    #141414 0.09%,
    #6c6c6c 46.04%,
    #1a1f40 100%
  );
`;
export const LimitWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 0 auto;
  width: 1116px;
  justify-content: center;
  margin-top: ${(props) => (props.isFirst ? "15rem" : "1rem")};
  position: relative;
  margin-bottom: ${(props) => (props.isLast ? "15rem" : "1rem")};
`;
export const LimitDiv = styled.div`
  border-radius: 16px;
  background: linear-gradient(
    128deg,
    #fff 2.15%,
    rgba(255, 255, 255, 0.99) 31.12%,
    rgba(255, 255, 255, 0.98) 47.67%,
    rgba(215, 215, 215, 0.97) 70.94%,
    rgba(255, 255, 255, 0.96) 81.28%,
    rgba(255, 255, 255, 0.99) 105.59%
  );
  display: flex;
  width: 250px;
  height: 230px;
  min-width: 320px;
  min-height: 200px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
`;

export const SaleForMonth = styled.div`
  display: flex;
  width: 564px;
  height: 477px;
  min-height: 400px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 16px;
  background: linear-gradient(
    123deg,
    #fff 1.92%,
    rgba(255, 255, 255, 0.99) 22.96%,
    rgba(255, 255, 255, 0.98) 34.98%,
    rgba(215, 215, 215, 0.97) 51.89%,
    rgba(255, 255, 255, 0.96) 59.4%,
    rgba(255, 255, 255, 0.99) 77.06%
  );
`;

export const CompareLastMonth = styled.div`
  display: flex;
  width: 471px;
  height: 474px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 16px;
  background: linear-gradient(
    128deg,
    #fff 2.15%,
    rgba(255, 255, 255, 0.99) 31.12%,
    rgba(255, 255, 255, 0.98) 47.67%,
    rgba(236, 236, 236, 0.97) 70.94%,
    rgba(255, 255, 255, 0.96) 81.28%,
    rgba(255, 255, 255, 0.99) 105.59%
  );
`;

export const CategoryGraph = styled.div`
  border-radius: 16px;
  background: linear-gradient(
    128deg,
    #fff 2.15%,
    rgba(255, 255, 255, 0.99) 31.12%,
    rgba(255, 255, 255, 0.98) 47.67%,
    rgba(215, 215, 215, 0.97) 70.94%,
    rgba(255, 255, 255, 0.96) 81.28%,
    rgba(255, 255, 255, 0.99) 105.59%
  );
  width: 1155px;
  height: 477px;
  flex-shrink: 0;
`;

export const MyDataTitle = styled.div`
  color: white;
  font-size: 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  top: 11rem;
  position: relative;
`;
