# 🧩 GameTracker Backend

Servidor backend de **GameTracker**, construido con **Node.js**, **Express** y **MongoDB**.  
Se encarga de manejar las rutas de reseñas y estadísticas, y conectar con la base de datos.

---

## 🚀 Funcionalidades

- API REST con rutas para reseñas (`/api/reviews`).
- Manejo de estadísticas personales (`/api/games/stats`).
- Conexión con MongoDB Atlas.
- Uso de CORS y middleware JSON.

---

## 🛠️ Tecnologías usadas

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- dotenv  
- cors

---

## ⚙️ Instalación y uso

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/KiiwiStrawberry/gametracker-backend.git
   cd gametracker-backend
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Crear un archivo `.env` en la raíz del proyecto con tu cadena de conexión:

   ```env
   MONGO_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.mqwbn.mongodb.net/<nombre>
   PORT=5000
   ```

4. Iniciar el servidor:

   ```bash
   npm start
   ```

   o en desarrollo:

   ```bash
   npm run dev
   ```

5. El servidor estará disponible en:

   ```
   http://localhost:5000
   ```

---

## 📡 Rutas principales

| Método | Ruta                | Descripción                    |
|--------|---------------------|--------------------------------|
| GET    | /api/reviews        | Obtener todas las reseñas      |
| POST   | /api/reviews        | Crear una nueva reseña         |
| GET    | /api/games/stats    | Obtener estadísticas personales|

---

## 🤝 Autor

Proyecto desarrollado por **KiiwiStrawberry**.
