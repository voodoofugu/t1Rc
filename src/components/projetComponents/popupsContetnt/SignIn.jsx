import { memo } from "react";

export default memo(function SignIn() {
  return (
    <>
      {/* <div className="title">Вход</div> */}
      {/* <div className="color-box"></div> */}
      <div className="content sign-in1 error">
        <div className="err-msg1">Требуется пароль</div>
        <div className="sign-in-form">
          <div className="block-a">
            <label className="tfield username">
              Имя пользователя
              <input type="text" name="username" className="itext username" />
            </label>
            <label className="tfield password">
              Пароль
              <input
                type="password"
                name="password"
                className="itext password"
              />
              <div className="note">Забыли пароль?</div>
            </label>
          </div>
          <div className="btn-simple-gold btn-ok">Войти</div>
          <div className="alt-step">
            Нет пароля?&nbsp;
            <span className="go">Регистрация</span>
          </div>
        </div>
      </div>
    </>
  );
});

<div className="m-popup sign-up pop-reg captcha">
  <div className="title">Регистрация</div>
  <div className="color-box"></div>
  <div className="content sign-up1">
    <div className="text-1">
      На ваш почтовый адрес было отправлено письмо с кодом подтверждения.
      Пожалуйста, введите его тут
    </div>
    <div className="megapack-banner">
      <div className="g1">
        <div className="num">+100%</div>
        <div className="txt">Шанс выпадения</div>
      </div>
      <div className="g2 tickets">
        <div className="num">+5</div>
        <div className="txt">tickets</div>
      </div>
      <div className="g3">
        <div className="num">+10</div>
        <div className="txt">DPC</div>
      </div>
    </div>
    <div className="sign-up-form">
      <div className="block-a">
        <label className="tfield code">
          Код подтверждения
          <p className="error"></p>
          <input type="text" name="code" className="itext code" />
        </label>
        <label className="tfield check">
          Возникла проблема?&nbsp;
          <a className="verifyHelp" href="#">
            Кликните здесь!
          </a>
        </label>
      </div>
      <div className="btn-simple-gold btn-ok">Подтвердить</div>
    </div>
  </div>
  <div className="btn-close-x"></div>
</div>;
