const router = require("express").Router();
const axios = require("axios");

router.get("/", (req, res, next) => {
  axios
    .get("https://api.kawalcorona.com/indonesia/provinsi", {
      //   headers:{key: value (simpan di env, lalu panggil menggunakan proses.env)} jika diminta key, token taruh di sini
    })
    .then((response) => {
      const { data } = response;
      res.json({
        covids: data,
      });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
