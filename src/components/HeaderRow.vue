<template>
                <header>
                    <div class="container-fluid" style="display: flex; align-items: center; justify-content: space-between;
                        background-color: #00066E; padding: 10px">
                        <div class="logo" style="margin-left: 50px">
                            <img src="/public/icons/logooluy.png" alt="Website-logo" style="max-height: 120px">
                        </div>

                        <nav class="me-5">
                            <ul style="list-style-type: none; margin-right: 80px; padding: 0; display: flex">
                                <li style="margin-right: 20px"><router-link to="/" style="color: #ffffff; text-decoration: underline">
                                    Bosh sahifa</router-link></li>
                                <li style="margin-right: 20px"><a href="#" style="color: #ffffff; text-decoration: none">
                                    Sotuv</a></li>
                                <li style="margin-right: 20px"><a href="#" style="color: #ffffff; text-decoration: none">
                                    Ijara</a></li>
                                <li style="margin-right: 20px"><a href="#" style="color: #ffffff; text-decoration: none">
                                    Yangi uylar</a></li>
                                <li style="margin-right: 20px"><a href="#" style="color: #ffffff; text-decoration: none">
                                    Yana</a></li>
                                <li><router-link to="/elonber"><button class="button" style="color: #ffffff; border-radius: 17px;
                                             background-color: #5582FF; border: none; width: 134px"
                                >E'lon berish +</button></router-link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
</template>


<script>
export default {
    name: 'HeaderRow'
}

</script>


<style scoped>

</style>