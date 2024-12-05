import React, { createContext, useState, useEffect } from 'react';

// ThemeContext 생성
export const ThemeContext = createContext();

// ThemeProvider 컴포넌트 정의
export const ThemeProvider = ({ children }) => {
  // 로컬 스토리지에서 테마를 가져옴. 기본값은 'light'
  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme || 'light');

  // 테마가 변경될 때마다 로컬 스토리지와 document.body의 클래스 이름을 업데이트
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  // 테마를 토글하는 함수
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // ThemeContext.Provider를 통해 테마와 토글 함수를 제공
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};