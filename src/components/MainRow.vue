<template>
    <div class="container-fluid">
        <div class="container" style="display: flex; margin-top: 100px">
            <div class="container-fluid">
                <h1 style="color: #00066E; font-weight: bold">
                    Uy soting va sotib oling
                </h1>
                <p>
                    Onlayn e'lon qo'yib o'z uyingizni ishonchli soting,
                    va o'zingiz uchun yangi uy sotib oling.<br> E'lon joylashtirish mutlaqo bepul!
                </p>
                <a><button href="#" class="button" style="color: #ffffff; border-radius: 17px;
                background-color: #5582FF; font-weight: bold; width: 144px; height: 30px; border: none"
                >E'lon berish +</button></a>
            </div>
            <img src="/public/icons/forsale.png" alt="sale-photo" style="width: 500px">
        </div>
        <div class="container" style="display: flex; margin-top: 7%">
            <h2 style="color: #00066E; margin-left: 100px">
                Izlash
            </h2>
        </div>
        <div class="container" style="width: 80%; height: 200px; background-color: #5582FF; border-radius: 17px">
            <div class="container" style="margin-bottom: 15px">
                <ul style="list-style-type: none; margin: auto; padding-top: 20px; display: flex; font-size: 20px">
                    <li style="margin-right: 20px"><a href="#"><button style="color: #ffffff; text-decoration: none;
                    line-height: 16.59px; letter-spacing: 0.04em;
                    background-color: #00066E; width: 120px; height:32px; border-radius: 17px;
                    margin-right: 20px; font-weight: bold; border: none">Sotuv</button>
                    </a></li>
                    <li style="margin-right: 20px"><a href="#" style="color: #ffffff; text-decoration: none;
                        line-height: 16.59px; letter-spacing: 0.04em; margin-right: 20px; font-weight: bold">
                        Ijara</a></li>
                    <li style="margin-right: 20px"><a href="#" style="color: #ffffff; text-decoration: none;
                        line-height: 16.59px; font-weight: bold; letter-spacing: 0.04em;">
                        Yangi uylar</a></li>
                </ul>
            </div>
            <div class="container" style="padding-left: 42px; display: flex">
                <select class="form-select" aria-label="Default select example" style="width: 23%; border-radius: 17px;
                    padding-left: 15px; color: #00000080;">
                    <option selected>Viloyat</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example" style="width: 23%; border-radius: 17px;
                    padding-left: 15px; margin-left: 28px; color: #00000080;">
                    <option selected >Bino turi</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example" style="width: 23%;
                    border-top-left-radius: 17px; border-bottom-left-radius: 17px;
                    padding-left: 15px; margin-left: 28px; color: #00000080;">
                    <option selected>Narx dan</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example" style="width: 23%;
                    padding-left: 15px; border-top-right-radius: 17px; border-bottom-right-radius: 17px; color: #00000080;">
                    <option selected>Narx gacha</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="container" style="padding-left: 42px; display: flex; padding-top: 25px">
                <select class="form-select" aria-label="Default select example" style="width: 48.5%; border-radius: 17px;
                    padding-left: 15px; color: #00000080;">
                    <option selected>Manzilni kiriting</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example" style="width: 23%; border-radius: 17px;
                    padding-left: 15px; margin-left: 28px; color: #00000080;">
                    <option selected >Qo'shimcha filterlar</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <a style="padding-left: 30px">
                    <button style="color: #ffffff; background-color: #00066E; border-radius: 17px;
                            width: 200px; height: 38px; font-weight: bold; border: none;
                            " >Izlash</button>
                </a>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'MainRow'
}

</script>


<style scoped>

</style>