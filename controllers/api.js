// API for our resources
exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"bag", ');
    res.write(' "verbs":["GET","PUT", "DELETE","POST"] ');
    res.write('}');
    res.write(']')
    res.send();
    };