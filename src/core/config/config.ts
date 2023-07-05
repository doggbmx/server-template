import "dotenv/config";

export const config = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "secret",
  db: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || "postgres",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "root",
  },
  refreshToken: process.env.REFRESH_SECRET || "refresh",
  smtpEmail: process.env.SMTP_EMAIL || "email",
  smtpPassword: process.env.SMTP_PASS || "password",
};
