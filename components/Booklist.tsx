import React from 'react';
import BookCard from '@/components/BookCard';

interface Props {
  title: string;
  books: Book[];
  containerClassName?: string;
}

const Booklist = ({ title, books, containerClassName }: Props) => {
  return (
    <section className={containerClassName}>
      <h2 className="text-2xl uppercase text-light-100">{title}</h2>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </div>
    </section>
  );
};

export default Booklist;
