import fetch from 'node-fetch';
import fs from "fs";

const keywords = ["React", "react", "Prismic", "prismic", "Javascript", "javascript", "Typescript", "typescript"];

const response = await fetch("https://userapi.alfred.is/api/v1/front-web/jobs?page=1&size=28&translate=false&tags=394,4,238,21,329,11,41,50,14,15,5,12,391,42,22,80,335,74,79,23,52,392,234,13,6", {
  "headers": {
    "accept": "*/*",
    "accept-language": "is",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://alfred.is/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
});
const data = await response.json();
const jobs = data.jobs;
const goodJobs = [];
for (let i = 0; i < jobs.length; i++) {
  if (keywords.some(el => jobs[i].description.includes(el))) {
    const job = { name: "", title: "", href: "", date: "", deadline: "", desc: "" };
    job.name = jobs[i].brand.name;
    job.title = jobs[i].title;
    job.href = "https://alfred.is/starf/" + jobs[i].slug;
    job.data = jobs[i].published;
    job.deadline = jobs[i].deadline;
    job.desc = jobs[i].description.replace(/(\r\n|\n|\r)/gm, "");
    goodJobs.push(job);
  }
}
const jsonContent = JSON.stringify(goodJobs);
fs.writeFile("./Outcome/alfred.json", jsonContent, 'utf8', function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("Jobs from Alfred were added");
});

export function scrapeAlfred(keywords, url) {
  return data;
}


