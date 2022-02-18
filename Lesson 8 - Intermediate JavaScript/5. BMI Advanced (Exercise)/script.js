function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2)
  var interpretation = ''

  if (bmi < 18.5) {
    interpretation = 'Your BMI is ' + bmi + ', so you are underweight.'
    return interpretation
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = 'Your BMI is ' + bmi + ', so you have a normal weight.'
    return interpretation
  } else {
    interpretation = 'Your BMI is ' + bmi + ', so you are overweight.'
    return interpretation
  }
}
