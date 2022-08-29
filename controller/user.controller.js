const userGet = (req, res) => {
    const params = req.query;
    res.json({
        msg: 'get API - controller',
        params
    });
}

const userPost = (req, res) => {
    const body = req.body;

    res.json({
        msg: 'Post API - controller',
        body
    });
}
const userPut = (req, res) => {

    const {id} = req.params;

    res.json({
        msg: 'Put API - controller',
        id
    });
}
const userPatch = (req, res) => {
    res.json({
        msg: 'Patch API - controller'
    });
}

const userDelete = (req, res) => {
    res.json({
        msg: 'Delete API - controller'
    });
}

module.exports ={
    userGet,
    userDelete,
    userPatch,
    userPost,
    userPut
}