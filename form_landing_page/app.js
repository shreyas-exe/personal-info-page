const pfp_input = document.getElementById("pfp-input");
const pfp = document.getElementById("pfp");
if (pfp_input) {
  pfp_input.addEventListener("change", function () {
    while (pfp.firstChild) {
      pfp.removeChild(pfp.firstChild);
    }
    const curr_file = pfp_input.files;
    pfp.src = URL.createObjectURL(curr_file[0]);
  });
}
