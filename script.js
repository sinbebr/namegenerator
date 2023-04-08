// 이름 데이터
const maleNames = ['Ethan', 'Alex', 'Adrian', 'Aaron', 'Adam', 'Alan', 'Albert', 'Andrew', 'Anson', 'Anthony', 'Arjun', 'Austin', 'Benjamin', 'Brandon', 'Brian', 'Calvin', 'Carl', 'Charles', 'Chris', 'Christian', 'Clarence', 'Cody', 'Colin', 'Connor', 'Curtis', 'Cyrus', 'Daniel', 'Darren', 'David', 'Dean', 'Derek', 'Dominic', 'Don', 'Douglas', 'Dylan', 'Edgar', 'Edison', 'Edmund', 'Edward', 'Edwin', 'Eli', 'Elijah', 'Elliott', 'Emery', 'Eric', 'Eugene', 'Evan', 'Felix', 'Floyd', 'Francis', 'Frank', 'Gabriel', 'Garrett', 'Gary', 'Gavin', 'George', 'Gilbert', 'Glenn', 'Gordon', 'Graham', 'Grant', 'Greg', 'Harry', 'Harvey', 'Henry', 'Howard', 'Hugh', 'Hugo', 'Hunter', 'Ian', 'Isaac', 'Ivan', 'Jack', 'Jackson', 'Jacob', 'Jake', 'James', 'Jason', 'Jayden', 'Jeffrey', 'Jerome', 'Jerry', 'Jesse', 'Jim', 'Jimmy', 'Joe', 'Joel', 'John', 'Johnny', 'Johnson', 'Jonathan', 'Jordan', 'Joseph', 'Joshua', 'Julian', 'Justin', 'Keith', 'Ken', 'Kevin', 'Kirk', 'Kyle', 'Lance', 'Larry', 'Lawrence', 'Lee', 'Leo', 'Leonard', 'Leroy', 'Lewis', 'Liam', 'Lincoln'];
const femaleNames = ['Aiko', 'Aimi', 'Aina', 'Airi', 'Akane', 'Akiko', 'Akina', 'Akiyo', 'Amaya', 'Ami',
'Anzu', 'Aria', 'Arisa', 'Asami', 'Asuka', 'Ayaka', 'Ayame', 'Ayane', 'Ayano', 'Ayumi',
'Chika', 'Chiyo', 'Eiko', 'Emi', 'Eri', 'Erika', 'Erina', 'Fuka', 'Fumiko', 'Haru',
'Haruka', 'Haruko', 'Haruna', 'Haruyo', 'Hikari', 'Hina', 'Hinata', 'Hiroko', 'Hitomi', 'Honoka',
'Ikumi', 'Itsuki', 'Izumi', 'Kana', 'Kanako', 'Kaori', 'Karen', 'Kasumi', 'Kaya', 'Kayo',
'Kazumi', 'Kiko', 'Kimi', 'Kira', 'Kiyomi', 'Kokoro', 'Koto', 'Kumi', 'Kurumi', 'Kyoko',
'Mai', 'Maiko', 'Maki', 'Makiko', 'Mana', 'Manami', 'Mariko', 'Makiyo', 'Maya', 'Mayumi',
'Megumi', 'Mei', 'Michi', 'Mieko', 'Miharu', 'Mika', 'Miki', 'Miku', 'Minako', 'Minami',
'Mio', 'Misaki', 'Miyabi', 'Miyu', 'Moe', 'Momoka', 'Momo', 'Nana', 'Nanako', 'Nao',
'Naoko', 'Natsumi', 'Natsuki', 'Natsuko', 'Nene', 'Nobuko', 'Nozomi', 'Ran', 'Rei', 'Reika',
'Reina', 'Rie', 'Rika', 'Riko', 'Rina', 'Rinako', 'Rio', 'Risa', 'Rina', 'Ruri',
'Ryoko', 'Sachi', 'Sachiko', 'Sae', 'Saeko', 'Sakura', 'Sana', 'Sara', 'Sayaka', 'Sayuri',
'Shinobu', 'Shiori', 'Shizuka', 'Sumiko', 'Takako', 'Takara', 'Tamaki', 'Tomoko', 'Tsukiko', 'Yasuko',
'Yoko', 'Yoshiko', 'Yua', 'Yui', 'Yuka', 'Yuki', 'Yukiko', 'Yumeko', 'Yumi', 'Yuna'
];

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