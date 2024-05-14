import styled from "styled-components";

export const MovieCard = styled.div`
  background-color: purple;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  border-radius: 8px;
  overflow: hidden;
  margin: 30px;
  display: inline-block;
  vertical-align: top;
  height: auto;
  padding: 20px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const CardRatings = styled.div`
  margin-top: 5px;
  color: #ff9800;
`;

export const CardDescription = styled.div`
  margin-top: 10px;
  font-size: 0.9rem;
  color: white;
`;

export const CardButton = styled.button`
  width: 80px;
  background-color: tomato;
  border-radius: 10px;
  color: white;
  margin-right: 20px;
`;
