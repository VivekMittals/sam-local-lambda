const axios = require("axios");

let response;

exports.lambdaHandler = async (event, context) => {
  try {
    try {
      const data = {
        name: "Vivek",
      };
      const response = await axios.post(
        "http://host.docker.internal:8080/createPerson",
        data
      );
      console.log("New Post:", response.data);
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  } catch (err) {
    console.log(err);
    return err;
  }

  return response.data;
};

//sam local invoke -e ./events/event.json HelloWorldFunction --add-host host.docker.internal:host-gateway
