const database = require('../database/connection')

class TaskController {

    // Adiciona Pokémon à tabela 'trainerPoke' e 'box'
    addPoke(request, response) {
        const dexN = request.body.dexnum;
        const pokeNick = request.body.nick;
        if (!dexN) {
            return false;
        }

        let query1 = 'INSERT INTO trainerPoke (dexN, pokeNick) VALUES (?,?);'
        let query2 = 'INSERT INTO box (boxIndex, pokeId) VALUES ((SELECT Min(y.boxIndex) AS boxIndex FROM box x RIGHT JOIN (SELECT boxIndex + 1 AS boxIndex FROM box UNION SELECT 1) y ON y.boxIndex = x.boxIndex WHERE x.boxIndex IS NULL),(SELECT LAST_INSERT_ID()));'
        database.query(query1 + query2, [dexN, pokeNick], function (err, res) {
            if (err) throw err;
            response.redirect("/");
        })
    }

    // Lista todos Pokémon da tabela 'pokemon'
    listAll(request, response) {
        database.query('SELECT * FROM pokemon', function (err, res) {
            if (err) throw err;
            response.json(res);
        })
    }

    // Usado para renderizar a box no front end
    renderBox(request, response) {
        database.query('SELECT box.boxIndex, pokemon.pokeName FROM pokemon INNER JOIN trainerPoke ON trainerPoke.dexN=pokemon.dexN INNER JOIN box ON box.pokeId=trainerpoke.pokeId', function (err, res) {
            if (err) throw err;
            response.json(res);
        })
    }

    // Remove um Pokémon da Database
    releasePoke(request, response) {
        const id = request.params.id;
        database.query('DELETE FROM box WHERE boxIndex=?; DELETE FROM trainerPoke WHERE pokeId IN (SELECT pokeId FROM box WHERE boxIndex=?);', [id, id], function (err, res) {
            if (err) throw err;
            response.json({ message: "Sucesso!" + res.affectedRows });
        })
    }
}
module.exports = new TaskController