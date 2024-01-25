import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animes from './pages/Animes';
import NewUpdate from './pages/NewUpdate';

export default function AnimesRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Animes/>} />
        <Route path="/newupdate/:anime_id" element={<NewUpdate/>} />
      </Routes>
    </BrowserRouter>
  );
}