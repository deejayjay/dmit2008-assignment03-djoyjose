import React from "react";
import { IconButton } from "../../ui/IconButton";
import { PanelCardsContainer, PanelStyles, PanelTitle, PanelTitleBar } from "./styles";

function Panels({ isUser, ...props }) {
  if (isUser) {
    return (
      <>
        <PanelStyles>
          <PanelTitleBar>
            <PanelTitle>Product Listings</PanelTitle>
            <IconButton text="Add Toy" bgColor="#64a64e" color="#333333" iconPosition="before" iconName="fas fa-plus-square" iconMargin="0 0.5rem 0 0" />
          </PanelTitleBar>
          <PanelCardsContainer>{/* Add Product Cards here */}</PanelCardsContainer>
        </PanelStyles>
      </>
    );
  }
  return null;
}

export default Panels;
