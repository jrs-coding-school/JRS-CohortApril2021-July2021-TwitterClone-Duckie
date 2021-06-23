module.exports = app => {
    const duckie = require("../controllers/duckie.controller");

    app.get("/", duckie.welcome);

    // users
    app.get("/api/user/:userName", duckie.getUser);
    app.get("/api/user/:id", duckie.getUserById);
    app.post("/api/user", duckie.createUser);
    app.put("/api/user/:id", duckie.editUserInfo);
    app.delete("/api/user/:id", duckie.deleteUser);

    app.post("/api/tweet/", duckie.createQuack);
    app.put('/api/tweet/like', duckie.addLike);
    app.put('/api/tweet/repost', duckie.addRepost)
    app.delete("/api/tweet/:id", duckie.deleteQuack);

};