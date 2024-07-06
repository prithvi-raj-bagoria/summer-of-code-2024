const submit = document.querySelector("#submit");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

async function checkValidLogin(email, password) {
    const url = "http://167.71.236.10/api/login/";
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: email,
                password: password,
            }),
        });
        if (!res.ok) {
            console.log("Problem");
            return;
        }

        const data = await res.json();

        if (data.message == "Invalid Credentials") {
            //creating a itext showing invalid credentials
            if (document.querySelector(".invalid") === null) {
                const invalidEl = document.createElement("p");
                invalidEl.classList.add("invalid");
                invalidEl.textContent = "Invalid Username/Password";
                invalidEl.style.color = "red";
                invalidEl.style.fontWeight = "bold";
                invalidEl.style.fontSize = "0.5";
                submit.insertAdjacentElement("beforebegin", invalidEl);
            }
        } else {
            //moving to the admin page
            window.location.assign("../week-2/admin.html");
        }
    } catch (error) {
        console.log(error);
    }
}

submit.addEventListener("click", () => {
    const emailValue = email.value;
    const passwordValue = password.value;
    checkValidLogin(emailValue, passwordValue);
});
