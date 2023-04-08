// 이름 데이터
const maleNames = ['Ethan', 'Alex', 'Adrian', 'Aaron', 'Adam', 'Alan', 'Albert', 'Andrew', 'Anson', 'Anthony', 'Arjun', 'Austin', 'Benjamin', 'Brandon', 'Brian', 'Calvin', 'Carl', 'Charles', 'Chris', 'Christian', 'Clarence', 'Cody', 'Colin', 'Connor', 'Curtis', 'Cyrus', 'Daniel', 'Darren', 'David', 'Dean', 'Derek', 'Dominic', 'Don', 'Douglas', 'Dylan', 'Edgar', 'Edison', 'Edmund', 'Edward', 'Edwin', 'Eli', 'Elijah', 'Elliott', 'Emery', 'Eric', 'Eugene', 'Evan', 'Felix', 'Floyd', 'Francis', 'Frank', 'Gabriel', 'Garrett', 'Gary', 'Gavin', 'George', 'Gilbert', 'Glenn', 'Gordon', 'Graham', 'Grant', 'Greg', 'Harry', 'Harvey', 'Henry', 'Howard', 'Hugh', 'Hugo', 'Hunter', 'Ian', 'Isaac', 'Ivan', 'Jack', 'Jackson', 'Jacob', 'Jake', 'James', 'Jason', 'Jayden', 'Jeffrey', 'Jerome', 'Jerry', 'Jesse', 'Jim', 'Jimmy', 'Joe', 'Joel', 'John', 'Johnny', 'Johnson', 'Jonathan', 'Jordan', 'Joseph', 'Joshua', 'Julian', 'Justin', 'Keith', 'Ken', 'Kevin', 'Kirk', 'Kyle', 'Lance', 'Larry', 'Lawrence', 'Lee', 'Leo', 'Leonard', 'Leroy', 'Lewis', 'Liam', 'Lincoln'];
const femaleNames = ["Abigail", "Alice", "Amanda", "Amber", "Amy", "Angel", "Angela", "Anna", "Aria", "Ariana", "Ariel", "Ashley", "Aubrey", "Audrey", "Avery", "Bailey", "Bella", "Bethany", "Brooke", "Caitlin", "Cameron", "Camila", "Caroline", "Charlotte", "Chloe", "Christina", "Claire", "Daisy", "Danielle", "Delilah", "Destiny", "Diana", "Eden", "Eleanor", "Elena", "Elizabeth", "Ella", "Ellie", "Emily", "Emma", "Emmalyn", "Erin", "Evelyn", "Faith", "Gabrielle", "Genesis", "Gianna", "Grace", "Gracie", "Hailey", "Haley", "Hannah", "Harmony", "Hayden", "Hayley", "Hazel", "Isabella", "Isabelle", "Isabel", "Ivy", "Jade", "Jasmine", "Jenna", "Jennifer", "Jessica", "Jordan", "Jordyn", "Journey", "Julia", "Juliana", "Juliette", "Kaitlyn", "Kaitlin", "Kaitlynn", "Katelyn", "Katherine", "Katie", "Kayla", "Keira", "Kelly", "Kendall", "Kennedy", "Khloe", "Kimberly", "Kinley", "Kinsley", "Kira", "Kylie", "Laila", "Layla", "Leah", "Lila", "Liliana", "Lillian", "Lilliana", "Lilly", "Lily", "Londyn", "Lucy", "Lydia", "Mackenzie", "Madeline", "Madelyn", "Madison", "Makayla", "Makenzie", "Maria", "Mariah", "Megan", "Melanie", "Mia", "Mikayla", "Miranda", "Molly", "Morgan", "Mya", "Natalia", "Natalie", "Nevaeh", "Nora", "Olivia", "Paige", "Paisley", "Penelope", "Peyton", "Phoebe", "Piper", "Presley", "Raven", "Reagan", "Reese", "Riley", "Rose", "Ruby", "Rylee", "Sabrina", "Sadie", "Samantha", "Sara", "Sarah", "Savannah", "Scarlett", "Serena", "Shelby", "Sienna", "Sierra", "Skylar", "Sophia", "Sophie", "Stella", "Summer", "Sydney", "Talia", "Tessa", "Valentina", "Valerie", "Victoria", "Violet", "Willow", "Zoe", "Zoey"];


// 이름 3개를 랜덤하게 선택하는 함수
function getRandomNames() {
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const selectedNames = [];
  const availableNames = gender === 'male' ? maleNames : femaleNames;
  while (selectedNames.length < 3) {
    const randomIndex = Math.floor(Math.random() * availableNames.length);
    const randomName = availableNames[randomIndex];
    if (!selectedNames.includes(randomName)) {
      selectedNames.push(randomName);
    }
  }
  return selectedNames;
}

// 이름을 화면에 업데이트하는 함수
function updateNames() {
  const randomNames = getRandomNames();
  document.getElementById('name1').textContent = randomNames[0];
  document.getElementById('name2').textContent = randomNames[1];
  document.getElementById('name3').textContent = randomNames[2];
}

// Generate 버튼 클릭 이벤트 핸들러
document.getElementById('generate-btn').addEventListener('click', () => {
  updateNames();
});