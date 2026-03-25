const storageKey = "feedback-form-state";

const form = document.querySelector(".feedback-form");

let data = {
  email: "",
  message: ""
};

// підтягуємо збережені дані
const fromStorage = localStorage.getItem(storageKey);

if (fromStorage) {
  const parsed = JSON.parse(fromStorage);

  data.email = parsed.email || "";
  data.message = parsed.message || "";

  form.elements.email.value = data.email;
  form.elements.message.value = data.message;
}

// слухаємо всі інпути
form.addEventListener("input", function (e) {
  const name = e.target.name;

  if (name === "email" || name === "message") {
    data[name] = e.target.value;

    localStorage.setItem(storageKey, JSON.stringify(data));
  }
});

// відправка форми
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (data.email.trim() === "" || data.message.trim() === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(data);

  localStorage.removeItem(storageKey);

  data.email = "";
  data.message = "";

  form.reset();
});