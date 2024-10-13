import admin, { ServiceAccount } from 'firebase-admin';
import serviceAccount from '../../firebase-service-account.json'; // Confirma que é JSON

// Inicializando o Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
});

export const firestore = admin.firestore();
