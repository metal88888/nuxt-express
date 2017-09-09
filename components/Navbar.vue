<template>

    <b-navbar toggleable="md" type="dark" variant="primary">

        <b-container>
            <b-nav-toggle target="nav_collapse"></b-nav-toggle>
            <b-navbar-brand :to="{ name: 'index' }" exact>{{ siteName  }}</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">
                <b-nav is-nav-bar>
                    <b-nav-item :to="{name: 'index'}" exact>
                        <i class="fa fa-home"></i> {{ $t('Home') }}
                    </b-nav-item>
                </b-nav>

                <!-- Right aligned nav items -->
                <b-nav is-nav-bar class="ml-auto">

                    <b-nav is-nav-bar v-if="user">
                        <b-nav-item :to="{name: 'admin'}" exact>
                            <i class="fa fa-cog"></i> {{ $t('AdminCP')  }}
                        </b-nav-item>
                    </b-nav>

                    <b-nav is-nav-bar v-if="!user">
                        <b-nav-item to="/account/login" exact replace>
                            <i class="fa fa-user"></i> {{ $t("account.login") }}
                        </b-nav-item>
						<b-nav-item :to="{ name: 'account-register' }" exact>
							<i class="fa fa-user"></i> {{ $t("account.register") }}
						</b-nav-item>
                    </b-nav>

                    <b-nav-item-dropdown :text="username" right v-if="user">
                        <b-dropdown-item :to="{ name: 'account-id' }">Tài khoản</b-dropdown-item>
                        <b-dropdown-item @click="logout">Đăng xuất</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown :text="`<i class='fa fa-globe'></i>&nbsp;` +  $t(locale)" right>
                        <b-dropdown-item @click="changeLocale('en')">
                            <img src="/img/us.png" alt="us"> {{ $t('en') }}</b-dropdown-item>
                        <b-dropdown-item @click="changeLocale('vi')">
                            <img src="/img/vn.png" alt="vi"> {{ $t('vi')  }}</b-dropdown-item>
                    </b-nav-item-dropdown>

                </b-nav>

            </b-collapse>
        </b-container>
    </b-navbar>

</template>

<script>
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
			return this.$store.state.info.siteName;
		},
		locale() {
			return this.$store.state.locale;
		}
	},

	methods: {
		logout() {
			this.$store.dispatch('account/logout');
		},
		changeLocale(locale) {
			this.$store.dispatch('setLocale', locale);
		}
	}
}
</script>
