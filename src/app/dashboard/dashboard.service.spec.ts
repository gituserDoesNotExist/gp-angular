import { DashboardService } from "./dashboard.service";
import { AppUrlValues } from "../url-constants/AppUrlValues";
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { AppUrlValuesInjectionToken} from "../url-constants/AppUrlValuesInjectionToken";


describe("DashboardService", () => {

    let service: DashboardService;
    let httpMock: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DashboardService]
        });
        service = TestBed.get(DashboardService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('maps description of sudoku property', () => {
        service.getDescriptionForSudoku('/sudoku/').subscribe((res: string) => {
            expect(res).toEqual('This game is called Sudoku and the number of players is 1');
        });

        let req: TestRequest = httpMock.expectOne({
            url: '/sudoku/',
            method: 'GET'
        });
        req.flush({"name":"Sudoku","numberOfPlayers":"1"});
    });

    it('maps description of tictactoe property', () => {
        service.getDescriptionForSudoku('/tictactoe/').subscribe((res: string) => {
            expect(res).toEqual('This game is called Tic Tac Toe and the number of players is 1 or 2');
        });

        let req: TestRequest = httpMock.expectOne({
            url: '/tictactoe/',
            method: 'GET'
        });
        req.flush({"name":"Tic Tac Toe","numberOfPlayers":"1 or 2"});
    });

    describe('try it with async and inject', () =>{

        it('should make a request', async(inject([HttpClient, HttpTestingController],(http: HttpClient, backend: HttpTestingController) => {
            http.get('/foo/bar').subscribe();
    
            backend.expectOne({
                url: '/foo/bar',
                method: 'GET'
            });
        })));
    
        it('should make another request', async(inject([HttpClient, HttpTestingController],(http: HttpClient, backend: HttpTestingController) => {
            service.getDescriptionForSudoku('/hello-world').subscribe();
    
            backend.expectOne({
                url: '/hello-world',
                method: 'GET'
            });
        })));
    

    });
});

