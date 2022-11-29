# 12daysofjelly

Simple site for tallying our family's ratings during the yearly jelly tasting 

## Setup:

```
cd server 
npm install
```

To run:

```
cd server
npm start
 ```
(starts express server)

or

```
cd server
npm run dev
```
(starts in dev mode, edits to index.js update automatically)

## current file structure:
### server/index.js
*Very basic express server* 
* app.use (line 10) serves **index.html** out of public/ 
* app.get (line 13) gets data from **ratings.json**
* log (line 28) writes name, jelly, rating and ip to **log.json** (I was playing...)
* app.post (line 36) write rating data to **ratings.json**
* app.post (line 45) clears **ratings.json**

### public/index.html 
*not a lot here other than loading **script.js*** 
* Title
* Subtitle
* **script.js** 

### public/script.js
*This is where all of the magic happens, and most of it will need to be redone*
* Create flashing pill (line 22 - 29)
* Add users to pills (line 32 - 52)
* create table (line 53 - 110)
* drag/drop/place pill functions (line 118 -161)
* fetch functions (line 166 - 212) 

### public/style.css
*site wide styling*

### public/log.json & ratings.json
*this is where the data was stored, will replace with database collections*

### .idea/* 
*ignore this, IDE related files*

### server/node_modules, package.json, package-lock
*npm package manager related files, ignore for the most part (**package.json** is helpful)* 

## Planned updates:
* redesign for phone (UI and style)
* move all data to database (firebase or a simple db?)
* host either on firebase or google cloud vm
* incorporate award tracking
* display results on main page table
* 'Rate currant (sic) Jelly' button with simple input  (slider? wheel?)
* add christmas list page for each user?

### Notes
Installed a python wrapper for node:
[python](https://www.npmjs.com/package/python)

This might be enough to use the scripts from last year?