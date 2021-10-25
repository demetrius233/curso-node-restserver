

const usuariosGet = (req, res)=>{

    const queries = req.query
    
    res.json({
        msg: "get API - Controlador",
        queries
    })
}

const usuariosPost = (req, res)=>{
    const { nombre, id } = req.body
    res.json({
        msg: "Correcto",
        id,
        nombre
    })
}

const usuariosPut = (req, res)=>{
    const id = req.params.id
    res.json({
        msg: "put API - Controlador",
        id
    })
}

const usuariosPatch = (req, res)=>{
    res.json({
        msg: "patch API - Controlador"
    })
}

const usuariosDelete = (req, res)=>{
    res.json({
        msg: "delete API - Controlador"
    })
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}