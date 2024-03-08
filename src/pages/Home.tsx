import { Customers } from '../components/Customers';

export function Home() {
  return (
    <div className='mt-8 mx-auto max-w-[90vw] md:max-w-[1200px]'>
      <Customers.Root>
        <Customers.Header />
        <Customers.Content />
      </Customers.Root>
    </div>
  );
}
