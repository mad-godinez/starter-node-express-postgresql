const categoriesService = require("./categories.service"); // service object we just created

function list(req, res, next) { // access the methods on the service obj to do CRUD ops
  categoriesService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

module.exports = {
  list,
};