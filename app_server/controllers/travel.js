

const  request = require('request');
// const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
const apiOPtions = {
    server: 'http://localhost:3000'
}

/* render travel list view */
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel';

    if (!(responseBody instanceof Array)){
        message = "API lookup error";
        responseBody = [];
    }else {
        if (!responseBody.length){
            message = "no trips exist in database!";
        }
    }

    res.render('travel', {
        title: pageTitle,
        trips: responseBody,
        message
    });
};
/* GET travel list view */
const travelList = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOPtions.server}${path}`,
        method: 'GET',
        json: {},
    };
    console.info('>> travelController.travelList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req,res,body);
        }
    )
}

module.exports = {
    travelList
};