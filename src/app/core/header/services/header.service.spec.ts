import { TestBed } from "@angular/core/testing";
import { HeaderService } from "./header.service";

describe(`${HeaderService.name}`, () => {

    let service: HeaderService;

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            providers: [HeaderService]
        }).compileComponents();
        service = TestBed.inject(HeaderService);
    });

    it('Should be created', () => {
        expect(service).toBeTruthy();
    });
});