import app from "./app.js";

const connectServer = async () => {
  app.listen(process.env.PORT, () => {
    console.log("Server connected successfully");
  });
};

try {
  connectServer();
} catch (err) {
  console.log(`Error in connect server: ${err}`);
}
