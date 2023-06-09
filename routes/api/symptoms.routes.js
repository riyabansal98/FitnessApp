const router = require("express").Router();
const symptomsController = require("../../controllers/symptoms.controller.js")

module.exports = function(){
    // Matches with "/symptoms"
    router.route("/")
        .get(symptomsController.findAll)
        .post(symptomsController.create);
  
    // Matches with "/symptoms/:id"
    router.route("/:id")
      .get(symptomsController.findById)
      .put(symptomsController.update)
      .delete(symptomsController.remove);
  
    return router;
} 

