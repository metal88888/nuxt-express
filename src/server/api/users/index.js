import { Router } from 'express';
import model from './model';

const router = Router();

router.get('/users', function (req, res) {

    model.findAll().then(users => {
        res.json(users);
    });

});

/* GET user by ID. */
// router.get('/users/:id', function (req, res, next) {
//     const id = parseInt(req.params.id)
//     if (id >= 0 && id < users.length) {
//         res.json(users[id])
//     } else {
//         res.sendStatus(404)
//     }
// })

export const User = model;
export default router;
