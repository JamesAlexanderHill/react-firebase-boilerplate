import {Routes, Route} from "react-router-dom";

import L01Dashboard from "./layouts/01-dashboard";
import L02Settings from "./layouts/02-settings";

import P01Login from "./pages/01-login";
import P02Home from "./pages/02-home";
import P03Account from "./pages/03-account";

import { RequireAuth } from "./contexts/auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<P01Login />} />
        <Route element={<RequireAuth><L01Dashboard /></RequireAuth>}>
          <Route path="/" element={<P02Home />} />
          <Route path="/settings" element={<L02Settings />}>
          <Route path="/settings/account" element={<P03Account />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
