import { scrapeAlfred } from "./Scrapers/scrapeAlfred.js"
import { scrapeTvinna } from "./Scrapers/scrapeTvinna.js"
import { scrapeStorf } from "./Scrapers/screpeStorf.js";

const url = {
  tvinna: "https://www.tvinna.is/",
  alfred: "https://alfred.is/laus-storf?tags=394&tags=4&tags=238&tags=21&tags=329&tags=11&tags=41&tags=50&tags=14&tags=15&tags=5&tags=12&tags=391&tags=42&tags=22&tags=80&tags=335&tags=74&tags=79&tags=23&tags=52&tags=392&tags=234&tags=13&tags=6",
}
const keywords = ["React"];

function index() {
  // scrapeAlfred(keywords, url.alfred);
  // scrapeTvinna(keywords, url.tvinna);
  scrapeStorf(keywords);
}

index();