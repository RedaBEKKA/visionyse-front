
# gladia-frontend

🚀 Next.js App Router Project

This is a Next.js App Router project built as part of a technical assessment. The project uses environment variables and integrates with an API at http://localhost:5000.

🛠️ Tech Stack
Framework: Next.js (App Router)

Language: TypeScript

Auth: Auth.js (NextAuth v5)

Styling: Tailwind CSS

API URL: http://localhost:5000

📦 Getting Started
Follow these steps to run the project locally:

1. Clone the Repository
   git clone https://github.com/redab2k/test-technique.git
2. Install Dependencies
   npm install
3. Create .env.local File
   Create a .env.local file in the root of the project and paste the following:
   AUTH_SECRET="u+3qFPA9SVBjEYqtPqGf5Op3h7+1qFFiWo+IGioUOxM="

   NEXT_PUBLIC_API_URL=http://localhost:5000

   NEXTAUTH_URL="http://localhost:3000"

🔐 Make sure the API at http://localhost:5000 is running locally.

4. Run the Development Server
   Start the app in development mode:
   npm run dev

The app will be available at http://localhost:3000

