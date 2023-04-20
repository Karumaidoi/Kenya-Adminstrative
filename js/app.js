import * as model from './model.js';

const controllData = async() => {
    try {
        await model.loadData();
    }catch(err) {
        throw new Error("Unable to fetch data")
    }
}

controllData();


