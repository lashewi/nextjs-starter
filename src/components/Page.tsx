import Link from 'next/link';
import Users from './Users';
import AddCount from './IncrementCounter';
import React from 'react';

interface Props {
  title: string;
  linkTo: string;
}

const Page = (props: Props) => {
  return (
    <div>
      <h1 style={{ backgroundColor: '#ddd' }}>{props.title}</h1>
      <Users />
      <AddCount />
      <br />
      <nav>
        <Link href={props.linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
    </div>
  );
};

export default Page;
