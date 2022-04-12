## April 4 | Symphonizer

### Idea
Building on Marta’s socket.io app, for out project 2 we want to create a digital web-based instrument that produce sound on the key press. We would like to extend the sound library and include subtle animations coded with P5.js. [Patatap Website](https://patatap.com) serves as our main inspiration for this project. We would like to add the functionality of rooms with a maximum of 2 people and an unlimited number of observers, so that music can be composed without unnecessary interactions from many users. We would also like to expand the audiovisual options, allowing the user to choose from a calm (forest/jazz) or more lively (fire/metalic) symphony.


### Backend
We have agreed on the general feel of our application, designed a prototype of it in figma and sketched a general flow between the `client` and `server`.

![img](https://github.com/martapienkosz/symphonizer/blob/main/dcmd/sketch.png)

We have started off with the general set up for sockets. Later Aakarsh has been working on the logic behind the rooms (join/create room, limit no of users, add spectators --> elaborate @Aakarsh).

____________________________* LOGIC BEHIND ROOMS (JOIN/CREATE)
____________________________* LIMITING NO OF USERS / SPECTATORS


### Animations

At the same time, Marta was working on the animations. She created an `effects.js` file with 3 different color palettes (ignis, aqua, terra) and 12 classes with animations. The architecture of each class has been built around the model below. Each class includes a `this.state` parameter which removes the animation upon the fade out.s. It helped us optimize the website.

```
class animationName {
  constructor(colorPallete) {
    if (colorPallete == "fire") {
      this.color = fireColor[Math.floor(Math.random() * fireColor.length)];
    } else if (colorPallete == "earth") {...}
    this.sth = ...
  }
  play() {...}
}
```

![img](https://github.com/martapienkosz/symphonizer/blob/main/dcmd/aqua2.png)

Each class was called on the specific `keyPressed` function. We split the 12 animations into 3 visual paths, giving each mode its own distinct feel.

```
socket.on("keyPressed", (data) => {
  if (visuals == "fire") {
    switch (data) {
      case 81:
        effects.push(new animationName());
        break;
      case 87:
        ....
    }
  }
```


### Audio

Aakarsh has composed 3 libraries of sounds, each of which contains 6 notes. We have settled on the futuristic, upbeat and orchestral modes and preloaded the soundtracks so there were no unnecessary delay.

____________________________* INCLUDE SCREENSHOT OF THE SOFTWARE AND MENTION THE NAME OF IT + HOW DID U COMPOSE THINGS


### Frontend

Lastly, Marta was working on the frontend. We wanted the `menu` section to be super intuitive, allowing users to quickly get to the` playground` page. We divided the window into `create a room` and `join the room` sections. During testing, we asked a few users if they would prefer to name their room or just get a random code. Users had no preference, and after looking at games like Scribble and Kahoot we have settled on choosing an authentic, randomly generated room ID.

![img](https://github.com/martapienkosz/symphonizer/blob/main/dcmd/front2.png)

We also wanted to implement subtle `radio buttons` on the `playground` page that would allow users to switch modes while in the room. I think we did a great job with the design giving users extra options while not distracting them from the main animations.

![img](https://github.com/martapienkosz/symphonizer/blob/main/dcmd/front3.png)


```
socket.on("changeVisuals", (dataVisuals) => {
  document.querySelector(`input[name="visuals"][value=${dataVisuals}]`).checked = true;
  visuals = dataVisuals;
});
```


### Learnings
Marta's learnings
- Getting familar with p5.js, animations and concepts of classes
- Designing homepage with radio buttons, input box, unever number of text & content
- Communication and collboration (github & glitch / sharing code / meeting up / settling on idea)

Aakarsh's learnings
- one
- two
- three

____________________________* ADD YOUR LEARNINGS


And here is a snapshot from the showcase!
![img](https://github.com/martapienkosz/symphonizer/blob/main/dcmd/showcase.png)
