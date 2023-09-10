module.exports.home = function (req, res) {
    return res.render('home',{
        title: "home",
        data: getTempData(),
    });
}

function getTempData() {
    const val = getData();
    return [
        val,
        val,
        val,
        val,
        val
    ]
}

function getData(){
    return {
        'id':"asldkfj",
        'name':"asldkfj",
        'age':"asldkfj",
        'gender':"male",
        'batch':"batch",
        'status':"status",
        'dsa_score':"dsa_score",
        'react_score':"dsa_score",
        'web_score':"dsa_score",
    }
}