const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://www.premierleague.com/matchweek/5665/blog";
const getPostTitles = async () => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const array = [];
    console.log($("span.teamName>abbr").attr("title"));
    $("span.teamName>abbr").each((i, el) => {
      const data = $(el).attr("title");
      array.push(data);
    });
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

/*
 ** SELECTORS
 * $('.apple', '#fruits').text()
 * $('ul .pear').attr('class')
 * $('li[class=orange]').html()
 *
 * ATRIBUTES
 * $('ul').attr('id') // selecting an attribute id on an ul element
 * $('.apple').attr('id', 'favorite').html()
 *
 * PROP
 * $('input[type="checkbox"]').prop('checked')
 * $('input[type="checkbox"]').prop('checked', true).val()
 *
 * .hasClass( className ) // returns true or false
 * $('#fruits').find('li').length
 */
