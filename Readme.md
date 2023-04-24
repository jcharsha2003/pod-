there are two dot env file one is in client and another one is in server folder below dot env files belong to client folder 
REACT_APP_FIREBASE_API_KEY="AIzaSyD1SOor7kxJiv8Dzi07N_5mVq740Lf-s3I"
REACT_APP_FIREBASE_AUTH_DOMAIN="podverse-5a6db.firebaseapp.com"
REACT_APP_FIREBASE_PROJECT_ID="podverse-5a6db"
REACT_APP_FIREBASE_STORAGE_BUCCKET="podverse-5a6db.appspot.com"
REACT_APP_FIREBASE_MESSAGING_ID="280786456383"
REACT_APP_FIREBASE_APPI_ID="1:280786456383:web:2e8f112da55e1addc0cd8a"
REACT_APP_FIREBASE_MEASUREMENT_ID="G-8PHNSE0K33"

below dot env file belongs to server folder
DB_STRING=mongodb+srv://admin:admin@cluster0.klhz4ln.mongodb.net/?retryWrites=true&w=majority
Both of these are private folders for making your job easier i have provided you the details.
In server folder go to config folder 
and paste server account key.json , this json came from firebase </> genrates the key, dowanload it and keep it in config folder 
and rename it to serverAcconutKey.json The above will help you to launch our web application. How to Launch? 
Step 1 : Change current directory to client folder : cd client
Step 2 : Split the terminal to access the server current directory folder : cd server
Step 3: In First half of the terminal we have to directory client folder , install the packages:
npm install Step 4: Second half of the terminal should have : npm install 
Step 5: In first terminal you should give : npm start 
Step 6: In second terminal we took http server as app.js : nodemon app.js 
mongodb :
After signing into our website to acccess your podcast you should go to mongodb Manually change user database as role :member to role : "admin" 
by this you can access the dashboard at the top right corner by clicking that, where you can able to see the audio and videos 
and you can able to add the podcast to add you can see "+" symbol.


for podcast video at the top right you can see video uploading symbol by clicking that button you can upload you podcast video 


please create below folders in firebase so the the audio and image are stored and you have to enable the firebase storage
firebase : We used storage in firebase , Create two folders for storing video and images Folder name:
1.	Image
2.	Audio
