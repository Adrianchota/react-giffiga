import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Test de GifGrid', () => {

    const category = 'Goku'; 
    
    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando. . .'));
        expect(screen.getByText(category));
    });

    test('debe de mostrar items cuando se cargan las imagenes del useFetch', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
            {
                id: '123',
                title: 'hectorigga',
                url: 'https://localhost/hectorigga.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(2);

    });

});