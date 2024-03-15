<template>
    <header class="container-fluid header">
        <div class="header-content __container">
            <div class="header__image">
                <img src="/public/icons/logooluy.png" alt="oluy">
            </div>
            <nav class="header__menu">
                <ul class="header__list">
                    <li class="menu-item menu-item__active">
                        <router-link to="/">Bosh sahifa</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/sotuv">Sotuv</router-link>
                    </li>
                    <li class="menu-item">
                        <a href="#">Ijaraga</a>
                    </li>
                    <li class="menu-item">
                        <router-link to="/yangiUylar">Yangi Uylar</router-link>
                    </li>
                    <li class="menu-item">
                        <a href="#">Yana</a>
                    </li>
                </ul>
                <router-link to="/elonber">
                    <button class="header__btn">
                        E'lon berish
                    </button>
                </router-link>
            </nav>
        </div>
    </header>
</template>


<script>
export default {
    name: 'HeaderRow'
}

</script>


<style>
.header {
    background-color: #00066E;
    height: 118px;
    font-family: "Rubik", sans-serif;
}
.__container {
    max-width: 1008px;
    display: flex;
    margin: auto;
    padding: 0 10px;
}
.header-content {
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: row;
    height: 100%;

}
.header__image {
    flex: 1 1 auto;

}
.header__image img {
    width: 194px;
    height: 150px;
}
.header__menu {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    flex: 0 0 auto;
}
.header__list {
    display: flex;
    flex-direction: row;
    list-style-type: none;
}
.menu-item {
    margin-right: 34px;
}
.menu-item a {
    color: #ffffff;
    text-decoration: none;
}
.menu-item__active {
    text-decoration: underline;
    color: white;
}
.header__btn {
    padding: 0;
    border: none;
    font: inherit;
    cursor: pointer;
    width: 98px;
    height: 20px;
    background-color: #5582FF;
    border-radius: 17px;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #ffffff;
}

@media screen and (max-width: 786px) {
    .__container {
        width: auto;
        display: flex;
        margin: auto;
        padding: 0 10px;
    }
    .header__image img {
        width: auto;
        height: 100px;
    }
    .header__list {
        display: flex;
        flex-direction: row;
        list-style-type: none;
    }
    .menu-item {
        margin-top: 10px;
        margin-right: 10px;
        font-size: 11px;
    }
}

</style>