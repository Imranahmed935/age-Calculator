const btn = document.getElementById("btn");
const inputDate = document.getElementById("birthday");
const result = document.getElementById("result");

function calculateAge() {
  const inputDateValue = inputDate.value;

  if (inputDateValue === "") {
    alert("Please Enter your BirthDate");
  } else {
    const age = getAge(inputDateValue);
    result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(inputDateValue) {
  const currentDate = new Date();
  const birthDate = new Date(inputDateValue);

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

btn.addEventListener("click", calculateAge);
