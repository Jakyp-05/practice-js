import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthComponent from "./components/auth";
import { Accordion, SendingRequirest, Modal, Todos, Map, Tabs } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/modal" element={<Modal />} />
        <Route path="login" element={<AuthComponent />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/map" element={<Map />} />
        <Route path="/sending" element={<SendingRequirest />} />
        <Route path="/register" element={<AuthComponent />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;
