<template>
	<b-row align-h="center">
		<b-col xs="8" sm="8" md="6" lg="4" style="margin-top: 80px;">
			<b-form @submit.prevent="login">
				<b-form-group
					:label="$t('account.usernameOrEmail')"
					label-for="email">
					<b-form-input
						id="email"
						type="text"
						required
						v-model="user.usernameOrEmail"
						:placeholder="$t('account.enterUsernameOrEmail')"
					/>
				</b-form-group>
				<b-form-group
					:label="$t('account.password')"
					label-for="password">
					<b-form-input
						id="password"
						type="password"
						required
						v-model="user.password"
						:placeholder="$t('account.enterPassword')"
					/>
				</b-form-group>

				<b-form-group id="exampleGroup4">
					<b-form-checkbox v-model="user.remember">{{ $t('account.remember') }}</b-form-checkbox>
				</b-form-group>

				<b-button type="submit" variant="primary">
					<i class="fa fa-sign-in"></i> {{ $t('account.login') }}
				</b-button>
			</b-form>
		</b-col>
	</b-row>
</template>

<script>
    export default {
		head: {
			title: 'Login',
		},
        layout: 'account',
        middleware: 'needNotLogin',
        data() {
            return {
                user: {
                    usernameOrEmail: null,
                    password: null,
                    remember: true,
                }
            }
        },
        methods: {
            login() {
                this.$store.dispatch('account/login', this.user);
            }
        },

    }
</script>