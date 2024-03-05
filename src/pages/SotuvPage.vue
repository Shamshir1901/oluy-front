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
                        <h3 class="h3" id="white">Kvartira sotiladi</h3>
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
                            <div class="" id="star1">
                                <img src="/public/icons/star.png" alt="star" id="star">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
#prow {
    justify-content: start;
    color: white;
}

#p1 {
    margin-right: 1.5%;
    border: 1px solid white;
    border-radius: 3px;
    width: 16%;
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
#imgrow {
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
}
#star1 {

}
#star {
    width: 20px;
    height: 20px;
}


</style>