// Ekki breyta
import { scrapeAlfred } from "./Scrapers/scrapeAlfred.js"
import { scrapeTvinna } from "./Scrapers/scrapeTvinna.js"
import { scrapeStorf } from "./Scrapers/screpeStorf.js";
// Ekki breyta



// Bæta við fleirri leitar orðum hérna. 
// Stór eða lítill stafur skiptir máli.
// Ekki hægt að nota leitarorðin Javascript, HTML og CSS.
// Sjá afhverju með því að lesa Github readme: https://github.com/jonashelgi/findmejobs

const keywords = ["React"];



// Ekki breyta
scrapeAlfred(keywords);
scrapeTvinna(keywords);
scrapeStorf(keywords);
// Ekki breyta