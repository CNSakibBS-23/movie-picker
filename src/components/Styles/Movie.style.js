import styled from "styled-components";

export const MovieCard = styled.div`
  background-color: #000000;
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
  h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
`;

export const CardRatings = styled.p`
margin-top: 5px;
    color: #ff9800; /* or any other color you prefer
`;

export const CardDescription = styled.p`
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
