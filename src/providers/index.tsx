import Navbar from "@/components/Navbar";
import { AppRoutes } from "@/routes";
import { pokemonStore } from "@/stores/pokemonStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

function ApplicationProvider() {
  return (
    <Provider store={pokemonStore}>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </Provider>
  );
}

export default ApplicationProvider;
