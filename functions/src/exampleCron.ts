import * as functions from "firebase-functions";

export const exampleCron = functions.pubsub
  .schedule("0 6,11 * * *")
  .onRun(async (context) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    return null;
  });
