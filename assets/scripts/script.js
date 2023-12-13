const btnEl = document.getElementById("btn");
const dobEl = document.getElementById("day-of-birth");
const resEl = document.getElementById("result");

function calculateAge() {
  const bdayValue = dobEl.value;

  if (bdayValue === "") {
    alert("Please enter your birthday!");
  } else {
    const age = getAge(bdayValue);
    // console.log(age);
    resEl.style.display = "block";
    resEl.innerText = `Your are ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(bdayValue) {
  const currentDate = new Date();
  const bdayDate = new Date(bdayValue);
  // console.log(bdayValue.getFullYear());
  // console.log(bdayDate.getFullYear());
  const yearDiff = currentDate.getFullYear() - bdayDate.getFullYear();
  // console.log(age);
  const monthDiff = currentDate.getMonth() - bdayDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < bdayDate.getDate())
  ) {
    yearDiff--;
  }
  return yearDiff;
}
btnEl.addEventListener("click", calculateAge);
