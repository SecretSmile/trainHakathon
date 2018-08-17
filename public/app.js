function save(){
    var data ={
        name : document.getElementById("name").value,
        lastname : document.getElementById("lastname").value
    }
    var nickname ="Nam"
    var updates = {};

    updates[nickname] = data;
  
   firebase.database().ref().update(updates);
   list();
}

function list(){
    var ref = firebase.database().ref();  
    var output = document.getElementById("output");                        
     ref.on("value", function(snapshot){
        output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
    });
}