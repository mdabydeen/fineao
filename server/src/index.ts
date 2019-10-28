import express from "express";

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).send({ status: "It Worked!"});
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server is listening on port ${port}`);
});
