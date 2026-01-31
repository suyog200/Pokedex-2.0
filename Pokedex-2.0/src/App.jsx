import { queryClient } from "./util/DataFetch";
import { QueryClientProvider } from "@tanstack/react-query";
import Login from "./components/LoginPage/LoginPage";
import "./App.css";
import Signup from "./components/SignupPage/SignupPage";
import HomePage from "./components/HomePage/HomePage";
import Pokedex from "./components/Pokedex/Pokedex";
import ContactPage from "./components/ContactPage/ContactPage";
import CommunityPage from "./components/CommunityPage/CommunityPage";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <HomePage />
        <Pokedex />
        <CommunityPage />
        <ContactPage />
      </>
    </QueryClientProvider>
  );
}

export default App;
