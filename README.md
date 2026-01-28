# Proyecto de Aplicaciones Distribuidas

## Implementación de una Aplicación Distribuida con Contenedores Docker

---

## 👥 Integrantes
- **Kevin Almeida**
- **Misael Garcia**
- **Jose Pila**

---

## 📌 Descripción del Proyecto

Este proyecto corresponde a la asignatura **Aplicaciones Distribuidas** y tiene como objetivo el diseño, implementación y despliegue de una **aplicación web distribuida**, utilizando contenedores Docker, balanceo de carga con NGINX y una base de datos MySQL con replicación.

La arquitectura propuesta permite demostrar conceptos clave como:
- Escalamiento horizontal
- Balanceo de carga
- Separación de responsabilidades
- Persistencia de datos
- Replicación de bases de datos
- Pruebas de rendimiento bajo carga

---

## 🏗️ Arquitectura General

La infraestructura está compuesta por los siguientes elementos:

- **Tres nodos de aplicación web** (Node.js + Express)
- **Un balanceador de carga NGINX**
- **Un servidor MySQL Master**
- **Un servidor MySQL Slave**
- **phpMyAdmin** para administración de bases de datos
- **Docker Compose** para la orquestación de contenedores

