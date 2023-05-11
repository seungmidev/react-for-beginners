import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/book/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

// 깃헙 레포지토리 연결한 다음에 npm run deploy, 몇 분 후 https://seungmidev.github.io/react-for-beginners 페이지 나오나 확인

export default App;