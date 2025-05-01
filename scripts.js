function toggleNav() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

document.querySelector('.calculate-btn').addEventListener('click', function() {
    // Get user inputs
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseInt(document.getElementById('age').value);
    const feet = parseInt(document.getElementById('feet').value) || 0;
    const inches = parseInt(document.getElementById('inches').value) || 0;
    const pounds = parseFloat(document.getElementById('pounds').value);
    const activityMultiplier = parseFloat(document.getElementById('activity').value);
    
    // Validate inputs
    if (isNaN(age) || age < 15 || age > 100) {
        showError('Please enter a valid age between 15 and 100');
        return;
    }
    
    if (isNaN(feet) || feet < 0) {
        showError('Please enter a valid feet measurement');
        return;
    }
    
    if (isNaN(inches) || inches < 0 || inches > 11) {
        showError('Please enter valid inches (0-11)');
        return;
    }
    
    if (isNaN(pounds) || pounds <= 0) {
        showError('Please enter a valid weight in pounds');
        return;
    }
    
    // Convert height to centimeters
    const heightInCm = (feet * 30.48) + (inches * 2.54);
    // Convert weight to kilograms
    const weightInKg = pounds * 0.453592;
    
    // Calculate BMR (Basal Metabolic Rate)
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weightInKg) + (4.799 * heightInCm) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weightInKg) + (3.098 * heightInCm) - (4.330 * age);
    }
    
    // Calculate daily calories
    const dailyCalories = Math.round(bmr * activityMultiplier);
    
    // Display result
    const resultBox = document.getElementById('result');
    resultBox.innerHTML = `
        <h4>Your Daily Calorie Needs</h4>
        <p>To maintain your current weight, you need approximately:</p>
        <p class="calorie-result">${dailyCalories} calories per day</p>
        <p class="disclaimer">Note: This is an estimate. Individual needs may vary.</p>
    `;
});

function showError(message) {
    const resultBox = document.getElementById('result');
    resultBox.innerHTML = `<p class="error">${message}</p>`;
}

// Habit Generator
document.addEventListener('DOMContentLoaded', function() {
    const habits = [
      "Drink a glass of water before coffee",
      "Take the stairs instead of elevator",
      "Do 2 minutes of stretching right now",
      "Call/text someone you appreciate",
      "Add veggies to your next snack",
      "Breathe deeply for 1 minute",
      "Stand and stretch every hour",
      "Try a new healthy food this week",
      "10-minute walk without your phone",
      "Express gratitude for one thing today"
    ];
  
    const generateBtn = document.getElementById('generateHabit');
    const habitDisplay = document.getElementById('habitDisplay');
  
    if (generateBtn && habitDisplay) {
      generateBtn.addEventListener('click', function() {
        const randomHabit = habits[Math.floor(Math.random() * habits.length)];
        habitDisplay.innerHTML = `<p>${randomHabit}</p>`;
      });
    }
  });

