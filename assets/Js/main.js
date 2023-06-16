const $ = document;
// const axios = require("axios");
// const emailValidator = require("email-validator");
$.addEventListener("DOMContentLoaded", () => {
  console.log("content loaded");
  const login = $.querySelector("#connection");
  const connectionForm = $.querySelector("#connectionForm");
  const closeForm = $.querySelector("#closeConnectionForm");
  const loginLittelScreen = $.querySelector("#loginLittelScreen");
  const sendForm = $.querySelector("#sendForm");
  const p = $.querySelector("#messageForm");
  const body = $.querySelector("body");
  login.addEventListener("click", (e) => {
    e.preventDefault();
    connectionForm.classList.remove("hidden");
    connectionForm.classList.add("display");
    body.classList.add("bodyModalOpen");
  });
  closeForm.addEventListener("click", (e) => {
    e.preventDefault();
    connectionForm.classList.remove("display");
    connectionForm.classList.add("hidden");
    body.classList.remove("bodyModalOpen");
  });
  loginLittelScreen.addEventListener("click", (e) => {
    e.preventDefault();
    connectionForm.classList.remove("hidden");
    connectionForm.classList.add("display");
    body.classList.add("bodyModalOpen");
  });
  sendForm.addEventListener("click", async (e) => {
    try {
      e.preventDefault();
      const message = $.querySelector("#message").value;
      const email = $.querySelector("#email").value;
      const firstname = $.querySelector("#firstname").value;
      const lastname = $.querySelector("#lastname").value;

      const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

      const valuesToCheck = [
        { firstname },
        { lastname },
        { message },
        { email },
      ];

      let txt = "Veuillez saisir ";

      const badValue = [];
      const goodValue = [];

      valuesToCheck.forEach((value) => {
        const key = Object.keys(value);
        const keyValue = Object.values(value);
        if (!keyValue[0]) {
          badValue.push(key[0]);
        } else if (key[0] === "email") {
          if (!regexMail.test(keyValue[0])) {
            badValue.push(key[0]);
          } else {
            goodValue.push(key[0]);
          }
        } else {
          goodValue.push(key[0]);
        }
      });

      if (badValue.length !== 0) {
        for (let i = 0; i < badValue.length; i++) {
          if (badValue.length === 1) {
            if (badValue[i] === "firstname") {
              $.querySelector("#firstname").style.borderColor = "rgb(255,0,0)";
              txt += "un prénom.";
            }
            if (badValue[i] === "lastname") {
              $.querySelector("#lastname").style.borderColor = "rgb(255,0,0)";
              txt += "un nom.";
            }
            if (badValue[i] === "message") {
              $.querySelector("#message").style.borderColor = "rgb(255,0,0)";
              txt += "un message.";
            }
            if (badValue[i] === "email") {
              $.querySelector("#email").style.borderColor = "rgb(255,0,0)";
              txt += "une adresse mail valide.";
            }
          } else if (badValue.length === 2) {
            if (i === 0) {
              if (badValue[i] === "firstname") {
                $.querySelector("#firstname").style.borderColor =
                  "rgb(255,0,0)";
                txt += "un prénom";
              }
              if (badValue[i] === "lastname") {
                $.querySelector("#lastname").style.borderColor = "rgb(255,0,0)";
                txt += "un nom";
              }
              if (badValue[i] === "message") {
                $.querySelector("#message").style.borderColor = "rgb(255,0,0)";
                txt += "un message";
              }
              if (badValue[i] === "email") {
                $.querySelector("#email").style.borderColor = "rgb(255,0,0)";
                txt += " une adresse mail valide";
              }
            } else {
              if (badValue[i] === "firstname") {
                $.querySelector("#firstname").style.borderColor =
                  "rgb(255,0,0)";
                txt += " et un prénom.";
              }
              if (badValue[i] === "lastname") {
                $.querySelector("#lastname").style.borderColor = "rgb(255,0,0)";
                txt += " et un nom";
              }
              if (badValue[i] === "message") {
                $.querySelector("#message").style.borderColor = "rgb(255,0,0)";
                txt += " et un message.";
              }
              if (badValue[i] === "email") {
                $.querySelector("#email").style.borderColor = "rgb(255,0,0)";
                txt += " et une adresse mail valide.";
              }
            }
          } else {
            if (i !== badValue.length - 1 && i !== badValue.length - 2) {
              if (badValue[i] === "firstname") {
                $.querySelector("#firstname").style.borderColor =
                  "rgb(255,0,0)";
                txt += " un prénom,";
              }
              if (badValue[i] === "lastname") {
                $.querySelector("#lastname").style.borderColor = "rgb(255,0,0)";
                txt += " un nom,";
              }
              if (badValue[i] === "message") {
                $.querySelector("#message").style.borderColor = "rgb(255,0,0)";
                txt += " un message,";
              }
              if (badValue[i] === "email") {
                $.querySelector("#email").style.borderColor = "rgb(255,0,0)";
                txt += " une adresse mail valide,";
              }
            } else if (i === badValue.length - 2) {
              if (badValue[i] === "firstname") {
                $.querySelector("#firstname").style.borderColor =
                  "rgb(255,0,0)";
                txt += " un prénom";
              }
              if (badValue[i] === "lastname") {
                $.querySelector("#lastname").style.borderColor = "rgb(255,0,0)";
                txt += " un nom";
              }
              if (badValue[i] === "message") {
                $.querySelector("#message").style.borderColor = "rgb(255,0,0)";
                txt += " un message";
              }
              if (badValue[i] === "email") {
                $.querySelector("#email").style.borderColor = "rgb(255,0,0)";
                txt += " une adresse mail valide";
              }
            } else {
              if (badValue[i] === "firstname") {
                $.querySelector("#firstname").style.borderColor =
                  "rgb(255,0,0)";
                txt += " et un prénom.";
              }
              if (badValue[i] === "lastname") {
                $.querySelector("#lastname").style.borderColor = "rgb(255,0,0)";
                txt += " et un nom.";
              }
              if (badValue[i] === "message") {
                $.querySelector("#message").style.borderColor = "rgb(255,0,0)";
                txt += " et un message.";
              }
              if (badValue[i] === "email") {
                $.querySelector("#email").style.borderColor = "rgb(255,0,0)";
                txt += " et une adresse mail valide.";
              }
            }
          }
        }
      }

      if (goodValue.length === 4) {
        $.querySelector("#firstname").style.borderColor = "rgb(9, 214, 43)";
        $.querySelector("#lastname").style.borderColor = "rgb(9, 214, 43)";
        $.querySelector("#message").style.borderColor = "rgb(9, 214, 43)";
        $.querySelector("#email").style.borderColor = "rgb(9, 214, 43)";

        const response = await axios.post(
          "https://site--tripadvicor-back--tzmxcvqjqbzq.code.run/form",
          {
            message,
            email,
            lastname,
            firstname,
          }
        );

        p.classList.remove("hidden");
        p.style.display = "block";
        p.style.textAlign = "center";
        p.style.color = "rgb(9, 214, 43)";
        p.style.fontWeight = "bold";
        p.textContent = "Votre demande a bien été envoyée " + firstname + "! ";
        sendForm.disabled = true;
        sendForm.style.backgroundColor = "rgb(155, 208, 155)";
        console.log(response.data.message);
        return;
      } else {
        if (goodValue.length !== 0) {
          for (let i = 0; i < goodValue.length; i++) {
            if (goodValue[i] === "firstname") {
              $.querySelector("#firstname").style.borderColor =
                "rgb(9, 214, 43)";
            }
            if (goodValue[i] === "lastname") {
              $.querySelector("#lastname").style.borderColor =
                "rgb(9, 214, 43)";
            }
            if (goodValue[i] === "message") {
              $.querySelector("#message").style.borderColor = "rgb(9, 214, 43)";
            }
            if (goodValue[i] === "email") {
              $.querySelector("#email").style.borderColor = "rgb(9, 214, 43)";
            }
          }
        }
        p.classList.remove("hidden");
        p.style.display = "block";
        p.style.textAlign = "center";
        p.style.color = "rgb(255,0,0)";
        p.style.fontWeight = "bold";
        p.textContent = txt;

        return;
      }
    } catch (error) {
      if (error.status) {
        console.log({ status: error.status, message: error.message });
      } else {
        console.log({ status: 400, message: error.message });
      }
    }
  });
});
