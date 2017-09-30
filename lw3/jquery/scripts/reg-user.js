function regUser() {
  var email = $("#email").val();
  var passwd = $("#passwd").val();
  var confirmPasswd = $("#confirm-passwd").val();
  var choice = $('#choice').prop("checked");
  if (email == "") {
    alert("Требуется Заполнить Поле [Эл. Почта]");
    return 0;
  } else if (passwd == "" || passwd.length < 6) {
    alert("Требуется Заполнить Поле [Пароль]  Мин = 6 Символов");
    return 0;
  } else if (confirmPasswd == "" || confirmPasswd < 6) {
    alert("Требуется Заполнить Поле [Повтор Пароля] Мин = 6 Символов");
    return 0;
  } else if (choice != true) {
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
  var regForm = $("#registration-form");
  regForm.onsubmit = function () {
    regUser();
  }
};