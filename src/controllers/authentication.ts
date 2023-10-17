import express from "express";

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password, username } = req.body;

        if (!email || !password || !username) {
            throw new Error("Missing parameters");
        }

        const existingUser;
    } catch (e) {
        console.log(e);
        res.status(400).send(e.message);
    }
};
