# 1. Usamos una versión ligera de Node.js
FROM node:20-alpine

# 2. Creamos y nos situamos en la carpeta de trabajo
WORKDIR /app

# 3. Copiamos los archivos de dependencias primero (Optimiza el cache)
COPY package*.json ./

# 4. Instalamos las dependencias
RUN npm install

# 5. Copiamos todo el código de nuestra carpeta src y demás
COPY . .

# 6. Exponemos el puerto que usa nuestra app (el que pusiste en .env)
EXPOSE 3000

# 7. Comando para arrancar la aplicación
CMD ["npm", "start"]