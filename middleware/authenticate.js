function isAuthenticated(req, res, next) {
    if (req.session.isAuthenticated) {
        next();
    } else {
        res.redirect('/login');
    }
}

function hasRoles(roles) {
    return function(req, res, next) {
        if (req.session.isAuthenticated && roles.includes(req.session.role)) {
            next();
        } else {
            res.status(403).send('Forbidden');
        }
    };
}

module.exports = {
    isAuthenticated,
    hasRoles
};