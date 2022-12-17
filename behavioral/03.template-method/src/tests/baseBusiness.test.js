import { jest } from '@jest/globals';

import BaseBusiness from '../business/base/baseBusiness.js';
import { NotImplementedException } from '../util/exceptions';

describe('#BaseBusiness', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });

    test('should throw an error when child class does not implement _validateRequiredFields function', () => {
        class ConcreteClass extends BaseBusiness {}
        const concreteClass = new ConcreteClass();

        const validationError = new NotImplementedException(concreteClass._validateRequiredFields.name);

        expect(() => concreteClass.create({})).toThrow(validationError);
    });

    test('should throw an error when _validateRequiredFields returns false', () => {
        const VALIDATION_DOES_NOT_SUCCEEDED = false;
        const validationError = new Error('Invalid data!');

        class ConcreteClass extends BaseBusiness {
            _validateRequiredFields = jest.fn().mockReturnValue(VALIDATION_DOES_NOT_SUCCEEDED);
        }
        const concreteClass = new ConcreteClass();

        expect(() => concreteClass.create({})).toThrow(validationError);
    });

    test('should throw an error when child class does not implement _create function', () => {
        const VALIDATION_SUCCEEDED = true;

        class ConcreteClass extends BaseBusiness {
            _validateRequiredFields = jest.fn().mockReturnValue(VALIDATION_SUCCEEDED);
        }
        const concreteClass = new ConcreteClass();
        const validationError = new NotImplementedException(concreteClass._create.name);

        expect(() => concreteClass.create({})).toThrow(validationError);
    });

    test('should call _create and _validateRequiredFields on create', () => {
        const VALIDATION_SUCCEEDED = true;

        class ConcreteClass extends BaseBusiness {
            _validateRequiredFields = jest.fn().mockReturnValue(VALIDATION_SUCCEEDED);
            _create = jest.fn().mockReturnValue(VALIDATION_SUCCEEDED);
        }
        const concreteClass = new ConcreteClass();
        const createFromBaseClass = jest.spyOn(
            BaseBusiness.prototype,
            BaseBusiness.prototype.create.name,
        );

        const result = concreteClass.create({});

        expect(result).toBeTruthy();
        expect(createFromBaseClass).toHaveBeenCalled();
        expect(concreteClass._create).toHaveBeenCalled();
        expect(concreteClass._validateRequiredFields).toHaveBeenCalled();
    });
});