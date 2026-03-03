import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
})
// https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react({
//       babel: {
//         plugins: [['babel-plugin-react-compiler']],
//       },
//     }),
//   ],
// })

// import { defineConfig } from 'vite'


// export default defineConfig({
//   resolve: {
//     alias: {
//       process: 'process/browser',
//       buffer: 'buffer'
//     }
//   },

//   define: {
//     global: 'globalThis',
//     'process.env': {}
//   },


//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:3000",
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// })

// frontend/vite.config.js

// export default defineConfig({
//   resolve: {
//     alias: {
//       // Ensures compatibility for libraries expecting Node globals
//       process: "process/browser",
//       buffer: "buffer",
//     },
//   },

//   define: {
//     global: "globalThis",
//     "process.env": {},
//   },

//   plugins: [
//     react({
//       babel: {
//         // Experimental React Compiler setup
//         plugins: [["babel-plugin-react-compiler", { target: "18" }]],
//       },
//     }),
//   ],

//   
// });