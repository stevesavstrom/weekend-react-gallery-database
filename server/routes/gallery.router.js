const express = require("express");
const router = express.Router();
// Added pool for database
const pool = require("../modules/pool");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route for updating likes on database
router.put("/like/:id", (req, res) => {
  console.log("Testing like on server", req.params);
  const likeId = req.params.id;
  const updateLike = `UPDATE gallery 
    SET "likes"= likes +1
    WHERE "id" =$1`;
  pool
    .query(updateLike, [likeId])
    .then((result) => {
      console.log("Updated task with PUT", result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${updateLike}`, error);
      res.sendStatus(500);
    });
}); // END PUT Route

// GET Route for retrieving URLs, Descriptions, and Likes from database
router.get("/", (req, res) => {
  // Get all of the treats from the database
  const sqlText = `SELECT * FROM gallery ORDER BY id ASC`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
