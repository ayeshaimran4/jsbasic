function calculateBMI(weight, height) {
    if (height <= 0) {
        return "Height must be greater than zero";
    }
    if (weight <= 0) {
        return "Weight must be greater than zero";
    }
    const bmi = weight / (height * height);
    return bmi;
}

console.log(calculateBMI(70, 1.7));  