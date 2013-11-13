---
layout: post
title: 'Where do I put my open data files?'
url: 'http://publicprivatesector.org/news/2013/11/12where-do-i-put-my-open-data-files/'
image: 'http://kinlane-productions.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-file-storage.png'
---

<img src="http://kinlane-productions.s3.amazonaws.com/api-evangelist-site/building-blocks/bw-file-storage.png" alt="" width="225" align="right" />
Once any data steward has converted CSV files to either XML or JSON, they now need somewhere to put these open data files. With an entirely client-side tool like CSV Converter than runs 100% on Github, the only option is to save files to Github. There is no other backend.

To be able to write files to the Github repository you have to be a collaborator on the project, and be logged in using Github oAuth. To do this I used [oAuth.io](http://oAuth.io), which allows me to login to CSV Converter with my Github account, but if you are not on the collaborator list for the repo you won't be given access.

Once authenticated I use Github.js to be able to actually create, edit and delete files within the Github repository. Once authenticated I allow any converted CSV to be saved, entirely with JavaScript. I've chosen to put all data in the master branch, since the conversion tool runs on Github Pages with the gh-pages branch.

I was pretty happy to find out I could give data stewards a place to put their open data files using oAuth.io and Github.js, while using Github as a backend. 

All of this reduces the barrier to entry for any government data steward, giving them a completely open source, free way to manage their open data assets.



