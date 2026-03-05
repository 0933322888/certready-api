import mongoose from 'mongoose';

/**
 * Practice question for a trade. Supports 500–1000+ questions per trade.
 * Indexed by tradeSlug and topicId for fast filtered queries.
 */
const practiceQuestionSchema = new mongoose.Schema(
  {
    tradeSlug: { type: String, required: true, index: true },
    topicId: { type: String, required: true, index: true },
    topicLabel: { type: String, required: true },
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctIndex: { type: Number, required: true },
    explanation: { type: String, default: '' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

practiceQuestionSchema.index({ tradeSlug: 1, topicId: 1 });

export default mongoose.model('PracticeQuestion', practiceQuestionSchema);
