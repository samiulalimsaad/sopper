const items = [];
module.exports = {
    cartsGet: (req, res) => {
        res.json(items);
    },
    cartsPost: (req) => {
        items.push(req.body);
    },
    cartsRemove: (req) => {
        const updatedItems = items.filter((v) => v.src !== req.body.src);
        items = [...updatedItems];
    },
};