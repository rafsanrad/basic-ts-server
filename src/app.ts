import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { pool } from "./db";
import { userRoute } from "./modules/user/user.route";

const app: Application = express();

app.use(express.json()); //middleware
app.use(express.text()); //middleware
app.use(express.urlencoded({ extended: true })); //nested data gulo nibe extended korar maddhome.

app.get("/", (req: Request, res: Response) => {
  //   res.send('Hello World!');
  res.status(200).json({
    message: "Express Server",
    author: "Rafsan Rad",
  });
});

app.use('/api/users',userRoute) ///api/users ei route e hit korlei taake mini server userRoute e niye jabe.

export default app
