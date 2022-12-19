import { jest, describe, expect, test, beforeEach } from '@jest/globals';
import fs from 'fs/promises';
import axios from 'axios';

import RickAndMortyUSA from '../../src/business/integrations/rickAndMortyUSA.js';
import Character from '../../src/entities/character.js';

describe('#RickAndMortyUSA', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('#getCharactersXML should return a list of Character Entity', async () => {
        const response = await fs.readFile('./tests/mocks/characters.xml');
        jest.spyOn(axios, 'get').mockResolvedValue({ data: response });

        const expected = [{"gender": "Male", "id": 10, "location": "Worldender's lair", "name": "Alan Rails", "origin": "unknown", "species": "Human", "status": "Dead", "type": "Superhuman (Ghost trains summoner)"}];
        const result = await RickAndMortyUSA.getCharactersFromXML();

        expect(result).toMatchObject(expected);
    });

    test('#getCharactersXML should return an empty list if the API returns nothing', async () => {
        const response = await fs.readFile('./tests/mocks/characters-empty.xml');
        jest.spyOn(axios, 'get').mockResolvedValue({ data: response });

        const expected = [];
        const result = await RickAndMortyUSA.getCharactersFromXML();

        expect(result).toStrictEqual(expected);
    });
})