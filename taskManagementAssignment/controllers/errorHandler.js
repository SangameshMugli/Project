const handleError = (err, res) => {
    console.error(err);
    res.status(500).send(err);
};

module.exports = handleError;