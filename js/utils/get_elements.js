const getNode = (id) => document.getElementById(id);

const getQueryNode = (query) => document.querySelector(query);
const getQueryAllNode = (query) => document.querySelectorAll(query);

export default getNode;
export { getQueryNode, getQueryAllNode };
