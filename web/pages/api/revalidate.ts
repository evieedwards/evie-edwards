import { isValidRequest } from "@sanity/webhook";
import type { NextApiRequest, NextApiResponse } from "next";

const secret = process.env.SANITY_WEBHOOK_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!isValidRequest(req, secret)) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate("/");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
