## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
Adds a change in the directory you are in to the staging area

#### branch
Allows you to create an isolated working environment for a single repo (a branch)

#### checkout
Lets you look at repo that you are not currently in

#### clone
Allows you to copy a git repo so you can add to it

#### commit
Records a snapshot of the staging area

#### fetch
Download new branches and and data from a remote repo

#### log
Shows the commit history of a branch

#### merge
Merges a branch into the current one

#### pull
Fetches from a remote repo and merges into the current branch

#### push
Pushes the new branch and data to a remote repo

#### reset
Undos changes and commits

#### rm
Removes files from a staging area

#### status
View the status of your files in the working directory or staging area

## Release 4: Git Workflow

- Push files to a remote repository

git remote add origin *.git
git push origin master

- Fetch changes

git remote -v
git remote add upstream https://*.git
origin https://*.git
git fetch upstream
git branch -va
git checkout master
git merge upstream/master
git commit -m "Fetched changes"

- Commit locally

git add [file name]
git status -s
git commit -m "My changes"

## Release 5: Reflection

This was a challenge on which I admittedly did not spend much time.  A few weeks ago, I researched git commands when I had trouble pulling from DBC’s repo.  For this challenge, I read/watched a few of  the resources provided which confirmed some of my past learnings but also taught me new commands.  Notably, I did try out git commands in the terminal for this challenge but am finding that I am more likely to use the GitHub application for commit and sync commands (it’s so easy, especially when time is limited!).  I should begin to utilize the terminal for these commands, as I’m concerned  I will forget the git commands I learned in past weeks and through the resources provided.  
