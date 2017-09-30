function regUser() {
  var email = document.getElementById("email").value;
  var passwd = document.getElementById("passwd").value;;
  var confirmPasswd = document.getElementById("confirm-passwd").value;
  var choice = document.querySelector('input[type=checkbox]');   
  if (email == "") {
    alert("Требуется Заполнить Поле [Эл. Почта]");
    return 0;
  } else if (passwd == "" || passwd.length < 6) {
    alert("Требуется Заполнить Поле [Пароль]  Мин = 6 Символов");
    return 0;
  } else if (confirmPasswd == "" || confirmPasswd < 6) {
    alert("Требуется Заполнить Поле [Повтор Пароля] Мин = 6 Символов");
    return 0;
  } else if (choice.checked != true) {
    alert("Требуется Поставить Флажок В Поле [Согласен?]")
    return 0;
  }
  if (passwd != confirmPasswd) {
    alert("Ошибка, Введенные Пароли Не Совпадают!");
    return 0;
  } else {
    confirm("Регистрация Пользователя Завершена!");
  }
};

window.onload = function() {
  var regForm = document.getElementById("registration-form");
  regForm.onsubmit = function () {
    regUser();
  }
};