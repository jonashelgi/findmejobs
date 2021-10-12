import axios from "axios";
import cheerio from "cheerio"
import fs from "fs";

const listurl = [
  "https://www.storf.is/?page=1",
  "https://www.storf.is/?page=2",
  "https://www.storf.is/?page=3",
  "https://www.storf.is/?page=4",
  "https://www.storf.is/?page=5",
  "https://www.storf.is/?page=6",
];

const jobs = [];
const goodJobs = [];

async function asyncStorf(keywords) {
  try {
    for (let i = 0; i < listurl.length; i++) {
      const { data } = await axios.get(listurl[i]);
      var $ = cheerio.load(data);
      const listJobs = $("#entry-listing article");
      listJobs.each((idx, el) => {
        const job = { name: "", desc: "", href: "", word: ""};
        job.name = $(el).children("div.entry-content-cnt").children("div").children("h1").text();
        job.desc = $(el).children("div.entry-content-cnt").children("div").children("div.jobad_description").text();
        job.href = $(el).children("div.entry-content-cnt").children("div").children("h1").children("a").attr("href");
        jobs.push(job);
      });
      if (i === parseInt(listurl.length / 2)) {
        console.log("Storf.is job search 25%");
      }
    }

    // Taka array af öllum störfunum og skoða hvort að keywords séu í starfsumsókninni.
    console.log("Storf.is job search 50%");
    for (let i = 0; i < jobs.length; i++) {
      if (typeof jobs[i].href !== "undefined") {
        var response = await axios.get(jobs[i].href);
        if (keywords.some(el => response.data.includes(el))) {
          goodJobs.push(jobs[i]);
          console.log(response.data);
        }
      }

      if (i === parseInt(jobs.length / 2)) {
        console.log("Storf.is job search 75%");
      }
    }
    const jsonContent = JSON.stringify(goodJobs, null, 4);
    fs.writeFile("./Outcome/storf.json", jsonContent, 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Storf.is job search 100%");
      console.log("Jobs from Storf.is were added");
    });

  } catch (err) {
    console.error(err);
  }
}

export function scrapeStorf(keywords) {
  asyncStorf(keywords);
}
