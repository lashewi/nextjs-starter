import { useAppDispatch, useAppSelector } from '../app/hooks';
import { NextPage } from 'next';
import { RootState, wrapper } from '../app/store';
import { getQuote } from '../features/quote';

const Quote: NextPage = () => {
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector((state: RootState) => state.quote);

  return (
    <div>
      <h2>Generate random quote</h2>
      {pending && <p>Loading...</p>}
      {data && <p>{data.quote}</p>}
      {error && <p>Oops, something went wrong</p>}
      <button onClick={() => dispatch(getQuote())} disabled={pending}>
        Generate Quote
      </button>
    </div>
  );
};

Quote.getInitialProps = wrapper.getInitialPageProps(({ dispatch }) => async () => {
  await dispatch(getQuote());
});

export default Quote;
