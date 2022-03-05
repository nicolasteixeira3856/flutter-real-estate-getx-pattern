const Favorite = require("../models/Favorite");
const Estate = require("../models/Estate");
const User = require("../models/User");

module.exports = {
    async listAllEstates(req, res) {
        const id = req.body.id;
        if (!id)
			return res.status(400).json({ msg: "Campos obrigatórios vazios!" });
		try {
			const user = await User.findOne({
				where: { id },
			});
			if (!user) {
                return res.status(404).json({ msg: "Não foi possível encontrar o usuário informado"});	
            } else {
                const userId = user.id;
                const favorites = await Favorite.findAll({
                    where: { userId },
                    include: [{
                        model: Estate
                    }],
                    attributes:['estateId'],
                })
                    
                const estate = await Estate.findAll({
                    order: [
                        ["price", "DESC"]
                    ],
                    attributes: ['id', 'title', 'img_path', 'price', 'isFavorited']
                })

                Object.entries(estate).forEach(([est,estVal]) => {
                    Object.entries(favorites).forEach(([fav, favVal]) => {
                        if(estVal.id == favVal.estateId) {
                            estVal.isFavorited = true;
                            console.log(estVal);
                        }
                    })
                } )

                if (estate) {
                    res.status(200).json({ estate });
                } else {
                    res.status(404).json({ msg: "Não foi possível encontrar imóveis." });
                }
            }
        } catch (error) {
            res.status(500).json({ msg: "Erro de conexão com o servidor!" });
            console.log(error);
        }
    },

    async findStateById(req, res) {
        const id = req.body.id;
		if (!id)
			return res.status(400).json({ msg: "Campos obrigatórios vazios!" });
		try {
			const estate = await Estate.findOne({
				where: { id },
			});
			if (!estate) {
                return res.status(404).json({ msg: "Não foi possível encontrar o imóvel"});	
            } else {
                return res.status(200).json({ estate });
			}
		} catch (error) {
			res.status(500).json({ msg: "Erro de conexão com o servidor!" });
            console.log(error);
		}
    }
}