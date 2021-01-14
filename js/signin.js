function onSignin() {
  const idTel = document.getElementById("login_tel");
  const password = document.getElementById("login_password");

  axios({
    method: "POST",
    url: "https://api.supaja.com:8000/test-api/sign-in",
    data: {
      id: idTel.value,
      pw: password.value,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        const token = res.data.access_token;
        alert("로그인에 성공하였습니다.");
      } else {
        const message = res.data.message;
        alert(message);
      }
    })
    .catch((error) => {
      console.log(error);
      alert("유효하지 않은 계정입니다.");
      throw new Error(error);
    });
}
