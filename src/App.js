import React from "react";
import styled from "@emotion/styled";
import { CssBaseline } from "@material-ui/core";
import "./App.css";

import PokemonInfo from "./compontents/PokemonInfo";
import PokemonFilter from "./compontents/PokemonFilter";
import PokemonTable from "./compontents/PokemonTable";

import PokemonContext from "./PokemonContext";

const Title = styled.h1`
  text-align: center;
`;
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;

const stateReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: payload,
      };
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        selectedPokemon: payload,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(stateReducer, {
    filter: "",
    pokemon: [],
    selectedPokemon: null,
  });

  React.useEffect(() => {
    fetch("/reacttest/pokemon.json")
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({
          type: "SET_POKEMON",
          payload: data,
        })
      );
  }, []);

  if (!state.pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <PageContainer>
        <CssBaseline />
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
      </PageContainer>
    </PokemonContext.Provider>
  );
}

export default App;
