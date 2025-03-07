import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAtZ6uXleJlBS0qdmK6cB-8zVOZiAJNn2A",
  authDomain: "omnexus-e09d9.firebaseapp.com",
  projectId: "omnexus-e09d9",
  storageBucket: "omnexus-e09d9.firebasestorage.app",
  messagingSenderId: "163341280672",
  appId: "1:163341280672:web:2e1dc2dffaa25a7974b0c5",
  measurementId: "G-CBV8SR624Z",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});