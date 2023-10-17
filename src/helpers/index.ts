import crypto from "crypto";
import { configDotenv } from "dotenv";
configDotenv();
const SECRET = process.env.SECRET || "olaCavalo";
export const generateSalt = () => crypto.randomBytes(128).toString("base64");
export const authentication = (password: string, salt: string) => {
    return crypto
        .createHmac("sha256", [password, salt, SECRET].join("/"))
        .update(SECRET)
        .digest("hex");
};
