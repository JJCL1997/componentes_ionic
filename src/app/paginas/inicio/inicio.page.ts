import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: string[] = [
    '1. ion-action-sheet',
    '2. Ion-Alert',
    '3. Ion-Insignia',
    '4. Ion-Button',
    '5. Ion-accordion',
    '6. Ion-breadcrumbs',
    '7. Ion-ripple-effect',
    '8. Ion-card',
    '9. Ion-checkbox',
    '10. Ion-chip',
    '11. Ion-app',
    '12. Ion-content',
    '13. Ion-datetime',
    '14. Ion-datetime-button',
    '15. Ion-picker',
    '16. Ion-fab',
    '17. Ion-grid',
    '18. Ion-input',
    '19. Ion-password-toggle',
    '20. Ion-textarea',
    '21. Ion-item',
    '22. Ion-item-divider',
    '23. Ion-item-group',
    '24. Ion-item-sliding',
    '25. Ion-label',
    '26. Ion-note',
    '27. Ion-list-header',
    '28. Ion-avatar',
    '29. Ion-menu',
    '30. Ion-modal',
    '31. Ion-popover',
    '32. Ion-progress-bar',
    '33. Ion-radio',
    '34. Ion-refresher',
    '35. Ion-searchbar',
    '36. Ion-reorder',
    '37. Ion-Segment',
    '38. Ion-select',
    '39. Ion-tabs',
    '40. Ion-toast',
    '41. Ion-toggle',
    '42. Ion-toolbar',
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  navegar(componente: string) {
    if (componente === '1. ion-action-sheet') {
      this.router.navigate(['/ion-action-sheet']);
    } 
    else if (componente === '2. Ion-Alert') {
      this.router.navigate(['/alert']);
    }
    else if (componente === '3. Ion-Insignia') {
      this.router.navigate(['/insignia']);
    }
    else if (componente === '4. Ion-Button') {
      this.router.navigate(['/button']);
    }
    else if (componente === '5. Ion-accordion') {
      this.router.navigate(['/ion-accordion']);
    }
    else if (componente === '6. Ion-breadcrumbs') {
      this.router.navigate(['/ion-breadcrumbs']);
    }
    else if (componente === '7. Ion-ripple-effect') {
      this.router.navigate(['/ion-ripple-effect']);
    }
    else if (componente === '8. Ion-card') {
      this.router.navigate(['/ion-card']);
    }
    else if (componente === '9. Ion-checkbox') {
      this.router.navigate(['/ion-checkbox']);
    }
    else if (componente === '10. Ion-chip') {
      this.router.navigate(['/ion-chip']);
    }
    else if (componente === '11. Ion-app') {
      this.router.navigate(['/ion-app']);
    }
    else if (componente === '12. Ion-content') {
      this.router.navigate(['/ion-content']);
    }
    else if (componente === '13. Ion-datetime') {
      this.router.navigate(['/ion-datetime']);
    }
    else if (componente === '14. Ion-datetime-button') {
      this.router.navigate(['/ion-datetime-button']);
    }
    else if (componente === '15. Ion-picker') {
      this.router.navigate(['/ion-picker']);
    }
    else if (componente === '16. Ion-fab') {
      this.router.navigate(['/ion-fab']);
    }
    else if (componente === '17. Ion-grid') {
      this.router.navigate(['/ion-grid']);
    }
    else if (componente === '18. Ion-input') {
      this.router.navigate(['/ion-input']);
    }
    else if (componente === '19. Ion-password-toggle') {
      this.router.navigate(['/ion-password-toggle']);
    }
    else if (componente === '20. Ion-textarea') {
      this.router.navigate(['/ion-textarea']);
    }
    else if (componente === '21. Ion-item') {
      this.router.navigate(['/ion-item']);
    }
    else if (componente === '22. Ion-item-divider') {
      this.router.navigate(['/ion-item-divider']);
    }
    else if (componente === '23. Ion-item-group') {
      this.router.navigate(['/ion-item-group']);
    }
    else if (componente === '24. Ion-item-sliding') {
      this.router.navigate(['/ion-item-sliding']);
    }
    else if (componente === '25. Ion-label') {
      this.router.navigate(['/ion-label']);
    }
    else if (componente === '26. Ion-note') {
      this.router.navigate(['/ion-note']);
    }
    else if (componente === '27. Ion-list-header') {
      this.router.navigate(['/ion-list-header']);
    }
    else if (componente === '28. Ion-avatar') {
      this.router.navigate(['/ion-avatar']);
    }
    else if (componente === '29. Ion-menu') {
      this.router.navigate(['/ion-menu']);
    }
    else if (componente === '30. Ion-modal') {
      this.router.navigate(['/ion-modal']);
    }
    else if (componente === '31. Ion-popover') {
      this.router.navigate(['/ion-popover']);
    }
    else if (componente === '32. Ion-progress-bar') {
      this.router.navigate(['/ion-progress-bar']);
    }
    else if (componente === '33. Ion-radio') {
      this.router.navigate(['/ion-radio']);
    }
    else if (componente === '34. Ion-refresher') {
      this.router.navigate(['/ion-refresher']);
    }
    else if (componente === '35. Ion-searchbar') {
      this.router.navigate(['/ion-searchbar']);
    }
    else if (componente === '36. Ion-reorder') {
      this.router.navigate(['/ion-reorder']);
    }
    else if (componente === '37. Ion-Segment') {
      this.router.navigate(['/ion-segment']);
    }
    else if (componente === '38. Ion-select') {
      this.router.navigate(['/ion-select']);
    }
    else if (componente === '39. Ion-tabs') {
      this.router.navigate(['/ion-tabs']);
    }
    else if (componente === '40. Ion-toast') {
      this.router.navigate(['/ion-toast']);
    }
    else if (componente === '41. Ion-toggle') {
    this.router.navigate(['/ion-toggle']);
    }
    else if (componente === '42. Ion-toolbar') {
      this.router.navigate(['/ion-toolbar']);
      }


  }
}
