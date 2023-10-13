# Tweeter Project

**Tweeter** is a simple, full-stack, single-page, AJAX-based Twitter clone. 

...**Tweeter** started as a cloned repositiory, and evolved over the course of a week while attending *Lighthouse Labs Web-Development* bootcamp, into the application you see before you! *(well, below you)*. 

**Tweeter** was built using a mixture of HTML5, CSS3, JS, jQuery and AJAX, Node and Express. It's intention was to allow a novice bootcamp-coder-student like myself to get (more?) comfortab;e with their front-end capabilities... I mean:

**TWEETER** was created to provide the(a) user the ability to view their (simulated) *'Home Feed'* of their own Tweeter account. The page presents different bits of relevant information to the user in an aesthetically and simple way. The user is able to see (as they are logged in) their Avatar image, and display name, while also having the option to create/write a new tweet at the top of the displayed page, with a *'Live Feed'* of incoming Tweets, presenting below - with the newest Tweets appearing at the top. 

The navigation bar at the top of the page informs the user that they are (incase they forgot) in fact on TWEETER, while also providing an interactive and navigational tool to take them to the place where the magic happens (where their Tweets are written)...

The user is then able to scroll down through their feed of Tweets, the Posted Tweets display the message Tweeted, along with the Avatar and Name of the user who posted in the top-left corner. On the top-right corner, the users *'Handle"* is displayed. At the bottom of the posted Tweet, information purtaining to when the message was posted is displayed, it will show the *'minutes'* when it was posted under 60mins ago. It will then display *'hours'* => *'days'*, into *'months'*, and finally *'years'* should the Tweet be kept by the posting user for that long...

The user also has the option to **Retweet**, **Report/Flag** or **Like** a posted Tweet. The posted Tweet object will interact with the user to give them an idea of their current *focus* buy animating the current Tweet that are hovering over with a background-shadow effect. It will also change the color of the icons as the user moves between the options. 

As the user continues to scroll down their feed, their Avatar/Display image will fill the void and scroll with them. Once the user has caught up with the hot topics of discussion and has mentally collected/orgainized their thoughts, they will navigate back to the top of their feed *(Feature pending)*. Once back at the top they can type our their thoughts into the *'create a new tweet'* box. As they do-so, they will notice a small counter in the bottom-right corner that starts at **140** and will decrease per character they user imputs. As they backspace over their typos, the counter will return those deleted characters to the pile. 

Should the user exceed the character count of 140, a number of things will happen. Firstly, the counter will change colors to the very alarming 'RED', as well as display a **-** sign infront of the number, indicating to the user exactly *how many* characters they went over by... 

*"But what if they're a stubborn user or a rebel who doesn't play by the rules and will submit (Tweet) their thoughts regardless?!"* 
                  - You, probably

**AH HA!** You see, this exact scenario was thought of, and planned for... if this is such the case, then aside from the above mentioned (clear) warning signs displayed to the user (all be it somewhat subtly), should this perticular individual hit the Tweet (submit) button regardless... they will be presented with a louder and brighter (red) message shaming their unfair/selfish intentions! 

This display of a louder and brighter (red) message is not limited to the shaming of those that waffle/will try to say too much, it will also appear (ina more gental fashion) to the user who may have tried to submit (Tweet) their thoughts... well, while they were only thoughts and not written down.

Once the user successfully fills out the message box, and chooses to Tweet their orginal and insightful thoughts to the universe, as they hover over the submit (Tweet) button it will change color indicating "all systems go - click-me" to them, and, like mentioned above, the (their) Tweet will be displayed **instantly** (thank you AJAX/jQuery) at the top of their feed. And the once full-of-wisdom 'create a new Tweet' box will return in a flash to its former self (empty and will full character count of 140 remaining).

Tweeters simplistic approach to displaying information and providing options to the user is not only reflected in the simplicitiy (and cleanliness) of its code, but also in it's aethetic. The color tones selected intend to provide a 'calming' effect on the user to subconsciously keep the bloodpressure low...

Finally (I promise..) through the inclusion of Responsive Design (@media query) the page will morph and adapt to whatever sized screen the user chooses to load Tweeter on, whether it's their iPhone or their Desktop, it could even be the iPad they ~stole~ borrowed from a family member...

--------------- *(Broken Promises Below)*

The beauty of Tweeters current state is the potential it holds for additional features and developments. So don't think this is IT!

As a new developer entering this big wide world of 'computers' and 'technology' I hope you enjoy what is offically my *second* project. I thoroughly enjoyed this one with its obvious potential, and the designer in me got satisfaction from witnissing the immediate (visual) effects of CSS code (and HTML structuring). 

If you have any suggestions, feel free to Tweeter me ~@thisis~... Ha, I know the page is impressive, but TWEETER isn't actually online (yet)... 
Plus, I don't actually use the real 'Twitter' (now known as 'X').

So just feel free to reach out here, on **GitHub**... because (as you can see) I'm rather active on here...

Thank-you kindly for your time and attention, I hope you enjoy TWEETER as much as I did creating it.

-Charlie


## Screenshots *(See it in all it's beauty/glory...)*

!["Screenshot depicting the page in all it's glory on a Desktop screen"](https://github.com/cknowles90/tweeter/blob/master/docs/desktop-view.png?raw=true)
!["Screenshot depicting the page in all it's glory on a Smartphone screen"](https://github.com/cknowles90/tweeter/blob/master/docs/smartphone-view.png?raw=true)
!["Screenshot depicting the 'Tweet size exceeded' alert message & negative character animation"](https://github.com/cknowles90/tweeter/blob/master/docs/too-many-characters.png?raw=true)
!["Screenshot depicting the 'Empty Tweet' alert message"](https://github.com/cknowles90/tweeter/blob/master/docs/empty-tweet-alert.png?raw=true)
!["Screenshot showing the 'your attention is here' style animations on posted Tweets in the feed - shadowing & 'Like button' highlighted"](https://github.com/cknowles90/tweeter/blob/master/docs/shadowing-and-highlighting.png?raw=true)
!["Screenshot showing the Tweet box as it updates with the users input"](https://github.com/cknowles90/tweeter/blob/master/docs/penny-for-your-thoughts.png?raw=true)


## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

5. Once there, feel free to share you wisdom with the world! 
6. Or, better yet, grab some popcorn and (doom)scroll through everyone else's supposed "wise words" and of course, their "important oppinions".

7. Stay tuned for the inclusion of additional features!


## Dependencies

- Express
- Node 5.10.x or above
- Body-parser
- Chance
- MD5