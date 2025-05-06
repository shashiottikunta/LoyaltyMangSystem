import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HttpService } from '../services/http-service/http.service';
import { NotificationService } from '../services/notification-service/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('barChartCanvas') barChartCanvas!: ElementRef<HTMLCanvasElement>;

  role: any;
  data: any;

  constructor(private httpService: HttpService, private notify: NotificationService) {
    this.role = localStorage.getItem('role');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    if (this.role === 'Admin') {
      this.httpService.doGet('admin-dashboard').subscribe((response: any) => {
        this.data = response;
        this.createBarChart(); // Call after data is fetched
      });
    } else if (this.role === 'Customer') {
      this.httpService.doGet('customer-dashboard/' + localStorage.getItem('user_id')).subscribe((response: any) => {
        this.data = response;
        this.createBarChart(); // Call after data is fetched
      });
    }
  }

  createBarChart() {
    const canvas = this.barChartCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
  
    if (!ctx) {
      console.error('Failed to get canvas context');
      return;
    }
  
    // Determine data based on role
    let labels: string[];
    let data: number[];
  
    if (this.role === 'Admin') {
      labels = ['Total Customers', 'Rewards Redeemed', 'Transaction Amount'];
      data = [
        this.data?.total_customers || 0,
        this.data?.total_rewards_redeemed || 0,
        this.data?.total_transaction_amount || 0
      ];
    } else {
      labels = ['Points Available', 'Points Incurred', 'Points Spent'];
      data = [
        this.data?.loyalty_points_available || 0,
        this.data?.total_loyalty_points_incurred || 0,
        this.data?.total_loyalty_points_spent || 0
      ];
    }
  
    const chartWidth = canvas.width;
    const chartHeight = canvas.height;
    const barWidth = 40;
    const barSpacing = 100; // Adjusted spacing for better fit
    const barColor = 'blue';
    const padding = 30; // Padding from the edges of the canvas
    const labelPadding = 30; // Padding for labels below the x-axis
  
    const maxDataValue = Math.max(...data, 1);
  
    ctx.clearRect(0, 0, chartWidth, chartHeight);
  
    for (let i = 0; i < data.length; i++) {
      const barHeight = (data[i] / maxDataValue) * (chartHeight - 2 * padding - labelPadding); // Adjusted for padding and label space
      const x = i * (barWidth + barSpacing) + padding; // Left padding
      const y = chartHeight - barHeight - padding - labelPadding; // Position of the top of the bar
  
      ctx.fillStyle = barColor;
      ctx.fillRect(x, y, barWidth, barHeight);
  
      // Draw label
      ctx.fillStyle = 'black';
      ctx.font = '12px Arial';
      const labelWidth = ctx.measureText(labels[i]).width;
      const labelX = x + barWidth / 2 - labelWidth / 2; // Center the label below the bar
      const labelY = chartHeight - padding; // Position the label just above the padding
  
      ctx.fillText(labels[i], labelX, labelY);
    }
  
    // Draw axis lines
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2; // Adjusted line width for better visibility
  
    // Draw x-axis
    ctx.beginPath();
    ctx.moveTo(padding, chartHeight - padding - labelPadding); // X-axis starting point
    ctx.lineTo(chartWidth - padding, chartHeight - padding - labelPadding); // X-axis ending point
    ctx.stroke();
  
    // Draw y-axis
    ctx.beginPath();
    ctx.moveTo(padding, padding); // Y-axis starting point
    ctx.lineTo(padding, chartHeight - padding - labelPadding); // Y-axis ending point
    ctx.stroke();
  }
  
}
