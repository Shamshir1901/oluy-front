<template>
            <footer class="container-fluid" style=" width: 100%;
                       background-color: #5582FF;">
                <div class="container-fluid">
                    <div class="container" style="color: white; display: flex; justify-content: center; padding-top: 2%">
                        <h4 style="margin-right: auto; padding-left: 5%">Foydalanuvchilarga</h4>
                        <h4 style="text-align: center">Rieltorlarga</h4>
                        <h4 style="margin-left: auto; padding-right: 6%">Bog'lanishlar</h4>
                    </div>
                </div>
                <div class="m-auto" style="width: 78%;">
                    <a href="#" style="display: flex; color: white; text-decoration: none">Biz haqimizda</a>
                    <router-link to="/yordam" style="display: flex; color: white; text-decoration: none">Yordam</router-link>
                    <a href="#" style="display: flex; color: white; text-decoration: none">Foydalanish shartlari</a>
                    <a href="#" style="display: flex; color: white; text-decoration: none">Foydalanuvchilar huquqlari</a>
                    <router-link to="/elonber" style="display: flex; color: white; text-decoration: none">E'lon berish</router-link>
                    <a href="#" style="display: flex; color: white; text-decoration: none">Blog</a>
                    <a href="#" style="display: flex; color: white; text-decoration: none">Ma'lumot markazi</a>

                </div>

                <hr style="border: 2px solid white; margin-top: 2%">
                <div class="container" style="display: flex; justify-content: start; padding-left: 5%; margin-top: 2%;
                      width: 80%">
                    <div class="container" style="width: 15%; margin-bottom: 1%">
                        <img src="/public/icons/framefinal.png" alt="framelogo" style="width: 265px; height: 83px">
                    </div>
                    <div class="container" style="width: 55%">
                        <p style="color: #ffffff; font-weight: 600;"
                        >O'zbekistondagi uy joy savdosi bilan shug'ullanadigan onlayn bozor.
                            OLUY davlat qonunlariga to'liq amal qilingan holda yuritiladi va uning barcha
                            huquqlari himoyalangan</p>
                    </div>
                </div>
            </footer>
            <div class="container-fluid" style="width: 100%; height: 40px; position: absolute;
                 background-color: #00066E">
                <h5 class="container-fluid" style="color: #ffffff; padding-left: 15%; padding-top: 0.5%">2024 OLUY.UZ</h5>
            </div>

</template>




<script>
export default {
    name: 'FooterRow'
}
</script>


<style>

</style>