<template>

    <b-navbar toggleable="md" type="dark" variant="primary">

        <b-container>
            <b-nav-toggle target="nav_collapse"></b-nav-toggle>
            <b-navbar-brand :to="{ name: 'index' }">{{ siteName  }}</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">
                <b-nav is-nav-bar>
                    <b-nav-item :to="{name: 'index'}">
                        <i class="fa fa-home"></i> {{ $t('Home') }}
                    </b-nav-item>
                </b-nav>

                <!-- Right aligned nav items -->
                <b-nav is-nav-bar class="ml-auto">

                    <b-nav is-nav-bar v-if="user">
                        <b-nav-item :to="{name: 'admin'}">
                            <i class="fa fa-cog"></i> {{ $t('AdminCP')  }}
                        </b-nav-item>
                    </b-nav>

                    <b-nav is-nav-bar>
                        <b-nav-item :to="{name: 'account-login'}" v-if="!user">
                            <i class="fa fa-user"></i> {{ $t("account.login") }}
                        </b-nav-item>
                    </b-nav>

                    <b-nav-item-dropdown :text="username" right v-if="user">
                        <b-dropdown-item href="#">Tài khoản</b-dropdown-item>
                        <b-dropdown-item @click="logout">Đăng xuất</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown :text="`<i class='fa fa-globe'></i>&nbsp;` +  $t(lang)" right>
                        <b-dropdown-item @click="changeLang('en')">
                            <img src="/img/us.png" alt="us"> {{ $t('en') }}</b-dropdown-item>
                        <b-dropdown-item @click="changeLang('vi')">
                            <img src="/img/vn.png" alt="vi"> {{ $t('vi')  }}</b-dropdown-item>
                    </b-nav-item-dropdown>

                </b-nav>

            </b-collapse>
        </b-container>
    </b-navbar>

</template>

<script>
    import Cookie from 'js-cookie';

    export default {

        computed: {
            user() {
                return this.$store.state.account.user;
            },
            username () {
                if(this.user && this.user.username)
                    return this.user.username;
                return "Tài khoản";
            },
            siteName() {
                return this.$store.state.siteName;
            }

        },

        data() {
          return {
              lang: Cookie.get('lang') || 'en',
          }
        },

        methods: {
            logout() {
                this.$store.dispatch('account/logout');
            },
            changeLang(lang) {
                console.log('change lang: ', lang);
                this.$i18n.locale = lang;
                Cookie.set('lang', lang);
                this.lang = lang;
            }
        }
    }
</script>
