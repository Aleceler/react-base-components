import React from "react";
import styled from "styled-components";
import PopupCallExample from "./components/popup/popupCallExample";

const App: React.FC = () => {
  return (
    <AppContainer>
      <PopupCallExample />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  width: 100vw;
  color: red;
`;
