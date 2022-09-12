
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";\
      document.getElementById('output').innerHTML += row;
      
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name)
        window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
          window.location = "index.html";
      }
      
      function send()
      {
            msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
                 });
      
                 document.getElementById("msg").value = "";
      }
      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name")
                window.location = "index.html";
            }
      function updateLike(message_id)
      {
            console.log("clicked on like button - " + message_id)
            button_id = message_id;
            likes = document.getElementById(button_id).value;
            updated_likes = Number(likes) + 1;
            console.log(updated_likes);
      
            firebase.database().ref(room_name).child(message_id).update({
               like : updated_likes
            })
      }