const Favorite = require("../models/Favorite");
const Estate = require("../models/Estate");
const User = require("../models/User");

module.exports = {
    async listAllFavoritedEstatesByUserId(req, res) {
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
                    }]
                })
                Object.entries(favorites).forEach(([fav, favVal]) => {  
                    favVal.Estate.isFavorited = true;
                });

                if (favorites.length == 0) {
                    return res.status(404).json({msg: "O usuário não favoritou nenhum imóvel"});
                }
                return res.status(200).json({ favorites });
			}
		} catch (error) {
			res.status(500).json({ msg: "Erro de conexão com o servidor!" });
            console.log(error);
		}
    },
    
    async addFavorite(req, res) {
        const userId = req.body.userId;
        const estateId = req.body.estateId;

        if (!userId || !estateId) {
            return res.status(400).json({ msg: "Campos obrigatórios vazios!" });
        }

        try {

            const favoriteExists = await Favorite.findOne({
                where: { userId, estateId },
            });

            if (favoriteExists) {
                return res.status(403).json({ msg: "O imóvel informado já está favoritado por este usuário" });
            }

            const favorite = await Favorite.create({ 
                userId,
                estateId 
            }).catch((err) => {
                return res.status(500).json({ msg: "Erro ao adicionar aos favoritos" });
            });

            if (favorite) {
                return res.status(201).json({ msg: "Favoritado com sucesso" })
            }

            return res.status(404).json({ msg: "Favorito não adicionado" });

        } catch (error) {
			res.status(500).json({ msg: "Erro de conexão com o servidor!" });
            console.log(error);
		}
    },

    async deleteFavorite(req, res) {
        const userId = req.params.userId;
        const estateId = req.params.estateId;

        try {
            const favorite = await Favorite.destroy({
            where: { userId, estateId },
            }).catch(async (error) => {
                return res.status(403).json({ msg: "Ocorreu um erro ao remover o imóvel dos favoritos" });
            });
            if (favorite != 0) {
                res.status(200).json({ msg: "Favorito removido com sucesso" });
            } else {
                res.status(404).json({ msg: "Favorito não encontrado" });
            }
        } catch (error) {
            res.status(500).json({ msg: "Erro de conexão com o servidor!" });
            console.log(error);
        }
    }
}