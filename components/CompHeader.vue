<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">
                <img src="images/1.png" class="footer-img" alt="">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">Giới thiệu</b-nav-item>
                <b-nav-item href="#">Liên hệ</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="keySearch"></b-form-input>
                <!-- <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->
                <nuxt-link class="my-2 my-sm-0 btn-sm" v-bind:to="getLinkSearch(keySearch)" tag="b-button">Search</nuxt-link>
                </b-nav-form>

                <b-nav-item-dropdown text="Sort" right>
                <b-dropdown-item href="#">None</b-dropdown-item>
                <b-dropdown-item href="#">Title Asc</b-dropdown-item>
                <b-dropdown-item href="#">Title Desc</b-dropdown-item>
                <b-dropdown-item href="#">Latest</b-dropdown-item>
                <b-dropdown-item href="#">Oldest</b-dropdown-item>
                </b-nav-item-dropdown>

                <!-- <b-nav-item-dropdown right> -->
                <!-- Using 'button-content' slot -->
                <!-- <template #button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown> -->
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name : 'comp-header',
    data() {
        return {
            keySearch : ''
        }
    }, 
    methods: {
        getLinkSearch(keySearch){
            return {
                name: '',
                query: {
                    search : keySearch
                }
            }
        }
    }
}
</script>