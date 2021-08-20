# Survey-source-code
Source code of new MOE survey app lol

## About the app

### Privacy
OK I admit I'm not good at js and electron app development but... it doesn't look like there is any malware/spyware on this application like many other students suggest.

### Ok...? Then what does it actually do?

#### Features
- Locks the student's mac into a "fullscreen" 
- you can't swipe away or use the menu bar
- only way to exit is to Command + Q the application

Other than that "feature", the app's code literally looks like an electron app template.

#### Main function
It literally just redirects you to this website.
[https://qse.moe.edu.sg/electron](https://qse.moe.edu.sg/electron)
In fact, I'm fairly confident you can use the website without the app and still complete the survey just fine.

Maybe they just want to lock your mac in while you do the survey so its 100% focus or smth I guess.

## How you do this??
The fact that the app was compiled with asar lol

1. Take .dmg file
2. Extract with 7z
3. Enter Survey\ Electron.app/Contents/Resources
4. mkdir sourceCode
5. 
```
asar extract app.asar sourceCode
```
6. App sourcecode would be in the sourcecode folder

![commands](https://user-images.githubusercontent.com/65391811/130207854-3bc95958-6f12-475c-a297-f07e068e8066.jpeg)
