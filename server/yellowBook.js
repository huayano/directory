
const mainMethod = async (request, response) => {
   const res = "Hello world";
   response.status(200).json(res);
}

module.exports = {
        mainMethod
}