import styled from "styled-components";

const ProductCardStyles = styled.div`
  width: 100%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 1.5rem;
  font-family: "Open Sans", sans-serif;
  color: #5a5a5a;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const ProductPrice = styled.p`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: right;
`;

const ProductImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 230px;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  }
`;

const ProductName = styled.h2`
  margin-top: 1rem;
`;

const ProductAgeGroup = styled.p`
  font-size: 1.125rem;
`;

const ProductDescription = styled.p`
  font-size: 0.875rem;
  margin-top: 1rem;
`;

export { ProductCardStyles, ProductPrice, ProductName, ProductAgeGroup, ProductDescription, ProductImage };
