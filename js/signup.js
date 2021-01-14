const inputName = document.querySelector("#signup_name");
const inputTel = document.querySelector("#signup_tel");
const iunputCode = document.querySelector("#signup_code");
const inputTelParents = document.querySelector("#signup_tel_parents");
const inputPw = document.querySelector("#signup_password");
const inputPwIdentify = document.querySelector("#signup_password_identify");

const chaeckFirst = document.querySelector("#signup_chaeck_first");
const chaeckLast = document.querySelector("#signup_chaeck_last");

const submitBtn = document.querySelector(".btn_submit");

const signValueData = [
  { name: "" },
  { tel: "" },
  { code: "" },
  { telParents: "" },
  { password: "" },
  { passwordIdentify: "" },
];

inputName.addEventListener("input", (event) => {
  signValueData.name = event.target.value;
});
inputTel.addEventListener("input", (event) => {
  signValueData.tel = event.target.value;
});
iunputCode.addEventListener("input", (event) => {
  signValueData.code = event.target.value;
});
inputTelParents.addEventListener("input", (event) => {
  signValueData.telParents = event.target.value;
});
inputPw.addEventListener("input", (event) => {
  signValueData.password = event.target.value;
});
inputPwIdentify.addEventListener("input", (event) => {
  signValueData.passwordIdentify = event.target.value;
});

function updateCheckd() {
  if (chaeckFirst.checked === true && chaeckLast.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function telCertification() {
  const tel = document.getElementById("signup_tel").value;
  if (tel.length === 11) {
    alert("인증 번호 : 123456");
  } else {
    alert("핸드폰 번호를 다시 입력해주세요.");
  }
}
function parentsCertification() {
  const talParents = document.getElementById("signup_tel_parents");
  if (talParents.value.length === 11) {
    alert("본인인증이 완료되었습니다.");
  } else {
    alert("핸드폰 번호를 다시 입력해주세요.");
  }
}

function signupSubmit() {
  const checkedSignValueData = Object.keys(signValueData).map((data) => {
    return data;
  });

  const telError = document.querySelector(".tel_arror");
  if (!checkedSignValueData.includes("tel")) {
    telError.style.display = "block";
  } else {
    telError.style.display = "none";
  }
}
