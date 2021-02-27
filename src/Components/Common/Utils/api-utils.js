import request from 'superagent'
const URL = 'https://shielded-temple-69631.herokuapp.com'
export async function getCatalog() {
    const { body } = await request.get(`${URL}/messier_catalog`);

    return body
}

export async function getTypes() {
    const { body } = await request.get(`${URL}/object_types`);

    return body;
}

export async function getMessierObject(id) {
    const { body } = await request.get(`${URL}/messier_catalog/${id}`)

    return body;

}
export async function deleteMessierObject(messier_id) {
    const { body } = await request.delete(`${URL}/messier_catalog/${messier_id}`)

    return body;
}
export async function createMessierObject(messierObject) {
    const { body } = await request
        .post(`${URL}/messier_catalog/`)
        .send(messierObject);

        return body;
}
export async function updateMessierObject(id, messierObject) {
    const { body } = await request 
        .put(`${URL}/messier_catalog/${id}`)
        .send(messierObject);

        return body;
}

export async function getTypeId(object, object_types) {
    const objType = object_types.find(objType =>
        object.type === objType.type
    );

    const typeId = objType.id;
    return typeId;
}
