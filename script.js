function playGuess() {
      var answer = parseInt(Math.random() * 100);
      var attempt = 1;
      var attemptsCount = 7;      
      
      while (attempt <= attemptsCount) {
        var userAnswer = prompt("Угадайте число от 0 до 100, у вас 7 попыток. Попытка № " + attempt);
        userAnswer = parseInt(userAnswer);
        
        if (userAnswer > answer) {
          alert("Ваш ответ слишком большой.");
        } else if (userAnswer < answer) {
          alert("Ваш ответ слишком маленький.");
        } else if (userAnswer == answer) {
          alert("Вы угадали!");
          break;
        } else {
          alert("Необходимо ввести число!");
        }
        
        attempt++;
      }
        
      if (attempt > attemptsCount) {
        alert("К сожалению, вы не угадали. Было загадано число: " + answer);
      }
        }

function playGuess2() {
    var answer = parseInt(Math.random() * 100);
      var attempt = 1;
      var attemptsCount = 7;
      var gamer = 1;
      
     while (attempt <= attemptsCount) {
        var userAnswer = prompt("Игрок №" + gamer + ", попытка № " + attempt + ":");
        if (userAnswer == "z" || userAnswer == "Z") {
          break;
        }
        userAnswer = parseInt(userAnswer);
        
        if (userAnswer > answer) {
          alert("Ваш ответ слишком большой.");
        } else if (userAnswer < answer) {
          alert("Ваш ответ слишком маленький.");
        } else if (userAnswer == answer) {
          alert("Вы угадали!");
          alert("Победил игрок №" + gamer + "!");
          break;
        } else {
          alert("Необходимо ввести число!");
        }
        
        if (gamer == 1) {
          gamer = gamer + 1;
        } else {
          gamer = gamer - 1;
          attempt++;
        }
      }
        
      if (attempt > attemptsCount) {
        alert("К сожалению, вы не угадали. Было загадано число: " + answer);
      }
}

function checkAnswer(id, trueAnswer) {
            var userAnswer = document.getElementById(id).value;
            userAnswer = userAnswer.toLowerCase();
            if (userAnswer == trueAnswer) {
                return true;
            } else {
                return false;
            }
        }
          
        function checkAnswers() {
            var goodAnswers = 0;
            if (checkAnswer("puzzle1", "морковь") == true || checkAnswer("puzzle1", "морковка") == true) {
                goodAnswers++;
            }
            
            if (checkAnswer("puzzle2", "лампочка") == true) {
                goodAnswers++;
            }
            
            if (checkAnswer("puzzle3", "тропинка") == true) {
                goodAnswers++;
            }
            
            if (goodAnswers == 0) {
                alert("Вы ничего не угадали");
            } else {
                alert("Количество правильных ответов: " + goodAnswers);
            }
        }