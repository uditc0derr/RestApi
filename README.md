# 🌟 Public REST API with Faker.js

Welcome to the **Public Faker API** – a fun, free, ready‑to‑use REST API that generates fake data (users, products, movies, books, and more).  
Built with Node.js, Express, and [`@faker-js/faker`](https://github.com/faker-js/faker).  

> ✅ **Live API:** [https://restapi-1-wr49.onrender.com](https://restapi-1-wr49.onrender.com)

---

## 🚀 Features

- 20+ resource endpoints: users, products, movies, books, quotes, music, sports, and more
- Supports:
  - `GET` (list items)
  - `GET` by ID
  - `PUT` (update by ID)
  - `DELETE` (delete by ID)
- Filter results with `?count=10` (default: 10)
- Free to use – no authentication needed

---

## 📦 API Endpoints

| Resource        | GET all | GET by ID | PUT (update) | DELETE |
|-----------------|--------|-----------|--------------|--------|
| **Users**       | `/api/users` | `/api/users/{id}` | `/api/users/{id}` | `/api/users/{id}` |
| **Products**    | `/api/products` | `/api/products/{id}` | `/api/products/{id}` | `/api/products/{id}` |
| **Movies**      | `/api/movies` | `/api/movies/{id}` | `/api/movies/{id}` | `/api/movies/{id}` |
| **Books**       | `/api/books` | `/api/books/{id}` | `/api/books/{id}` | `/api/books/{id}` |
| **Quotes**      | `/api/quotes` | `/api/quotes/{id}` | `/api/quotes/{id}` | `/api/quotes/{id}` |
| **Music**       | `/api/music` | `/api/music/{id}` | `/api/music/{id}` | `/api/music/{id}` |
| **Vehicles**    | `/api/vehicles` | `/api/vehicles/{id}` | `/api/vehicles/{id}` | `/api/vehicles/{id}` |
| **Addresses**   | `/api/addresses` | `/api/addresses/{id}` | `/api/addresses/{id}` | `/api/addresses/{id}` |
| **Jobs**        | `/api/jobs` | `/api/jobs/{id}` | `/api/jobs/{id}` | `/api/jobs/{id}` |
| **Animals**     | `/api/animals` | `/api/animals/{id}` | `/api/animals/{id}` | `/api/animals/{id}` |
| **Restaurants** | `/api/restaurants` | `/api/restaurants/{id}` | `/api/restaurants/{id}` | `/api/restaurants/{id}` |
| **Tech**        | `/api/tech` | `/api/tech/{id}` | `/api/tech/{id}` | `/api/tech/{id}` |
| **Colors**      | `/api/colors` | `/api/colors/{id}` | `/api/colors/{id}` | `/api/colors/{id}` |
| **Companies**   | `/api/companies` | `/api/companies/{id}` | `/api/companies/{id}` | `/api/companies/{id}` |
| **Events**      | `/api/events` | `/api/events/{id}` | `/api/events/{id}` | `/api/events/{id}` |
| **Sports**      | `/api/sports` | `/api/sports/{id}` | `/api/sports/{id}` | `/api/sports/{id}` |
| **Numbers**     | `/api/numbers` | `/api/numbers/{id}` | `/api/numbers/{id}` | `/api/numbers/{id}` |
| **Passwords**   | `/api/passwords` | `/api/passwords/{id}` | `/api/passwords/{id}` | `/api/passwords/{id}` |
| **Tools**       | `/api/tools` | `/api/tools/{id}` | `/api/tools/{id}` | `/api/tools/{id}` |
| **Drinks**      | `/api/drinks` | `/api/drinks/{id}` | `/api/drinks/{id}` | `/api/drinks/{id}` |
| **Foods**       | `/api/foods` | `/api/foods/{id}` | `/api/foods/{id}` | `/api/foods/{id}` |

> ⚠ Replace `{id}` with an integer, e.g., `/api/users/123`.

---

## 🔍 Examples

| Example | URL |
|--------|-----|
| Get 5 random users | [`/api/users?count=5`](https://restapi-1-wr49.onrender.com/api/users?count=5) |
| Get user by ID | `/api/users/123` |
| Update user by ID | `PUT /api/users/123` |
| Delete user by ID | `DELETE /api/users/123` |

---

## 🛠 How to use (locally)

```bash
# Clone this repo
git clone https://github.com/uditc0derr/RestApi
cd RestApi

# Install dependencies
npm install

# Start the server
npm start
