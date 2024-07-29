importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCYtWbT1nGrVSuJ9w42J5SnIpyP05hqruI",
  authDomain: "regularise-e5f18.firebaseapp.com",
  projectId: "regularise-e5f18",
  storageBucket: "regularise-e5f18.appspot.com",
  messagingSenderId: "684471780845",
  appId: "1:684471780845:web:cb1998324ef82e808113e4",
  measurementId: "G-YPZ4TMBFFG",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
