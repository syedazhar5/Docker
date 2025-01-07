const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            Name: "Syed Azhar",
            Age: 25,
            Address: "PNT 30"
        },
        {
            id: 2,
            Name: "Akshay Sardar",
            Age: 28,
            Address: "ABC 300"
        },
        {
            id: 3,
            Name: "Akshay Pawar",
            Age: 23,
            Address: "PQR 500"
        },
        {
            id: 4,
            Name: "Harshada Waghaye",
            Age: 22,
            Address: "GNP 41"
        },
        {
            id: 5,
            Name: "Chinar Kurve",
            Age: 25,
            Address: "ABS 14"
        }
    ])
});
app.listen(3000, () => {
    console.log("My app is running on port 3000")
})