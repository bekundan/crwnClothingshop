import styled from "styled-components";

export const CollectionPages = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CollectionTitles = styled.div`
  font-size: 38px;
  margin: 0 auto 30px;
`;
export const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
