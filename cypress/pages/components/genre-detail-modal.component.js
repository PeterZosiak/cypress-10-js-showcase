class GenreDetailsModal {
  modal() {
    return cy.get('[data-testid="details-modal"]');
  }

  closeBtn() {
    return this.modal().find('[data-testid="overlay-close"]');
  }

  content() {
    return this.modal().find('[data-testid="gen-detail-modal"]');
  }

  saveToWishlistBtn() {
    return this.modal().find('[data-testid="button"]').contains('Save to wishlist');
  }

  removeFromWishlistBtn() {
    return this.modal().find('[data-testid="button"]').contains('Delete from wishlist');
  }
}
export default new GenreDetailsModal;