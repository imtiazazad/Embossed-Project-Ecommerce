const app = require("./app");

// Handling Uncaught Ex
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting Down do low power supply  for  Uncaught Exception`);
  process.exit(1);
});

// Server

const server = app.listen(5000, () => {
  console.log(`Hello the server is running on port 5000`);
});

// Unhandled Promise Rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error :${err.message}`);
  console.log(
    `Shutting dow the sever because your are not good developer for Unhandlaed Promise Rejection`
  );
  server.close(() => {
    process.exit(1);
  });
});
