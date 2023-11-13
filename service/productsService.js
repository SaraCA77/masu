import axios from 'axios';

class productService {
    static async getProducts(filters) {
        const paramsFilter = {
            limit: filters.limit ? `limit=${filters.limit}` : '',
            skip: filters.skip ? `skip=${filters.skip}` : '',
            select: filters.select ? `select=${filters.select}` : '',
        };
    
        const nonEmptyParams = Object.values(paramsFilter).filter(param => param !== '').join('&');
        const url = nonEmptyParams.length > 0 ? `${process.env.API_PRODUCTS}?${nonEmptyParams}` : process.env.API_PRODUCTS;
    
        const request = {
            headers: {
                "content-type": "application/json"
            },
            method: "GET",
            url: url,
            json: true
        };
    
        try {
           return await getDataIdAxios(request);
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    

    static async getAProduct(productId) {
        let request = {
            headers: {
                "content-type": "application/json"
            },
            method: "GET",
            url: process.env.API_PRODUCTS + "/" + productId,
            json: true
        };
        try {
           return await getDataIdAxios(request);
        } catch (error) {
            console.log(error);
        }
    }

    static async getbyCategory(category) {
        let request = {
            headers: {
                "content-type": "application/json"
            },
            method: "GET",
            url: process.env.API_PRODUCTS + "/category/" + category,
            json: true
        };
        try {
           return await getDataIdAxios(request);
        } catch (error) {
            console.log(error);
        }
    }
}

async function getDataIdAxios(request) {
    try {
        return await axios({
            method: request.method,
            url: request.url,
            headers: request.headers,
            json: true
        })
    } catch (error) {
        console.log(error);
    }
}
export default productService;