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

export default router;