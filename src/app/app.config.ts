import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"nueva-app-simulacro","appId":"1:313224217810:web:dcda9d872c1aa31a31990b","storageBucket":"nueva-app-simulacro.appspot.com","apiKey":"AIzaSyCokzvoze4ekxwPlDzAspf9VFN2nuM4A-U","authDomain":"nueva-app-simulacro.firebaseapp.com","messagingSenderId":"313224217810"})), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
