import Util from '../util/util.js';
import Serviceproducts from '../service/productsService.js';

const util = new Util();

class productsController {
    static async getProducts(req, res) {
        const filters = req.query;
        let consultProducts = await Serviceproducts.getProducts(filters);
        util.setSuccess(200, 'P02', 'Respuesta Consumo Productos', 'success', consultProducts.data.products);
        return util.send(res);
    } catch(error) {
        console.log(error);
    }

    static async getAProduct(req, res) {
        let productId = req.params.productId;
        if (!productId) {
            util.setError(404, 'P01', 'Falta el parametro "ProductId"', 'success');
        }
        let consultProductOne = await Serviceproducts.getAProduct(productId);
        util.setSuccess(200, 'P02', 'Respuesta Consumo Producto', 'success',
            consultProductOne.data
        );
        return util.send(res);
    } catch(error) {
        console.log(error);
    }

    static async getProductWihCategory(req, res) {
        let category = req.query.category
        if (!category) {
            util.setError(404, 'P01', 'Falta el parametro de busqueda "Category"', 'error');
            return util.send(res);
        }
        let consultProductOne = await Serviceproducts.getbyCategory(category);
        util.setSuccess(200, 'P02', 'Respuesta Consumo Producto', 'success',
            consultProductOne.data
        );
        return util.send(res);
    } catch(error) {
        console.log(error);
    }
}
export default productsController;