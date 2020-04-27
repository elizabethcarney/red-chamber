var all_modal = document.getElementsByClassName("info_modal");
var exit_btn = document.getElementsByClassName("exit")[0];

var naiad_modal = document.getElementById("naiad_info_modal");
var naiad_btn = document.getElementById("naiad_map_icon");

exit_btn.onclick = function() {
  all_modal.style.display = "none";
}

naiad_btn.onclick = function() {
  naiad_modal.style.display = "block";
}