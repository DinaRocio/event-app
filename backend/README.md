# 🧠 Event App Backend

This is a minimalist backend built with Node.js + TypeScript for managing events. It lets you create events and store them in a PostgreSQL database using Prisma ORM. The database runs locally via Docker, so you don’t need to install PostgreSQL manually.

---

## 📦 Tech Stack

- **Node.js + Express** – HTTP server and routing
- **TypeScript** – strict typing
- **Prisma** – ORM to talk to the database
- **PostgreSQL** – relational database
- **Docker** – runs PostgreSQL locally with zero setup

---

## 🚀 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+)
- [Docker + Docker Compose](https://www.docker.com/)
- [npm](https://npm.io/)

---

## ⚙️ Setup: Step by Step

### 1. Clone the project

```bash
git clone https://github.com/your-username/event-app-backend.git
cd event-app-backend
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Create .env file

```bash
cp .env.example .env
```

### Content for .env:

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/eventapp"
```

This connects Prisma to the local PostgreSQL instance running via Docker.

## ⚙️ Start the database with Docker

1. Launch the PostgreSQL container

```bash
docker-compose up -d
```

This spins up a local PostgreSQL database with:

User: postgres

Password: postgres

Database: eventapp

## ⚙️ Setup the database schema with Prisma

### 1. Generate the Prisma client

```bash
docker-compose up -d
```

### 2. Push schema to the database

```bash
npx prisma db push
```

### 3. (Optional) Open Prisma Studio to view/edit data

```bash
npx prisma studio
```

It will open a UI at: http://localhost:5555

## 🧑‍💻 Run the development server

```bash
npm run dev
```

The backend will be available at:

```bash
http://localhost:4000
```

## 🧪 Test the endpoint

POST /api/events
Creates a new event

Example request body

```json
{
  "title": "Demo Planning",
  "description": "Q3 strategy session",
  "date": "2025-07-01T15:00:00.000Z",
  "time": "15:00",
  "location": "Main Office",
  "template": "template1"
}
```

Example response

```json
{
  "publicSlug": "demo-planning",
  "adminSlug": "demo-planning-s4xklw"
}
```

## 🔧 Useful commands

```bash
npm run dev          # Start dev server with live reload
npx prisma        # Access Prisma CLI (generate, db push, etc.)
npm format       # Format code with Prettier
```

## 📁 Project structure (simplified)

```bash
Editar
├── prisma/
│   └── schema.prisma          # DB schema definition
├── src/
│   ├── controllers/           # HTTP route handlers
│   ├── services/              # Business logic + DB access
│   ├── utils/                 # Slug generator, etc.
│   └── index.ts               # Server entry point
├── docker-compose.yml         # PostgreSQL setup
├── .env                       # Environment variables
├── package.json
└── README.md
```

## 👩‍💻 Author

Crafted with ❤️ by Di to bridge the gap between frontend and backend development in the real world
