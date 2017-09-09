<template>
	<b-row align-h="center">

		<b-col xs="8" sm="8" md="6" lg="4" class="mt-4">
			<b-form @submit.prevent="register">

				<b-form-group
					:label="$t('account.username')"
					:feedback="$t('account.usernameRequired')"
					label-for="username">
						<b-form-input
							id="username"
							type="text"
							required
							:state="usernameState"
							v-model="user.username"
							:placeholder="$t('account.enterUsername')"
						/>
				</b-form-group>


				<b-form-group
					:label="$t('account.email')"
					:feedback="$t('account.emailRequired')"
					label-for="email">
					<b-form-input
						id="email"
						type="email"
						required
						:state="emailState"
						v-model="user.email"
						:placeholder="$t('account.enterEmail')"
					/>
				</b-form-group>
				<b-form-group
					:label="$t('account.password')"
					:feedback="$t('account.passwordNotMatched')"
					label-for="password">
					<b-form-input
						id="password"
						type="password"
						required
						:state="passwordState"
						v-model="user.password"
						:placeholder="$t('account.enterPassword')"
					/>
				</b-form-group>

				<b-form-group
					:label="$t('account.passwordConfirm')"
					label-for="confirm">
					<b-form-input
						id="confirm"
						type="password"
						required
						v-model="user.confirm"
						:placeholder="$t('account.enterPasswordConfirm')"
					/>
				</b-form-group>

				<b-form-group id="exampleGroup4">
					<b-form-checkbox v-model="user.remember">{{ $t('account.remember') }}</b-form-checkbox>
				</b-form-group>

				<b-button type="submit" variant="primary">
					<i class="fa fa-sign-in"></i> {{ $t('account.register') }}
				</b-button>
			</b-form>
		</b-col>
	</b-row>
</template>

<script>
	export default {
		head() {
			return {
				title: this.$i18n.t('account.register'),
			}
		},
		layout: 'account',
		middleware: 'needNotLogin',
		computed: {
			usernameState() {
				return this.user.username ? null : 'invalid';
			},
			emailState() {
				return this.user.email ? null: 'invalid';
			},
			passwordState() {
				if (this.user.password !== this.user.confirm)
					return 'invalid';
				return null;
			}
		},
		data() {
			return {
				user: {
					username: null,
					email: null,
					password: null,
					confirm: null,
					remember: true,
				}
			}
		},
		methods: {
			register() {
				// client validate
				const { username, email, password, confirm  } = this.user;

				if (!username || !email || password !== confirm)
					return;

				this.$store.dispatch('account/register', this.user);
			}
		},

	}
</script>