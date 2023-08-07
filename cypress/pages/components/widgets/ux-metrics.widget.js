/// <reference types="cypress" />

class UxMetricsWidget {
  constructor(root) {
    this.root = root;
  }

  sliderEndurability() {
    return this.root.get('[data-testid="slider-percentage"]').contains('Endurability');
  }

  roundChartNovelty() {
    return this.root.get('[data-testid="roundchart"]').contains('Novelty');
  }

  roundChartAesthetics() {
    return this.root.get('[data-testid="roundchart"]').contains('Aesthetics');
  }

  roundChartUsability() {
    return this.root.get('[data-testid="roundchart"]').contains('Usability');
  }

  roundChartAttention() {
    return this.root.get('[data-testid="roundchart"]').contains('Attention');
  }

  roundChartInvolvement() {
    return this.root.get('[data-testid="roundchart"]').contains('Involvement');
  }
}

export default UxMetricsWidget;
