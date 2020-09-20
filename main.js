const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://www.premierleague.com/matchweek/5665/blog";
const getPostTitles = async () => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const array = [];
    console.log($("span.teamName>abbr").attr("title"));
    $("ul.matchWeekFixtureListContainer>div.navLocalTimeContainer>p").each(
      (i, el) => {
        const data = $(el).data();
        array.push(data);
      }
    );
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
