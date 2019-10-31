import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import "reflect-metadata";
import * as swaggerUI from "swagger-ui-express";
import * as swaggerDocument from './swagger.json';
import {createConnection} from "typeorm";
import routes from "./routes";

// Connects to the Database -> then starts the express
// createConnection()
//   .then(async (connection) => {
    // Create a new express application instance
const app = express();


// Call midlewares
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

// Set all routes from routes folder
app.use("/", routes);

app.listen(3000, () => {
// tslint:disable-next-line:no-console
console.log("Server started on port 3000!");
});

  // })

  // .catch((error) => {
  //   // tslint:disable-next-line:no-console
  //   console.log(error);
  // });
