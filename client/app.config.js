import "dotenv/config";
export default {
  "expo": {
    "name": "client",
    "slug": "client",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/ember.jpeg",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/ember.jpeg",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/ember.jpeg",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/ember.jpeg"
    },
  "plugins": [
      [
        "expo-image-picker",
        {
          "photosPermission": "The app accesses your photos to let you share them with your friends."
        }
      ]
    ],
    "extra": {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID
    }
  }
}
