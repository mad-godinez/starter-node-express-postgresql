const router = require("express").Router({ mergeParams: true });
const controller = require("./suppliers.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").post(controller.create).all(methodNotAllowed);

router
  .route("/:supplierId")
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

module.exports = router;
// [
//   {
//     "supplier_id": 1,
//     "supplier_name": "Pas",
//     "supplier_address_line_1": "4951  Godfrey Road",
//     "supplier_address_line_2": "",
//     "supplier_city": "New York",
//     "supplier_state": "NY",
//     "supplier_zip": "10040",
//     "supplier_phone": "212-567-0921",
//     "supplier_email": "pk437g7e4i9@temporary-mail.net",
//     "supplier_notes": "Beer evangelist. Subtly charming pop culture specialist. Alcohol expert. Foodaholic. Extreme internet aficionado.",
//     "supplier_type_of_goods": "Homeware",
//     "created_at": "2022-03-31 21:50:24.248668 +00:00",
//     "updated_at": "2022-03-31 21:50:24.248668 +00:00"
//   }
// ]