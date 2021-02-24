import request from 'superagent'
const URL = 'https://shielded-temple-69631.herokuapp.com'
export async function getCatalog() {
    const { body } = await request.get(`${URL}/messier_catalog`);

    return body
}

export async function getMessierObject(id) {
    const { body } = await request.get(`${URL}/messier_catalog/:${id}`)

    return body;

}
export async function deleteMessierObject() {

}
export async function createMessierObject() {

}
export async function updateMessierObject() {

}