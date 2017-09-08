import { Router } from 'express';
import User from './model';

const router = Router();

router.post('/login', async (req, res) => {
  const { usernameOrEmail, password, remember  } = req.body;

  if (!usernameOrEmail)
    return res.status(401).json({ message: 'Thông tin đăng nhập không hợp lệ !' });

	const user = await User.find({
		where: {
			$or: [
				{ username: usernameOrEmail  },
				{ email: usernameOrEmail  },
			]
		}
	});

	if (!user)
		return res.status(401).json({ message: 'Không tìm thấy thông tin đăng nhập này trong hệ thống !' });

	if (user.password !== password)
		return res.status(401).json({ message: 'Thông tin đăng nhập không hợp lệ !' });

	if (remember)
		req.session.maxAge = 30*24*60*60*1000; // 30 ngay

	req.session.info.user = user;

	return res.json(user);
});


router.post('/logout', (req, res) => {
	delete req.session.info.user;
	return res.json({ ok: true });
});


router.post('/register', async (req, res) => {
	const { username, email, password, confirm  } = req.body;

	if (!username || !email)
		return res.status(401).json({ message: 'Thông tin đăng ký không hợp lệ !' });

	if (password !== confirm)
		return res.status(401).json({ message: 'Mật khẩu & xác nhận không chính xác !' });

	const count = await User.count({
		where: {
			$or: [
				{ username: username  },
				{ email: email  },
			]
		}
	});

	if (count > 0)
		return res.status(409).json({ message: 'Mật khẩu & xác nhận không chính xác !' });

	const user = await User.create({
		username,
		email,
		password,
	});

	req.session.info.user = user;

	return res.json(user);
});

export default router;
