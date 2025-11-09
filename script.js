const correctname = "Arash";
const correctpassword = "8787";

const loginform = document.getElementById("login-from");
const messageEl = document.getElementById("message");
function showmessagw(message, type) {
  messageEl.textContent = message;
  messageEl.className = "message" + type;
  messageEl.classList.add("show");

  setTimeout(() => {
    messageEl.classList.remove("show");
  }, 2000);
}
loginform.addEventListener("submit", function (a) {
  a.preventDefault();

  const username = document.getElementById("name").value;
  const password = document.getElementById("pass").value;

  if (username === correctname && password === correctpassword) {
    showmessagw("ورود موفقیت امیز به سایت خوش امدید", "success");
  } else {
    showmessagw("نام یا رمز نادرست است", "errorّ");
  }

  loginform.reset();
});

document.getElementById("icon-pass").addEventListener("click", function () {
  const passvalue = document.getElementById("pass");
  const type = passvalue.getAttribute("type") === "pass" ? "text" : "pass";

  passvalue.setAttribute("type", type);
  this.textContent = type === "pass" ? "👁️" : "👁️‍🗨️";
});
