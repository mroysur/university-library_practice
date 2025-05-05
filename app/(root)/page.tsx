import BookOverview from '@/components/BookOverview';
import Booklist from '@/components/Booklist';
import { Button } from '@/components/ui/button';
import { sampleBooks } from '@/constants';
import Image from 'next/image';

const Home = () => (
  <>
    <BookOverview {...sampleBooks[0]} />
    <Booklist
      title="Latest Books"
      books={sampleBooks}
      containerClassName="mt-28"
    />
  </>
);

export default Home;
