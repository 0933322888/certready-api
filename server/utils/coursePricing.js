/**
 * Get current price for a course.
 * A user gets free access for the first 5 days after registration.
 * @param {Object} course - Course document (plain or mongoose doc)
 * @param {Object|null} user - User document (plain or mongoose doc)
 * @returns {Promise<{ currentPrice: number, fullPrice: number, discountedSpotsLeft: number, isFreeWindowActive: boolean, freeUntil: Date | null }>}
 */
export async function getCoursePricing(course, user = null) {
  const fullPrice = course.price;
  const freeDays = 5;
  const registeredAt = user?.createdAt ? new Date(user.createdAt) : null;
  let isFreeWindowActive = false;
  let freeUntil = null;

  if (registeredAt && !Number.isNaN(registeredAt.getTime())) {
    freeUntil = new Date(registeredAt);
    freeUntil.setDate(freeUntil.getDate() + freeDays);
    isFreeWindowActive = Date.now() <= freeUntil.getTime();
  }

  const currentPrice = isFreeWindowActive ? 0 : fullPrice;

  return {
    currentPrice,
    fullPrice,
    discountedSpotsLeft: 0,
    isFreeWindowActive,
    freeUntil,
  };
}
