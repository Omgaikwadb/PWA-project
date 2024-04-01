if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function (registration) {
      console.log(
        "Service worker registration successful:",
        registration.scope
      );
    })
    .catch(function (error) {
      console.log("Service worker registration failed:", error);
    });
}
