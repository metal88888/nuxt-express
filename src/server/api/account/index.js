import { Router } from 'express';
import { User } from '../users';

const router = Router();


router.post('/login', (req, res) => {

    // const user = {
    //     username: 'admin',
    //     email: 'admin@admin.com',
    // };
    console.log(req.body);
    try {
        User.find({
           where: {
               $or: [
                   {
                       username: req.body.usernameOrEmail,
                   },
                   {
                       email: req.body.usernameOrEmail,
                   }
               ]
           }
        }).then(user => {
            console.log(user);

            if (!user)
                return res.status(401).json({ message: 'Thông tin đăng nhập không chính xác !' });


            // Kiểm tra thông tin user
            if (req.body.password === user.password) {

                // Lưu thông tin user vào session.
                req.session.user = user;

                // trả user về để client xử lý.
                return res.json(user);
            }
            else
                res.status(401).json({ message: 'Thông tin đăng nhập không chính xác !' });

        });

    }
    catch (err) {
        throw err;
    }


});


router.post('/logout', (req, res) => {
    delete req.session.user;
    res.json({ ok: true });
});

export default router;