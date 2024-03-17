<template>
    <main class="main">
        <section class="main__section">
            <div class="main__content">
                <div class="__content">
                    <div class="content__title">
                        <h2>Ro’yxatdan o’tish</h2>
                    </div>
                    <div class="content__input">
                        <select class="content__selector __input">
                            <option>Jismoniy shaxs</option>
                            <option>Yuridik shaxs</option>
                        </select>
                        <input class="__input" type="text" placeholder="Ism*">
                        <input class="__input" type="text" placeholder="Familya*">
                        <input class="__input" type="text" placeholder="Email">
                        <input class="__input" type="number" placeholder="Tel +998">
                        <input class="__input" type="password" placeholder="Parol*">
                        <div class="checkbox">
                            <input class="__checkbox" type="checkbox">
                            <p class="checkbox__text">Saytdan foydalanish qaonunlarini qa’bul qilaman</p>
                        </div>
                        <div class="content__submit">
                            <a class="account" href="#">Menda akkaunt bor</a>
                            <button class="submit__btn" type="submit">Ro’yxatdan o’tish</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="__content2">
                <div class="__title">
                    <h6>Eslatma!</h6>
                    <p class="content2__p">
                        Saytimiz imkoniyatlaridan to’liq foydalanish uchun
                        ro’yxatdan o’tishingizni so’raymiz.
                    </p>
                    <p class="content2__p">
                        Siz bu portal orqali osongina o’z kvartirangizni sotishingiz,
                        ijaraga berishingiz yoki o’zingiz uchun yangi uy sotib
                        olishingiz mumkin.
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: 'SignUp',
}

</script>


<style scoped>
.main {
    max-width: 1102px;
    margin: 27px auto auto auto;
    padding: 0 10px;
    font-family: "Rubik", sans-serif;
}
.main__section {
    display: flex;
}
.__content {
    margin: 33px auto auto 42px;
}
.main__content {
    width: 566px;
    height: 622px;
    border-radius: 10px;
    border: 1px solid #00000080;
    color: #00066E;
    margin-bottom: 103px;
}
.__input {
    width: 482px;
    height: 46px;
    border-radius: 10px;
    padding-left: 16px;
    border: 1px solid #00000080;
    margin-bottom: 19px;
}
.content__selector {
    border-radius: 10px;
    padding-left: 16px;
    border: 1px solid #00000080
}
.checkbox {
    display: flex;
}
.__checkbox {
    width: 23px;
    height: 23px;
    border-radius: 5px;
    border: 1px solid #00000080;
    margin-right: 12px;
}
.checkbox__text {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #000000;
}
.content__submit {
    margin-top: 29px;
}
.account {
    color: #000000;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;

}
.submit__btn {
    width: 208px;
    height: 46px;
    border-radius: 10px;
    color: #FFFFFF;
    background-color: #5582FF;
    border: none;
    margin-left: 144px;
}
.submit__btn:hover {
    background-color: #00066E;
}

.__content2 {
    width: 348px;
    height: 213px;
    border-radius: 10px;
    margin-left: 78px;
    border: 1px solid #00000080;
    color: #00066E;
}
.__title {
    margin: 15px 22px auto 23px;
}
.__title h6 {
    margin-bottom: 21px;
}
.content2__p {
    font-size: 11px;
    font-weight: 400;
    line-height: 19px;
    margin-bottom: 25px;
}

@media screen and (max-width: 786px) {
    .main {
        width: 100%;
    }
    .main__section {
        display: block;
    }
    .main__content {
        width: auto;
        height: 402px;
    }
    .content__title h2 {
        text-align: center;
    }
    .__input {
        width: 150px;
        margin-right: 30px;
    }
    .content__selector {
        font-size: 13px;
        font-weight: 400;
        line-height: 20px;
    }
    .__checkbox {
        width: 18px;
        height: 18px;
        margin-right: 10px;
    }
    .checkbox__text {
        font-size: 13px;
    }
    .content__submit {
        margin-top: 10px;
        margin-left: 20px;
    }
    .account {
        color: #000000;
        text-decoration: none;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
    }
    .submit__btn {
        width: 108px;
        height: 30px;
        margin-left: 50px;
        font-size: 12px;
    }
    .__content2 {
        width: auto;
        height: 183px;
        margin: 30px auto;
    }
}
</style>