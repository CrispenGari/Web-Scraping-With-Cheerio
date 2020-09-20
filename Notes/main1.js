/*
 * WEB SCRAPING WITH CHEERIO AND AXIOS
 *
 * npm i cheerio axios
 *
 */
const axios = require("axios");
const cheerio = require("cheerio");

const getPostTitles = async () => {
  try {
    //   pass the url to axios
    const { data } = await axios.get("https://old.reddit.com/r/programming/");
    // get a response and pass it to cheerio load method
    const $ = cheerio.load(data);
    // an array that will hold data
    const array = [];
    // querying for specific things on specific tag
    $("div>p.title>a").each((i, el) => {
      //   get the data from the element using .text() method
      const data = $(el).text();
      //   push it into an array
      array.push(data);
    });
    // return an array of data
    return array;
  } catch (error) {
    throw error;
  }
};
getPostTitles()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    // do something
  })
  .finally(() => {
    // do something
  });
