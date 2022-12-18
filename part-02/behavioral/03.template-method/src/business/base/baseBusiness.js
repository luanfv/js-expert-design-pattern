import { NotImplementedException } from '../../util/exceptions.js';

export default class BaseBusiness {
    _validateRequiredFields(_) {
        throw new NotImplementedException(
            this._validateRequiredFields.name,
        );
    }

    _create(_) {
        throw new NotImplementedException(
            this._create.name,
        );
    }
    
    // Padrão do Martin Fowler
    // Proposta do padrão é garantir um fluxo de métodos, definindo uma sequencia a ser executada
    
    // Esse create é a implementação efetiva do Template Method
    create(data) {
        const isValid = this._validateRequiredFields(data);

        if (!isValid) {
            throw new Error(`Invalid data!`);
        }

        return this._create(data);
    }
}