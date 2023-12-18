# 12daysofjelly - 2023

Simple site for tallying our family's ratings during the yearly jelly tasting.
I upgrade it each year and use it as a testing ground for new stuff. 
## Specs/concept
This version is hosted locally on a zimaboard running debian with the casaos desktop and docker wrapper. The build is served via Nginx, and is currently pointed to a firebase real time database but will be moved to a docker running mongo. 

The front end is React (vite) with mostly Material UI. 

Working with Preact signals as a global state replacement. 

I throw the jelly names in to an online art generator for the images.

I generate an array of user data containing each user's jelly ratings, comments, and their wish list items, then run that through a prompt 
in either Google's Bard or a locally running LLM (https://github.com/Mozilla-Ocho/llamafile and https://lmstudio.ai/) to generate comments. 

Next steps: 

Move to mongo

automate the data input into the LLM and then the output into the front end:

Current plan is to run the llm via command line which will allow me to:
1. prepend the prompt with the dataset and submit on dataset change 
2. run the llm via command line and wrap that command in a script that forwards the output to the front end


