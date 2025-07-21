import { Route, Routes } from "react-router";

// Import des composants/pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/categorie/:category" element={<Category />} />
      </Route>
    </Routes>
  );
}

export default App;
