import { jest, describe, expect, test, beforeEach } from '@jest/globals';
import RickAndMortyUSA from '../../src/business/integrations/rickAndMortyUSA';
import RickAndMortyUSAAdapter from '../../src/business/adapters/rickAndMortyUSAAdapter.js';

describe('#RickAndMortyUSAAdapter', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('#getCharacters should be an adapter for RickAndMortyUSA.getCharactersJSON', async () => {
        const USAIntegration = jest.spyOn(
            RickAndMortyUSA,
            RickAndMortyUSA.getCharactersFromXML.name,
        ).mockResolvedValue([]);

        const result = await RickAndMortyUSAAdapter.getCharacters();

        expect(USAIntegration).toHaveBeenCalled();
    });
});