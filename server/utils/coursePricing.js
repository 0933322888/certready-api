/**
 * Get current price for a course.
 * Discounts are applied via promo codes at checkout only; listing/course pages show full price.
 * @param {Object} course - Course document (plain or mongoose doc)
 * @returns {Promise<{ currentPrice: number, fullPrice: number, discountedSpotsLeft: number }>}
 */
export async function getCoursePricing(course) {
  const fullPrice = course.price;
  return {
    currentPrice: fullPrice,
    fullPrice,
    discountedSpotsLeft: 0,
  };
}
