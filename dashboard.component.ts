import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html'
})

//espacio comentado por test
//camio para b3
/// cambio para b3 segundo commit

export class DashboardComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
    let profile = JSON.parse(localStorage.getItem('session'));

    if(profile.roles.indexOf('ADMIN') !== -1){
      this.router.navigate(['pages/user-list']);
    }else if(profile.roles.indexOf('MASTER') !== -1){
      this.router.navigate(['pages/admin-list']);
    }else{
      if(profile.roles.indexOf('MACHINE_OWNER') !== -1){
        this.router.navigate(['pages/products-list']);
      }else{
        if(!profile.emailVerified)
          this.router.navigate(['email/verify/131qwe3434dadesam35o324sdf565jo']);
        else  
          this.router.navigate(['dashboard/info']);
      }      
    }
  }  
}
