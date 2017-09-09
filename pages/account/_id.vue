<template>
	<b-container>
		<b-row>
			<div class="cover" alt="profile cover">
				<div class="avatar-wrapper">
					<b-img
						src="/img/default-avatar.png"
						rounded="circle"
						blank
						width="100"
						height="100"
						blank-color="#777"
						alt="img"
						class="m-1" />
				</div>
			</div>
		</b-row>
		<b-row>
			<h2>Lorem ipsum dolor sit amet, consectetur.</h2>
		</b-row>

	</b-container>
</template>

<script>
	export default {
		head() {
			return {
				title: this.user.username,
			}
		},
		layout: 'account',
		middleware: 'needLogin',
		computed: {
			user() {
				return this.$store.state.account.user;
			},
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
//				user: {
//					username: null,
//					email: null,
//					password: null,
//					confirm: null,
//					remember: true,
//				}
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

<style>
	.cover {
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url('/img/cover-default.png');
		height: 200px;
		margin-bottom: 1em;
		background-origin: content-box;
		width: 100%;
		top: 50px;
		position: absolute;
		left: auto;
		right: 0;
		background-position: 50% 50%;
	}
	.avatar-wrapper {
		position: absolute;
		left: 50%;
		margin-left: -64px;
		top: 128px;
		border: 4px solid #fff;
		border-radius: 50%;
	}
</style>