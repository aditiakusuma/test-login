const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const errorContainer = document.getElementById("errorMessage");
const loginForm = document.getElementById("loginForm");

const validate = () => {
    errorContainer.textContent = ""
    if (!inputUsername.value || !inputPassword.value) {
        errorContainer.textContent = "Form tidak lengkap";
        return false;
    }

    return true;
};

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const loginData = {
        username: inputUsername.value,
        password: inputPassword.value,
    };

    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });

        if (!response.ok) {
            throw new Error("Login gagal");
        }

        alert("Login berhasil!");
    } catch (error) {
        errorContainer.textContent = error.message;
    }
});
