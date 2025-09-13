import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';


const bounce = keyframes`
  0%, 100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;

const ProductCardContainer = styled(Link)`
  width: 250px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  border: 2px solid #001f3f;
  transition: transform 0.3s ease, border-color 0.3s ease;
  height: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  &:hover {
    border-color: #f05a28;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px #001f3f, 0 0 0 2px #3bb7d2;
  }

  @media (min-width: 640px) {
    padding: 1.5rem;
    width: 280px;
  }
`;

const ProductImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProductImage = styled.img`
  width: 7rem;
  height: 7rem;
  object-fit: contain;
  user-select: none;
  transition: transform 0.3s ease;
  
  ${ProductCardContainer}:hover & {
    transform: scale(1.05);
  }

  @media (min-width: 640px) {
    width: 8rem;
    height: 8rem;
  }
`;

const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  color: #001f3f;
  text-align: center;
  margin-bottom: 0.25rem;
  letter-spacing: 0.025em;
  text-transform: uppercase;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`;

const ViewDetailsButton = styled.button`
  margin-top: auto;
  background-color: #f05a28;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #d94c1d;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px #3bb7d2;
  }
`;

const SolutionCard = ({ name, image, id }) => {
  const productId = id

  return (
    <ProductCardContainer
      to={productId ? `/product/${productId}` : "#"}
      tabIndex={0}
      aria-label={`View details for ${name}`}
    >
      <ProductImageWrapper>
        <ProductImage src={image} alt={name} loading="lazy" />
      </ProductImageWrapper>
      <ProductName>{name}</ProductName>
      <ViewDetailsButton tabIndex={-1}>View Details</ViewDetailsButton>
    </ProductCardContainer>
  );
};

export default SolutionCard;
