# camera_development
Repo for testing and developing camera functionality for websites and apps. Mini project in order to operate webcam for


## Getting Started

### Installation

1) Git clone the repository to your local machine:
````
$ git clone https://github.com/markgat/camera_development.git
````
## Running
1) Open the folder to the local repository and run the program "web.py"
2) On the terminal, there will be a URL,
    ````
    Running on http://127.0.0.1:5000/
    ````
    Open the URL to start up the web application on your local browser.  
3) Allow access to use your camera if prompted, when the webpage launches.  
4) Line-up for the photo, smile, and press the button labeled "Take a picture".  
5) Photo will be taken, and a base64 string encoding your picture will be shown on terminal where "web.py" is executed. Code will begin with a similar format as:
    ````
    data:image/jpeg;base64
    ````
6) Use the string to render the image of the photo taken for your personal applications! [Here](https://codebeautify.org/base64-to-image-converter) is a site for decoding the string.
7) To close the app, close the web page, and press Ctrl + C within the terminal where the URL is displayed to shut down the flask application.