class SlideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    console.log(this.slide);
    this.activeSlide(2);
  }
  activeSlide(index) {
    this.active = index;
    this.items = this.slide.querySelectorAll('.slide-items > * ');
    console.log(this.items);
  }
}

new SlideStories('slide');