const initAuth = () => {
  return window.gapi.auth2.init({
    client_id: "1056632967794-7cqjdvjckn6hu1mfl9t83qa6j00kfpvd.apps.googleusercontent.com", //paste your client ID here
    scope: "https://www.googleapis.com/auth/analytics.readonly",
  });
};