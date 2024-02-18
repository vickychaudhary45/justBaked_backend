const { Knex_DB } = require("../../../config/database");

exports.getMenu = async (req, res, next) => {
    try {
        const menuData = await Knex_DB("menu").select("*");
        return res.status(200).json({
            status: true,
            message: "Menu Items List",
            data: menuData
        });
    } catch (error) {
        return next(error);
    }
}
