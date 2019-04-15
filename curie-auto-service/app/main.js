import express from "express"

export const app = express()

app.get("/status", req => req.res.send("ONLINE"))

export const up = () => app.listen(3000)