function tratamentoErro(array, num) {

    try {
        if (!array && !num) {
            throw ReferenceError;
        }
        if (typeof array !== 'object') {
            throw TypeError;
        }

        if (typeof array !== 'number') {
            throw TypeError;
        }
        if (array.length !== num) {
            throw RangeError;
        }

        return array;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Esse erro é do tipo ReferebcerError");
        } else

        if (e instanceof TypeError) {
            console.log("Esse erro é do tipo TypeError ");
        } else

        if (e instanceof RangeError) {
            console.log("Esse erro é do tipo RangeErro");
        } else {
            console.log("tipo de erro não encontrado" + e);
        }
    }

    console.log(tratamentoErro());



}