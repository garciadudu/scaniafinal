import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente } from "./cliente.interface";

@Injectable({
    providedIn: 'root'
})

export class ClienteService
{
    private readonly SERVER_URL = "https://run.mocky.io/v3/fb38566c-c204-4010-b3fb-0c2d5bcac003";

    httpClient: HttpClient;
    clients: Cliente[] | undefined;

    constructor (
        private _httpClient: HttpClient) 
    {
        this.httpClient = _httpClient;
    }

    public carregarMock(){
       this.httpClient.get(this.SERVER_URL)
        .subscribe((res: any) => this.clients = res as Cliente[]);
    }   
}