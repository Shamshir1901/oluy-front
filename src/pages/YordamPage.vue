<template>
    <main class="main">
        <section class="container-fluid __container1">
            <div class="title">
                <h3>Yordam</h3>
            </div>
            <div class="main__content">
                <div class="__content">
                    <p class="content__p first__p">Umumiy savollar</p>
                    <hr class="hr__line">
                    <p class="content__p">E’lon qo’shish haqida</p>
                    <hr class="hr__line">
                    <p class="content__p">Qiduruv haqida</p>
                </div>
                <div class="content__header">
                    <h2>-UMUMIY SAVOLLAR</h2>
                    <div class="content__part">Uyimni sotmoqchiman, rieltor yordami kerak!</div>
                    <div class="content__part">Yangi qurilgan inshootlardagi uylarni bahosini bilmoqchi edim.</div>
                </div>
            </div>
            <div class="main__content">
                <div class="content__question">
                    <h5>Savolni bering</h5>
                    <div class="content__input">
                        <input class="__input1 __textInput" type="text" placeholder="Ismingiz*">
                        <input class="__input2 __textInput" type="text" placeholder="Email*">
                        <input class="__input3 __textInput" type="number" placeholder="Telefon* +998">
                        <select class="content-input__selector __textInput">
                            <option>Umumiy savollar</option>
                            <option>Umumiy savollar</option>
                            <option>Umumiy savollar</option>
                            <option>Umumiy savollar</option>
                        </select>
                        <textarea class="__textInput __textArea" placeholder="Savolingiz"></textarea>
                        <button class="send__button">Savolni yuborish</button>
                    </div>
                </div>
                <div>
                    <div class="content__header __section2-header">
                        <h2>-E’LON QO’SHISH</h2>
                        <div class="content__part">E’lon qo’shmoqchi edim, yordam bera olasizmi?!</div>
                    </div>
                    <div class="content__header">
                        <h2>-QIDIRUV</h2>
                        <div class="content__part">Chilonzor tumani, Novza metro yonidan 3 xonali uy kerak!</div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>


<script>

</script>


<style>
.main {
    max-width: 1108px;
    margin: 47px auto auto auto;
    padding: 0 10px;
    font-family: "Rubik", sans-serif;
}
.__container1{
    max-width: 992px;
}
.title h3{
    font-size: 36px;
    font-weight: 500;
    line-height: 61px;
    color: #00066E;
}
.main__content {
    display: flex;
}
.__content{
    width: 322px;
    height: 169px;
    border-radius: 10px;
    border: 1px solid #00000080;
    margin-bottom: 43px;
}
.content__p {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    padding-left: 15px;
}
.first__p {
    padding-top: 17px;
}
.hr__line {
    border: 1px solid #00000080;
    width: 291px;
    margin-left: auto;
    margin-right: auto;
}
.content__header {
    margin: 0 0 0 45px;
}
.content__header h2{
    font-size: 36px;
    font-weight: 500;
    line-height: 61px;
    color: #00066E;
    margin-top: 0;
}
.content__part {
    padding: 8px 0 0 15px;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 10px;
    width: 602px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #00000080;;
}
.content__question {
    width: 322px;
    height: 501px;
    border-radius: 10px;
    border: 1px solid #00000080;
    margin-bottom: 47px;
}
.content__question h5 {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    padding: 19px 0 0 24px;
}
.content__input {
    margin-left: 24px;
}
.__textInput {
    width: 275px;
    height: 40px;
    border: 1px solid #00000080;
    margin-bottom: 11px;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    padding-left: 14px;
    border-radius: 10px;
}
.__textArea {
    height: 163px;
    width: 275px;
    padding-top: 11px;
    resize: none;
}
.send__button {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    width: 275px;
    height: 40px;
    background-color: #5582FF;
    color: #FFFFFF;
    text-align: center;
    border: none;
    border-radius: 10px;
}
.send__button:hover {
    background-color: #00066E;
}
.__section2-header {
    margin-bottom: 59px;
}

@media screen and (max-width: 786px) {
    .__container1{
        width: auto;
    }
    .title h3{
        text-align: center;
        font-size: 30px;
        line-height: 41px;
    }
    .main__content {
        display: block;
    }
    .__content{
        width: auto;
        margin-bottom: 23px;
    }
    .content__p {
        text-align: center;
        font-size: 13px;
    }
    .first__p {
        padding-top: 10px;
    }
    .content__header {
        margin: auto;
    }
    .content__header h2{
        text-align: center;
        font-size: 30px;
        line-height: 51px;
    }
    .content__part {
        padding: 8px 0 0 10px;
        font-size: 13px;
        width: auto;
        margin-bottom: 10px;
    }
    .content__question {
        width: auto;
        margin: 20px 0 47px 0;
    }
    .content__question h5 {
        text-align: center;
    }
    .content__input {
        text-align: center;
    }
    .__section2-header {
        margin-bottom: 39px;
    }
}

</style>