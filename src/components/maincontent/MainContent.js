import React from "react";
import { Panels } from "../panels";
import { SideBar } from "../sidebar";
import { MainContentStyles, MainContentWrapper } from "./styles";

function MainContent({ isUser, ...props }) {
  // The isUser is a state variable that is set once a valid
  // user has signed in. This is passed to all child components
  // to enable conditional rendering
  return (
    <>
      <MainContentStyles>
        <MainContentWrapper>
          <SideBar isUser={isUser} />
          <Panels isUser={isUser} />
        </MainContentWrapper>
      </MainContentStyles>
    </>
  );
}

export default MainContent;
