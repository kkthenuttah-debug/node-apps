import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
server: {
host: "0.0.0.0",
port: process.env.PORT || 3000,
},
base: process.env.VITE_BASE_PATH || "/",
plugins: [react()],
resolve: {
alias: {
"@": path.resolve(__dirname, "./src"),
},
},
hmr: {
port: process.env.PORT || 3000,
host: '0.0.0.0'
}
}));