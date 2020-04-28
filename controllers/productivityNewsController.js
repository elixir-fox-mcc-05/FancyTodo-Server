const axios = require("axios")

class ProductivityNewsController {
  static showProductivityArticles (req,res,next){
    return axios({
        method: 'GET',
        url: `http://newsapi.org/v2/everything?q=work-productively-productive-yourself&from=2020-04-21&sortBy=publishedAt&apiKey=${process.env.APIKEY_NEWS}`
    })
    .then(result => {
        const { articles } = result.data
        let RecentTenArticles = []
        for (let i = 0; i < 10; i++) {
            RecentTenArticles.push(articles[i])
        }
        res.status(200).json({
            message: "article list successfully read",
            selectedArticles : RecentTenArticles
        })
    })
    .catch(error => {
        console.log(error)
    })
  }
}

module.exports = ProductivityNewsController