var myPlayer;

// Get the PLAYER and be sure the PLAYER is ready to interact with
videojs.getPlayer("myPlayerID").ready(function() {
  //  Get a reference to the PLAYER
  myPlayer = this;
  // +++ Add the class to the player +++
  myPlayer.addClass("myClass");
});

// +++ Function called by button that toggles class +++
function toggleControlbar() {
  myPlayer.toggleClass("myClass");
}
<pre>
======

<input 
type="button"value="註冊" 
onclick="javascript:window.location.href='http://www.youtube.com'"/>

======
</pre> 