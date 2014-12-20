## Alzheimer's Bingo
#### Description:
-------------------
Alzheimer's Bingo is a game that's not for the faint of heart. Players must spend time with my grandfather, a 95 year old man with Alzheimer's, to successfully win this game.

#### Installation: 
-------------------
##### Using Gulp:
If you do not have Gulp installed on your machine, you will need to install it globally before getting going. Here is more about [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md).

Once Gulp is installed globally, you now need to run the following commands to make sure a couple of other dependencies have been installed in your project directory. First, there is a dependency on a ruby gem for CSS keyframe animation. To ensure you have this gem installed run the following:
```
gem install animation --pre
```
(note - if you feel like you are not going to be using keyframe animations, you can simply delete the last line of the compass.rb file in the project root)

Next, you will need to install the project dependencies that are listed in the ```package.json``` file using the following command:
```
npm install
```

Finally, you should be able to get your project up and going by running 
```
gulp build
```
For livereload functionality, run ```gulp watch```.

-------------------
#### Usage: 
-------------------
Feel free to use this code at your leisure for any project, commercial or personal, where it might be useful.
