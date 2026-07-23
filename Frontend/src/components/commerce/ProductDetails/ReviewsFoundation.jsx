import { useState } from 'react';
import Rating from "../Rating";
import Button from "../../ui/Button";
import Typography from "../../ui/Typography";

export default function ReviewsFoundation({ rating = 4.5, count = 42 }) {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: "Sarah K.",
      rating: 5,
      date: "2 days ago",
      title: "Absolutely Premium Experience",
      comment:
        "The build quality is phenomenal. Clean lines, great sound, and fits perfectly. Highly recommend to everyone!",
    },
    {
      id: 2,
      author: "David L.",
      rating: 4,
      date: "1 week ago",
      title: "Excellent sound, minor setup latency",
      comment:
        "Sound matches top tier headphones. The charging case is sleek. Had a bit of latency during the first pairing, but it resolved itself.",
    },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle || !newComment) return;

    const newRev = {
      id: Date.now(),
      author: "You",
      rating: newRating,
      date: "Just now",
      title: newTitle,
      comment: newComment,
    };

    setReviews([newRev, ...reviews]);
    setNewTitle("");
    setNewComment("");
  };

  const distribution = [
    { stars: 5, percent: 75 },
    { stars: 4, percent: 15 },
    { stars: 3, percent: 8 },
    { stars: 2, percent: 2 },
    { stars: 1, percent: 0 },
  ];

  return (
    <div className="flex flex-col gap-6 select-none">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6">
        <div className="flex flex-col items-center justify-center text-center">
          <Typography
            variant="h1"
            className="font-extrabold text-5xl text-[var(--color-text-primary)]"
          >
            {rating.toFixed(1)}
          </Typography>
          <div className="my-1.5">
            <Rating value={rating} readOnly size="sm" />
          </div>
          <Typography variant="body-xs" className="text-[var(--color-text-secondary)] font-bold">
            Based on {count} ratings
          </Typography>
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
          {distribution.map((dist) => (
            <div key={dist.stars} className="flex items-center gap-3 text-xs font-semibold">
              <span className="w-10 text-right text-[var(--color-text-secondary)]">
                {dist.stars} Star
              </span>
              <div className="flex-grow h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--color-primary)] rounded-full"
                  style={{ width: `${dist.percent}%` }}
                />
              </div>
              <span className="w-8 text-left text-[var(--color-text-secondary)]">
                {dist.percent}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6"
      >
        <Typography variant="h4" className="font-bold text-[var(--color-text-primary)]">
          Write a Review
        </Typography>
        <div className="flex items-center gap-2 text-sm">
          <span>Your Rating:</span>
          <Rating value={newRating} size="sm" onChange={setNewRating} />
        </div>
        <input
          type="text"
          placeholder="Review Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full px-3 py-2 text-sm bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-[var(--radius-md)] focus-ring text-[var(--color-text-primary)]"
          required
        />
        <textarea
          placeholder="Write your comments here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 text-sm bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-[var(--radius-md)] focus-ring text-[var(--color-text-primary)]"
          required
        />
        <Button
          variant="primary"
          type="submit"
          size="sm"
          className="self-start px-6 font-bold uppercase"
        >
          Submit Review
        </Button>
      </form>

      <div className="flex flex-col gap-4 mt-2">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="flex flex-col gap-2 p-5 border border-[var(--color-border)] rounded-[var(--radius-lg)]"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex flex-col gap-1">
                <Typography
                  variant="body-sm"
                  className="font-extrabold text-[var(--color-text-primary)]"
                >
                  {rev.author}
                </Typography>
                <Rating value={rev.rating} readOnly size="sm" />
              </div>
              <span className="text-xs text-[var(--color-text-secondary)] font-medium">
                {rev.date}
              </span>
            </div>
            <Typography
              variant="body-sm"
              className="font-extrabold text-[var(--color-text-primary)] mt-1"
            >
              {rev.title}
            </Typography>
            <Typography
              variant="body-sm"
              className="text-[var(--color-text-secondary)] leading-relaxed"
            >
              {rev.comment}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
