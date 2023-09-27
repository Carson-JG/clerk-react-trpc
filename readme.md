# clerk-react-trpc

## About

Quick POC for Clerk-React-tRPC integration. It's got a client and server. Client's built with Create React App. Server's an Express app. Client and server both use Clerk for auth. tRPC glues them together.

## Structure

- `client/`: React app
- `server/`: Express app

## Pre-reqs

- Node 14+
- npm

## Setup

1. Clone this repo

2. Client Setup & Run

   1. `cd client`
   2. `npm install`
   3. `npm start`

3. Server Setup & Run
   1. `cd server`
   2. `npm install`
   3. `npm run dev`

## Features

- Google Login
- tRPC Call with Clerk Auth
