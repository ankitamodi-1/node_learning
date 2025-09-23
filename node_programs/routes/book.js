const express = require("express");
const bookRouter = express.Router();
const BookController = require("../controllers/BookController");
const auth = require("../middleware/auth");

bookRouter.get("/", auth, BookController.index);
bookRouter.post("/", auth, BookController.store_data);
bookRouter.get("/:id", auth, BookController.show);
bookRouter.patch("/:id", auth, BookController.udpate);
bookRouter.delete("/:id", auth, BookController.delete);



// bookRouter
//   .use(auth)
//   .route("/")
//   .get(BookController.index)
//   .post(BookController.store_data);
// bookRouter
//   .route("/:id")
//   .get(BookController.show)
//   .patch(BookController.udpate)
//   .delete(BookController.delete);

module.exports = bookRouter;
