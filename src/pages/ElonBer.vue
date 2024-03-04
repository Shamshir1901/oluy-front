<template>
    <div class="container" style="margin-top: 5%">
        <div>
            <h2 style="color: #00066E">E'lon berish</h2>
            <h5 style="margin-top: 4%; margin-bottom: 7%">Ma'lumotlar</h5>
            <h5 style="margin-bottom: 1%">Men</h5>
        </div>
        <div class="flex-wrap">
            <a href="#" style=" padding: 5px; text-decoration: none; color: #ffffff;
               background-color: #5582FF; border-radius: 10px; margin-right: 15px">Kvartira</a>
            <a href="#" style=" padding: 5px; text-decoration: none; color: black; border: 1px solid #00000080;
               background-color: #ffffff; border-radius: 10px; margin-right: 15px">Uchastka</a>
            <a href="#" style=" padding: 5px; text-decoration: none; color: black; border: 1px solid #00000080;
               background-color: #ffffff; border-radius: 10px; margin-right: 15px">Yangi kvartira</a>
            <a href="#" style=" padding: 5px; text-decoration: none; color: black; border: 1px solid #00000080;
               background-color: #ffffff; border-radius: 10px; margin-right: 15px">Dacha</a>
            <a href="#" style=" padding: 5px; text-decoration: none; color: black; border: 1px solid #00000080;
               background-color: #ffffff; border-radius: 10px; margin-right: 15px">Noturar joy</a>ni
            <a href="#" style=" padding: 5px; text-decoration: none;background-color: #5582FF; color: #ffffff;
               border-radius: 10px; margin-right: 15px; margin-left: 10px">Sotmoqchiman</a>
            <a href="#" style=" padding: 5px; text-decoration: none; color: black; border: 1px solid #00000080;
               background-color: #ffffff; border-radius: 10px; margin-right: 15px">Ijaraga bermoqchiman</a>
        </div>
        <hr style="border: 2px solid #00000040; margin-top: 3%">
        <h5 style="margin-top: 2%">Joylashuv</h5>
        <div style="border: 1px solid #00000080; height: 30px; border-radius: 10px; margin-bottom: 20px">
        </div>
        <div style="border: 1px solid #00000080; border-radius: 10px; height: 468px">
        </div>
        <hr style="border: 2px solid #00000040; margin-top: 3%">
        <h5 style="margin-top: 2%; margin-bottom: 2%; font-weight: bold">Parametrlar</h5>
        <div class="flex-wrap" style="display: flex" >
            <select style="border-radius: 10px;  height: 30px; width: 15.3%; border: 1px solid #00000080">
                <option>Xonalar</option>
                <option>1</option>
                <option >2</option>
                <option >3</option>
                <option>4</option>
                <option >5</option>
            </select>
            <div style="margin-left: 12%">
            <textarea id="area-description" rows="1" cols="24" placeholder="Maydoni, m.kv"
                      style="border: 1px solid #00000080; border-radius: 10px; resize: none;
"                     ></textarea>
            </div>
            <div style="margin-left: 12%">
            <textarea id="area-description" rows="1" cols="25" placeholder="Yashash maydoni, m.kv"
                      style="border: 1px solid #00000080; border-radius: 10px; resize: none;
"                     ></textarea>
            </div>
        </div>
        <div class="flex-wrap" style="margin-top: 3%">
            <select style="border-radius: 10px;  height: 30px; width: 15.3%; border: 1px solid #00000080">
                <option>Qavatlar</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
            </select>
            <select style="border-radius: 10px;  height: 30px; width: 15.3%; border: 1px solid #00000080; margin-left: 12%">
                <option>Jami qavatlar</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
            </select>
        </div>
        <div class="flex-wrap" style="margin-top: 3%">
            <select style="border-radius: 10px;  height: 30px; width: 15.3%; border: 1px solid #00000080">
                <option>Bino asosi</option>
                <option>G'ishtli</option>
                <option>Panelli</option>
                <option>Monolitli</option>
                <option>Blokli</option>
                <option>Yog'och</option>
            </select>
            <select style="border-radius: 10px;  height: 30px; width: 15.3%; border: 1px solid #00000080; margin-left: 12%">
                <option>Holati</option>
                <option>Yevrota'mir</option>
                <option>O'rtacha</option>
                <option>Ta'mir talab</option>
                <option>Qora suvoq</option>
            </select>
        </div>
        <hr style="border: 2px solid #00000040; margin-top: 3%">
        <h5 style="margin-top: 1.5%; margin-bottom: 2%; font-weight: bold">Qo'shimcha qulayliklar</h5>
        <div class="flex-wrap" style="flex-wrap: wrap; display: flex; width: 50%">
            <div class="col" style="margin-left: 2px">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Lift</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Kanditsioner</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Bo'lak yuvinish xonasi</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Internet</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Kir yuvish mashinasi</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Basseyn</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Sauna</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Mebel</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Mikroto'lqinli pech</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Muzlatgich</label><br>
            </div>
            <div class="col">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Telefon tarmog'i</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Qo'riqlash</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Televizor</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Video kuzatuv</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Bolalar maydonchasi</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Sun'iy yo'ldosh/kabel TV</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Suv ta'minoti</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Kanalizatsiya</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4)">
                <label for="vehicle1" style="padding-left: 15px">Gaz ta'minoti</label><br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style="transform: scale(1.4);
                        border: 1px solid #000000">
                <label for="vehicle1" style="padding-left: 15px">Avtoturargoh</label><br>
            </div>
        </div>
        <div class="flex-wrap" style="flex-wrap: wrap; width: 60%; margin-top: 1.5%; padding-left: 0.3%">
            <button style="border-radius: 10px; width: 12%; background-color: #5582FF; color: #ffffff;
                    height: 35px; border: none; font-weight: bold; margin-right: 3%">Barchasi</button>
            <button style="border-radius: 10px; width: 15%; background-color: #ffffff; height: 35px;
                    font-weight: bold; border: 1px solid #00000080">Bekor qilish</button>
        </div>
        <hr style="border: 2px solid #00000040; margin-top: 3%">
        <h5 style="margin-top: 2%; margin-bottom: 2%; font-weight: bold">Tasnifi</h5>
        <div>
            <textarea placeholder="Tasnifi" style="resize: none; border-radius: 10px; padding-left: 1.5%;
                      padding-top: 1%; border: 1px solid #00000080" rows="20" cols="175"></textarea>
        </div>
        <hr style="border: 2px solid #00000040; margin-top: 3%">
        <h5 style="margin-top: 2%; margin-bottom: 0.5%; font-weight: bold">Rasmlar</h5>
        <p style="color: #00000080;">Faylning hajmi 9.5 mb dan oshmasligi talab etiladi va
            uning turlari jpg,gif,png,jpeg bo'lishi zarur.</p>
        <div>
            <div class="flex-wrap" style="display: flex; width: 80%;">
                <div class="upload-icon" style="border: 1px solid; width: 10%; text-align: center; height: 95px;
                 margin-right: 2%; border-radius: 10px">&#x2B;</div>
                <div class="upload-icon" style="border: 1px solid; width: 10%; text-align: center; height: 95px;
                 margin-right: 2%; border-radius: 10px">&#x2B;</div>
                <div class="upload-icon" style="border: 1px solid; width: 10%; text-align: center; height: 95px;
                 margin-right: 2%; border-radius: 10px">&#x2B;</div>
                <div class="upload-icon" style="border: 1px solid; width: 10%; text-align: center; height: 95px;
                 margin-right: 2%; border-radius: 10px">&#x2B;</div>
            </div>
        </div>
        <div style="margin-top: 1%">
            <div class="flex-wrap" style="display: flex; width: 80%;">
                <div class="upload-icon" style="border: 1px solid; width: 10%; text-align: center; height: 95px;
                 margin-right: 2%; border-radius: 10px">&#x2B;</div>
                <div class="upload-icon" style="border: 1px solid; width: 10%; text-align: center; height: 95px;
                 margin-right: 2%; border-radius: 10px">&#x2B;</div>
                <div class="upload-icon" style="border: 1px solid; width: 10%; text-align: center; height: 95px;
                 margin-right: 2%; border-radius: 10px">&#x2B;</div>
                <div class="upload-icon" style="border: 1px solid; width: 10%; text-align: center; height: 95px;
                 margin-right: 2%; border-radius: 10px">&#x2B;</div>
            </div>
        </div>
        <hr style="border: 2px solid #00000040; margin-top: 3%">
        <div class="flex-wrap" style="flex-wrap: wrap; width: 60%; margin-top: 3%; padding-left: 0.3%">
            <button style="border-radius: 10px; width: 12%; background-color: #5582FF; color: #ffffff;
                    height: 35px; border: none; font-weight: bold; margin-right: 3%">Saqlash</button>
            <button style="border-radius: 10px; width: 15%; background-color: #ffffff; height: 35px;
                    font-weight: bold; border: 1px solid #00000080">Bekor qilish</button>
        </div>
    </div>
</template>


<script>
export default {
    name: "ElonBer",
}

</script>


<style>

</style>