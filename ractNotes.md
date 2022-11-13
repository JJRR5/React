**How to install tailwindcss in reactjs**
1.- npm i -D tailwindcss@latest postcss@latest autoprefixer@latest
2.- npx tailwindcss init -p
3.- add these direcories on your index.css file : @tailwind base;
@tailwind components;
@tailwind utilities;
4.- on the file tailwind.config.js add this line: purge: ['./src/**/*.jsx', './index.html'],
