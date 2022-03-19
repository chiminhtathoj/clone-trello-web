import React from "react";
import AppBar from "components/AppBar/AppBar.js";
import BoardBar from "components/BoardBar/BoardBar.js";
import BoardContent from "components/BoardContent/BoardContent.js";
import './App.scss';

function App() {
  return (
    <div className="trello-master">
      <AppBar />
      <BoardBar />
      <BoardContent />
    </div>
  );
}

export default App;
