const {Router} = require('express');
const {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
} = require("../controller/user.controller");

const router = Router();

router.get('/', userGet);

router.put('/:id', userPut);

router.post('/', userPost);

router.delete('/', userPatch);

router.delete('/', userDelete);

module.exports = router;