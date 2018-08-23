function whichSchool(age) {
  if (age < 13) {
    return "Elementary School";
  }
  else if (age > 18) {
    return "Lighthouse Labs";
  }
  else if (age >= 13 && age <= 18) {
    return "Secondary School";
  }
}
