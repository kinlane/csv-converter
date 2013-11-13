---
layout: post
title: 'Completely Client-Side CSV Upload With HTML5 File API'
url: 'http://publicprivatesector.org/news/2013/11/12/completely-client-side-csv-upload-with-html5-file-api/'
image: 'https://s3.amazonaws.com/kinlane-productions/bw-icons/bw-file-upload.png'
---

<img src="https://s3.amazonaws.com/kinlane-productions/bw-icons/bw-file-upload.png" alt="" width="225" align="right" />
I used Mr. Data Converter to handle the CSV to XML and JSON conversion, and while it had great features for copy / pasting from Microsoft Excel or CSV files, I wanted to provide the ability for uploading a CSV directly into the conversion tool.

Since my CSV Converter would run entirely client-side I needed to provide "upload like" features, but actually grab the contents of the CSV file on upload and just insert into the CSV Converter text area.

The HTML5 File API is exactly what I needed. While this will not work in all browsers, it will in Chrome and Firefox allowing a pretty wide audience.  The HTML5 File API allowed me to provide the upload feature, but grab the contents upon click of upload button without actually uploading any file to the server.

Once the CSV is inserted into the CSV Converter, the user can choose a conversion format type such as HTML, XML or JSON, and if they are logged in with Github using oAuth they can save the converted files to the master branch of the repository.

   


