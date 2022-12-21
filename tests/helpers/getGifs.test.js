import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en GetGifs()', () => { 

    test('debe de retornar un arreglo de gifs', async() => {
        
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String) ,
            title: expect.any(String), //Puede ser
            url: expect.any(String),
            
        })
        

    });    


 }) 