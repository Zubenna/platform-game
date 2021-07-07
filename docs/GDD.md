# Game Concept
My goal was to build a platform game - a type of endless runner game. I envisaged a platform where an individual will keep running on the platform continuously. It is assumed to be a type of military training ground. The platform has some broken parts and a ditch below it. When the individual or player gets to that broken part, he jumps over to the next platform. If he could not jump on time or did not jump at all, he falls into the ditch and that is the end of the game. If he succeeds in jumping, he continues the run. In the process of running, valuable items in the form of coins appear for him to pick. If he succeeded in collecting the coins, his score is incremented. On the order hand, there is danger in the form of fire that appears from time to time. This runner is expected to dodge the fire danger. If the player fails to dodge the fire, he would be consumed and that marks the end of the game.

## Modifications
Before arriving at the final concept of this game, the initial concept was to design a game consisting of a horse rider running on the platform jumping various ditches, and dodging an enemy bullet. This idea was later changed because I needed reasonable time to implement it. Since this is my first encounter with a phaser, I decided to change the concept to that of an individual runner of which I saw some tutorials and learning materials that helped me.

## Stages Of Development
The stipulated time for this project was followed according to the suggested milestones. Aside from the two days-off I took, all major development was completed in five working days as summarized below:
- Day 1: Learning about Phaser Library, following the tutorials, set up a development environment, and creating a basic template for the game.
- Day 2: Designing game, collecting the assets, and writing this GDD prototype.
- Day 3: Creating various scenes such as boot scene, preloader scene, title scene, etc. for the project including the main game scene and adding a player.
- Day 4: Making the player jump, double jump, and adding fire as an obstacle and coins as collectible items.
- Day 5: Prepare leaderboard feature with leaderboard API, testing game, fixing bugs, etc.

## Game Control (Mouse)
This game is designed to be controlled using a mouse. For this project, the mouse serves as the game console. If the mouse is clicked once, the runner jumps. If the mouse is clicked twice in quick succession, the runner jumps twice (double jump). This takes double the force and velocity of a single jump. If the mouse is pressed down and held for a while, the runner will maintain a steady jump.

## Game Levels
There are no specific levels in the game, since it is the infinite runner game, the player is expected to run as far as possible jumping over the platforms, dodging the obstacles(fires), and collecting the coins.

## Assets
The assets used in this game (sound effects, background music, animation sprites) have been taken from [OpenGameArt](https://opengameart.org/) and [Game Art 2D](https://www.gameart2d.com/freebies.html).

## Template
The basic template of this game follows the sequence of BootScene, PreloaderScene, LoginScene, TitleScene, OptionsScene, CreditsScene, GameScene, GameOverScene, and LeaderBoardScene has been implemented following [this](https://phasertutorials.com/creating-a-phaser-3-template-part-1/) tutorial.