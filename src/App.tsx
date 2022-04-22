import React from "react";

type ErrorBoundaryProps = {
  fallback: React.ReactNode;
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

type Pokemon = {
  name: string;
  url: string;
};

function suspenify<T>(promise: Promise<T>): { read: () => T } {
  let status: "pending" | "success" | "error" = "pending";
  let result: T;
  let error: Error;

  let suspender = promise
    .then((res) => {
      status = "success";
      result = res;
    })
    .catch((e) => {
      status = "error";
      error = e;
    });

  return {
    read: () => {
      if (status === "pending") throw suspender;
      if (status === "error") throw error;
      return result;
    },
  };
}

const getPokemons = suspenify<Pokemon[]>(
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((res) => res.json())
    .then((res) => res.results)
);

function PokemonList() {
  const pokemons = getPokemons.read();
  return (
    <ol>
      {pokemons.map((pokemon) => (
        <li key={pokemon.url}>{pokemon.name}</li>
      ))}
    </ol>
  );
}

function App() {
  return (
    <div>
      <ErrorBoundary fallback={<p>something went wrong</p>}>
        <React.Suspense fallback={<p>loading...</p>}>
          <PokemonList />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
