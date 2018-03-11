import { HttpResponse, HttpHeaders } from "@angular/common/http";

export class HttpResponseFactory {

    public static aHttpResponseWith<T>(body: T, contentType: string, status: number, statusText: string, url: string): HttpResponse<T> {
        return new HttpResponse({
            body: body,
            headers: HttpResponseFactory.headerWithContentType('application/json'),
            status: status,
            statusText: statusText,
            url: url
        });
    }

    private static headerWithContentType(contentType: string): HttpHeaders {
        let mockHeaders: HttpHeaders = new HttpHeaders();
        return mockHeaders.append('Content-Type', contentType);
    }


}