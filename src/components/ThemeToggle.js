import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // ThemeContext 가져오기

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // 현재 테마와 테마 전환 함수 가져오기

  return (
    <div className="theme-toggle"> {/* 테마 전환을 위한 div */}
      <button onClick={toggleTheme}> {/* 테마 전환 버튼 */}
        {theme === 'light' ?  'Light Mode 🌞' : 'Night Mode 🌜'} {/* 현재 테마에 따라 버튼 텍스트 변경 */}
      </button>
    </div>
  );
};

export default ThemeToggle; // ThemeToggle 컴포넌트를 기본 내보내기
