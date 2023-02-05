import React, { useState } from "react";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";


function App() {

  const [user, setUser] = useState({ name: "", password: "" })

  const degis = (e) => {
    if (e.target.type === "text") {
      setUser({ ...user, name: e.target.value })
    }
    else {
      setUser({ ...user, password: e.target.value })
    }
  }
  const click = () => {
    if (user.name === "") {
      alert("Kullanıcı Adı Boş bırakılamaz")
    }
    else if (user.name.length <= 5) {
      alert("Lütfen en az 6 karakter giriniz.")
    }
    else if (user.password === "") {
      alert("Şifre Boş bırakılamaz")
    }
    else if (user.password.length <= 8) {
      alert("Şifre en az 8 karakter olabilir.")
    }
    else {
      alert("Kullanıcı adınız: " + user.name + " Parolanız: " + user.password)
    }
  }


  return (
    <div className="container-fluid">
      <div className="row my-5 d-inline">
        <h2 className="text-center">Giriş Formu</h2>
          <img src="https://assets.codepen.io/7773162/4kNYC.jpeg" alt="login image" class="login__img">
        <Form>
          <Input
            tip={"text"} mesaj="Kullanıcı adınızı giriniz..." degisme={degis}
            deger={user.name}
          />
          <Input
            tip={"password"} mesaj="Şifrenizi giriniz..." degisme={degis}
            deger={user.password}
          />
          <Button
            tiklandi={click}
          />
        </Form>
      </div>
    </div>
  );
}
export default App;
/*
Bu kod, bir giriş formu oluşturur. Kullanıcı adı ve şifre alanlarını içerecek bir "user" nesnesi oluşturmak için useState hook'unu kullanır. 
Bileşen, kullanıcı adı ve şifre alanları için iki adet giriş bileşeni ve formun gönderilmesi için bir düğme bileşeni içerir. 
Formda bazı girdi doğrulama işlemleri yapılmaktadır. Örneğin, kullanıcı adının boş olup olmadığını veya 6 karakterden az olup olmadığını, 
şifrenin boş olup olmadığını veya 8 karakterden az olup olmadığını kontrol eder. Form doğru şekilde doldurulursa, bileşen 
kullanıcının adını ve şifresini bildirir, aksi halde bir hata mesajı gösterir.
*/
