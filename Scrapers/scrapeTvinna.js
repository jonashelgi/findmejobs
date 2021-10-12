import axios from "axios";
import cheerio from "cheerio"
import fs from "fs";

const listurl = [
  "https://www.tvinna.is/page/1/",
  "https://www.tvinna.is/page/2/",
  "https://www.tvinna.is/page/3/",
  // "https://www.tvinna.is/page/4/",
  // "https://www.tvinna.is/page/5/"
];

const jobs = [];
const goodJobs = [];

async function asyncTvinna(keywords) {
  try {
    for (let i = 0; i < listurl.length; i++) {
      const { data } = await axios.get(listurl[i]);
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
      if(i === parseInt(listurl.length/2)){
        console.log("Tvinna job search 25%")
      }
    }

    console.log("Tvinna job search 50%")
    for (let i = 0; i < jobs.length; i++) {
      var response = await axios.get(jobs[i].href);
      if (!keywords.some(el => response.data.includes(el))) {
        goodJobs.push(jobs[i]);
      }
      if(i === parseInt(jobs.length/2)){
        console.log("Tvinna job search 75%");
      }
    }
    const jsonContent = JSON.stringify(goodJobs, null, 4);
    fs.writeFile("./Outcome/tvinna.json", jsonContent, 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Tvinna job search 100%");
      console.log("Jobs from Tvinna were added");
    });

  } catch (err) {
    console.error(err);
  }
}

export function scrapeTvinna(keywords) {
  asyncTvinna(keywords);
}
