import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-multi-card-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './multi-card-carousel.component.html',
  styleUrl: './multi-card-carousel.component.scss',
})
export class MultiCardCarouselComponent implements OnInit, AfterViewInit {
  @Input() cards: Array<{ title: string, imageUrl: string, redirectTo?: string }> = [];
  @Input() cardsToShow: number = 3;  // Default to show 3 cards
  @Input() spaceBetween: number = 20;  // Space between cards

  currentIndex = 0;
  cardWidth: number = 0;  // This will be calculated
  containerWidth: number = 0;
  totalSlides: number = 0;  // Total number of slides

  @ViewChild('sliderContainer', { static: true }) sliderContainer!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.containerWidth = this.sliderContainer.nativeElement.offsetWidth;
      this.calculateCardWidth();
      this.calculateTotalSlides();
  
      // Initial check for screen size
      this.updateCardsToShowBasedOnScreenSize();
    }
  }

  ngAfterViewInit(): void {
    // Use ChangeDetectorRef to detect changes
    this.containerWidth = this.sliderContainer.nativeElement.offsetWidth;
    this.calculateCardWidth();
    this.calculateTotalSlides();
    this.cdr.detectChanges(); // Manually trigger change detection after view initialization
  }

  // Method to update cardsToShow based on screen width
  updateCardsToShowBasedOnScreenSize(): void {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 700) {
        this.cardsToShow = 2;  // Show 1 card on small screens
      } else {
        this.cardsToShow;  // Default to 3 cards on larger screens
      }
      this.calculateCardWidth();  // Recalculate card width when cardsToShow changes
      this.calculateTotalSlides(); // Recalculate total slides
    }
  }

  // Method to calculate card width based on container width and cards to show
  calculateCardWidth(): void {
    if (this.containerWidth && this.cardsToShow > 0) {
      // Subtract space between cards from the total width
      const totalSpaceBetween = this.spaceBetween * (this.cardsToShow - 1);
      this.cardWidth = (this.containerWidth - totalSpaceBetween) / this.cardsToShow;
    }
  }

  // Calculate the total number of slides (number of groups of cards)
  calculateTotalSlides(): void {
    this.totalSlides = Math.ceil(this.cards.length +1 - this.cardsToShow);
  }

  // Infinite scrolling: move to the next slide, loop back to the first slide if needed
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
  }

  // Infinite scrolling: move to the previous slide, loop back to the last slide if needed
  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
  }

  // Set the current slide based on the selected indicator
  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  // Get the list of indicators to display (limit to 3 indicators and make them scroll infinitely)
  getIndicators(): number[] {
    const indicators: number[] = [];
    const prevIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    const nextIndex = (this.currentIndex + 1) % this.totalSlides;

    indicators.push(prevIndex, this.currentIndex, nextIndex);
    return indicators;
  }

  // HostListener to trigger resize on window resize
  @HostListener('window:resize')
  onResize(): void {
    this.updateCardsToShowBasedOnScreenSize(); // Recalculate layout on window resize
  }
}
