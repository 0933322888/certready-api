/**
 * Topic IDs and titles per trade (for practice questions).
 * Used by the seed script to fill in topicLabel when missing.
 */

export const TRADE_TOPICS = {
  'construction-electrician': [
    { id: 'A', title: 'Common Occupational Skills' },
    { id: 'B', title: 'Generating, Distribution & Service Systems' },
    { id: 'C', title: 'Wiring Systems' },
    { id: 'D', title: 'Motors and Control Systems' },
    { id: 'E', title: 'Signalling & Communication Systems' },
  ],
  plumber: [
    { id: 'A', title: 'Common Occupational Skills' },
    { id: 'B', title: 'Drainage, Waste and Vent Systems' },
    { id: 'C', title: 'Water Distribution Systems' },
    { id: 'D', title: 'Fixtures, Appliances and Equipment' },
    { id: 'E', title: 'Piping Systems' },
    { id: 'F', title: 'Special Systems' },
  ],
  hairstylist: [
    { id: 'A', title: 'Common Occupational Skills' },
    { id: 'B', title: 'Hair and Scalp Care' },
    { id: 'C', title: 'Cuts Hair' },
    { id: 'D', title: 'Styles Hair' },
    { id: 'E', title: 'Chemical Texture Services' },
    { id: 'F', title: 'Alters Hair Colour' },
    { id: 'G', title: 'Specialized Services' },
    { id: 'H', title: 'Salon Operations' },
  ],
  carpenter: [
    { id: 'A', title: 'Common Occupational Skills' },
    { id: 'B', title: 'Planning and Layout' },
    { id: 'C', title: 'Concrete Work' },
    { id: 'D', title: 'Framing' },
    { id: 'E', title: 'Exterior Finishing' },
    { id: 'F', title: 'Interior Finishing' },
    { id: 'G', title: 'Renovations' },
  ],
  refrigerationAirConditioningMechanic: [
    { id: 'A', title: 'Common Occupational Skills' },
    { id: 'B', title: 'Routine Trade Activities' },
    { id: 'C', title: 'Plans Installation' },
    { id: 'D', title: 'Performs Installation' },
    { id: 'E', title: 'Performs Commissioning' },
    { id: 'F', title: 'Maintenance and Service' },
  ],
};

export function getTopicLabel(tradeSlug, topicId) {
  const topics = TRADE_TOPICS[tradeSlug];
  const t = topics?.find((x) => x.id === topicId);
  return t?.title || topicId;
}
