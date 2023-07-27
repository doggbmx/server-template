# Node Express TypeScript Template

This template works like an template server that you can just add stuff and still work. It should be connected to a [mobile Flutter App](https://github.com/josemlegal/flutter_template_app).

#### List of techs used:

- Node
- Express.JS
- TypeScript
- Firebase Auth
- PostgreSQL

### How to make it run

#### Setup Firebase

You'll find on the `auth_service.ts` something like this:

```typescript
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
```

Fill the variables in the `.env` file, aaand you're ready to go! Firebase `projectId`, `privateKey` and `clientEmail` you should find it on the [Firebase Console](https://console.firebase.google.com/u/0/).

#### **NOTE:** You should already have PostgreSQL installed and running as a service. Fill the `.env` variables with the correct data.

# Happy coding!
