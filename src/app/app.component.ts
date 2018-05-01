import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>ngWebauthnApp</h1>
      <h2>Has navigator.credentials: {{ hasCredentials() }}</h2>
      <p>
          Module was installed from
          <code>https://github.com/MicrosoftEdge/webauthn-polyfill</code>
      </p>
      <h3>Install and run</h3>
      <ul>
          <li><code>npm install</code></li>
          <li><code>npm start</code></li>
      </ul>
      <p>Open project in MS EDGE (http://localhost:4200/) and check console</p>
  `,
  styles: []
})
export class AppComponent {
  hasCredentials(): boolean {
    return !!(<any>navigator).credentials;
  }
}
