import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    ToastModule,
    CardModule,
    InputTextModule,
    SliderModule,
    CheckboxModule,
    DialogModule,
    DropdownModule,
    ProgressBarModule
  ],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taller PrimeNG Bonito';

  inputValue = '';
  sliderValue = 50;
  checked = false;
  displayDialog = false;
  progress = 40;
  cities = [
    { name: '         Bogotá' },
    { name: '         Medellín' },
    { name: '         Cali' }
  ];
  selectedCity: any;

  constructor(private messageService: MessageService) {}

  showToast() {
    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Toast mostrado!' });
  }

  showDialog() {
    this.displayDialog = true;
  }

  alertButton() {
    alert('Botón presionado!');
  }
}


