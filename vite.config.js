import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    outDir: './build', // or the directory you want to use
  },
};