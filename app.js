

   var express = require('express');
   var routes = require('./routes/routes.js');
   var app = express();
   app.use(express.urlencoded());
   
   var http = require('http').Server(app);
   
   var session = require('express-session');
   app.use(session({
      secret: 'loginSecret',
      resave: false,
      saveUnitialized: true,
      cookie: { secure: false }
   }));
   
   
   
   
   
   
      app.get('/', routes.get_main);
      app.get('/signup', routes.get_signup);
      app.get('/logout', routes.get_logout);

      app.get('/wall', routes.get_wall);
      app.get('/otherwall', routes.get_otherwall);
      app.get('/edit', routes.get_edit);
     
      app.get('/getCreator', routes.get_creator);
      
      //NEW
      app.get('/homepage', routes.get_homepage);
      app.get('/getPostAjax', routes.get_homepagePostListAjax);
      app.get('/getWallAjax', routes.get_wallListAjax);
      app.get('/getEditUserInfoAjax', routes.get_editUserInfoAjax);
      app.get('/getAllUsername', routes.get_allUsername);
      
      app.post('/createpost', routes.post_newPostAjax);
      app.post('/createcomment', routes.post_newCommentAjax);
      app.post('/createwall', routes.post_newWallAjax);
      app.post('/postUpdateUser', routes.post_updateUser);
      app.post('/addLikesToPost', routes.post_addLikesToPost);
      
      app.post('/checklogin', routes.verifyUser);
      app.get('/getIsWallAFriend', routes.get_isWallAFriend);

      
      app.post('/sendFriendRequest', routes.send_friend_request);
      app.post('/rejectFriendRequest', routes.reject_friend_request);
      app.post('/acceptFriendRequest', routes.accept_friend_request);
      
     
      
      app.post('/createaccount', routes.post_newAccount);
      app.post('/editaccount', routes.post_updateUser);
      app.post('/postOtherWallPageAjax', routes.post_otherWallPageAjax);
      app.get('/getDetermineWallOwner', routes.get_determineWallOwner);
      app.get('/getUserInfo', routes.get_userInfo);
      app.post('/deleteFriend', routes.post_deleteFriend); //TRY THIS!
      app.get('/getFriendList', routes.get_friendList); //TRY THIS!!

      //hashtag
      app.post('/getHashtag', routes.get_hashtag);
      app.post('/addHashtag', routes.post_hashtag);
      app.get('/hashtag', routes.get_hashtagEJS);


      

      
     
      /* Run the server */
      
      console.log('Spark Twitter Project by Cindy Wei');
      // app.listen(8080);
      http.listen(8080, () => {
         console.log('listening on 8080');
      });
      console.log('HTTP server started on port 8080');