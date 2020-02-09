import React from "react";
import MainContainer from "../_containers/MainContainer";
import { createTechStatusInitialState } from "../../immer/initialStates";
import { useImmerReducer } from "use-immer";
import { createTechStatusReducer } from "../../immer/reducers";
import CreateTechSnackbar from "./atoms/CreateTechSnackbar";
import CreateTechForm from "./molecules/CreateTechForm";

/**
 * This component will be used for the create tech page.
 * It will be under Admin from the nav list.
 * It is a form with frist/last name fields
 * creates a tech in database on submit.
 */

const CreateTechPage: React.FC = () => {
  const [statusState, statusDispatch] = useImmerReducer(
    createTechStatusReducer,
    createTechStatusInitialState
  );

  return (
    <MainContainer content="center">
      <CreateTechForm
        statusDispatch={statusDispatch}
        statusState={statusState}
      />
      <CreateTechSnackbar
        statusState={statusState}
        statusDispatch={statusDispatch}
      />
    </MainContainer>
  );
};

export default CreateTechPage;
