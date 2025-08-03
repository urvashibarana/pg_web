'use client';

import { useState } from 'react';

interface ReviewsTabProps {
  pgId: string;
}

export default function ReviewsTab({ pgId }: ReviewsTabProps) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const reviews = [
    {
      id: 1,
      user: 'Priya Sharma',
      rating: 5,
      date: '2 days ago',
      comment: 'Excellent PG with great amenities. The room is spacious and well-maintained. Host is very responsive and helpful. Highly recommended!',
      likes: 12
    },
    {
      id: 2,
      user: 'Rahul Mehta',
      rating: 4,
      date: '1 week ago',
      comment: 'Good value for money. Food quality is decent and the location is convenient. Wi-Fi speed could be better but overall satisfied.',
      likes: 8
    },
    {
      id: 3,
      user: 'Sneha Patel',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Best PG I have stayed in Bangalore. Very clean, safe, and the staff is friendly. AC works perfectly and food is homely.',
      likes: 15
    },
    {
      id: 4,
      user: 'Arjun Krishna',
      rating: 4,
      date: '3 weeks ago',
      comment: 'Nice place to stay. Good facilities and reasonable price. Parking is available which is a plus point. Would recommend to others.',
      likes: 6
    },
    {
      id: 5,
      user: 'Kavya Reddy',
      rating: 3,
      date: '1 month ago',
      comment: 'Average experience. Room is okay but could be better maintained. Food quality varies. Location is good though.',
      likes: 3
    }
  ];

  const handleSubmitReview = () => {
    if (rating && review) {
      console.log('Review submitted:', { rating, review });
      setShowReviewForm(false);
      setRating(0);
      setReview('');
    }
  };

  const ratingDistribution = [
    { stars: 5, count: 65, percentage: 51 },
    { stars: 4, count: 42, percentage: 33 },
    { stars: 3, count: 15, percentage: 12 },
    { stars: 2, count: 4, percentage: 3 },
    { stars: 1, count: 2, percentage: 1 }
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Reviews (128)</h3>
          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Write Review
          </button>
        </div>
        
        {showReviewForm && (
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-4">Write Your Review</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className={`w-8 h-8 flex items-center justify-center ${
                        rating >= star ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      <i className="ri-star-fill text-xl"></i>
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Your Review</label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Share your experience..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  maxLength={500}
                />
                <div className="text-sm text-gray-500 mt-1">{review.length}/500 characters</div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleSubmitReview}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  Submit Review
                </button>
                <button
                  onClick={() => setShowReviewForm(false)}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors whitespace-nowrap"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.5</div>
              <div className="flex items-center justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`ri-star-fill text-xl ${
                      star <= 4.5 ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  ></i>
                ))}
              </div>
              <div className="text-sm text-gray-600">Based on 128 reviews</div>
            </div>
          </div>
          
          <div className="space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 w-12">
                  <span className="text-sm">{item.stars}</span>
                  <i className="ri-star-fill text-yellow-400 text-sm"></i>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-8">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-user-line text-blue-600"></i>
                </div>
                <div>
                  <div className="font-medium">{review.user}</div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>
              </div>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`ri-star-fill text-sm ${
                      star <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  ></i>
                ))}
              </div>
            </div>
            
            <p className="text-gray-700 mb-3">{review.comment}</p>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                <i className="ri-thumb-up-line"></i>
                <span className="text-sm">Helpful ({review.likes})</span>
              </button>
              <button className="text-gray-500 hover:text-gray-700 text-sm">
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}