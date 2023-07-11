
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Main from "../../pages/main";
import SearchLaws from "../../pages/pageTestSearch";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<SearchLaws />} />
      </Routes>
    </BrowserRouter>
  );
}
