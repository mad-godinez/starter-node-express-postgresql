const categoriesService = require("./categories.service"); // service object we just created

async function list(req, res) {
  const data = await categoriesService.list(); // executes knex query 
  res.json({ data });
}

module.exports = {
  list,
};