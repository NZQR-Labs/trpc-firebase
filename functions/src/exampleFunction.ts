import * as functions from "firebase-functions";
import { Request, Response } from "firebase-functions";
import * as cors from "cors";

const corsHandler = cors({ origin: true });

export const exampleFunction = functions.runWith({
  timeoutSeconds: 60,
  memory: "1GB",
}).https.onRequest((req: Request, res: Response) => {
  corsHandler(req, res, async () => {
    res.status(200).send({data: "Hello from Firebase!"});
  });
});
