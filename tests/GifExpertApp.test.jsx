import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Test de GifExpert APP', () => {

    test('', () => {
        
        render(<GifExpertApp/>);
        screen.debug();
    });
    
});