import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // 현재 작업 디렉토리에서 환경 변수 로드 (.env)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // ========================================================================
    // [핵심 설정] 배포 경로 (Base URL)
    // 1. 현재 (GitHub Pages): '/eelab_page/' (반드시 레포지토리 이름과 같아야 함)
    // 2. 나중 (도메인 연결 시): '/' 로 변경 (eelab.skku.edu 연결 후)
    // ========================================================================
    base: "/eelab_page/",

    plugins: [react()],

    server: {
      port: 3000,
      host: '0.0.0.0', // 외부 접속 허용
    },

    // 코드 내에서 사용할 전역 상수 정의 (process.env 호환성)
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },

    resolve: {
      alias: {
        // '@'를 프로젝트 루트 디렉토리로 설정
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});