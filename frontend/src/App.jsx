import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";
import Profile from "./pages/profile";
import Chat from "./pages/chat";
import NotFound from "./pages/otherPages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/auth" element={<Auth/>} />
      <Route path="/chat" element={<Chat/>} />
      <Route path="/profile" element={<Profile/>} />

      {/* for all other routers */}
      <Route path="*" element={ <NotFound/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
