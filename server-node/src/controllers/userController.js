const User = require("../models/User");
const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function generateToken(id) {
    process.env.JWT_SECRET = Math.random().toString(36).slice(-20);
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: 18000, // Token expira em 5 horas
    });
    return token;
}

module.exports = {

    async Authenticate(req, res) {
		const email = req.body.email;
		const password = req.body.password;
		if (!email || !password)
			return res.status(400).json({ msg: "Campos obrigatórios vazios!" });
		try {
			const user = await User.findOne({
				where: { email },
			});
			if (!user) {
                return res.status(404).json({ msg: "E-mail ou senha inválidos." });	
            } else {
				if (bcrypt.compareSync(password, user.password)) {
					const token = generateToken(user.id);
					return res
						.status(200)
						.json({ msg: "Autenticação realizada com sucesso!", token, user });
				} else {
                    return res.status(404).json({ msg: "E-mail ou senha inválidos." });
                }
			}
		} catch (error) {
			res.status(500).json(error);
		}
	},

    async CreateUser(req, res) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                res.status(400).json({ msg: "Preencha todos os dados obrigatórios corretamente." });
            } else {
                const userExists = await User.findOne({
                    where: { email },
                });

                if (userExists) {
                    res.status(403).json({ msg: "O e-mail informado já está vinculado a um usuário." });
                } else {
                    const salt = bcrypt.genSaltSync(12);
                    const hash = bcrypt.hashSync(password, salt);
                    const user = await User.create({
                        email,
                        password: hash,
                    }).catch((error) => {
                        res.status(500).json({ msg: "Não foi possivel cadastrar um novo usuário - Erro: " + error });
                    });
                    if (user)
                        res.status(201).json({ msg: "Usuário cadastrado com sucesso." });
                    else
                        res.status(404).json({ msg: "Não foi possível cadastrar um novo usuário." });
                }
            }
        } catch (error) {
            res.status(500).json({ msg: "Não foi possivel cadastrar um novo usuário - Erro: " + error })
        }
    },
}