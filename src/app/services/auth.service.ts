import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
const URL = "http://127.0.0.1:3000/"
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  async signup(userData: any): Promise<any> {
    try {
      // Log the userData being sent
      console.log('Sending userData:', userData);

      const response = await this.http.post(`${this.URL}api/signup`, { ...userData }).toPromise();
      return response;
    } catch (error) {
      // Log error details
      console.error('Signup failed:', error);

      // Further break down of error
      if (error instanceof HttpErrorResponse) {
        console.error('Error status:', error.status);
        console.error('Error details:', error.message);
      }

      return Promise.reject(error);
    }
  }
}
