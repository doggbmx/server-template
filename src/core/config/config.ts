import "dotenv/config";

export const config = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "secret",
  db: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "root",
    dbname: process.env.DB_NAME || "",
  },
  refreshToken: process.env.REFRESH_SECRET || "refresh",
  smtpEmail: process.env.SMTP_EMAIL || "email",
  smtpPassword: process.env.SMTP_PASS || "password",
  firebaseApiKey: process.env.FIREBASE_API_KEY || "key",
  firebaseProjectId: process.env.FIREBASE_PROJECT_ID || "project",
  firebasePrivateKey: process.env.FIREBASE_PRIVATE_KEY || "key",
  firebaseClientEmail: process.env.FIREBASE_CLIENT_EMAIL || "email",
};
