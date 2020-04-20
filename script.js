function signedin() {
  var input = document.getElementById("username").value;
  removeElement("signform");
  addElement("login-containerid", "FORM" ,"signoutform", "<div><p id = 'welcome' > Welcome, " + input + "</p><a id = 'signout' class = 'navfunction' onclick = 'signedout();'><span class ='glyphicon glyphicon-user'></span> Sign out</a></div " );
}

function signedout(){
  removeElement("signoutform");
  addElement("login-containerid", "FORM", "signform", "<div><input id = 'username' class = 'navinput' type= 'text' placeholder= 'Username' ><input id = 'password' class = 'navinput' type='password' placeholder='Password'><a id = 'signin' class = 'navfunction' onclick= 'signedin();' ><span class='glyphicon glyphicon-log-in'></span> Log in</a><a id = 'signup' class = 'navfunction' onclick='signedin();' ><span class='glyphicon glyphicon-user'></span> Sign Up</a>'</div");
}

function orderplaced(){
  alert("Order placed successfully");
}

function contactplaced(){
  alert("Thank you for your message");
}

function removeElement(elementId) { //removes element with id from html
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}

function addElement(parentId, elementTag, elementId, html) { //adds element from html
  var p = document.getElementById(parentId);
  var newElement = document.createElement(elementTag);
  newElement.setAttribute('id', elementId);
  newElement.innerHTML = html;
  p.appendChild(newElement);
}

function setclass(elementid, classname){
  document.getElementById(elementid).className = classname;
}

$(document).ready(function(){ //smooth scroll
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
});