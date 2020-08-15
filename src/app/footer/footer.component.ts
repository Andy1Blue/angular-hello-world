import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="page-footer mt-5">
      <div class="footer-copyright">
        <div class="container">
          <!-- {{ config?.date | date: "yyyy" }} {{ config?.footer }} -->
          Footer
        </div>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
