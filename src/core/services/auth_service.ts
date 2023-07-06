import admin from "firebase-admin";
import { config } from "../config/config";

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: config.firebaseProjectId,
    privateKey: config.firebasePrivateKey,
    clientEmail: config.firebaseClientEmail,
  }),
});

export const authService = admin.auth();
