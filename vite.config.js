import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 👈 ဒါလေး ထပ်ထည့်ပါ

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 👈 ဒါလေးပါ ထပ်ထည့်ပေးပါ
  ],
})