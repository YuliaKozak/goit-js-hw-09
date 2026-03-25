const storageKey = "feedback-form-state";

const form = document.querySelector(".feedback-form");

let formData = {
  email: "",
  message: ""
};

// підтягуємо збережені дані
const fromStorage = localStorage.getItem(storageKey);

if (fromStorage) {
  const parsed = JSON.parse(fromStorage);

  formData.email = parsed.email || "";
  formData.message = parsed.message || "";

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// слухаємо всі інпути
form.addEventListener("input", function (e) {
  const name = e.target.name;

  if (name === "email" || name === "message") {
    formData[name] = e.target.value;

    localStorage.setItem(storageKey, JSON.stringify(formData));
  }
});

// відправка форми
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (formData.email.trim() === "" || formData.message.trim() === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(storageKey);

  formData.email = "";
  formData.message = "";

  form.reset();
});