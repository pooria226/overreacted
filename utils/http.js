// import axios from "axios"
const axios = require("axios");

/* --------------------- axios instance ----------------------- */

function http(cookie = undefined, router = undefined) {
  const instance = axios.create({});

  // set headers
  instance.defaults.headers.common["Accept"] = "application/json";

  /* --------------------- axios instance ----------------------- */

  // Add a request interceptor
  instance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      if (typeof cookie != "undefined" && cookie.get("user")) {
        // iff token exists
        config.headers.Authorization = "Bearer " + cookie.get("user");
      }

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    // return (window.location.href = "/auth/login");

    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // if (error.response && error.response.status === 401) {
      //   cookie.remove("user");
      // }

      // if (error.response && error.response.status === 422) {
      //   if (error.response.data.errors);
      //   for (const [key, value] of Object.entries(error.response.data.errors)) {
      //     message.warning(value[0]);
      //   }
      // }

      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  let error_display = (data, status) => {
    if (!data) return;
    if (status >= 400 && status < 500) {
    }
  };

  /* --------------------- axios instance errors ----------------------- */
  function errors_handler(error) {
    console.log("error", error);
    if (!error && !error.response && !error.response.data) {
      return;
    }
    let current_error = error?.response?.data;
    let current_error_status = error?.response?.status;
    switch (current_error_status) {
      case 400:
        //bad request
        error_display(current_error, current_error_status);
        break;
      case 401:
        //unauthenticate

        break;
      case 403:
        //unauthenticate
        error_display(current_error, current_error_status);
        break;
      case 410:
        //unauthenticate
        error_display(current_error, current_error_status);
        break;
      case 422:
        //error validations
        error_display(current_error, current_error_status);
        break;
      case 500:
        //server error
        error_display(current_error, current_error_status);
        break;
    }
  }

  /* --------------------- axios instance ----------------------- */

  return {
    posts: (callback, errCB = undefined) => {
      return instance
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(callback)
        .catch((err) => {
          errors_handler(err);
          if (errCB) errCB(err);
        });
    },
  };
}

module.exports.http = http;
