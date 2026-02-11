import reviewsData from './data/reviewsData.json';

export function getMergedReviews(comments: any[]) {
  return reviewsData.map(review => {
    const content = comments.find(c => c.id === review.id);
    return { ...review, ...content };
  });
}
