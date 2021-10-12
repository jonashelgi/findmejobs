import axios from "axios";
import cheerio from "cheerio"
import fs from "fs";

const jobs = [];
const goodJobs = [];

async function asyncTvinna(keywords, url) {
  try {
    const { data } = await axios.get(url);
    var $ = cheerio.load(data);
    const listJobs = $(".job-listing ul li a");
    listJobs.each((idx, el) => {
      const job = { desc: "", name: "", href: "", date: "" };
      job.desc = $(el).children("h2").text();
      job.name = $(el).children("p").text();
      job.href = $(el).attr("href");
      job.date = $(el).children("time").text();
      jobs.push(job);
    });
    for (let i = 0; i < jobs.length; i++) {
      var response = await axios.get(jobs[i].href);
      if (!keywords.some(el => response.data.includes(el))) {
        goodJobs.push(jobs[i]);
      }
    }
    const jsonContent = JSON.stringify(goodJobs, null, 4);
    fs.writeFile("./Outcome/tvinna.json", jsonContent, 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Jobs from Tvinna were added");
    });

  } catch (err) {
    console.error(err);
  }
}

export function scrapeTvinna(keywords, url) {
  asyncTvinna(keywords, url);
}
