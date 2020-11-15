// console.log that your server is up and running
const app = require("./server");
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
