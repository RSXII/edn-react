import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
    VITE_REACT_APP_CLERK_PUBLISHABLE_KEY:
      process.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY,
  },
});
