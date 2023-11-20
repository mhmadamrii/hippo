import Image from 'next/image';
import MaxWidthWrapper from '~/components/MaxWidthWrapper';
import { Button } from '~/components/ui/button';

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
		<h1>Hello world</h1>
	  </MaxWidthWrapper>
      <h1>Hello world</h1>
      <Button variant="outline">Some button goes here</Button>
      <Button>primary button</Button>
      <Button variant="secondary">Some button goes here</Button>
    </>
  );
}
