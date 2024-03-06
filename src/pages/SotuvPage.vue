<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <select class="form-select" id="select1" aria-label="Default select example">
                    <option selected>Shahar</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example" id="select2">
                    <option selected>Manzilni kiriting yoki tanlang</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example" id="select3">
                    <option selected>Kvartira</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example" id="select4">
                    <option selected>Xonalar</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example" id="select5">
                    <option selected>Narxi</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <button class="search-button">
                   Izlash
                </button>
            </div>
            <hr class="line">
        </div>
        <div class="row">
            <div class="col" id="col1">
                <h6 class="h6">Jami(4552)</h6>
                <h6 class="h6">Yangi inshootlar(402)</h6>
                <h6 class="h6" id="h6">Ikkilamchi bozor(4150)</h6>
                <div class="row-cols-1">
                    <select class="form-select" aria-label="Default select example" id="select6">
                        <option selected>Saralash</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#"> ></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="col" id="col2">
            <div class="row" id="row1">
                <div class="col" id="row2">
                    <img src="/public/icons/17.jpeg" alt="17img" id="img17">
                    <div class="col" id="row3">
                        <h3 class="h3" id="white">Kvartira sotiladi <svg xmlns="http://www.w3.org/2000/svg" id="diamond" width="40" height="40" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
                            <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
                        </svg></h3>
                        <h6 id="white">Toshkent shahri, Yakkasaroy tumani, Bobur</h6>
                        <div class="row" id="rowp">
                            <p id="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div class="row">
                            <h3 id="white">78000 y.e <button id="button">Batafsil</button></h3>
                        </div>
                        <div class="col" id="prow">
                            <p id="p1">Maydoni: 55kv/m</p>
                            <p id="p2">Xonalar: 3</p>
                            <p id="p2">Qavat: 4/9</p>
                        </div>
                        <div class="col" id="prow">
                            <p>09 Noyabr, 2023 yil, 19:01</p>
                        </div>
                        <div class="col" id="imgrow">
                            <img src="/public/icons/21.jpg" alt="profile-img" id="profile">
                            <p id="pname">Abdullaev Xayrulla, Rieltor</p>
                            <p class="star2"></p>
                            <div class="row" id="phone">
                                <a href="#" id="msg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" fill="currentColor"
                                         class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0
                                            1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708
                                            2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0
                                            0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                    </svg>
                                </a>
                                <p class="star3"></p>
                                <button class="button1"> Telefon </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col" id="col2">
            <div class="row" id="row1">
                <div class="col" id="row2">
                    <img src="/public/icons/18.jpeg" alt="17img" id="img17">
                    <div class="col" id="row3">
                        <h3 class="h3" id="white">Kvartira sotiladi <svg xmlns="http://www.w3.org/2000/svg" id="diamond" width="40" height="40" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
                            <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
                        </svg></h3>
                        <h6 id="white">Toshkent shahri, Shayxontoxur tumani, G'alaba ko'chasi</h6>
                        <div class="row" id="rowp">
                            <p id="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div class="row">
                            <h3 id="white">57000 y.e dan boshlab<button id="button">Batafsil</button></h3>
                        </div>
                        <div class="col" id="prow">
                            <p id="p1">Maydoni: 50kv/m</p>
                            <p id="p2">Xonalar: 3</p>
                            <p id="p2">Qavat: 2-7/7</p>
                        </div>
                        <div class="col" id="prow">
                            <p>03 Noyabr, 2023 yil, 13:31</p>
                        </div>
                        <div class="col" id="imgrow">
                            <img src="/public/icons/21.jpg" alt="profile-img" id="profile">
                            <p id="pname">Kolizey House, Qurilish firmasi</p>
                            <p class="star2"></p>
                            <div class="row" id="phone">
                                <a href="#" id="msg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" fill="currentColor"
                                         class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0
                                            1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708
                                            2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0
                                            0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                    </svg>
                                </a>
                                <p class="star3"></p>
                                <button class="button1"> Telefon </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col" id="col2">
            <div class="row" id="rowId">
                <div class="col" id="row2">
                    <img src="/public/icons/19.jpeg" alt="17img" id="img17">
                    <div class="col" id="row3Id">
                        <h3 class="h3">Hi-Tech uslubida qurilgan kvartiralar sotiladi </h3>
                        <h6>Toshkent shahri, Chilonzor tumani, Muqumiy ko'chasi</h6>
                        <div class="row" id="rowpId">
                            <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div class="row">
                            <h3 >75000 y.e dan boshlab<button id="buttonId">Batafsil</button></h3>
                        </div>
                        <div class="col" id="prowId">
                            <p id="p1Id">Maydoni: 50kv/m</p>
                            <p id="p2Id">Xonalar: 1-5</p>
                            <p id="p2Id">Qavat: 2-8/8</p>
                        </div>
                        <div class="col" id="prowId">
                            <p>27 Dekabr, 2023 yil, 16:31</p>
                        </div>
                        <div class="col" id="imgrowId">
                            <img src="/public/icons/22.png" alt="profile-img" id="profile">
                            <p id="pname">Golden House, Qurilish firmasi</p>
                            <p class="star2Id"></p>
                            <div class="row" id="phone">
                                <a href="#" id="msgId">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" fill="currentColor"
                                         class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0
                                            1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708
                                            2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0
                                            0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                    </svg>
                                </a>
                                <p class="star3Id"></p>
                                <button class="button1Id"> Telefon </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col" id="col2">
            <div class="row" id="rowId">
                <div class="col" id="row2">
                    <img src="/public/icons/23.jpeg" alt="17img" id="img17">
                    <div class="col" id="row3Id">
                        <h3 class="h3">Kvartira sotiladi </h3>
                        <h6>Toshkent shahri, Chilonzor tumani, Muqumiy ko'chasi</h6>
                        <div class="row" id="rowpId">
                            <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div class="row">
                            <h3 >54000 y.e<button id="buttonId">Batafsil</button></h3>
                        </div>
                        <div class="col" id="prowId">
                            <p id="p1Id">Maydoni: 50kv/m</p>
                            <p id="p2Id">Xonalar: 1-5</p>
                            <p id="p2Id">Qavat: 2-8/8</p>
                        </div>
                        <div class="col" id="prowId">
                            <p>22 Dekabr, 2023 yil, 10:22</p>
                        </div>
                        <div class="col" id="imgrowId">
                            <img src="/public/icons/22.png" alt="profile-img" id="profile">
                            <p id="pname">Tohirov Javohir, Jismoniy shaxs</p>
                            <p class="star2Id1"></p>
                            <div class="row" id="phone">
                                <a href="#" id="msgId">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="45" fill="currentColor"
                                         class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0
                                            1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708
                                            2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0
                                            0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                    </svg>
                                </a>
                                <p class="star3Id"></p>
                                <button class="button1Id"> Telefon </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" id="pagination">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#"> ></a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

</template>


<script>
export default {
    name: 'SotuvPage',
}

</script>


<style>

.container {
    margin-top: 2%;
}
.row {
    justify-content: center;
    display: flex;
}
.col {
    justify-content: center;
    display: flex;
}
#select1 {
    width: 205px;
}
.form-select {
    border-radius: 17px;
    border: 1px solid #00000080;
    margin-right: 3%;
    height: 36px;
}
#select2 {
    width: 318px;
}
#select3 {
    width: 131px;
}
#select4 {
    width: 86px;
}
#select5 {
    width: 131px;
}
.search-button {
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #5582FF;
    width: 77px;
    height: 36px;
    color: #ffffff;
}
.line {
    margin-top: 1%;
    width: 90%;
}
#rowp {
    width: 80%;
}
#prowId {
    width: 80%;
}
#col1 {
    width: 90%;
    justify-content: start;
    padding-left: 6.5%;
    padding-top: 1%;
}
.h6 {
    padding-right: 8%;
    padding-top: 0.5%;
}
#select6 {
    width: 110px;
    height: 36px;
}
.row-cols-1 {
    padding-left: 10%;
    padding-right: 7%;
}

#row1 {
    width: 90%;
    height: 400px;
    background-color: #5582FF;
    border-radius: 10px;
    margin-bottom: 2%;
}
#rowId {
    width: 90%;
    height: 400px;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 2%;
    border: 2px solid #5582FF;

}
#row2 {
    padding-top: 2%;
    padding-left: 2%;
    justify-content: start;
}

#img17 {
    width: 207px;
    height: 207px;
    border-radius: 10px;
}
#row3 {
    justify-content: start;
    display: block;
    color: white;
    padding-left: 2%;
}
#row3Id {
    justify-content: start;
    display: block;
    color: #5582FF;
    padding-left: 2%;
}
#button {
    color: #5582FF;
    border-radius: 3px;
    width: 70px;
    height: 25px;
    font-size: 10px;
    border: none;
    margin-left: 2%;
    background-color: white;
}
#buttonId {
    color: #ffffff;
    border-radius: 3px;
    width: 70px;
    height: 25px;
    font-size: 10px;
    border: none;
    margin-left: 2%;
    background-color: #5582FF;
}
#prow {
     justify-content: start;
     color: white;
}
#prowId {
    justify-content: start;
    color: #5582FF;
}

#p1 {
    margin-right: 1.5%;
    border: 1px solid white;
    border-radius: 3px;
    width: 16%;
    height: 30px;
    text-align: center;
}
#p1Id {
    margin-right: 1.5%;
    border: 1px solid #5582FF;
    border-radius: 3px;
    width: 20%;
    height: 30px;
    text-align: center;
}
#p2 {
    margin-right: 1.5%;
    border: 1px solid white;
    border-radius: 3px;
    width: 11%;
    height: 30px;
    text-align: center;
}
#p2Id {
    margin-right: 1.5%;
    border: 1px solid #5582FF;
    border-radius: 3px;
    width: 15%;
    height: 30px;
    text-align: center;
}
#imgrow {
    justify-content: start;
    margin-top: 1%;
    margin-left: 3%;
}
#imgrowId {
    justify-content: start;
    margin-top: 1%;
    margin-left: 3%;
}
#profile {
    width: 40px;
    height: 40px;
    padding-top: 0.5%;
}
#pname {
    padding-left: 2%;
    padding-right: 2%;
}
.star2 {
    position: relative;
    width: 20px;
    height: 20px;
    padding-top: 2.9%;

}
.star2::after {
    content: "★★★☆☆";
    position: absolute;
    bottom: 0;
    left: 0;
    color: white;
    font-size: 18px;

}
.star2Id {
    position: relative;
    width: 20px;
    height: 20px;
    padding-top: 2.9%;

}
.star2Id::after {
    content: "★★★☆☆";
    position: absolute;
    bottom: 0;
    left: 0;
    color: #5582FF;
    font-size: 18px;

}
.star2Id1{
    position: relative;
    width: 20px;
    height: 20px;
    padding-top: 2.9%;

}
.star2Id1::after {
    content: "☆☆☆☆☆";
    position: absolute;
    bottom: 0;
    left: 0;
    color: #5582FF;
    font-size: 18px;

}
#phone {
    margin-left: 10%;
    width: 80%;
}
.button1 {
    background-color: white;
    color: #5582FF;
    border-radius: 10px;
    width: 20%;
    height: 40px;
    text-align: center;
    font-weight: 500;
    border: none;
}
.button1Id {
    background-color: #5582FF;
    color: #ffffff;
    border-radius: 10px;
    width: 20%;
    height: 40px;
    text-align: center;
    font-weight: 500;
    border: none;
}
.star3 {
    position: relative;
    width: 60px;
    height: 54px;
}
.star3::after {
    content: "★";
    position: absolute;
    bottom: 0;
    left: 0;
    color: white;
    font-size: 50px;
}
.star3Id {
    position: relative;
    width: 60px;
    height: 54px;
}
.star3Id::after {
    content: "★";
    position: absolute;
    bottom: 0;
    left: 0;
    color: #5582FF;
    font-size: 50px;
}
#msg {
    color: white;
    width: 10%;
    margin-right: 2%;
}
#msgId {
    color: #5582FF;
    width: 10%;
    margin-right: 2%;
}
#diamond {
    margin-left: 65%;
}
#pagination {
    width: 90%;
    margin-left: 5.8%;
}




</style>