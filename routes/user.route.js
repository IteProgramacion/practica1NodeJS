const {Router} = require('express');
const {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch,
    userNewCreate, userLogin
} = require("../controller/user.controller");

const router = Router();

router.get('/', userGet);

router.post('/register', userNewCreate);

router.post('/login', userLogin);

router.put('/:id', userPut);

router.post('/', userPost);

router.delete('/', userPatch);

router.delete('/', userDelete);

module.exports = router;