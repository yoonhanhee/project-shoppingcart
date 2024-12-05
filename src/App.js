import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch를 Routes로 변경
import MainPage from './pages/MainPage'; // 메인 페이지 컴포넌트
import CartPage from './pages/CartPage'; // 장바구니 페이지 컴포넌트
import ThemeToggle from './components/ThemeToggle'; // 테마 토글 컴포넌트
import { ThemeProvider } from './context/ThemeContext'; // 테마 컨텍스트 제공자

function App() {
  return (
    <ThemeProvider> {/* 테마 제공자로 감싸서 자식 컴포넌트에 테마 정보 제공 */}
      <Router basename="/project-shoppingcart"> {/* GitHub Pages에서 배포된 경로 설정 */}
        <div className="app">
          <ThemeToggle /> {/* 테마 토글 버튼 */}
          <Routes> {/* Routes 컴포넌트로 라우팅 설정 */}
            <Route path="/" element={<MainPage />} /> {/* 메인 페이지 경로 */}
            <Route path="/cart" element={<CartPage />} /> {/* 장바구니 페이지 경로 */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; // App 컴포넌트를 내보내기
