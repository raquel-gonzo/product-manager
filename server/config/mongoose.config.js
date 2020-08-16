const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) .then(()=> console.log("database is connected"))
.catch(err => console.log(err));