# 1. Usamos una versión ligera de Node.js
FROM node:20-alpine

# 2. La carpeta raiz
WORKDIR /app

# 3. Copiamos los archivos de dependencias json para instalar las librerias de la app
COPY package*.json ./

# 4. Instalamos las dependencias
RUN npm install

#5. Copia de los archivos de la pagina web
COPY . .

# 6. Puerto definido para la app web
EXPOSE 3000

# 7. Comando para arrancar la aplicación
CMD ["npm", "start"]