const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");

const quotes = [
  { text: "Еда — это наша общая платформа счастья.", author: "Джулия Чайлд" },
  { text: "Пока есть еда — есть надежда.", author: "Неизвестный автор" },
  { text: "Лучшие воспоминания рождаются за столом.", author: "Шеф Анри Бурда" },
  { text: "Счастье — это горячий кофе в холодный день.", author: "Неизвестный автор" },
  { text: "Еда — самый искренний способ сказать «я люблю тебя».", author: "Неизвестный автор" },
  { text: "Хорошая еда — это доброе настроение.", author: "Неизвестный автор" },
  { text: "Настоящая кухня начинается там, где кончается страх.", author: "Ферран Адрия" }
];


function changeQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = "“" + quotes[random].text + "”";
  quoteAuthor.textContent = "— " + quotes[random].author;
}

changeQuote();


setInterval(changeQuote, 6000);