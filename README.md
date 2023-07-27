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

Fill the variables in the `.env` file, aaand you're ready to go! This should make all fine! Happy coding!
