import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from 'styled-components';
import fs from 'fs';
import compression from 'compression';
import cors from 'cors';
import path from 'path';
import cron from 'node-cron';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

import config from './config';
const Cryptr = require('cryptr');
const cryptr = new Cryptr(config.key);

import { HomeRoot, AboutRoot, PersonalinjuryRoot, PersonalinjurytemplateRoot, CaseresultsRoot, FaqRoot, BlogRoot, BlogcattemplateRoot, BlogtemplateRoot, ContactRoot, DisclaimerRoot, SitemapRoot, PrivacypolicyRoot, AttorneytemplateRoot, SearchRoot } from './roots';

var PORT = process.env.PORT || 3003;

const app = express();
app.use(compression());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

cron.schedule('0 1 * * *', (e) => {
  console.log(e);
  fetch('https://nelsonrozier.herokuapp.com/')
  .then(res => {
    console.log("requested at " + new Date())
  })
  .catch(() => {
    console.log("request to https://nelsonrozier.herokuapp.com/ failed at " + new Date())
  });
});

var dataObj = {},
homeBundle = "",
aboutBundle = "",
personalinjuryBundle = "",
personalinjurytemplateBundle = "",
caseresultsBundle = "",
faqBundle = "",
blogBundle = "",
blogcattemplateBundle = "",
blogtemplateBundle = "",
contactBundle = "",
disclaimerBundle = "",
sitemapBundle = "",
privacypolicyBundle = "",
attorneytemplateBundle = "",
searchBundle = "";
fs.readFile('./dist/js/home.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  homeBundle = data || "";
})
fs.readFile('./dist/js/about.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  aboutBundle = data || "";
})
fs.readFile('./dist/js/personalinjury.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  personalinjuryBundle = data || "";
})
fs.readFile('./dist/js/personalinjurytemplate.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  personalinjurytemplateBundle = data || "";
})
fs.readFile('./dist/js/caseresults.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  caseresultsBundle = data || "";
})
fs.readFile('./dist/js/faq.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  faqBundle = data || "";
})
fs.readFile('./dist/js/blog.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  blogBundle = data || "";
})
fs.readFile('./dist/js/blogcattemplate.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  blogcattemplateBundle = data || "";
})
fs.readFile('./dist/js/blogtemplate.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  blogtemplateBundle = data || "";
})
fs.readFile('./dist/js/contact.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  contactBundle = data || "";
})
fs.readFile('./dist/js/disclaimer.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  disclaimerBundle = data || "";
})
fs.readFile('./dist/js/sitemap.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  sitemapBundle = data || "";
})
fs.readFile('./dist/js/privacypolicy.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  privacypolicyBundle = data || "";
})
fs.readFile('./dist/js/attorneytemplate.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  attorneytemplateBundle = data || "";
})
fs.readFile('./dist/js/search.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  searchBundle = data || "";
})
app.get('/', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, HomeRoot, "home"));
});
app.get('/about', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, aboutBundle, AboutRoot, "about"));
});
app.get('/personal-injury', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, personalinjuryBundle, PersonalinjuryRoot, "personalinjury"));
});
app.get('/personal-injury/:id', (req, res) => {
  let data = {
    page: req.params.id
  }
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, personalinjurytemplateBundle, PersonalinjurytemplateRoot, "personalinjurytemplate"));
});
app.get('/case-results', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, caseresultsBundle, CaseresultsRoot, "caseresults"));
});
app.get('/faq', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, faqBundle, FaqRoot, "faq"));
});
app.get('/blog', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, BlogRoot, "blog"));
});
app.get('/blogcattemplate', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogcattemplateBundle, BlogcattemplateRoot, "blogcattemplate"));
});
app.get('/blog/search/:query', (req, res) => {
  const { query } = req.params;
  let data = {
    link: `/blog/search/${query}`
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, BlogRoot, "blog"));
});
app.get('/blog/:year/:month', (req, res) => {
  const { year, month } = req.params;
  let data = {
    link: `/blog/${year}/${month}`
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, BlogRoot, "blog"));
});
app.get('/blog/:year/:month/:title', (req, res) => {
  const { year, month, title } = req.params;
  let data = {
    link: `/blog/${year}/${month}/${title}`
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogtemplateBundle, BlogtemplateRoot, "blogtemplate"));
});
app.get('/contact', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, contactBundle, ContactRoot, "contact"));
});
app.get('/disclaimer', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, disclaimerBundle, DisclaimerRoot, "disclaimer"));
});
app.get('/sitemap', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, sitemapBundle, SitemapRoot, "sitemap"));
});
app.get('/privacy', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, privacypolicyBundle, PrivacypolicyRoot, "privacypolicy"));
});
app.get('/attorney/:name', (req, res) => {
  let data = {
    link: `/attorney/${req.params.name}`
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, attorneytemplateBundle, AttorneytemplateRoot, "attorneytemplate"));
});
app.get('/search', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, searchBundle, SearchRoot, "search"));
});;

app.get('/images/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, '../images/' + req.params.id));
});

app.post('/emailer', (req, res) => {
  res.send({message: "success"})
  let { name, email, phone, state, zip, description, contactemail, contactphone, disclaimer } = req.body;

  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: cryptr.decrypt(config.nodemailerEmail),
      pass: cryptr.decrypt(config.nodemailerPW)
    }
  });

  transporter.sendMail({
    from: email,
    to: cryptr.decrypt(config.nrEmail),
    subject: 'Nelson Rozier: Online Inquiry',
    html: `
      <h3>Hi! The following person has submitted a message.<h3/>
      <h4>Name: ${name}</h4>

      <h4>Email: ${email}</h4>
      <h4>Phone: ${phone}</h4>
      <h4>State: ${state}</h4>
      <h4>Zip: ${zip}</h4>

      <h3>Message: ${description}</h3>

      <h4>Contact via phone: ${contactphone}</h4>
      <h4>Contact via email: ${contactemail}</h4>
      <h4>Disclaimer Checked: ${disclaimer}</h4>
    `
  }, (error, info) => {
    if (error) res.send({error: error});
    else res.send({response: info});
  });
})



app.get('/health', (req, res) => res.send('OK'));


app.listen( PORT, () => {
  console.log('Running on http://localhost:' + PORT)
});


// functions!!!!!!!!!!!!!

function getQueries(req, res){
  const qOb = {};
  const queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if(queries.length){
    queries.forEach((x) => {
        var y = x.split('=');
        qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url){
	return fetch(url)
    .then((response) => {
        if(response.status !== 200) throw Error(response.statusText);
        return response.json();
    }).then((json) => {
        return json;
    }).catch(errHandle)
}

function returnHTML(data, bundle, Page, title){
    const dataString = JSON.stringify(data);
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Page data={data}/>));
    const styles = sheet.getStyleTags();

    return `
            <html lang="en">
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>${title}</title>
                <meta name="Description" content="${title}">
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&family=Open+Sans:wght@700&family=PT+Sans&display=swap" rel="stylesheet">
                <style>
                  body { margin: 0; font-family: "PT Sans", Helvetica, Arial, Lucida, sans-serif; color: #383b40; }
                  a { text-decoration: none; color: #000; }
                </style>
                ${styles}
                <script src="https://kit.fontawesome.com/7fa747235e.js" crossorigin="anonymous"></script>
              </head>
              <body>
                <script>window.os = window.os || {};</script>
                <script>window.__DATA__=${dataString}</script>
                <div id="app" role="main">${body}</div>
                <script>${bundle}</script>
              </body>
            </html>
          `;
}

function errHandle(err){
    console.log(err);
}
